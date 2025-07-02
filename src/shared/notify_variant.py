import requests
import logging

logger = logging.getLogger()

def notify_agent_status(notify_endpoint, user_id, project_id, variant_id, variant_type, agent_status):
    notify_agent_payload = {
        "user_id": user_id,
        "project_id": project_id,
        "variant_id": variant_id,
        "variant_type": variant_type,
        "agent_status": agent_status,
    }

    try:
        logger.info(f"Notifying agent status: {notify_agent_payload}")
        requests.post(notify_endpoint, json=notify_agent_payload)
    except requests.exceptions.RequestException as e:
        logger.error(f"Failed to notify agent status: {str(e)}")

def notify_variant_stream(notify_endpoint, user_id, project_id, variant_id, variant_type, stream_data, query_text, variant_creation_status):
    notify_variant_stream_payload = {
        "user_id": user_id,
        "project_id": project_id,
        "variant_id": variant_id,
        "variant_type": variant_type,
        "stream_data": stream_data,
        "query_text": query_text,
        "variant_creation_status": variant_creation_status,
    }

    try:
        logger.info(f"Notifying variant stream: {notify_variant_stream_payload}")
        requests.post(notify_endpoint, json=notify_variant_stream_payload)
    except requests.exceptions.RequestException as e:
        logger.error(f"Failed to notify variant stream: {str(e)}")
