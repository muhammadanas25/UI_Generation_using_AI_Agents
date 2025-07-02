import boto3
import json
import logging
from api.config import REGION_NAME, GENERATE_VARIANT_LAMBDA, UPDATE_VARIANT_LAMBDA

# Initialize the Lambda client
lambda_client = boto3.client('lambda', region_name=REGION_NAME)

# Set up logger for this module
logger = logging.getLogger(__name__)

def trigger_generate_variant(variant):
    # Extract the variant_id from the variant object
    variant_id = variant.get("variant_id")

    # Prepare the payload for the Lambda function
    payload = {
        "variant_id": variant_id  # Add other necessary fields if needed
    }

    try:
        logger.info(f"Triggering Lambda function {GENERATE_VARIANT_LAMBDA} for variant_id: {variant_id}")

        # Trigger the akira-generate-variant Lambda function asynchronously
        response = lambda_client.invoke(
            FunctionName=GENERATE_VARIANT_LAMBDA,
            InvocationType='Event',  # Asynchronous invocation
            Payload=json.dumps(payload)
        )

        # Log the response status code
        logger.info(f"Lambda function triggered successfully for variant_id {variant_id}, response status: {response['StatusCode']}")
        return {
            'statusCode': 202,
            'body': f'Lambda function for variant_id {variant_id} triggered successfully.'
        }

    except Exception as e:
        logger.error(f"Error invoking Lambda function {GENERATE_VARIANT_LAMBDA} for variant_id {variant_id}: {str(e)}")
        raise


def trigger_update_variant(variant, query_text, current_code_snippet=None, retry_last_variant=False):
    # Extract the variant_id from the variant object
    variant_type = variant.get("variant_type")
    project_id = variant.get("project_id")
    user_id = variant.get("user_id")
    
    # Prepare the payload for the Lambda function
    payload = {
        "variant_type": variant_type,
        "project_id": project_id,
        "user_id": user_id,
        "query_text": query_text,
        "current_code_snippet": current_code_snippet,
        "retry_last_variant": retry_last_variant
    }

    try:
        logger.info(f"Triggering Lambda function {UPDATE_VARIANT_LAMBDA} for variant_type: {variant_type}")

        # Trigger the akira-generate-variant Lambda function asynchronously
        response = lambda_client.invoke(
            FunctionName=UPDATE_VARIANT_LAMBDA,
            InvocationType='Event',  # Asynchronous invocation
            Payload=json.dumps(payload)
        )

        # Log the response status code
        logger.info(f"Lambda function triggered successfully for variant_type {variant_type}, response status: {response['StatusCode']}")
        return {
            'statusCode': 202,
            'body': f'Lambda function for variant_type {variant_type} triggered successfully.'
        }

    except Exception as e:
        logger.error(f"Error invoking Lambda function {GENERATE_VARIANT_LAMBDA} for variant_type {variant_type}: {str(e)}")
        raise
