import pandas as pd
from typing import List, Dict, Any
from tqdm import tqdm

class DocumentProcessor:
    def __init__(self, embedding_service):
        self.embedding_service = embedding_service
    
    def prepare_documents(self, csv_path: str) -> List[Dict[str, Any]]:
        df = pd.read_csv(csv_path)
        documents = []
        for _, row in tqdm(df.iterrows(), total=len(df), desc="Preparing documents"):
            if not all(k in row for k in ['variant_id', 'query_text', 'full_prompt', 'alt_text']):
                continue
            text = self._combine_fields(row)
            documents.append({
                'variant_id': row['variant_id'],
                'query_text': row['query_text'],
                'full_prompt': row['full_prompt'],
                'alt_text': row['alt_text'],
                'source': row.get('source', 'unknown'),
                'image_url': row.get('image_url', ''),
                'text_for_embedding': text
            })
        return documents
    
    def _combine_fields(self, row: pd.Series) -> str:
        return f"""
        Context: {row['full_prompt']}
        Description: {row['alt_text']}
        """
    
    def add_embeddings(self, documents: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        texts = [doc['text_for_embedding'] for doc in documents]
        embeddings = self.embedding_service.get_embeddings_batch(texts)
        for doc, emb in zip(documents, embeddings):
            doc['embedding'] = emb
        return [doc for doc in documents if doc.get('embedding')]
