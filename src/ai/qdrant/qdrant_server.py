from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams
import numpy as np
import json
import os
from typing import List, Dict, Optional
import openai
from shared.config import OPENAI_API_KEY, GENERATED_IMAGES_BUCKET, REGION_NAME
from shared.s3_handler import S3Handler

class QdrantIndex:
    def __init__(self, host: str = "localhost", port: int = 6333):
        self.client = QdrantClient(host=host, port=port)
        self.s3 = S3Handler(bucket_name=GENERATED_IMAGES_BUCKET, region_name=REGION_NAME)
        self.collection_name = "image_descriptions"
        
        # Initialize OpenAI client
        openai.api_key = OPENAI_API_KEY
        
        # Create collection if it doesn't exist
        self._create_collection()

    def _create_collection(self) -> None:
        """Create the Qdrant collection if it doesn't exist"""
        try:
            self.client.get_collection(self.collection_name)
        except Exception:
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(size=1536, distance=Distance.COSINE)
            )

    def generate_embedding(self, text: str) -> np.ndarray:
        """Generate embedding for text using OpenAI's embedding model"""
        try:
            response = openai.Embedding.create(
                model="text-embedding-ada-002",
                input=text
            )
            
            embedding = np.array(response.data[0].embedding)
            return embedding
            
        except Exception as e:
            print(f"Error generating embedding: {e}")
            return np.zeros(1536)

    def add_image(self, image_url: str, description: str, metadata: Dict) -> None:
        """Add an image to the collection with its description"""
        try:
            embedding = self.generate_embedding(description)
            
            # Add to Qdrant
            self.client.upsert(
                collection_name=self.collection_name,
                points=[{
                    'id': metadata['prompt_hash'],
                    'vector': embedding.tolist(),
                    'payload': {
                        **metadata,
                        'description': description
                    }
                }]
            )
            
        except Exception as e:
            print(f"Error adding image: {e}")

    def search_similar_images(self, query_description: str, k: int = 5) -> List[Dict]:
        """Search for similar images based on description"""
        try:
            query_embedding = self.generate_embedding(query_description)
            
            # Search in Qdrant
            results = self.client.search(
                collection_name=self.collection_name,
                query_vector=query_embedding.tolist(),
                limit=k
            )
            
            return [result.payload for result in results]
            
        except Exception as e:
            print(f"Error searching similar images: {e}")
            return []

    def get_image_by_id(self, image_id: str) -> Optional[Dict]:
        """Get image by ID"""
        try:
            result = self.client.retrieve(
                collection_name=self.collection_name,
                ids=[image_id]
            )
            
            if result:
                return result[0].payload
            
        except Exception as e:
            print(f"Error getting image: {e}")
            
        return None

if __name__ == "__main__":
    # Initialize Qdrant server
    host = os.getenv('QDRANT_HOST', 'localhost')
    port = int(os.getenv('QDRANT_PORT', 6333))
    
    index = QdrantIndex(host=host, port=port)
    
    # Start server (implement your preferred server framework here)
    # For now, we'll just keep the process running
    while True:
        pass
