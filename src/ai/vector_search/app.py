import os
import argparse
import logging
from dotenv import load_dotenv
from .config import VectorSearchConfig
from .embedding_service import EmbeddingService
from .vector_store import VectorStore
from .document_processor import DocumentProcessor

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

class VectorSearchApp:
    def __init__(self):
        self.config = VectorSearchConfig()
        self.embedding_service = EmbeddingService(self.config)
        self.vector_store = VectorStore(self.config)
        self.document_processor = DocumentProcessor(self.embedding_service)
    
    def initialize_database(self):
        logging.info("<qdrant logs>Initializing vector database...")
        self.vector_store.initialize_collection(vector_size=self.config.EMBEDDING_DIM)
        logging.info("<qdrant logs> Database initialized successfully.")
    
    def index_csv(self, csv_path: str):
        logging.info(f"<qdrant logs> Processing CSV file: {csv_path}")
        self.vector_store.ensure_collection(vector_size=self.config.EMBEDDING_DIM)
        documents = self.document_processor.prepare_documents(csv_path)
        logging.info(f"<qdrant logs> Loaded {len(documents)} documents")
        documents_with_embeddings = self.document_processor.add_embeddings(documents)
        logging.info(f"<qdrant logs> Generated embeddings for {len(documents_with_embeddings)} documents")
        self.vector_store.index_documents(documents_with_embeddings)
        logging.info("Documents indexed successfully.")
    
    def search(self, query: str, top_k: int = 5, filters=None, score_threshold: float = 0.55):
        try:
            logging.info(f"<qdrant logs> Searching for: {query}")
            query_embedding = self.embedding_service.get_embedding(query)
            
            if not query_embedding:
                logging.error("<qdrant logs> Failed to generate query embedding")
                return []
            
            logging.info("<qdrant logs> Generated query embedding")
            
            # Get search results
            results = self.vector_store.search(
                query_embedding=query_embedding,
                filters=filters,
                top_k=top_k
            )
            
            if not results:
                logging.info("<qdrant logs> No results found")
                return []
            
            # Process results
            formatted_results = []
            for hit in results:
                result = {
                    "variant_id": hit['payload'].get("variant_id"),
                    "image_url": hit['payload'].get("image_url"),
                    "alt_text": hit['payload'].get("alt_text"),
                    "score": hit['score']
                }
                formatted_results.append(result)
            
            logging.info(f"<qdrant logs> Found {len(formatted_results)} results")
            
            # Apply scoring threshold
            if score_threshold is not None:
                filtered = [r for r in formatted_results if r['score'] >= score_threshold]
                logging.info(f"<qdrant logs> Filtered {len(filtered)} results above threshold {score_threshold}")
                return filtered
            
            return formatted_results
            
        except Exception as e:
            logging.error(f"<qdrant logs> Error during search: {str(e)}")
            return []

def main():
    load_dotenv()
    if not os.getenv("OPENAI_API_KEY"):
        logging.error("OPENAI_API_KEY environment variable not set")
        return
    parser = argparse.ArgumentParser(description="Vector Search for UI Components")
    subparsers = parser.add_subparsers(dest="command", required=True)
    init_parser = subparsers.add_parser("init", help="Initialize the vector database")
    index_parser = subparsers.add_parser("index", help="Index a CSV file")
    index_parser.add_argument("csv_path", help="Path to the CSV file to index")
    search_parser = subparsers.add_parser("search", help="Search the vector database")
    search_parser.add_argument("query", help="Search query")
    search_parser.add_argument("--top-k", type=int, default=5, help="Number of results to return")
    search_parser.add_argument("--score-threshold", type=float, default=None, help="Score threshold for matches")
    args = parser.parse_args()
    app = VectorSearchApp()
    if args.command == "init":
        app.initialize_database()
    elif args.command == "index":
        app.index_csv(args.csv_path)
    elif args.command == "search":
        results = app.search(args.query, top_k=args.top_k, score_threshold=args.score_threshold)
        logging.info(f"\nFound {len(results)} results:")
        for i, result in enumerate(results, 1):
            print(f"\n--- Result {i} (Score: {result['score']:.3f}) ---")
            print(f"Query: {result['query_text']}")
            print(f"Description: {result['alt_text']}")
            print(f"Source: {result['source']}")
            if result['image_url']:
                print(f"Image URL: {result['image_url']}")
if __name__ == "__main__":
    main()            # Always print S3 Key for local testing
