import logging
import re

logger = logging.getLogger(__name__)

def format_variant_data_for_response(variant_data):
    """
    Process variant data before sending it in API response.
    Extract code from <code> tags if needed for frontend display.
    """
    logger.info("Processing variant data for API response")
    
    if not variant_data:
        logger.warning("No variant data to format")
        return variant_data
        
    tsx = variant_data.get("tsx", "")
    logger.info(f"Original TSX content first 100 chars: {tsx[:100]}...")
    
    # Parse the existing content
    explanation = ""
    code = tsx
    
    # Check if the content has the expected tags
    has_text_tag = "<text>" in tsx
    has_code_tag = "<code>" in tsx
    
    if has_text_tag or has_code_tag:
        logger.info(f"Found formatting tags in TSX - text tag: {has_text_tag}, code tag: {has_code_tag}")
    else:
        logger.warning("No formatting tags found in TSX content")
    
    # Extract explanation from <text> tags
    text_match = re.search(r'<text>([\s\S]*?)</text>', tsx)
    if text_match:
        explanation = text_match.group(1).strip()
        logger.info(f"Extracted explanation text: first 100 chars: {explanation[:100]}...")
    else:
        logger.info("No <text> tag content found")
    
    # Extract code from <code> tags
    code_match = re.search(r'<code>([\s\S]*?)</code>', tsx)
    if code_match:
        code = code_match.group(1).strip()
        logger.info(f"Extracted code: first 100 chars: {code[:100]}...")
    else:
        logger.info("No <code> tag content found, using full TSX as code")
    
    # Update the variant data with separated fields
    result = {
        **variant_data,
        "tsx": code,
        "explanation": explanation if explanation else None
    }
    
    logger.info(f"Returning variant data with fields - tsx (first 100 chars): {code[:100]}... explanation present: {bool(explanation)}")
    return result 