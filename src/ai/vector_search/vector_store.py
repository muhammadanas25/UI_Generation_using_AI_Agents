from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance, PointStruct, Filter, FieldCondition, MatchValue
from typing import List, Dict, Any, Optional
import uuid
import logging

import uuid
from tqdm import tqdm


QDRANT_URL = "http://52.12.20.4:6333"
class VectorStore:
    def __init__(self, config):
        self.config = config
        try:
            self.client = QdrantClient(url="http://52.12.20.4:6333")
            logging.info(f'<qdrant logs> Connected to Qdrant at {config.QDRANT_URL}')
            
            # Test connection
            collections = self.client.get_collections()
            logging.info(f'<qdrant logs> Available collections: {[c.name for c in collections.collections]}')
            
        except Exception as e:
            logging.error(f'<qdrant logs> Failed to connect to Qdrant: {str(e)}')
            raise
        
        self.collection_name = config.COLLECTION_NAME
        logging.info(f'<qdrant logs> Using collection: {self.collection_name}')
    
    def initialize_collection(self, vector_size: int = 1536):
        try:
            self.client.recreate_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(
                    size=vector_size,
                    distance=Distance.COSINE
                )
            )
            logging.info(f'<qdrant logs> Collection {self.collection_name} initialized with vector size {vector_size}')
        except Exception as e:
            logging.error(f'<qdrant logs> Failed to initialize collection: {str(e)}')
    
    def index_documents(self, documents: List[Dict[str, Any]]):
        points = []
        for doc in documents:
            if 'embedding' not in doc or not doc['embedding']:
                continue
            point = PointStruct(
                id=str(uuid.uuid4()),
                vector=doc['embedding'],
                payload={
                    'variant_id': doc.get('variant_id'),
                    'query_text': doc.get('query_text', ''),
                    'full_prompt': doc.get('full_prompt', ''),
                    'alt_text': doc.get('alt_text', ''),
                    'source': doc.get('source', 'unknown'),
                    'image_url': doc.get('image_url', '')
                }
            )
            points.append(point)
        for i in tqdm(range(0, len(points), self.config.BATCH_SIZE), desc="Indexing documents"):
            batch = points[i:i + self.config.BATCH_SIZE]
            try:
                self.client.upsert(
                    collection_name=self.collection_name,
                    points=batch
                )
                logging.info(f'<qdrant logs> Indexed {len(batch)} documents')
            except Exception as e:
                logging.error(f'<qdrant logs> Failed to index documents: {str(e)}')
                points=batch
            
    
    def search(self, query_embedding: List[float], filters: Optional[Dict] = None, top_k: int = 5) -> List[Dict]:
        query_filter = self._build_filter(filters) if filters else None
        search_result = self.client.search(
            collection_name=self.collection_name,
            query_vector=query_embedding,
            query_filter=query_filter,
            limit=top_k
        )
        print("<qdrant logs> Search results:", search_result)
        # Convert each ScoredPoint to a dict before returning
        return [point.dict() for point in search_result]
    
    def _build_filter(self, filters: Dict) -> Filter:
        must_conditions = []
        for field, value in filters.items():
            must_conditions.append(
                FieldCondition(
                    key=field,
                    match=MatchValue(value=value)
                )
            )
        return Filter(must=must_conditions)


    def ensure_collection(self, vector_size: int = 1536):
        if not self.client.collection_exists(self.collection_name):
            self.client.create_collection(
                self.collection_name,
                vectors_config=VectorParams(size=vector_size, distance=Distance.COSINE)
            )
            logging.info(f"Created Qdrant collection: {self.collection_name}")
        else:
            logging.info(f"Using existing Qdrant collection: {self.collection_name}")
            