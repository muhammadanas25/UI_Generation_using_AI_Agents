import re
import os
import json
import sys
import asyncio
import subprocess
from uuid import uuid4
from typing import List, Dict
from ai.functions.circuit_breaker import get_circuit_breaker, CircuitBreakerOpenException

def extract_import_statements_with_fallback(jsx_code: str) -> Dict[str, str]:
    """Extract imports with multiple fallback strategies - returns {import_name: source} format"""
    circuit_breaker = get_circuit_breaker('import_extraction')
    
    try:
        # Try primary method with circuit breaker protection
        return circuit_breaker.call(_extract_imports_nodejs, jsx_code)
    except CircuitBreakerOpenException:
        print("<IMPORT_DEBUG> Circuit breaker open for import extraction, using fallback")
        return _extract_imports_fallback(jsx_code)
    except Exception as e:
        print(f"<IMPORT_DEBUG> Primary import extraction failed: {e}, trying fallback")
        return _extract_imports_fallback(jsx_code)

def _extract_imports_nodejs(jsx_code: str) -> Dict[str, str]:
    """Primary import extraction using Node.js - returns {import_name: source} format"""
    print("<IMPORT_DEBUG> Using Node.js import extraction, current files in directory: ", os.listdir('.'))
    extracted_code = extract_code_from_formatted_response(jsx_code)
    
    result = subprocess.run(
        ['node', './ai/functions/babel-import-util.js', extracted_code],
        capture_output=True,
        text=True,
        check=True,
        timeout=30
    )
    
    if result.stderr:
        print(f"<IMPORT_DEBUG> Node.js warnings: {result.stderr}")
    
    imports = json.loads(result.stdout)
    print(f"<IMPORT_DEBUG> Node.js extracted {len(imports)} imports: {list(imports.keys())[:5]}...")
    return imports

def _extract_imports_fallback(jsx_code: str) -> Dict[str, str]:
    """Fallback import extraction using regex - returns {import_name: source} format"""
    print("<IMPORT_DEBUG> Using fallback import extraction")
    
    try:
        extracted_code = extract_code_from_formatted_response(jsx_code)
        imports = {}  # Changed from list to dict
        
        # Regex patterns for different import types
        import_patterns = [
            # import React from 'react'
            (r"import\s+(\w+)\s+from\s+['\"]([^'\"]+)['\"]", 'default'),
            # import { Component, useState } from 'react'
            (r"import\s+\{\s*([^}]+)\s*\}\s+from\s+['\"]([^'\"]+)['\"]", 'named'),
            # import * as React from 'react'
            (r"import\s+\*\s+as\s+(\w+)\s+from\s+['\"]([^'\"]+)['\"]", 'namespace'),
        ]
        
        for pattern, import_type in import_patterns:
            matches = re.finditer(pattern, extracted_code, re.MULTILINE)
            
            for match in matches:
                if import_type == 'default':
                    imports[match.group(1)] = match.group(2)
                elif import_type == 'named':
                    names = [name.strip() for name in match.group(1).split(',')]
                    for name in names:
                        imports[name] = match.group(2)
                elif import_type == 'namespace':
                    imports[match.group(1)] = match.group(2)
        
        # Add common default imports if not found
        imports = _add_default_imports_dict(imports, extracted_code)
        
        print(f"<IMPORT_DEBUG> Fallback extraction found {len(imports)} imports")
        return imports
        
    except Exception as e:
        print(f"<IMPORT_DEBUG> Fallback extraction failed: {e}")
        return _get_minimal_default_imports_dict()

def _add_default_imports_dict(imports: Dict[str, str], code: str) -> Dict[str, str]:
    """Add common default imports if missing - dict version"""
    # Common patterns to check for
    patterns = [
        ('React', 'react', r'\bReact\b'),
        ('useState', 'react', r'\buseState\b'),
        ('useEffect', 'react', r'\buseEffect\b'),
        ('Image', 'next/image', r'<Image\b'),
        ('Link', 'next/link', r'<Link\b'),
        ('Button', '@/components/ui/button', r'<Button\b'),
        ('Dialog', '@/components/ui/dialog', r'<Dialog\b'),
        ('Card', '@/components/ui/card', r'<Card\b'),
        ('Input', '@/components/ui/input', r'<Input\b'),
    ]
    
    for import_name, source, pattern in patterns:
        if import_name not in imports and re.search(pattern, code):
            imports[import_name] = source
            
    return imports

def _get_minimal_default_imports_dict() -> Dict[str, str]:
    """Get minimal default imports - dict version"""
    return {
        'React': 'react',
        'useState': 'react'
    }

# Legacy function - redirects to robust version
def extract_import_statements(jsx_code):
    """Extract import statements from JSX code with fallback handling - returns {import_name: source} format"""
    return extract_import_statements_with_fallback(jsx_code)


def extract_code_from_formatted_response(formatted_response: str) -> str:
    """
    Extracts all code blocks from a string containing <code>...</code> tags.
    Also removes <text> tags and other non-code elements.
    If no <code> tags are found, returns the original string.
    """
    # First, try to extract code blocks
    code_blocks = re.findall(r'<code>([\s\S]*?)</code>', formatted_response)
    if code_blocks:
        code = "\n".join(code_blocks)
        print(f"<IMPORT_DEBUG> Extracted code for Node import extraction (first 100 chars): {code[:100]}")
        return code
    
    # If no <code> tags, try to clean up the response by removing <text> tags
    cleaned_response = formatted_response
    
    # Remove <text>...</text> blocks as they're not code
    cleaned_response = re.sub(r'<text>[\s\S]*?</text>', '', cleaned_response)
    
    # Remove warning comments that might cause issues
    cleaned_response = re.sub(r'//\s*Warning:.*?\n', '', cleaned_response)
    
    # Remove any other HTML-like tags that might interfere
    cleaned_response = re.sub(r'<(?!/?(?:code|import|export)\b)[^>]*>', '', cleaned_response)
    
    # Clean up whitespace
    cleaned_response = cleaned_response.strip()
    
    print("<IMPORT_DEBUG> No <code> tags found, cleaned response and removed <text> tags.")
    return cleaned_response

