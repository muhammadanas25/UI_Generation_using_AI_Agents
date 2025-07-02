import logging
import json
import uuid
import aioredis
from fastapi import WebSocket
from starlette.websockets import WebSocketDisconnect
from enum import Enum

# Dictionary to store WebSocket connections for users
# Format: {user_id: {connection_id: websocket}}
websocket_connections = {}

logger = logging.getLogger(__name__)

redis = None  # Global Redis variable

async def set_redis_connection(redis_instance):
    """Set the global Redis connection."""
    global redis
    redis = redis_instance

async def get_redis():
    """Initialize and return a Redis connection."""
    redis = await aioredis.from_url("redis://redis:6379")
    await redis.flushall()  
    return redis

class WEBSOCKET_MESSAGE_TYPE(Enum):
    """Enum for WebSocket message types."""
    VARIANT_UPDATE = "variant_update"
    AGENT_STATUS = "agent_status"

async def handle_websocket_connection(websocket: WebSocket, user_id: str, channel_suffix: str, welcome_message: str):
    """Helper function to handle WebSocket connections.
    
    Args:
        websocket: The WebSocket connection
        user_id: The user's unique identifier
        channel_suffix: Suffix for the Redis channel name
        welcome_message: Message to send upon successful connection
    """
    # Generate a unique connection ID
    connection_id = str(uuid.uuid4())
    
    await websocket.accept()
    
    # Initialize user's connections dictionary if not exists
    if user_id not in websocket_connections:
        websocket_connections[user_id] = {}
    
    # Store WebSocket connection for the user with unique connection ID
    websocket_connections[user_id][connection_id] = websocket
    
    # Increment connection counter in Redis
    await redis.incr(f"ws_user_id:{user_id}")
    
    logger.info(f"WebSocket connected for user: {user_id}, connection ID: {connection_id}")
    await websocket.send_text(welcome_message)

    # Redis channel for the user
    channel_name = f"user_channel:{user_id}{channel_suffix}"
    pubsub = redis.pubsub()  # Create a PubSub object
    await pubsub.subscribe(channel_name)  # Subscribe to the user's channel

    logger.info(f"Created and subscribed to redis channel for user with id: {user_id} channel: {channel_name}")

    try:
        while True:
            # Only listen for Redis messages
            message = await pubsub.get_message(ignore_subscribe_messages=True)  # Non-blocking call
            if message and message['type'] == 'message':
                # Send message to WebSocket
                await websocket.send_text(message['data'].decode('utf-8'))  # Convert bytes to string
                logger.info(f"Sent WebSocket message to {user_id} (connection: {connection_id}): {message['data']}")

    except WebSocketDisconnect as e:
        logger.info(f"WebSocket disconnected for user: {user_id}, connection: {connection_id}, code: {e.code}, reason: {e.reason}, exception: {e}")
    except Exception as e:
        # Ensure WebSocket is properly closed if not already
        if not websocket.client_state.closed:
            await websocket.close()
        logger.error(f"Error occurred for user {user_id}, connection: {connection_id}: {e}")
    finally:
        # Cleanup for this specific connection
        await cleanup_connection(user_id, connection_id, pubsub, channel_name)

async def websocket_endpoint(websocket: WebSocket, user_id: str):
    """Handle WebSocket connections for a user."""
    logger.info(f"User {user_id} is attempting to connect to the WebSocket.")
    await handle_websocket_connection(
        websocket=websocket,
        user_id=user_id,
        channel_suffix="",
        welcome_message="Welcome! You are now connected."
    )

async def variant_stream_websocket_endpoint(websocket: WebSocket, user_id: str):
    """Handle WebSocket connections for variant streaming."""
    logger.info(f"User {user_id} is attempting to connect to the variant stream WebSocket.")
    await handle_websocket_connection(
        websocket=websocket,
        user_id=user_id,
        channel_suffix=":variant_stream",
        welcome_message="Welcome! You are now connected to the variant stream."
    )

async def cleanup_connection(user_id: str, connection_id: str, pubsub, channel_name: str):
    """Clean up resources when a connection is closed.
    
    Args:
        user_id: The user's unique identifier
        connection_id: The unique connection identifier
        pubsub: The Redis PubSub object
        channel_name: The Redis channel name
    """
    try:
        # Remove this specific connection
        if user_id in websocket_connections and connection_id in websocket_connections[user_id]:
            del websocket_connections[user_id][connection_id]
            
            # If this was the last connection for this user, clean up the user entry
            if not websocket_connections[user_id]:
                del websocket_connections[user_id]
        
        # Decrement connection counter in Redis
        connections_count = await redis.decr(f"ws_user_id:{user_id}")
        
        # If counter reaches 0, clean up Redis resources
        if connections_count <= 0:
            # Ensure counter is exactly 0 (in case of race conditions)
            await redis.delete(f"ws_user_id:{user_id}")
            
            # Unsubscribe and close PubSub if this was the last connection
            if channel_name in pubsub.channels.keys():
                await pubsub.unsubscribe(channel_name)
            await pubsub.close()
            
            logger.info(f"Removed all WebSocket connections and Redis resources for user: {user_id}")
        else:
            # If other connections exist, just close this pubsub
            if channel_name in pubsub.channels.keys():
                await pubsub.unsubscribe(channel_name)
            await pubsub.close()
            
            logger.info(f"Removed WebSocket connection {connection_id} for user: {user_id}, {connections_count} connections remaining")
    
    except Exception as cleanup_error:
        logger.error(f"Error during connection cleanup for user {user_id}, connection {connection_id}: {cleanup_error}")

async def notify_websocket(user_id: str, project_id: str, variant_id: str, variant_type: str, variant_data: dict, query_text: str, status: str, variant_creation_status: str, project_status: str = None) -> bool:
    """Send a message to all WebSocket connections for a user.
    
    Args:
        user_id: The user's unique identifier
        project_id: The project identifier
        variant_id: The variant identifier
        variant_type: The type of variant
        variant_data: The variant data
        query_text: The query text
        status: The status of the variant
        variant_creation_status: The creation status of the variant
        project_status: The status of the project (optional)
        
    Returns:
        bool: True if message was sent successfully, False otherwise
    """
    logger.info(f"Received request to notify websocket of variant update or creation for user with id: {user_id}")
    
    # Check if the user has any active WebSocket connections
    connections_count = await redis.get(f"ws_user_id:{user_id}")
    
    if connections_count and int(connections_count) > 0:
        logger.info(f"Found {connections_count} active websocket connection(s) for user with id: {user_id}")
        
        try:
            message_payload = {
                "type": WEBSOCKET_MESSAGE_TYPE.VARIANT_UPDATE.value,
                "variant_id": variant_id,
                "variant_type": variant_type,
                "variant_data": variant_data,
                "query_text": query_text,
                "project_id": project_id,
                "status": status,
                "variant_creation_status": variant_creation_status
            }
            
            # Include project_status if provided
            if project_status is not None:
                message_payload["project_status"] = project_status
            
            message_json = json.dumps(message_payload)
            
            # Publish message to the Redis channel
            await redis.publish(f"user_channel:{user_id}", message_json)
            logger.info(f"Published message for user {user_id}: {message_payload}")
            return True
        except Exception as e:
            logger.error(f"Error sending WebSocket message to {user_id}: {str(e)}")
            return False
    else:
        logger.warning(f"No active WebSocket connections found for user: {user_id}")
        return False
    

async def notify_websocket_agent_status(user_id: str, project_id: str, variant_id: str, variant_type: str, agent_status: str) -> bool:
    """Send a message to all WebSocket connections for a user regarding agent status.
    
    Args:
        user_id: The user's unique identifier
        project_id: The project identifier
        variant_id: The variant identifier
        variant_type: The type of variant
        agent_status: The status of the agent
        
    Returns:
        bool: True if message was sent successfully, False otherwise
    """
    logger.info(f"Received request to notify websocket of agent status for user with id: {user_id}")
    
    # Check if the user has any active WebSocket connections
    connections_count = await redis.get(f"ws_user_id:{user_id}")
    
    if connections_count and int(connections_count) > 0:
        logger.info(f"Found {connections_count} active websocket connection(s) for user with id: {user_id}")
        
        try:
            message_payload = {
                "type": WEBSOCKET_MESSAGE_TYPE.AGENT_STATUS.value,
                "variant_id": variant_id,
                "variant_type": variant_type,
                "agent_status": agent_status,
                "project_id": project_id
            }
            message_json = json.dumps(message_payload)
            
            # Publish message to the Redis channel
            await redis.publish(f"user_channel:{user_id}", message_json)
            logger.info(f"Published agent status message for user {user_id}: {message_payload}")
            return True
        except Exception as e:
            logger.error(f"Error sending WebSocket agent status message to {user_id}: {str(e)}")
            return False
    else:
        logger.warning(f"No active WebSocket connections found for user: {user_id}")
        return False

async def notify_websocket_variant_stream(user_id: str, project_id: str, variant_id: str, variant_type: str, stream_data: dict, query_text: str, variant_creation_status: str) -> bool:
    """Send a message to all WebSocket connections for a user regarding variant streaming.
    
    Args:
        user_id: The user's unique identifier
        project_id: The project identifier
        variant_id: The variant identifier
        variant_type: The type of variant
        stream_data: The variant data to be streamed
        query_text: The query text
        variant_creation_status: The creation status of the variant
        
    Returns:
        bool: True if message was sent successfully, False otherwise
    """
    logger.info(f"Received request to notify websocket of variant stream for user with id: {user_id}")
    
    # Check if the user has any active WebSocket connections
    connections_count = await redis.get(f"ws_user_id:{user_id}")
    
    if connections_count and int(connections_count) > 0:
        logger.info(f"Found {connections_count} active websocket connection(s) for user with id: {user_id}")
        
        try:
            message_payload = {
                "project_id": project_id,
                "variant_id": variant_id,
                "variant_type": variant_type,
                "query_text": query_text,
                "stream_data": stream_data,
                "variant_creation_status": variant_creation_status,
            }
            message_json = json.dumps(message_payload)
            
            # Publish message to the Redis channel
            await redis.publish(f"user_channel:{user_id}:variant_stream", message_json)
            logger.info(f"Published variant stream message for user {user_id}: {message_payload}")
            return True
        except Exception as e:
            logger.error(f"Error sending WebSocket variant stream message to {user_id}: {str(e)}")
            return False
    else:
        logger.warning(f"No active WebSocket connections found for user: {user_id}")
        return False

