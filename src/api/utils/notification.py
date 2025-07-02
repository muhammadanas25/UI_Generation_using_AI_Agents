import requests
import logging
from ai.functions.jsx_stream_fixer import fix_streaming_jsx_issues

logger = logging.getLogger()

def fix_final_jsx_for_frontend(variant_data):
    """
    Fix JSX issues in the final variant data before sending to frontend.
    This prevents React parsing errors that cause frontend reloading.
    """
    if not variant_data or not isinstance(variant_data, dict):
        return variant_data
    
    tsx_content = variant_data.get('tsx', '')
    if not tsx_content:
        return variant_data
    
    try:
        # Apply JSX fixes to the final code
        fixed_tsx = fix_streaming_jsx_issues(tsx_content)
        
        # Only update if fixes were actually applied
        if fixed_tsx != tsx_content:
            logger.info(f"<FINAL_JSX_FIX> Applied fixes to final variant code")
            variant_data = variant_data.copy()  # Don't modify original
            variant_data['tsx'] = fixed_tsx
        
        return variant_data
        
    except Exception as e:
        logger.error(f"<FINAL_JSX_FIX> Error fixing final JSX: {str(e)}")
        return variant_data

def notify_variant(notify_endpoint, user_id, project_id, variant_id, variant_data, query_text, variant_type, variant_status, variant_creation_status, status=None):
    # Fix JSX issues in final code before sending to frontend (main websocket)
    if variant_status == "completed" and variant_creation_status == "DONE":
        variant_data = fix_final_jsx_for_frontend(variant_data)
    
    notify_payload = {
        "user_id": user_id,
        "project_id": project_id,
        "variant_id": variant_id,
        "variant_data": variant_data,
        "query_text": query_text,
        "variant_type": variant_type,
        "status": variant_status,
        "variant_creation_status": variant_creation_status
    }
    
    # Include status if provided
    if status is not None:
        notify_payload["status"] = status

    # Add detailed logging for completed status updates
    if variant_status == "completed":
        logger.info(f"🔔 WEBSOCKET_NOTIFICATION: Sending VARIANT COMPLETED status for variant_id={variant_id}, project_id={project_id}, user_id={user_id}, variant_type={variant_type}")
    
    if status == "completed":
        logger.info(f"🎉 WEBSOCKET_NOTIFICATION: Sending PROJECT COMPLETED status for project_id={project_id}, user_id={user_id}")
        logger.info(f"🎉 PROJECT_COMPLETION_DETAILS: All variants completed, notifying frontend via websocket")

    try:
        logger.info(f"Notifying variant: {notify_payload}")
        response = requests.post(notify_endpoint, json=notify_payload)
        
        # Log successful websocket notification
        if variant_status == "completed" or status == "completed":
            logger.info(f"✅ WEBSOCKET_SENT: Successfully sent completion notification - variant_status={variant_status}, status={status}")
            
    except requests.exceptions.RequestException as e:
        logger.error(f"❌ WEBSOCKET_FAILED: Failed to notify variant completion - {str(e)}")
        if variant_status == "completed":
            logger.error(f"❌ VARIANT_COMPLETION_FAILED: Could not notify frontend of variant completion for variant_id={variant_id}")
        if status == "completed":
            logger.error(f"❌ PROJECT_COMPLETION_FAILED: Could not notify frontend of project completion for project_id={project_id}")
