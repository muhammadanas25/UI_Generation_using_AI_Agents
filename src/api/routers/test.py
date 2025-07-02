import os
import logging
from fastapi.responses import HTMLResponse
from fastapi import APIRouter, HTTPException
from shared.s3_handler import S3Handler
from shared.config import GENERATED_IMAGES_BUCKET, REGION_NAME

router = APIRouter()
WEBSOCKET_URL = os.getenv("WEBSOCKET_URL", "ws://localhost:8000")  # Fallback to localhost if not set
html = f"""
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("{WEBSOCKET_URL}/ws/12345678");
            ws.onmessage = function(event) {{
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            }};
            function sendMessage(event) {{
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }}
        </script>
    </body>
</html>
"""


logger = logging.getLogger(__name__)

@router.get("/create_websocket")
async def get():
    # Log that this route was accessed
    logger.info("WebSocket test page accessed")
    return HTMLResponse(html)

@router.post("/upload_image")
async def upload_image(
    image_url: str,
    image_variant_name: str
):
    try:
        # Initialize the S3 handler
        s3_handler = S3Handler(
            bucket_name=GENERATED_IMAGES_BUCKET,
            region_name=REGION_NAME
        )

        # Attempt to download and upload the image
        uploaded_image_url = await s3_handler.download_and_upload_image(
            image_url=image_url,
            image_variant_name=image_variant_name
        )

        # Return the successfully uploaded image URL
        return {"image_url": uploaded_image_url}

    except ValueError as e:
        # Handle cases where invalid values are provided
        raise HTTPException(status_code=400, detail=f"Value error: {str(e)}")

    except ConnectionError as e:
        # Handle issues related to network or connection problems
        raise HTTPException(status_code=503, detail=f"Connection error: {str(e)}")

    except Exception as e:
        # Catch any other unexpected exceptions
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")
