import uuid
import logging
from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException
from api.utils.schemas import VariantUpdate, RetryVariant, VariantCreationStatus, VariantStatus
from ai.const.index import VariantType
from ai.agents.intent_classifier.output import IntentType
from api.utils.intent_classification import get_intent
from api.utils.title_generation import get_title
from api.utils.aws_utils import trigger_generate_variant, trigger_update_variant
from api.db.dynamodb import (add_project, add_variant, get_project, get_variant, 
                             get_variants, update_project_status, get_all_projects, get_variant_by_id, update_variant,
                             soft_delete_project, update_chat_history_with_user_query, update_chat_history_with_variant_data, 
                             update_chat_history_with_system_message, get_variant_type_chat_history,
                             set_project_selected_variant_type)
from api.db.dynamodb import update_project_name as update_project_name_dynamodb


# Create a logger for this module
logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/create_project")
async def create_project(user_id: str, query_text: str):
    logger.info(f"Creating a new project for user: {user_id}")
    
    project_id = str(uuid.uuid4())

    intent = await get_intent(
        prompt=query_text,
        user_id=user_id,
        project_id=project_id,
        session_id=user_id # We currently do not have any sessions or tokens, so for now we'll just use the user id
    )

    logger.info(f"Intent classified: {intent}. For query: {query_text}")

    created_at = datetime.now(timezone.utc).isoformat()
    updated_at = datetime.now(timezone.utc).isoformat()

    if intent==IntentType.Code_Generation:

        project_name = await get_title(query_text, user_id, project_id, user_id)
        logger.info(f"Title generated: {project_name} for project {project_id}")

        chat_history = {}

        for variant_type in VariantType:
            chat_history[variant_type.value] = [
                {
                    "type": "user",
                    "message": query_text,
                    "intent": intent,
                    "created_at": created_at,
                    "updated_at": updated_at,
                }
            ]

        new_project = {
            'project_id': project_id,
            'user_id': user_id,
            'query_text': query_text,
            'project_name': project_name,
            'status': 'in_progress',
            'chat_history': chat_history,
            'created_at': created_at,
            'updated_at': updated_at
        }

        # Store project in DynamoDB
        try:
            add_project(new_project)
            logger.info(f"Project {project_id} created for user {user_id}")
        except Exception as e:
            logger.error(f"Failed to add project for user {user_id}: {e}")
            raise HTTPException(status_code=500, detail="Failed to create project")

        for variant_type in VariantType:
            variant_type = variant_type.value
            variant_id = str(uuid.uuid4())
            variant = {
                'project_id': project_id,
                'user_id': user_id,
                'variant_id': variant_id,
                'variant_type': variant_type,
                'variant_data': {},
                'query_text': query_text,
                'status': VariantStatus.IN_PROGRESS.value,
                'variant_creation_status': VariantCreationStatus.GENERATING_VARIANT_DATA.value,
                'previous_variant_id': None,
                'created_at': created_at,
                'updated_at': updated_at
            }
            try:
                add_variant(variant)
                logger.info(f"Variant {variant_id} of type {variant_type} created for project {project_id}")
                trigger_generate_variant(variant)
            except Exception as e:
                logger.error(f"Failed to create variant {variant_id} for project {project_id}: {e}")
                raise HTTPException(status_code=500, detail="Failed to create variant")

        return {
            "project_id": project_id, 
            "message": "Project is being created",
            "intent": intent,
            "project_name": project_name
        }
    elif intent == IntentType.Undo_Changes:
        # Reverting changes is not applicable for new projects
        logger.warning(f"Undo changes intent is not valid for new project creation: user_id={user_id}")
        raise HTTPException(
            status_code=400,
            detail={
                "message": "Project has no changes to revert",
                "intent": intent
            }
        )
    elif intent == IntentType.Remark:
        # Handle remarks
        logger.info(f"User {user_id} made a remark: {query_text}")
        return {
            "message": "Remark noted", 
            "query_text": query_text,
            "intent": intent
        }
    elif intent == IntentType.Other:
        logger.info(f"User {user_id} provided an intent that is categorized as Other: {query_text}")
        raise HTTPException(
            status_code=400,
            detail={
                "message": "Could not understand query. Please rephrase, thank you!",
                "intent": intent
            }
        )
    
                

@router.get("/get_project")
async def get_project_details(user_id: str, project_id: str):
    logger.info(f"Fetching project {project_id} details for user {user_id}")
    
    project = get_project(user_id, project_id)
    if not project:
        logger.warning(f"Project {project_id} not found for user {user_id}")
        raise HTTPException(status_code=404, detail="Project not found")
    
    variants = get_variants(project_id)
    logger.info(f"Retrieved {len(variants)} variants for project {project_id}")

    return {
        "project_id": project.get('project_id'),
        "project_name": project.get('project_name'),
        "status": project.get('status'),
        "selected_variant_type": project.get('selected_variant_type'),
        "variants": variants
    }

@router.get("/get_projects")
async def get_projects(user_id: str):
    logger.info(f"Fetching all projects for user {user_id}")
    items = get_all_projects(user_id)
    logger.info(f"Retrieved {len(items)} projects for user {user_id}")
    return {"projects": items}

@router.post("/update_project")
async def update_project(data: VariantUpdate):
    logger.info(f"Updating variant {data.variant_type} for project {data.project_id} by user {data.user_id}")

    project = get_project(data.user_id, data.project_id)
    if not project:
        logger.warning(f"Project {data.project_id} not found for user {data.user_id}")
        raise HTTPException(status_code=404, detail="Project not found")
    
    if project.get('selected_variant_type') and project.get('selected_variant_type') != data.variant_type:
        logger.warning(f"Project {data.project_id} has a selected variant type {project.get('selected_variant_type')} and cannot be updated to variant type {data.variant_type}")
        raise HTTPException(status_code=400, detail="Project has a selected variant type and so other variant types cannot be updated")
    
    query_text = data.query_text

    variant = get_variant(data.user_id, data.project_id, data.variant_type)
    if not variant:
        logger.warning(f"Variant {data.variant_type} not found for project {data.project_id} and user {data.user_id}")
        raise HTTPException(status_code=404, detail="Variant not found")
    
    intent = await get_intent(
        prompt=query_text,
        user_id=data.user_id,
        project_id=data.project_id,
        session_id=data.user_id # We currently do not have any sessions or tokens, so for now we'll just use the user id
    )

    if intent == IntentType.Code_Generation:
        update_project_status(data.project_id, 'updating')

        update_chat_history_with_user_query(
            project_id=data.project_id,
            variant_type=data.variant_type,
            query=query_text,
            intent=intent,
            created_at=datetime.now(timezone.utc).isoformat(),
            updated_at=datetime.now(timezone.utc).isoformat()
        )
        
        try:
            trigger_update_variant(
                variant=variant, 
                query_text=data.query_text, 
                current_code_snippet=data.current_code_snippet,
                retry_last_variant=False
            )
            logger.info(f"Variant {data.variant_type} updated for project {data.project_id}")
        except Exception as e:
            logger.error(f"Failed to update variant {data.variant_type} for project {data.project_id}: {e}")
            raise HTTPException(status_code=500, detail="Failed to update variant")

        return {
            "message": "Variant is being updated. Please wait.",
            "intent": intent
        }
    elif intent == IntentType.Undo_Changes:
        update_chat_history_with_user_query(
            project_id=data.project_id,
            variant_type=data.variant_type,
            query=query_text,
            intent=intent,
            created_at=datetime.now(timezone.utc).isoformat(),
            updated_at=datetime.now(timezone.utc).isoformat()
        )

        previous_variant_id = variant.get("previous_variant_id")

        if not previous_variant_id:
            update_chat_history_with_system_message(
                project_id=data.project_id,
                variant_type=data.variant_type,
                message="No previous variant to revert to",
                created_at=datetime.now(timezone.utc).isoformat(),
                updated_at=datetime.now(timezone.utc).isoformat()
            )
            return {"message": "No previous variant to revert to"}
        
        previous_variant = get_variant_by_id(previous_variant_id)

        if not previous_variant:
            logger.error(f"No variant found for {previous_variant_id} for project {data.project_id}")
            raise HTTPException(status_code=404, detail="Variant not found")
        
        reverted_variant = previous_variant.copy()

        reverted_variant_id = str(uuid.uuid4())
        reverted_variant['variant_id'] = reverted_variant_id
        reverted_variant['created_at'] = datetime.now(timezone.utc).isoformat()  # New created_at date
        reverted_variant['updated_at'] = datetime.now(timezone.utc).isoformat()  # New updated_at date
        add_variant(reverted_variant)

        update_chat_history_with_variant_data(
            project_id=data.project_id,
            variant_id=reverted_variant_id,
            variant_type=data.variant_type,
            query=reverted_variant.get('query_text'),
            created_at=reverted_variant.get('created_at'),
            updated_at=reverted_variant.get('updated_at')
        )

        update_chat_history_with_system_message(
            project_id=data.project_id,
            variant_type=data.variant_type,
            message="Reverted variant to previous state",
            created_at=datetime.now(timezone.utc).isoformat(),
            updated_at=datetime.now(timezone.utc).isoformat()
        )

        logger.info(f"Reverted Variant {reverted_variant_id} of type {reverted_variant.get('variant_type')} created for project {data.project_id}")
        return {
            "message": "Reverted variant to previous state",
            "intent": intent
        }
    elif intent == IntentType.Remark:
        # Handle remarks
        logger.info(f"User {data.user_id} made a remark: {query_text}")
        update_chat_history_with_user_query(
            project_id=data.project_id,
            variant_type=data.variant_type,
            query=query_text,
            intent=intent,
            created_at=datetime.now(timezone.utc).isoformat(),
            updated_at=datetime.now(timezone.utc).isoformat()
        )

        update_chat_history_with_system_message(
            project_id=data.project_id,
            variant_type=data.variant_type,
            message="Remark noted",
            created_at=datetime.now(timezone.utc).isoformat(),
            updated_at=datetime.now(timezone.utc).isoformat()
        )

        return {
            "message": "Remark noted", 
            "query_text": query_text,
            "intent": intent
        }
    elif intent == IntentType.Other:
        logger.info(f"User {data.user_id} provided an intent that is categorized as Other: {query_text}")
        update_chat_history_with_user_query(
            project_id=data.project_id,
            variant_type=data.variant_type,
            query=query_text,
            intent=intent,
            created_at=datetime.now(timezone.utc).isoformat(),
            updated_at=datetime.now(timezone.utc).isoformat()
        )

        update_chat_history_with_system_message(
            project_id=data.project_id,
            variant_type=data.variant_type,
            message="Could not understand query. Please rephrase, thank you!",
            created_at=datetime.now(timezone.utc).isoformat(),
            updated_at=datetime.now(timezone.utc).isoformat()
        )
        raise HTTPException(
            status_code=400,
            detail={
                "message": "Could not understand query. Please rephrase, thank you!",
                "intent": intent
            }
        )


@router.post("/retry_project")
async def retry_generate_variant(data: RetryVariant):
    logger.info(f"Retrying variant {data.variant_type} for project {data.project_id} by user {data.user_id}")

    project = get_project(data.user_id, data.project_id)

    if not project:
        logger.warning(f"Project {data.project_id} not found for user {data.user_id}")
        raise HTTPException(status_code=404, detail="Project not found")
    
    if project.get('selected_variant_type') and project.get('selected_variant_type') != data.variant_type:
        logger.warning(f"Project {data.project_id} has a selected variant type {project.get('selected_variant_type')} and cannot be updated to variant type {data.variant_type}")
        raise HTTPException(status_code=400, detail="Project has a selected variant type and so other variant types cannot be updated")

    latest_variant = get_variant(data.user_id, data.project_id, data.variant_type.value)

    if not latest_variant:
        logger.warning(f"Variant {data.variant_type} not found for project {data.project_id} and user {data.user_id}")
        raise HTTPException(status_code=404, detail="Variant not found")
    

    if not latest_variant.get('previous_variant_id'):
        # No previous variant means this is the first variant.
        # So we set its status to 'in_progress' and trigger generation.
        logger.info(f"Retrying variant {data.variant_type} for project {data.project_id}")

        latest_variant['status'] = VariantStatus.IN_PROGRESS.value
        latest_variant['variant_creation_status'] = VariantCreationStatus.GENERATING_VARIANT_DATA.value
        latest_variant['updated_at'] = datetime.now(timezone.utc).isoformat()
        latest_variant['data'] = {}

        try:
            update_project_status(data.project_id, 'in_progress')

            update_variant(latest_variant['variant_id'], latest_variant)
            trigger_generate_variant(latest_variant)
            logger.info(f"Variant {data.variant_type} retried for project {data.project_id}")

        except Exception as e:
            logger.error(f"Failed to retry variant {data.variant_type} for project {data.project_id}: {e}")
            raise HTTPException(status_code=500, detail="Failed to retry variant")
        
        return {"project_id": data.project_id, "message": "Project is being retried"}
    else:
        # If there is a previous variant, we retry the last variant.
        # We set the status to 'in_progress' and trigger the update.
        # We pass the retry_last_variant flag as True to the trigger_update_variant function.
        
        logger.info(f"Retrying variant {data.variant_type} for project {data.project_id}")
        previous_variant_id = latest_variant.get('previous_variant_id')
        query_text = latest_variant.get('query_text')
        previous_variant = get_variant_by_id(previous_variant_id)
        update_project_status(data.project_id, 'updating')
        try:
            trigger_update_variant(
                variant=previous_variant, 
                query_text=query_text, 
                current_code_snippet=None, 
                retry_last_variant=True
            )
            logger.info(f"Variant {data.variant_type} retried for project {data.project_id}")
        except Exception as e:
            logger.error(f"Failed to update variant {data.variant_type} for project {data.project_id}: {e}")
            raise HTTPException(status_code=500, detail="Failed to update variant")
        
        return {"message": "Retrying variant update. Please wait."}


@router.post("/delete_project")
async def delete_project(user_id: str, project_id: str):
    logger.info(f"Soft deleting project {project_id} for user {user_id}")
    
    project = get_project(user_id, project_id)
    if not project:
        logger.warning(f"Project {project_id} not found for user {user_id}. Project may have already been deleted")
        raise HTTPException(status_code=404, detail="Project not found or already deleted")
    
    try:
        soft_delete_project(
            project_id=project_id,
            user_id=user_id
        )
    except Exception as e:
        logger.error(f"Failed to soft delete project {project_id} for user {user_id}: {e}")
        raise HTTPException(status_code=500, detail="Failed to soft delete project")


    logger.info(f"Project {project_id} soft deleted for user {user_id}")
    return {"project_id": project_id, "message": "Project deleted successfully"}


@router.put("/update_project_name")
async def update_project_name(project_id: str, user_id: str, project_name: str):
    logger.info(f"Updating project name for project {project_id} by user {user_id}")
    
    project = get_project(user_id, project_id)
    if not project:
        logger.warning(f"Project {project_id} not found for user {user_id}")
        raise HTTPException(status_code=404, detail="Project not found")
    
    update_project_name_dynamodb(project_id, project_name)
    logger.info(f"Project name updated for project {project_id}")

    return {"message": "Project name updated"}

@router.get("/get_project_chat_history")
async def get_project_chat_history(user_id: str, project_id: str):
    project = get_project(user_id, project_id)
    if not project:
        logger.warning(f"Project {project_id} not found for user {user_id}")
        raise HTTPException(status_code=404, detail="Project not found")
    
    chat_history = project.get('chat_history')

    if not chat_history:
        logger.warning(f"Chat history not found for project {project_id} and user {user_id}")
        raise HTTPException(status_code=404, detail="Chat history not found")
    
    for variant_type in chat_history:
        for entry in chat_history[variant_type]:
            if entry.get('type') == 'system' and entry.get('variant_id'):
                variant = get_variant_by_id(entry.get('variant_id'))
                entry['variant'] = variant

    return chat_history

@router.get("/get_project_variant_type_chat_history")
async def get_project_variant_type_chat_history(user_id: str, project_id: str, variant_type: str):
    project = get_project(user_id, project_id)
    if not project:
        logger.warning(f"Project {project_id} not found for user {user_id}")
        raise HTTPException(status_code=404, detail="Project not found")
    
    chat_history = get_variant_type_chat_history(project_id, variant_type)

    if not chat_history:
        logger.warning(f"Chat history not found for project {project_id} and user {user_id}")
        raise HTTPException(status_code=404, detail="Chat history not found")
    
    for entry in chat_history:
        if entry.get('type') == 'system' and entry.get('variant_id'):
            variant = get_variant_by_id(entry.get('variant_id'))
            entry['variant'] = variant

    return chat_history

@router.get("/select_project_variant_Type")
async def select_project_variant_Type(user_id: str, project_id: str, variant_type: str):
    project = get_project(user_id, project_id)

    if not project:
        logger.warning(f"Project {project_id} not found for user {user_id}")
        raise HTTPException(status_code=404, detail="Project not found")
    
    if project.get('status') != 'completed':
        logger.warning(f"Project {project_id} is not completed for user {user_id}")
        raise HTTPException(status_code=400, detail="Project is not completed")
    
    if variant_type not in [variant.value for variant in VariantType]:
        logger.warning(f"Invalid variant type {variant_type} selected for project {project_id} by user {user_id}")
        raise HTTPException(status_code=400, detail="Invalid variant type selected")
    
    set_project_selected_variant_type(project_id, variant_type)
    logger.info(f"Selected variant type {variant_type} for project {project_id}")

    return {"message": "Selected variant type for project"}
    


