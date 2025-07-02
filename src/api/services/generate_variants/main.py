import logging
from urllib.parse import urljoin
from api.config import BACKEND_URL
from api.db.dynamodb import get_variant_by_id, update_variant, get_project, soft_delete_variant, update_chat_history_with_variant_data, update_variant_creation_status, check_and_update_project_status
from api.utils.variant_generation import generate_variant_data
from api.utils.notification import notify_variant
from api.utils.schemas import VariantCreationStatus, VariantStatus
from datetime import datetime, timezone

# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

NOTIFY_ENDPOINT = urljoin(BACKEND_URL, "variants/notify_variant")

def lambda_handler(event, context):
    try:
        logger.info(f'Event: {event}')
        # Extract variant_id from the event
        variant_id = event.get('variant_id')
        
        if not variant_id:
            logger.error("Missing variant_id in the request")
            return {
                'statusCode': 400,
                'body': 'Missing variant_id in the request'
            }

        variant = get_variant_by_id(variant_id, include_deleted=True)
        
        if not variant:
            logger.error(f"Variant with id {variant_id} not found")
            return {
                'statusCode': 404,
                'body': f'Variant with id {variant_id} not found'
            }

        # Extract required fields
        project_id = variant['project_id']
        user_id = variant['user_id']
        variant_type = variant['variant_type']
        query_text = variant['query_text']
        variant_data = {}

        update_variant_creation_status(variant_id, VariantCreationStatus.GENERATING_VARIANT_DATA.value)
        notify_variant(
            notify_endpoint=NOTIFY_ENDPOINT, 
            user_id=user_id, 
            project_id=project_id, 
            variant_id=variant_id, 
            variant_data=variant_data, 
            query_text=query_text, 
            variant_type=variant_type, 
            variant_status=VariantStatus.IN_PROGRESS.value,
            variant_creation_status=VariantCreationStatus.GENERATING_VARIANT_DATA.value
        )

        # Generate variant data using generate_variant_data function
        tsx_data, imports = generate_variant_data(query_text, variant_type, project_id, user_id, variant_id)
        print(f"imports: {imports}")
        logger.info(f"imports: {imports}")
        update_variant_creation_status(variant_id, VariantCreationStatus.VARIANT_DATA_GENERATED.value)
        notify_variant(
            notify_endpoint=NOTIFY_ENDPOINT, 
            user_id=user_id, 
            project_id=project_id, 
            variant_id=variant_id, 
            variant_data=variant_data, 
            query_text=query_text, 
            variant_type=variant_type, 
            variant_status=VariantStatus.IN_PROGRESS.value,
            variant_creation_status=VariantCreationStatus.VARIANT_DATA_GENERATED.value
        )

        # Update the variant data
        variant_data['tsx'] = tsx_data
        variant_data['imports'] = imports

        update_variant_creation_status(variant_id, VariantCreationStatus.UPDATING_VARIANT_DATA.value)
        notify_variant(
            notify_endpoint=NOTIFY_ENDPOINT, 
            user_id=user_id, 
            project_id=project_id, 
            variant_id=variant_id, 
            variant_data=variant_data, 
            query_text=query_text, 
            variant_type=variant_type, 
            variant_status=VariantStatus.IN_PROGRESS.value,
            variant_creation_status=VariantCreationStatus.UPDATING_VARIANT_DATA.value
        )
        # Update the variant in DynamoDB
        update_variant(variant_id, variant_data)

        # Check if the project exists. If not, soft delete the variant
        project = get_project(
            project_id=project_id,
            user_id=user_id,
        )

        if not project:
            logger.warning(f"Project {project_id} not found. Soft deleting variant {variant_id}")
            soft_delete_variant(variant_id)

        created_at = variant.get('created_at')
        updated_at = datetime.now(timezone.utc).isoformat()
        
        update_chat_history_with_variant_data(
            project_id=project_id,
            variant_id=variant_id,
            variant_type=variant_type,
            query=query_text,
            created_at=created_at,
            updated_at=updated_at
        )

        # Check and update project status (mark as completed if all variants are done)
        check_and_update_project_status(project_id)

        # Notify variant completion
        notify_variant(
            notify_endpoint=NOTIFY_ENDPOINT, 
            user_id=user_id, 
            project_id=project_id, 
            variant_id=variant_id, 
            variant_data=variant_data, 
            query_text=query_text, 
            variant_type=variant_type, 
            variant_status=VariantStatus.COMPLETED.value,
            variant_creation_status=VariantCreationStatus.DONE.value
        )

        logger.info(f"Variant {variant_id} updated and notified successfully")
        return {
            'statusCode': 200,
            'body': f'Variant {variant_id} updated and notified successfully'
        }
    except Exception as e:
        logger.exception("An error occurred while processing the request")
        
        # Update variant status to FAILED in the database if variant_id exists in locals and is truthy
        if 'variant' in locals():
            update_variant(variant_id, {}, status=VariantStatus.FAILED.value, creation_status=VariantCreationStatus.FAILED.value)
            logger.info(f"Variant {variant_id} updated to FAILED in the database")

            # Notify frontend of failure
            notify_variant(
                notify_endpoint=NOTIFY_ENDPOINT, 
                user_id=user_id, 
                project_id=project_id, 
                variant_id=variant_id, 
                variant_data={}, 
                query_text=query_text, 
                variant_type=variant_type, 
                variant_status=VariantStatus.FAILED.value,
                variant_creation_status=VariantCreationStatus.FAILED.value
            )
            logger.info(f"Variant {variant_id} notified of failure")


        return {
            'statusCode': 500,
            'body': 'Internal server error'
        }
