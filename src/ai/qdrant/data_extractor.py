import os
import sys

# Add the project root to the Python path
project_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
if project_root not in sys.path:
    sys.path.append(project_root)

from ai.functions.image_cache import ImageCache
from ai.qdrant.qdrant_server import QdrantIndex
from shared.config import (
    IMAGE_CACHE_TABLE_NAME,
    GENERATED_IMAGES_BUCKET,
    REGION_NAME
)
import boto3
import json
from typing import List, Dict

class DataExtractor:
    def __init__(self):
        self.dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)
        self.table = self.dynamodb.Table(IMAGE_CACHE_TABLE_NAME)
        self.s3 = boto3.client('s3', region_name=REGION_NAME)
        self.qdrant_index = QdrantIndex()

    def get_all_images(self) -> List[Dict]:
        """Get all images from DynamoDB"""
        response = self.table.scan()
        items = response.get('Items', [])
        
        while 'LastEvaluatedKey' in response:
            response = self.table.scan(
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            items.extend(response.get('Items', []))
            
        return items

    def extract_image_metadata(self, item: Dict) -> Dict:
        """Extract metadata from DynamoDB item"""
        return {
            'prompt': item.get('prompt', ''),
            'image_url': item.get('image_url', ''),
            'description': item.get('description', ''),  # Use description if available
            'created_at': item.get('created_at', ''),
            'usage_count': item.get('usage_count', 0),
            'metadata': item.get('metadata', {})
        }

    def populate_qdrant_index(self) -> None:
        """Populate Qdrant index with images from DynamoDB"""
        print("Starting Qdrant index population...")
        
        # Get all images from DynamoDB
        images = self.get_all_images()
        print(f"Found {len(images)} images in DynamoDB")
        
        # Process each image
        for i, image in enumerate(images):
            try:
                metadata = self.extract_image_metadata(image)
                image_url = metadata['image_url']
                description = metadata['description'] or metadata['prompt']  # Use description or fallback to prompt
                
                if image_url:
                    print(f"Processing image {i+1}/{len(images)}: {image_url}")
                    self.qdrant_index.add_image(image_url, description, metadata)
                    
            except Exception as e:
                print(f"Error processing image {i+1}: {e}")
                continue
        
        print("Qdrant index population completed!")

if __name__ == "__main__":
    extractor = DataExtractor()
    extractor.populate_qdrant_index()
