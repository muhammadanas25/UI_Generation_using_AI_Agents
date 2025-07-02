import uuid
import logging
from datetime import datetime, timezone
from urllib.parse import urljoin
from api.config import BACKEND_URL 
from api.utils.variant_generation import update_variant_data
from api.utils.notification import notify_variant
from api.db.dynamodb import get_latest_variant_by_project_and_type, add_variant, update_variant, check_and_update_project_status, get_variant_by_id, get_variant_history, get_project, soft_delete_variant, update_chat_history_with_variant_data, update_variant_creation_status
from api.utils.schemas import VariantCreationStatus, VariantStatus
from typing import Optional


# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)


NOTIFY_ENDPOINT = urljoin(BACKEND_URL, "variants/notify_variant")

QUERY_NUMBER = 3

def _get_past_n_queries(user_id: str, project_id: str, variant_type: str) -> str:
    # Fetch the previous queries using the get_variant_history function
    variant_history = get_variant_history(user_id, project_id, variant_type)
    print(f"Got variant history for project: {project_id} type: {variant_type}")
    
    # Exclude the last query and fetch the previous N queries
    if len(variant_history) <= 1:
        return []  # No sufficient history to retrieve previous queries
    
    # Exclude the last query and get the previous N queries
    last_n_variants = variant_history[-(QUERY_NUMBER + 1):-1]  # Exclude the last query
    queries = [variant.get('query_text', '') for variant in last_n_variants]

    return queries

def log_and_return_error(message: str, status_code: int) -> dict:
    logger.error(message)
    return {'statusCode': status_code, 'body': message}

def notify_variant_status(variant_id, user_id, project_id, variant_type, query_text, status, creation_status, variant_data={}):
    notify_variant(
        notify_endpoint=NOTIFY_ENDPOINT, 
        user_id=user_id, 
        project_id=project_id, 
        variant_id=variant_id, 
        variant_data=variant_data, 
        query_text=query_text, 
        variant_type=variant_type, 
        variant_status=status.value,
        variant_creation_status=creation_status.value
    )

def handle_variant_failure(variant_id, user_id, project_id, variant_type, query_text):
    if variant_id:
        update_variant(variant_id, {}, status=VariantStatus.FAILED.value, creation_status=VariantCreationStatus.FAILED.value)
        notify_variant_status(variant_id, user_id, project_id, variant_type, query_text, VariantStatus.FAILED, VariantCreationStatus.FAILED)

def handle_retry_variant(
        project_id: str, 
        variant_type: str,
        query_text: str,
        user_id: str
    ) -> dict:
    try:
        logger.info("Retrying last variant")

        # Get the latest variant for the project and type. This will be the variant to retry
        latest_variant_to_retry = get_latest_variant_by_project_and_type(project_id, variant_type, include_deleted=True)

        if not latest_variant_to_retry:
            return log_and_return_error(f"No variant of type {variant_type} found for project {project_id}", 404)

        # Check if the last variant is ready to retry
        if latest_variant_to_retry.get('status') != 'completed':
            return log_and_return_error(f"Last variant {latest_variant_to_retry['variant_id']} is not in a state to retry", 400)
        
        latest_variant_id = latest_variant_to_retry['variant_id']

        # Get previous variant data
        previous_variant_id = latest_variant_to_retry['previous_variant_id']
        previous_variant = get_variant_by_id(previous_variant_id, include_deleted=True)
        previous_variant_tsx = previous_variant['variant_data']['tsx']
        previous_variant_imports = previous_variant['variant_data']['imports']
        print(f"previous_variant_imports: {previous_variant_imports}")
        # Update latest variant to have empty data
        latest_variant_to_retry_data = {}
        update_variant(latest_variant_id, latest_variant_to_retry_data, status=VariantStatus.IN_PROGRESS.value, creation_status=VariantCreationStatus.GENERATING_VARIANT_DATA.value)

        notify_variant_status(latest_variant_id, user_id, project_id, variant_type, query_text, VariantStatus.IN_PROGRESS, VariantCreationStatus.GENERATING_VARIANT_DATA)

        past_messages = _get_past_n_queries(user_id, project_id, variant_type)
        
        additional_context = {
            'current_code': previous_variant_tsx,
            'past_messages': past_messages
        }

        if latest_variant_to_retry['current_code_snippet']:
            additional_context['current_code_snippet'] = latest_variant_to_retry['current_code_snippet']

        logger.info(f"Generated additional_context: {additional_context}")

        # Regenerate variant tsx and imports
        tsx, new_variant_imports = update_variant_data(query_text, additional_context, project_id, user_id, latest_variant_id, variant_type)

        update_variant_creation_status(variant_id=latest_variant_id, creation_status=VariantCreationStatus.VARIANT_DATA_GENERATED.value)
        notify_variant_status(latest_variant_id, user_id, project_id, variant_type, query_text, VariantStatus.IN_PROGRESS, VariantCreationStatus.VARIANT_DATA_GENERATED)

        # Update variant tsx with new tsx
        latest_variant_to_retry_data['tsx'] = tsx

        # Update variant imports with new imports
        result_imports = dict(previous_variant_imports)
        result_imports.update(new_variant_imports)
        latest_variant_to_retry_data['imports'] = result_imports

        update_variant_creation_status(variant_id=latest_variant_id, creation_status=VariantCreationStatus.UPDATING_VARIANT_DATA.value)
        notify_variant_status(latest_variant_id, user_id, project_id, variant_type, query_text, VariantStatus.IN_PROGRESS, VariantCreationStatus.UPDATING_VARIANT_DATA)

        # Update the variant in DynamoDB
        update_variant(latest_variant_id, latest_variant_to_retry_data)
        check_and_update_project_status(project_id)

        # Check if project exists. If not, soft delete the variant
        project = get_project(project_id=project_id, user_id=user_id)

        if not project:
            logger.warning(f"Project {project_id} not found. Soft deleting variant {latest_variant_id}")
            soft_delete_variant(latest_variant_id)


        update_chat_history_with_variant_data(
            project_id=project_id,
            variant_id=latest_variant_id,
            variant_type=variant_type,
            query=query_text,
            created_at=latest_variant_to_retry.get('created_at'),
            updated_at=datetime.now(timezone.utc).isoformat()
        )

        # Notify variant completion
        notify_variant_status(latest_variant_id, user_id, project_id, variant_type, query_text, VariantStatus.COMPLETED, VariantCreationStatus.DONE, variant_data=latest_variant_to_retry_data)

        logger.info(f"Last variant {latest_variant_id} retried successfully")
        return {'statusCode': 200, 'body': f'Last variant {latest_variant_id} retried successfully'}

    except Exception as e:
        logger.exception("An error occurred while retrying the variant")
        handle_variant_failure(latest_variant_id, user_id, project_id, variant_type, query_text)
        return {'statusCode': 500, 'body': 'Internal server error'}

def handle_update_variant(project_id: str, variant_type: str, query_text: str, user_id: str, current_code_snippet: Optional[str]=None) -> dict:
    try:
        variant = get_latest_variant_by_project_and_type(project_id, variant_type, include_deleted=True)
        
        if not variant:
            return log_and_return_error(f"Variant {variant_type} for {project_id} not found", 404)

        if variant.get('status') != 'completed':
            return log_and_return_error(f"Variant {variant_type} for {project_id} is not completed", 400)

        if not variant.get('variant_data'):
            return log_and_return_error(f"Variant {variant_type} for {project_id} has no data", 400)

        previous_variant_id = variant['variant_id']
        previous_variant_tsx = variant['variant_data']['tsx']
        previous_variant_imports = variant['variant_data']['imports']
        
        variant_id = str(uuid.uuid4())
        variant_data = initialize_variant_data(project_id, user_id, variant_id, variant_type, query_text, previous_variant_id, current_code_snippet)

        add_variant(variant_data)
        logger.info(f"Variant {variant_id} of type {variant_type} created for project {project_id}")

        additional_context = {'current_code': previous_variant_tsx}

        past_messages = _get_past_n_queries(user_id, project_id, variant_type)

        additional_context['past_messages'] = past_messages

        if current_code_snippet:
            additional_context['current_code_snippet'] = current_code_snippet


        update_variant_creation_status(variant_id=variant_id, creation_status=VariantCreationStatus.GENERATING_VARIANT_DATA.value)
        notify_variant_status(variant_id, user_id, project_id, variant_type, query_text, VariantStatus.IN_PROGRESS, VariantCreationStatus.GENERATING_VARIANT_DATA)

        tsx, new_variant_imports = update_variant_data(query_text, additional_context, project_id, user_id, variant_id, variant_type)
      
        logger.info(f"new_variant_imports: {new_variant_imports}")
        update_variant_creation_status(variant_id=variant_id, creation_status=VariantCreationStatus.VARIANT_DATA_GENERATED.value)
        notify_variant_status(variant_id, user_id, project_id, variant_type, query_text, VariantStatus.IN_PROGRESS, VariantCreationStatus.VARIANT_DATA_GENERATED)

        variant_data['variant_data']['tsx'] = tsx
        variant_data['variant_data']['imports'] = {**previous_variant_imports, **new_variant_imports}

        update_variant_creation_status(variant_id=variant_id, creation_status=VariantCreationStatus.UPDATING_VARIANT_DATA.value)
        notify_variant_status(variant_id, user_id, project_id, variant_type, query_text, VariantStatus.IN_PROGRESS, VariantCreationStatus.UPDATING_VARIANT_DATA)

        update_variant(variant_id, variant_data['variant_data'])
        check_and_update_project_status(project_id)

        if not get_project(project_id=project_id, user_id=user_id):
            logger.warning(f"Project {project_id} not found. Soft deleting variant {variant_id}")
            soft_delete_variant(variant_id)

        update_chat_history_with_variant_data(
            project_id=project_id,
            variant_id=variant_id,
            variant_type=variant_type,
            query=query_text,
            created_at=variant['created_at'],
            updated_at=datetime.now(timezone.utc).isoformat()
        )

        notify_variant_status(variant_id, user_id, project_id, variant_type, query_text, VariantStatus.COMPLETED, VariantCreationStatus.DONE, variant_data=variant_data['variant_data'])

        logger.info(f"Variant {variant_id} updated and notified successfully")
        return {'statusCode': 200, 'body': f'Variant {variant_id} updated and notified successfully'}

    except Exception as e:
        logger.exception("An error occurred while updating the variant")
        if 'variant_id' in locals():
            handle_variant_failure(variant_id, user_id, project_id, variant_type, query_text)
        return {'statusCode': 500, 'body': 'Internal server error'}

def initialize_variant_data(project_id, user_id, variant_id, variant_type, query_text, previous_variant_id, current_code_snippet=None):
    return {
        'project_id': project_id,
        'user_id': user_id,
        'variant_id': variant_id,
        'variant_type': variant_type,
        'variant_data': {},
        'query_text': query_text,
        'status': 'in_progress',
        'previous_variant_id': previous_variant_id,
        'current_code_snippet': current_code_snippet,
        'created_at': datetime.now(timezone.utc).isoformat(),
        'updated_at': datetime.now(timezone.utc).isoformat()
    }

def lambda_handler(event, context):
    try:
        # Extract variant_id from the event
        logger.info(f'Event: {event}')
        project_id = event.get('project_id', '1234')
        user_id = event.get('user_id', '12345678')
        variant_type = event.get('variant_type')
        query_text = event.get('query_text', "")
        retry_last_variant = event.get('retry_last_variant', False)
        current_code_snippet = event.get('current_code_snippet')

        if not user_id or not project_id:
            logger.error("Missing user_id or project_id in the request")
            return {
                'statusCode': 400,
                'body': 'Missing user_id or project_id in the request'
            }
        
        if not variant_type:
            logger.error("Missing variant_type in the request")
            return {
                'statusCode': 400,
                'body': 'Missing variant_type in the request'
            }
            
        if not retry_last_variant:
            logger.info(f"retry_last_variant: {retry_last_variant} is False so updating variant")
            return handle_update_variant(
                project_id=project_id, 
                variant_type=variant_type, 
                query_text=query_text, 
                user_id=user_id,
                current_code_snippet=current_code_snippet
            )
        else:
            logger.info(f"retry_last_variant: {retry_last_variant} is True so retrying variant")
            return handle_retry_variant(
                project_id=project_id, 
                variant_type=variant_type, 
                query_text=query_text, 
                user_id=user_id
            )

    except Exception as e:
        logger.exception("An error occurred while processing the request")
        return {
            'statusCode': 500,
            'body': 'Internal server error'
        }
