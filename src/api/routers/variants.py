import logging
from typing import List
from fastapi import APIRouter, HTTPException
from api.utils.schemas import NotifyVariant, NotifyAgentStatus, VariantStream
from api.utils.websocket import notify_websocket, notify_websocket_agent_status, notify_websocket_variant_stream
from api.db.dynamodb import get_variant_history

# Create a logger for this module
logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/notify_variant")
async def notify_variant(variant: NotifyVariant):
    """API to notify the user about variant processing via WebSocket."""
    
    logger.info(f"Attempting to notify WebSocket for user {variant.user_id}, project {variant.project_id}, variant {variant.variant_id}")
    
    # Notify WebSocket users
    try:
        success = await notify_websocket(variant.user_id, variant.project_id, variant.variant_id, 
                                         variant.variant_type.value, variant.variant_data, variant.query_text, variant.status.value, variant.variant_creation_status.value, variant.project_status)
        if success:
            logger.info(f"WebSocket notification sent successfully for variant {variant.variant_id} to user {variant.user_id}")
            return {"message": f"WebSocket message sent for variant {variant.variant_id} to user {variant.user_id}"}
        else:
            logger.warning(f"WebSocket connection not found or message could not be sent for variant {variant.variant_id}")
            raise HTTPException(status_code=400, detail="WebSocket connection not found or message could not be sent")
    except Exception as e:
        logger.error(f"Failed to send WebSocket message for variant {variant.variant_id} to user {variant.user_id}: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
    

@router.post("/notify_agent_status")
async def notify_agent_status(variant: NotifyAgentStatus):
    """API to notify the user about agent status via WebSocket."""
    
    logger.info(f"Attempting to notify WebSocket for agent status for user {variant.user_id}, project {variant.project_id}, variant {variant.variant_id}")
    
    # Notify WebSocket users
    try:
        success = await notify_websocket_agent_status(
            user_id=variant.user_id,
            project_id=variant.project_id,
            variant_id=variant.variant_id,
            variant_type=variant.variant_type.value,
            agent_status=variant.agent_status
        )
        if success:
            logger.info(f"WebSocket notification sent successfully for agent status of variant {variant.variant_id} to user {variant.user_id}")
            return {"message": f"WebSocket message sent for agent status of variant {variant.variant_id} to user {variant.user_id}"}
        else:
            logger.warning(f"WebSocket connection not found or message could not be sent for agent status of variant {variant.variant_id}")
            raise HTTPException(status_code=400, detail="WebSocket connection not found or message could not be sent")
    except Exception as e:
        logger.error(f"Failed to send WebSocket message for agent status of variant {variant.variant_id} to user {variant.user_id}: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.post("/notify_variant_stream")
async def notify_variant_stream(variant: VariantStream):
    """API to notify the user about variant stream via WebSocket."""
    
    logger.info(f"Attempting to notify WebSocket for variant stream for user {variant.user_id}, project {variant.project_id}, variant {variant.variant_id}")
    
    try:
        success = await notify_websocket_variant_stream(
            user_id=variant.user_id,
            project_id=variant.project_id,
            variant_id=variant.variant_id,
            variant_type=variant.variant_type.value,
            stream_data=variant.stream_data,
            query_text=variant.query_text,
            variant_creation_status=variant.variant_creation_status.value
        )
        if success:
            logger.info(f"WebSocket notification sent successfully for variant stream of variant {variant.variant_id} to user {variant.user_id}")
            return {"message": f"WebSocket message sent for variant stream of variant {variant.variant_id} to user {variant.user_id}"}
        else:
            logger.warning(f"WebSocket connection not found or message could not be sent for variant stream of variant {variant.variant_id}")
            raise HTTPException(status_code=400, detail="WebSocket connection not found or message could not be sent")
    except Exception as e:
        logger.error(f"Failed to send WebSocket message for variant stream of variant {variant.variant_id} to user {variant.user_id}: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@router.get("/variant_history", response_model=List[dict])
def variant_history_endpoint(user_id: str, project_id: str, variant_type: str):
    """
    API endpoint to retrieve the history of variants for a user and project.
    
    :param user_id: The user's identifier.
    :param project_id: The project's identifier.
    :param variant_type: The type of the variants to retrieve.
    :return: A list of variants in ascending order.
    """
    variant_history = get_variant_history(user_id, project_id, variant_type)
    
    if not variant_history:
        raise HTTPException(status_code=404, detail="No variant history found or user mismatch.")
    
    return variant_history