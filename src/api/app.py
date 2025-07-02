import logging
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI, WebSocket
from api.routers import project, variants, test
from api.utils.websocket import websocket_endpoint, variant_stream_websocket_endpoint
from fastapi.middleware.cors import CORSMiddleware
from api.utils.logging_setup import setup_logging
from api.utils.websocket import get_redis, set_redis_connection


app = FastAPI()
logger = logging.getLogger(__name__)
origins = [
    "https://staging-akira.droxlab.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

setup_logging()
app.include_router(project.router, prefix="/projects", tags=["projects"])
app.include_router(variants.router, prefix="/variants", tags=["variants"])
app.include_router(test.router, prefix="/test", tags=["test"])

@app.websocket("/ws/{user_id}")
async def ws_endpoint(websocket: WebSocket, user_id: str):
    logger.info(f"User {user_id} is attempting to connect to the WebSocket.")
    await websocket_endpoint(websocket, user_id)

@app.websocket("/ws/{user_id}/variant_stream")
async def ws_variant_stream(websocket: WebSocket, user_id: str):
    logger.info(f"User {user_id} is attempting to connect to the variant stream WebSocket.")
    await variant_stream_websocket_endpoint(websocket, user_id)

@app.on_event("startup")
async def startup_event():
    app.state.redis = await get_redis()
    await set_redis_connection(app.state.redis)  # Set the Redis connection
    logger.info("Application startup complete.")

@app.on_event("shutdown")
async def shutdown_event():
    await app.state.redis.close()
    logger.info("Application shutdown complete.")
