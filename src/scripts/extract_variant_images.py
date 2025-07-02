import boto3
import re
import json
import csv
from typing import List, Dict, Optional, Tuple
from urllib.parse import urlparse
from collections import defaultdict

# Initialize DynamoDB client
dynamodb = boto3.client('dynamodb', region_name='us-west-2')

def extract_image_info(html_content: str) -> List[Dict[str, str]]:
    """Extract image URLs and alt texts from HTML/TSX content"""
    if not html_content:
        return []
    
    results = []
    
    # Pattern for HTML/TSX img tags
    img_pattern = r'<img[^>]*src=["\'](https?://[^"\']+)["\'][^>]*alt=["\']([^"\']*)["\']'
    
    # Find all matches in the content
    matches = re.finditer(img_pattern, html_content)
    
    for match in matches:
        results.append({
            'image_url': match.group(1),
            'alt_text': match.group(2),
            'source': 'img_tag'
        })
    
    # Pattern for JSX/TSX image objects (common in React)
    img_obj_pattern = r'(?:src|image|url)[\s\n]*:[\s\n]*["\'](https?://[^"\']+)["\'][\s\n]*(?:,[^}]*alt[\s\n]*:[\s\n]*["\']([^"\']*)["\']|,[^}]*altText[\s\n]*:[\s\n]*["\']([^"\']*)["\'])?'
    
    # Find all JSX/TSX image objects
    obj_matches = re.finditer(img_obj_pattern, html_content, re.DOTALL)
    
    for match in obj_matches:
        alt_text = match.group(2) or match.group(3) or ''
        results.append({
            'image_url': match.group(1),
            'alt_text': alt_text,
            'source': 'jsx_object'
        })
    
    return results

def extract_from_tsx(tsx_content: str) -> List[Dict[str, str]]:
    """Extract image information from TSX content"""
    if not tsx_content:
        return []
    
    results = []
    
    # Extract image URLs and alt texts from JSX/TSX code
    # This pattern looks for image URLs in JSX props
    jsx_pattern = r'(?:src|image|url)[\s\n]*=[\s\n]*["\'](https?://[^"\']+)["\'][\s\n]*(?:alt[\s\n]*=[\s\n]*["\']([^"\']*)["\']|altText[\s\n]*=[\s\n]*["\']([^"\']*)["\'])?'
    
    matches = re.finditer(jsx_pattern, tsx_content, re.DOTALL)
    
    for match in matches:
        alt_text = match.group(2) or match.group(3) or ''
        results.append({
            'image_url': match.group(1),
            'alt_text': alt_text,
            'source': 'tsx_props'
        })
    
    # Also look for image URLs in string literals that might be used in the code
    url_pattern = r'["\'](https?://[^"\']+\.(?:jpg|jpeg|png|gif|webp))["\']'
    url_matches = re.finditer(url_pattern, tsx_content, re.IGNORECASE)
    
    for match in url_matches:
        # Skip if this URL was already captured by other patterns
        if not any(img['image_url'] == match.group(1) for img in results):
            results.append({
                'image_url': match.group(1),
                'alt_text': '',
                'source': 'url_literal'
            })
    
    return results

def get_variant(variant_id: str) -> Optional[Dict]:
    """Get a single variant by ID"""
    try:
        response = dynamodb.get_item(
            TableName='Tars-Explorer-Variants',
            Key={'variant_id': {'S': variant_id}}
        )
        return response.get('Item')
    except Exception as e:
        print(f"Error getting variant {variant_id}: {e}")
        return None

def get_conversation_history(variant_id: str, variant_map: Dict) -> Tuple[str, List[Dict]]:
    """Get full conversation history by following previous_variant_id"""
    history = []
    seen = set()
    current_id = variant_id
    
    while current_id and current_id not in seen:
        seen.add(current_id)
        variant = variant_map.get(current_id)
        if not variant:
            break
            
        # Add to history (newest first)
        history.insert(0, {
            'variant_id': current_id,
            'query_text': variant.get('query_text', {}).get('S', '')
        })
        
        # Move to previous variant
        current_id = variant.get('previous_variant_id', {}).get('S', '')
    
    # Join all query texts with a delimiter
    full_prompt = " ||| ".join([item['query_text'] for item in history])
    return full_prompt, history

def scan_variants_table() -> Tuple[List[Dict], Dict]:
    """Scan the Tars-Explorer-Variant table and process each item"""
    table_name = 'Tars-Explorer-Variants'
    items = []
    variant_map = {}
    last_evaluated_key = None
    
    print(f"Scanning table {table_name}...")
    
    # First pass: Build a map of all variants
    while True:
        if last_evaluated_key:
            response = dynamodb.scan(
                TableName=table_name,
                ExclusiveStartKey=last_evaluated_key
            )
        else:
            response = dynamodb.scan(TableName=table_name)
        
        # Store all variants in a map for easy lookup
        for item in response.get('Items', []):
            variant_id = item.get('variant_id', {}).get('S')
            if variant_id:
                variant_map[variant_id] = item
        
        # Check if there are more items to process
        last_evaluated_key = response.get('LastEvaluatedKey')
        if not last_evaluated_key:
            break
            
        print(f"Scanned {len(variant_map)} variants so far...")
    
    print(f"Total variants found: {len(variant_map)}")
    
    # Second pass: Process each variant with full conversation history
    for variant_id, variant in variant_map.items():
        try:
            query_text = variant.get('query_text', {}).get('S', '')
            current_code_snippet = variant.get('current_code_snippet', {}).get('S', '')
            variant_data = variant.get('variant_data', {}).get('M', {})
            tsx_content = variant_data.get('tsx', {}).get('S', '') if variant_data else ''
            
            # Get full conversation history
            full_prompt, history = get_conversation_history(variant_id, variant_map)
            
            # Extract image info from different sources
            all_image_info = []
            
            # 1. Extract from current_code_snippet (HTML/TSX)
            if current_code_snippet:
                all_image_info.extend(extract_image_info(current_code_snippet))
            
            # 2. Extract from variant_data.tsx (TSX code)
            if tsx_content:
                all_image_info.extend(extract_from_tsx(tsx_content))
            
            # Process all found images
            for img_info in all_image_info:
                try:
                    # Extract S3 key from URL
                    image_url = img_info['image_url']
                    s3_key = None
                    try:
                        path = urlparse(image_url).path
                        s3_key = path[1:] if path.startswith('/') else path  # Remove leading slash
                    except Exception as e:
                        print(f"Error parsing URL {image_url}: {e}")
                    
                    items.append({
                        'variant_id': variant_id,
                        'query_text': query_text,
                        'full_prompt': full_prompt,
                        'prompt_history': json.dumps(history),
                        'image_url': image_url,
                        'alt_text': img_info['alt_text'],
                        's3_key': s3_key,
                        'source': img_info.get('source', 'unknown'),
                        'history_length': len(history)
                    })
                except Exception as img_e:
                    print(f"Error processing image in variant {variant_id}: {img_e}")
                    
        except Exception as e:
            print(f"Error processing variant {variant_id}: {e}")
    
    return items, variant_map

def save_to_files(data: List[Dict], base_filename: str = 'variant_images'):
    """Save extracted data to JSON and CSV files"""
    if not data:
        print("No data to save")
        return
    
    # Save to JSON
    json_filename = f"{base_filename}.json"
    with open(json_filename, 'w') as f:
        json.dump(data, f, indent=2)
    
    # Save to CSV
    csv_filename = f"{base_filename}.csv"
    fieldnames = [
        'variant_id',
        'query_text',
        'full_prompt',
        'prompt_history',
        'image_url',
        'alt_text',
        's3_key',
        'source',
        'history_length'
    ]
    
    with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, quoting=csv.QUOTE_ALL)
        writer.writeheader()
        for row in data:
            # Ensure all fields are present
            for field in fieldnames:
                if field not in row:
                    row[field] = ''
            writer.writerow(row)
    
    print(f"Saved {len(data)} items to {json_filename} and {csv_filename}")
    print(f"Fields: {', '.join(fieldnames)}")
    
    # Print summary stats
    history_lengths = [item.get('history_length', 0) for item in data]
    if history_lengths:
        print(f"\nConversation history stats:")
        print(f"- Average history length: {sum(history_lengths)/len(history_lengths):.1f}")
        print(f"- Max history length: {max(history_lengths)}")
        print(f"- Min history length: {min(history_lengths)}")
        print(f"- Items with history (length > 1): {sum(1 for x in history_lengths if x > 1)} / {len(history_lengths)}")

def main():
    # Extract data from DynamoDB
    variant_data, variant_map = scan_variants_table()
    
    # Print summary
    print(f"\nExtracted {len(variant_data)} images with metadata from {len(variant_map)} total variants")
    
    # Save to files
    save_to_files(variant_data)
    
    # Print a few samples
    if variant_data:
        print("\nSample entries:")
        for i, item in enumerate(variant_data[:2]):
            print(f"\n--- Sample {i+1} ---")
            print(f"Variant ID: {item['variant_id']}")
            print(f"Query: {item['query_text']}")
            print(f"Full Prompt (length: {len(item['full_prompt'])}): {item['full_prompt'][:200]}...")
            print(f"History Length: {item['history_length']}")
            print(f"Image URL: {item['image_url']}")
            print(f"Alt Text: {item['alt_text'][:100]}..." if len(item['alt_text']) > 100 else f"Alt Text: {item['alt_text']}")

if __name__ == "__main__":
    main()
