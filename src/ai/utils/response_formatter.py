import re
import logging

logger = logging.getLogger(__name__)

def format_ai_response(response: str) -> str:
    
    """Format AI responses to separate code and text with clear markers."""
    logger.info(f"FORMATTER INPUT (First 100 chars): {response[:100]}...")
    
    # If the response is already wrapped, return it as is
    if response.startswith("<code>") or response.startswith("<text>"):
        logger.info("Response already has <code> or <text> tags, returning as-is")
        return response
    
    # Check if response starts directly with code patterns (import, function def, etc.)
    code_patterns = [
        r'^\s*import\s+',
        r'^\s*from\s+\w+\s+import\s+',
        r'^\s*def\s+\w+\s*\(',
        r'^\s*class\s+\w+',
        r'^\s*<\?php',
        r'^\s*<html',
        r'^\s*<!DOCTYPE',
        r'^\s*function\s+\w+\s*\(',
        r'^\s*const\s+\w+\s*=',
        r'^\s*let\s+\w+\s*=',
        r'^\s*var\s+\w+\s*=',
        r'^\s*@\w+',
        r'^\s*#include',
        r'^\s*using\s+\w+',
        r'^\s*package\s+\w+',
        r'^\s*public\s+class',
        r'^\s*export\s+',
        r'^\s*\{\s*$',
        r'^\s*```'
    ]
    
    if any(re.match(pattern, response) for pattern in code_patterns):
        logger.info("Response starts with code pattern, wrapping entire content in <code> tags")
        formatted_response = f"<code>{response}</code>"
        logger.info(f"FORMATTER OUTPUT (First 100 chars): {formatted_response[:100]}...")
        return formatted_response
    
    # Check for complete responses with markdown format - text followed by ```code```
    # This is a common AI response pattern
    full_response_pattern = r'^([^`]+)```[a-zA-Z]*\n([\s\S]+)```\s*$'
    full_match = re.match(full_response_pattern, response)
    if full_match:
        explanation = full_match.group(1).strip()
        code = full_match.group(2).strip()
        logger.info("Found markdown pattern with text followed by code block, splitting into <text> and <code> tags")
        formatted_response = f"<text>{explanation}</text><code>{code}</code>"
        logger.info(f"FORMATTER OUTPUT (First 100 chars): {formatted_response[:100]}...")
        return formatted_response
    
    # Check if response contains code blocks
    markdown_code_pattern = r'```[a-zA-Z]*\n([\s\S]*?)```'
    
    # If we find markdown code blocks
    if re.search(markdown_code_pattern, response):
        logger.info("Found multiple markdown code blocks, processing each separately")
        # Extract code blocks and wrap them
        code_blocks = re.findall(markdown_code_pattern, response)
        text_parts = re.split(markdown_code_pattern, response)
        
        result = ""
        for i, text in enumerate(text_parts):
            if text.strip():
                result += f"<text>{text.strip()}</text>"
            if i < len(code_blocks):
                result += f"<code>{code_blocks[i]}</code>"
        
        logger.info(f"FORMATTER OUTPUT (First 100 chars): {result[:100]}...")
        return result
    
    # If there are common code explanation phrases, split on them
    code_intros = [
        "Here's the code:",
        "Here is the code:",
        "Here is your code:",
        "Here's your code:",
        "Updated code:",
        "The code is:",
        "I've written the code:"
    ]
    
    for intro in code_intros:
        if intro in response:
            parts = response.split(intro, 1)
            if len(parts) == 2:
                logger.info(f"Found code introduction phrase: '{intro}', splitting content")
                formatted_response = f"<text>{parts[0].strip()}</text><code>{parts[1].strip()}</code>"
                logger.info(f"FORMATTER OUTPUT (First 100 chars): {formatted_response[:100]}...")
                return formatted_response
    
    # If we can't determine a clear separation, assume it's all code if it has
    # certain coding patterns, otherwise assume it's text+code needing review
    if any(pattern in response for pattern in ['function', 'class', 'import', 'export', 'const', '<div', '<p']):
        logger.info("No clear separation found but contains code-like patterns, wrapping in <code> tags")
        formatted_response = f"<code>{response}</code>"
        logger.info(f"FORMATTER OUTPUT (First 100 chars): {formatted_response[:100]}...")
        return formatted_response
    else:
        logger.info("No code patterns detected, wrapping in <text> tags")
        formatted_response = f"<text>{response}</text>"
        logger.info(f"FORMATTER OUTPUT (First 100 chars): {formatted_response[:100]}...")
        return formatted_response 