import os
import sys
import hashlib
import json
import numpy as np
from typing import Dict, List, Optional, Tuple

# Add the project root to the Python path
project_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

print(project_root)
#sys.path.append(project_root)

from shared.dynamodb_handler import DynamoDBHandler
from shared.s3_handler import S3Handler
from shared.config import (
    GENERATED_IMAGES_BUCKET,
    REGION_NAME,
    IMAGE_CACHE_TABLE_NAME
)
from ai.memory.blackboard.Blackboard import BlackBoard
from ai.qdrant.qdrant_server import QdrantIndex

class ImageCache:
    def __init__(self):
        
        
        self.dynamodb = DynamoDBHandler()
        self.s3 = S3Handler(bucket_name='GENERATED_IMAGES_BUCKET', region_name=REGION_NAME)
        self.cache = {}  # In-memory cache for frequently accessed images
        self.qdrant_index = QdrantIndex()
        
        # Load existing Qdrant index
        try:
            # Check if collection exists
            self.qdrant_index.client.get_collection(self.qdrant_index.collection_name)
        except Exception as e:
            print(f"Warning: Could not load Qdrant index: {e}")

    def _get_prompt_hash(self, prompt: str) -> str:
        """Generate a consistent hash for the prompt"""
        return hashlib.sha256(prompt.encode()).hexdigest()

    def _generate_similarity_vector(self, image_url: str) -> np.ndarray:
        """Generate a vector representation of the image for similarity search"""
        # TODO: Implement image vector generation using a pre-trained model
        # This could be done using CLIP or a similar model
        return np.zeros(512)  # Placeholder

    async def get_cached_image(self, prompt: str) -> Optional[str]:
        """Get a cached image for the given prompt"""
        prompt_hash = self._get_prompt_hash(prompt)
        
        # Check in-memory cache first
        if prompt_hash in self.cache:
            return self.cache[prompt_hash]

        # Check DynamoDB
        try:
            item = await self.dynamodb.get_item(
                table_name=IMAGE_CACHE_TABLE_NAME,
                key={'prompt_hash': prompt_hash}
            )
            
            if item:
                image_url = item.get('image_url')
                self.cache[prompt_hash] = image_url
                return image_url
                
        except Exception as e:
            print(f"Error getting cached image: {e}")
            
        return None

    async def find_similar_image(self, prompt: str) -> Optional[str]:
        """Find a similar image based on description"""
        try:
            # Search for similar images in Qdrant using the prompt as description
            similar_images = self.qdrant_index.search_similar_images(prompt, k=3)
            
            if similar_images:
                # Return the most similar image
                return similar_images[0].get('image_url')
                
        except Exception as e:
            print(f"Error finding similar image: {e}")
            
        return None

    async def cache_image(self, prompt: str, image_url: str, metadata: Dict = None) -> None:
        """Cache a new image with its description"""
        prompt_hash = self._get_prompt_hash(prompt)
        
        item = {
            'prompt_hash': prompt_hash,
            'image_url': image_url,
            'created_at': str(datetime.now()),
            'usage_count': 1,
            'metadata': metadata or {}
        }
        
        try:
            # Add to DynamoDB
            await self.dynamodb.put_item(
                table_name=IMAGE_CACHE_TABLE_NAME,
                item=item
            )
            
            # Add to in-memory cache
            self.cache[prompt_hash] = image_url
            
            # Add to Qdrant index with prompt as description
            self.qdrant_index.add_image(image_url, prompt, item)
            
        except Exception as e:
            print(f"Error caching image: {e}")

    async def increment_usage(self, prompt: str) -> None:
        """Increment the usage count for a cached image"""
        prompt_hash = self._get_prompt_hash(prompt)
        try:
            await self.dynamodb.update_item(
                table_name=IMAGE_CACHE_TABLE_NAME,
                key={'prompt_hash': prompt_hash},
                update_expression='SET usage_count = usage_count + :val',
                expression_attribute_values={':val': 1}
            )
        except Exception as e:
            print(f"Error incrementing usage count: {e}")

    async def cleanup_old_images(self, days_old: int = 30) -> None:
        """Remove old images that haven't been used recently"""
        # TODO: Implement cleanup logic
        pass

    async def get_most_used_images(self, limit: int = 10) -> List[Dict]:
        """Get the most frequently used images"""
        # TODO: Implement query to get most used images
        return []
