import openai
from functools import lru_cache
from typing import List, Optional
from tqdm import tqdm
from .config import VectorSearchConfig

class EmbeddingService:
    def __init__(self, config: VectorSearchConfig):
        self.config = config
        self.client = openai.OpenAI(api_key=config.OPENAI_API_KEY)

    @lru_cache(maxsize=10000)
    def get_embedding(self, text: str) -> Optional[List[float]]:
        if not text or not text.strip():
            return None
        try:
            response = self.client.embeddings.create(
                input=text,
                model=self.config.EMBEDDING_MODEL
            )
            return response.data[0].embedding
        except Exception as e:
            print(f"Error getting embedding: {e}")
            return None

    def get_embeddings_batch(self, texts: List[str]) -> List[Optional[List[float]]]:
        # OpenAI max batch size is 96 for text-embedding-3-small
        batch_size = self.config.BATCH_SIZE
        results = []
        for i in tqdm(range(0, len(texts), batch_size), desc="Embedding batches"):
            batch = texts[i:i+batch_size]
            try:
                response = self.client.embeddings.create(
                    input=batch,
                    model=self.config.EMBEDDING_MODEL
                )
                batch_embeddings = [item.embedding for item in response.data]
            except Exception as e:
                print(f"Error in batch embedding: {e}")
                batch_embeddings = [None]*len(batch)
            results.extend(batch_embeddings)
        return results
