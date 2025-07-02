import os
from dotenv import load_dotenv
import logging

# Load environment variables
try:
    load_dotenv()
    QDRANT_PUBLIC_URL = os.getenv("QDRANT_URL")
    logging.info(f'<qdrant logs> Qdrant URL loaded from environment: {QDRANT_PUBLIC_URL}')
    
    # Validate URL
    if not QDRANT_PUBLIC_URL:
        logging.warning('<qdrant logs> QDRANT_URL not found in environment, using default')
        QDRANT_PUBLIC_URL = "http://localhost:6333"
    
except Exception as e:
    logging.error(f'<qdrant logs> Failed to load Qdrant URL from environment: {str(e)}')
class VectorSearchConfig:
    # Get Qdrant URL from environment, with fallback to localhost
    QDRANT_PUBLIC_URL = os.getenv("QDRANT_URL")
    QDRANT_URL = QDRANT_PUBLIC_URL or "http://localhost:6333"
    COLLECTION_NAME = os.getenv("QDRANT_COLLECTION", "ui_descriptions")
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    EMBEDDING_MODEL = os.getenv("OPENAI_EMBEDDING_MODEL", "text-embedding-3-small")
    TOP_K_RESULTS = int(os.getenv("VECTOR_SEARCH_TOP_K", 5))
    BATCH_SIZE = int(os.getenv("VECTOR_SEARCH_BATCH_SIZE", 96))  # OpenAI API max batch is 96
    EMBEDDING_DIM = 1536  # for text-embedding-3-small
