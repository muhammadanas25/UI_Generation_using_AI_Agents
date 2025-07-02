import sys
import os
import logging
from typing import List, Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Qdrant client setup
QDRANT_URL = "http://52.12.20.4:6333"
COLLECTION_NAME = "ui_descriptions"  # Adjust if your collection has a different name

def test_qdrant_connection():
    """Test basic connection to Qdrant server."""
    from qdrant_client import QdrantClient
    
    try:
        client = QdrantClient(url=QDRANT_URL)
        collections = client.get_collections()
        logger.info(f"✅ Successfully connected to Qdrant at {QDRANT_URL}")
        logger.info(f"Available collections: {[c.name for c in collections.collections]}")
        return client
    except Exception as e:
        logger.error(f"❌ Failed to connect to Qdrant: {e}")
        raise

def search_similar_vectors(query_text: str, top_k: int = 3) -> List[Dict[str, Any]]:
    """
    Search for similar vectors in Qdrant.
    
    Args:
        query_text: The text to search for
        top_k: Number of results to return
        
    Returns:
        List of matching documents with scores
    """
    from qdrant_client import QdrantClient
    from openai import OpenAI
    import os

    # Initialize clients
    qdrant_client = QdrantClient(url=QDRANT_URL)
    openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
    # Generate embedding for the query
    try:
        response = openai_client.embeddings.create(
            input=query_text,
            model="text-embedding-3-small"
        )
        query_embedding = response.data[0].embedding
        
        # Search in Qdrant
        search_results = qdrant_client.search(
            collection_name=COLLECTION_NAME,
            query_vector=query_embedding,
            limit=top_k
        )
        
        # Format results
        results = []
        for hit in search_results:
            result = {
                "id": hit.id,
                "score": hit.score,
                **hit.payload  # Include all payload fields
            }
            results.append(result)
            
        return results
        
    except Exception as e:
        logger.error(f"Error during search: {e}")
        return []

def test_search_workflow():
    """Test the complete search workflow."""
    # Test connection first
    test_qdrant_connection()
    
    # Test search with sample queries
    test_queries = [
        "login form with logo",
        "user profile page",
        "shopping cart interface"
    ]
    
    for query in test_queries:
        logger.info(f"\n{'='*50}")
        logger.info(f"Searching for: {query}")
        
        results = search_similar_vectors(query)
        
        if not results:
            logger.warning(f"No results found for query: {query}")
            continue
            
        logger.info(f"Found {len(results)} results:")
        for i, result in enumerate(results, 1):
            logger.info(f"\n--- Result {i} (Score: {result.get('score', 0):.3f}) ---")
            for key, value in result.items():
                if key != 'score':
                    logger.info(f"{key}: {value}")

if __name__ == "__main__":
    test_search_workflow()