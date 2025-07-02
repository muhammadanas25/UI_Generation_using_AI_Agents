from typing import List, Optional
from datetime import datetime, timezone
import boto3
from boto3.dynamodb.conditions import Key, Attr
from ai.const.index import VariantType, VariantStatus, VariantCreationStatus
from api.config import REGION_NAME, PROJECTS_TABLE_NAME, VARIANTS_TABLE_NAME
import logging

logger = logging.getLogger(__name__)

dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)

projects_table = dynamodb.Table(PROJECTS_TABLE_NAME)
variants_table = dynamodb.Table(VARIANTS_TABLE_NAME)

def add_project(project: dict) -> None:
    logger.info(f"Adding project: {project}")
    try:
        projects_table.put_item(Item=project)
        logger.info("Project added successfully.")
    except Exception as e:
        logger.error(f"Failed to add project: {e}")
        raise

def get_project(user_id: str, project_id: str, include_deleted: bool=False) -> Optional[dict]:
    logger.info(f"Fetching project with ID: {project_id} for user: {user_id}, include_deleted: {include_deleted}")
    try:
        response = projects_table.get_item(Key={'project_id': project_id})
        project = response.get('Item')
        logger.debug(f"Fetched project: {project}")

        if project and project['user_id'] != user_id:
            logger.warning(f"User ID mismatch: {user_id} does not own project {project_id}.")
            return None
        
        if not include_deleted and project and project['status'] == 'deleted':
            logger.info(f"Project {project_id} is deleted and not included.")
            return None
        
        return project
    except Exception as e:
        logger.error(f"Failed to fetch project: {e}")
        raise

def get_all_projects(user_id: str, include_deleted: bool=False) -> List[dict]:
    logger.info(f"Fetching all projects for user: {user_id}, include_deleted: {include_deleted}")
    try:
        filter_expression = Attr('user_id').eq(user_id)

        if not include_deleted:
            filter_expression = filter_expression & Attr('status').ne('deleted')

        response = projects_table.scan(
            ProjectionExpression="#pid, query_text, created_at, updated_at, project_name",  # Removed status from projection
            ExpressionAttributeNames={
                "#pid": "project_id"  # Mapping for project_id
            },
            FilterExpression=filter_expression # Apply the filter expression
        )
        items = response.get('Items', [])
        logger.info(f"Fetched {len(items)} projects for user: {user_id}")

        for item in items:
            if 'project_name' not in item:
                item['project_name'] = None
        
        return items
    except Exception as e:
        logger.error(f"Failed to fetch all projects: {e}")
        raise

def add_variant(variant):
    logger.info(f"Adding variant: {variant}")
    try:
        variants_table.put_item(Item=variant)
        logger.info("Variant added successfully.")
    except Exception as e:
        logger.error(f"Failed to add variant: {e}")
        raise

def get_variants(project_id: str, include_deleted: bool=False) -> dict:
    logger.info(f"Fetching variants for project ID: {project_id}, include_deleted: {include_deleted}")
    variants = {}
    failed_variants = []
    
    try:
        for variant_type in VariantType:
            variant_type_value = variant_type.value
            variant = get_latest_variant_by_project_and_type(project_id, variant_type_value, include_deleted)
            logger.debug(f"Fetched variant for type {variant_type_value}: {variant}")

            if variant:
                if variant.get('status') == VariantStatus.FAILED.value:
                    failed_variants.append(variant)
                else:
                    # If we find a non-failed variant, we can return it immediately
                    variants[variant_type_value] = {
                        'variant_id': variant.get('variant_id'),
                        'status': variant.get('status'),
                        'variant_data': variant.get('variant_data'),
                        'query_text': variant.get('query_text')
                    }
        
        # If we have non-failed variants, return them
        if variants:
            logger.info(f"Fetched non-failed variants for project ID: {project_id}")
            return variants
        
        # If no non-failed variants, return the failed ones if they exist
        if failed_variants:
            logger.warning(f"All variants for project ID: {project_id} are failed. Returning failed variants.")
            return {variant['variant_type']: variant for variant in failed_variants}

        logger.info(f"No variants found for project ID: {project_id}")
        return {}

    except Exception as e:
        logger.error(f"Failed to fetch variants: {e}")
        raise

def fetch_latest_variant_with_pagination(project_id: str, variant_type: str, include_deleted: bool=False, include_failed: bool=False) -> Optional[dict]:
    logger.info(f"Fetching latest variant for project ID: {project_id}, variant type: {variant_type}, include_deleted: {include_deleted}, include_failed: {include_failed}")
    last_evaluated_key = None  # Initialize the key for pagination

    while True:
        query_params = {
            'IndexName': 'project_id-updated_at-index',
            'KeyConditionExpression': Key('project_id').eq(project_id),
            'ScanIndexForward': False,  # Sort in descending order (latest first)
            'FilterExpression': Attr('variant_type').eq(variant_type)
        }
        
        if last_evaluated_key:
            query_params['ExclusiveStartKey'] = last_evaluated_key
        
        response = variants_table.query(**query_params)
        items = response.get('Items', [])
        logger.debug(f"Query response: {response}")

        if items:
            for item in items:
                # Check if we should include this item based on the flags
                if not include_deleted and item.get('status') == VariantStatus.DELETED.value:
                    continue
                if not include_failed and item.get('status') == VariantStatus.FAILED.value:
                    continue
                
                logger.info(f"Returning variant: {item}")
                return item  # Return the first matching item immediately
        
        last_evaluated_key = response.get('LastEvaluatedKey', None)  # Get the key for the next page
        if not last_evaluated_key:  # Stop if there are no more pages
            logger.info("No more pages to fetch.")
            break

    logger.warning(f"No variants found for project ID: {project_id} and variant type: {variant_type}")
    return None

def get_latest_variant_by_project_and_type(project_id: str, variant_type: str, include_deleted: bool=False, include_failed: bool=False) -> Optional[dict]:
    logger.info(f"Getting latest variant by project ID: {project_id} and variant type: {variant_type}")
    filtered_variants = fetch_latest_variant_with_pagination(project_id, variant_type, include_deleted, include_failed)

    if not filtered_variants:
        logger.warning(f"No latest variant found for project ID: {project_id} and variant type: {variant_type}")
        return None
    
    return filtered_variants

def get_variant(user_id: str, project_id: str, variant_type: str, include_deleted: bool=False, include_failed: bool=False) -> Optional[dict]:
    logger.info(f"Getting variant for user ID: {user_id}, project ID: {project_id}, variant type: {variant_type}")
    variant = get_latest_variant_by_project_and_type(project_id, variant_type, include_deleted, include_failed)
    
    if not variant:
        logger.warning(f"No variant found for user ID: {user_id}, project ID: {project_id}, variant type: {variant_type}")
        return None
    
    # Ensure the user_id matches the one associated with the variant
    if variant['user_id'] != user_id:
        logger.warning(f"User ID mismatch: {user_id} does not match variant's user ID.")
        return None
    
    logger.info(f"Returning variant data for variant ID: {variant['variant_id']}")
    return variant

def get_variant_by_id(variant_id: str, include_deleted: bool=False, include_failed: bool=False) -> Optional[dict]:
    logger.info(f"Fetching variant by ID: {variant_id}, include_deleted: {include_deleted}, include_failed: {include_failed}")
    response = variants_table.get_item(Key={'variant_id': variant_id})
    
    if 'Item' not in response:
        logger.warning(f"Variant ID: {variant_id} not found.")
        return None
    
    variant = response['Item']
    
    # Check if the variant should be excluded based on its status
    if not include_deleted and variant['status'] == VariantStatus.DELETED.value:
        logger.info(f"Variant ID: {variant_id} is deleted and will not be returned.")
        return None
    
    if not include_failed and variant['status'] == VariantStatus.FAILED.value:
        logger.info(f"Variant ID: {variant_id} is failed and will not be returned.")
        return None
    
    logger.info(f"Returning variant: {variant}")
    return variant
        
def update_variant(variant_id: str, variant_data: dict, status: str=VariantStatus.COMPLETED.value, creation_status: str=VariantCreationStatus.DONE.value) -> None:
    logger.info(f"Updating variant ID: {variant_id} with data: {variant_data} and status: {status}")
    updated_at = datetime.now(timezone.utc).isoformat()
    update_expression = "SET variant_data = :vd, #status = :s, updated_at = :ua, variant_creation_status = :cs"
    expression_attribute_values = {
        ':vd': variant_data,
        ':s': status,
        ':ua': updated_at,
        ':cs': creation_status
    }
    expression_attribute_names = {
        '#status': 'status'  # 'status' is a reserved word in DynamoDB
    }

    try:
        variants_table.update_item(
            Key={'variant_id': variant_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values,
            ExpressionAttributeNames=expression_attribute_names
        )
        logger.info(f"Variant ID: {variant_id} updated successfully.")
    except Exception as e:
        logger.error(f"Failed to update variant ID: {variant_id}: {e}")
        raise

def update_variant_creation_status(variant_id: str, creation_status: str=VariantCreationStatus.DONE.value) -> None:
    logger.info(f"Updating variant creation status for variant ID: {variant_id} to {creation_status}")
    updated_at = datetime.now(timezone.utc).isoformat()
    
    update_expression = "SET variant_creation_status = :cs, updated_at = :ua"
    expression_attribute_values = {
        ':cs': creation_status,
        ':ua': updated_at
    }

    try:
        variants_table.update_item(
            Key={'variant_id': variant_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values
        )
        logger.info(f"Variant creation status for variant ID: {variant_id} updated successfully.")
    except Exception as e:
        logger.error(f"Failed to update variant creation status for variant ID: {variant_id}: {e}")
        raise


def get_variant_history(user_id: str, project_id: str, variant_type: str, include_deleted: bool=False) -> List[dict]:
    logger.info(f"Fetching variant history for user ID: {user_id}, project ID: {project_id}, variant type: {variant_type}, include_deleted: {include_deleted}")
    
    # Check if project is deleted
    project = get_project(user_id, project_id, include_deleted=include_deleted)
    if not project:
        logger.warning(f"Project ID: {project_id} not found for user ID: {user_id}.")
        return []
    
    # If the project is not deleted, fetch the variant, including deleted ones
    variant = get_variant(user_id, project_id, variant_type, include_deleted=True, include_failed=True)
    if not variant:
        logger.warning(f"No variant found for user ID: {user_id}, project ID: {project_id}, variant type: {variant_type}.")
        return []

    # List to accumulate the variant history
    variant_history = []

    # Recursive function to traverse the variants
    def traverse_variants(current_variant):
        if not current_variant:
            return

        previous_variant_id = current_variant.get('previous_variant_id')
        if previous_variant_id:
            previous_variant = get_variant_by_id(previous_variant_id, include_deleted=True, include_failed=True)
            traverse_variants(previous_variant)

        # Append the current variant after recursion
        variant_history.append(current_variant)

    traverse_variants(variant)
    logger.info(f"Variant history for user ID: {user_id}, project ID: {project_id}, variant type: {variant_type} retrieved successfully.")
    return variant_history

def update_project_status(project_id: str, status: str) -> None:
    logger.info(f"Updating project ID: {project_id} status to: {status}")
    updated_at = datetime.now(timezone.utc).isoformat()
    update_expression = "SET #status = :s, updated_at = :ua"
    expression_attribute_values = {
        ':s': status,
        ':ua': updated_at
    }
    expression_attribute_names = {
        '#status': 'status'  # 'status' is a reserved word in DynamoDB
    }

    try:
        projects_table.update_item(
            Key={'project_id': project_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values,
            ExpressionAttributeNames=expression_attribute_names
        )
        logger.info(f"Project ID: {project_id} status updated successfully.")
    except Exception as e:
        logger.error(f"Failed to update project ID: {project_id}: {e}")
        raise

def check_and_update_project_status(project_id: str) -> None:
    logger.info(f"Checking and updating project status for project ID: {project_id}")
    # Step 1: Retrieve variants for the project
    variants = get_variants(project_id)
    
    if not variants:
        logger.info(f"No variants found for project ID: {project_id}.")
        return

    # Step 2: Check if all variants have 'completed' status
    all_completed = all(variant['status'] == VariantStatus.COMPLETED.value for variant in variants.values())

    # Log detailed status check
    variant_statuses = {vtype: variant['status'] for vtype, variant in variants.items()}
    logger.info(f"🔍 PROJECT_STATUS_CHECK: project_id={project_id}, variant_statuses={variant_statuses}, all_completed={all_completed}")

    if all_completed:
        logger.info(f"🎯 PROJECT_COMPLETION_TRIGGER: All variants completed for project_id={project_id}, updating project status to 'completed'")
        
        # Step 3: Update the project status to 'completed' if all variants are completed
        update_project_status(project_id, VariantStatus.COMPLETED.value)
        logger.info(f"✅ PROJECT_STATUS_UPDATED: Successfully updated project_id={project_id} status to 'completed' in database")
        
        # Step 4: Notify websocket about project completion using the last variant's details
        # Get any completed variant to extract user details (they all belong to the same user)
        sample_variant = next(iter(variants.values()))
        variant_id = sample_variant.get('variant_id')
        
        logger.info(f"🔔 PREPARING_WEBSOCKET: Getting variant details for project completion notification - variant_id={variant_id}")
        
        # Get the actual variant details to extract user_id
        if variant_id:
            variant_details = get_variant_by_id(variant_id)
            if variant_details:
                logger.info(f"🚀 TRIGGERING_PROJECT_COMPLETION_WEBSOCKET: Sending project completion notification for project_id={project_id}, user_id={variant_details['user_id']}")
                
                from api.utils.notification import notify_variant
                from api.config import BACKEND_URL
                from urllib.parse import urljoin
                
                # Notify frontend that project is now completed
                notify_variant(
                    notify_endpoint=urljoin(BACKEND_URL, "variants/notify_variant"),
                    user_id=variant_details['user_id'],
                    project_id=project_id,
                    variant_id=variant_details['variant_id'],
                    variant_data=variant_details.get('variant_data', {}),
                    query_text=variant_details.get('query_text', ''),
                    variant_type=variant_details['variant_type'],
                    variant_status=variant_details['status'],
                    variant_creation_status=variant_details.get('variant_creation_status', 'DONE'),
                    status=VariantStatus.COMPLETED.value
                )
                
                logger.info(f"✅ PROJECT_COMPLETION_WEBSOCKET_SENT: Successfully triggered project completion notification for project_id={project_id}")
            else:
                logger.error(f"❌ PROJECT_COMPLETION_ERROR: Could not find variant details for variant_id={variant_id}, project_id={project_id}")
        else:
            logger.error(f"❌ PROJECT_COMPLETION_ERROR: No valid variant_id found for project_id={project_id}")
    else:
        incomplete_variants = [vtype for vtype, variant in variants.items() if variant['status'] != VariantStatus.COMPLETED.value]
        logger.info(f"⏳ PROJECT_INCOMPLETE: project_id={project_id} not all variants completed yet. Incomplete variants: {incomplete_variants}")

def soft_delete_variant(variant_id: str) -> None:
    logger.info(f"Soft deleting variant ID: {variant_id}.")
    variant = get_variant_by_id(variant_id)
    if not variant:
        logger.warning(f"Variant ID: {variant_id} not found for soft delete.")
        return

    update_variant(variant_id, variant.get('variant_data'), status=VariantStatus.DELETED.value)

def soft_delete_project(
        project_id: str,
        user_id: str
    ) -> None:
    logger.info(f"Soft deleting project ID: {project_id} for user ID: {user_id}.")
    one_variants = get_variant_history(user_id, project_id, VariantType.ONE.value)
    two_variants = get_variant_history(user_id, project_id, VariantType.TWO.value)
    three_variants = get_variant_history(user_id, project_id, VariantType.THREE.value)

    all_variants = one_variants + two_variants + three_variants

    # Update the status of each variant to 'deleted'
    for variant in all_variants:
        variant_id = variant.get('variant_id')
        variant_data = variant.get('variant_data')

        # Update the variant status to 'deleted'
        if variant['status'] != VariantStatus.DELETED.value:
            logger.info(f"Updating variant ID: {variant_id} to deleted status.")
            update_variant(variant_id, variant_data, status=VariantStatus.DELETED.value)

    # Update the project status to 'deleted'
    update_project_status(project_id, VariantStatus.DELETED.value)

def update_project_name(project_id: str, project_name: str) -> None:
    logger.info(f"Updating project ID: {project_id} name to: {project_name}.")
    updated_at = datetime.now(timezone.utc).isoformat()
    update_expression = "SET project_name = :pn, updated_at = :ua"
    expression_attribute_values = {
        ':pn': project_name,
        ':ua': updated_at
    }

    # Update the project in the DynamoDB table
    try:
        projects_table.update_item(
            Key={'project_id': project_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values
        )
        logger.info(f"Project ID: {project_id} name updated successfully.")
    except Exception as e:
        logger.error(f"Failed to update project ID: {project_id} name: {e}")
        raise

def _get_updated_chat_history(chat_history: list, variant_id: str, updated_at: str, new_entry: dict) -> List[dict]:
    updated_chat_history = chat_history.copy()

    for entry in updated_chat_history:
        if entry.get('type') == 'system' and entry.get('variant_id') == variant_id:
            entry['updated_at'] = updated_at
            return updated_chat_history
    
    updated_chat_history.append(new_entry)
    
    return updated_chat_history

def update_chat_history_with_variant_data(
        project_id: str, 
        variant_id: str, 
        variant_type: str, 
        query: str, 
        created_at: str, 
        updated_at: str
    ) -> None:
    logger.info(f"Updating chat history for project ID: {project_id} with variant ID: {variant_id}, variant type: {variant_type}, and query: {query}")

    new_entry = {
        'type': 'system',
        'variant_id': variant_id,
        'updated_at': updated_at,
        'created_at': created_at,
        'query': query
    }

    try:
        response = projects_table.get_item(
            Key={'project_id': project_id},
            ProjectionExpression=f'chat_history.{variant_type}'
        )
        
        chat_history = response.get('Item', {}).get('chat_history', {}).get(variant_type, [])
    except Exception as e:
        logger.error(f"Failed to retrieve chat history for project ID: {project_id}: {e}")
        raise

    updated_chat_history = _get_updated_chat_history(chat_history, variant_id, updated_at, new_entry)
        
    try:
        projects_table.update_item(
            Key={'project_id': project_id},
            UpdateExpression=f'SET chat_history.#variant_type = :updated_chat_history',
            ExpressionAttributeValues={
                ':updated_chat_history': updated_chat_history
            },
            ExpressionAttributeNames={
                '#variant_type': variant_type
            }
        )
        logger.info(f"Chat history updated successfully for project ID: {project_id}.")
    except Exception as e:
        logger.error(f"Failed to update chat history for project ID: {project_id}: {e}")
        raise

def update_chat_history_with_user_query(
        project_id: str, 
        variant_type: str,
        query: str,
        intent: str,
        created_at: str, 
        updated_at: str
    ) -> None:
    logger.info(f"Updating chat history for project ID: {project_id} with user query: {query}")

    new_entry = {
        'type': 'user',
        'intent': intent,
        'updated_at': updated_at,
        'created_at': created_at,
        'query': query
    }

    update_expression = f"SET chat_history.#variant_type = list_append(if_not_exists(chat_history.#variant_type, :empty_list), :new_entry)"
    expression_attribute_values = {
        ':new_entry': [new_entry],
        ':empty_list': []
    }
    expression_attribute_names = {
        '#variant_type': variant_type
    }

    # Update the chat history in the project
    try:
        projects_table.update_item(
            Key={'project_id': project_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values,
            ExpressionAttributeNames=expression_attribute_names
        )
        logger.info(f"Chat history updated successfully for project ID: {project_id}.")
    except Exception as e:
        logger.error(f"Failed to update chat history for project ID: {project_id}: {e}")
        raise

def update_chat_history_with_system_message(
        project_id: str, 
        variant_type: str,
        message: str,
        created_at: str, 
        updated_at: str
    ) -> None:
    logger.info(f"Updating chat history for project ID: {project_id} with system message: {message}")

    new_entry = {
        'type': 'system',
        'message': message,
        'updated_at': updated_at,
        'created_at': created_at
    }

    update_expression = f"SET chat_history.#variant_type = list_append(if_not_exists(chat_history.#variant_type, :empty_list), :new_entry)"
    expression_attribute_values = {
        ':new_entry': [new_entry],
        ':empty_list': []
    }
    expression_attribute_names = {
        '#variant_type': variant_type
    }

    # Update the chat history in the project
    try:
        projects_table.update_item(
            Key={'project_id': project_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values,
            ExpressionAttributeNames=expression_attribute_names
        )
        logger.info(f"Chat history updated successfully for project ID: {project_id}.")
    except Exception as e:
        logger.error(f"Failed to update chat history for project ID: {project_id}: {e}")
        raise

def get_variant_type_chat_history(
        project_id: str, 
        variant_type: str
    ) -> List[dict]:
    logger.info(f"Fetching chat history for project ID: {project_id} and variant type: {variant_type}")

    try:
        response = projects_table.get_item(
            Key={'project_id': project_id},
            ProjectionExpression=f'chat_history.{variant_type}'
        )
        
        chat_history = response.get('Item', {}).get('chat_history', {}).get(variant_type, [])
        logger.info(f"Chat history fetched successfully for project ID: {project_id} and variant type: {variant_type}.")
        return chat_history
    except Exception as e:
        logger.error(f"Failed to fetch chat history for project ID: {project_id} and variant type: {variant_type}: {e}")
        raise

def set_project_selected_variant_type(
        project_id: str,
        variant_type: str,
    ) -> None:

    logger.info(f"Selecting project ID: {project_id} variant type: {variant_type}")

    # Set the projects "selected_variant" attribute to the variant type
    update_expression = "SET selected_variant_type = :svt"
    expression_attribute_values = {
        ':svt': variant_type,
    }

    try:
        projects_table.update_item(
            Key={'project_id': project_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_attribute_values
        )
        logger.info(f"Project ID: {project_id} variant type: {variant_type} selected successfully.")
    except Exception as e:
        logger.error(f"Failed to select project ID: {project_id} variant type: {variant_type}: {e}")
        raise

