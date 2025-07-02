#!/usr/bin/env python3
"""
JSX Stream Fixer - Fixes malformed JSX that occurs during streaming generation.

This module specifically addresses issues where LLM streaming breaks JSX attributes
across chunk boundaries, creating invalid syntax like:
- Name="" instead of className=""
- sty="" instead of style=""
- onCl="" instead of onClick=""
"""

import re
import logging

logger = logging.getLogger(__name__)

# Common malformed attribute patterns and their fixes
MALFORMED_ATTRIBUTE_FIXES = {
    r'\bName="([^"]*)"': r'className="\1"',        # Name="" -> className=""
    r'\bsty="([^"]*)"': r'style="\1"',             # sty="" -> style=""
    r'\bonCl="([^"]*)"': r'onClick="\1"',          # onCl="" -> onClick=""
    r'\bhre="([^"]*)"': r'href="\1"',              # hre="" -> href=""
    r'\bsr="([^"]*)"': r'src="\1"',                # sr="" -> src=""
    r'\bal="([^"]*)"': r'alt="\1"',                # al="" -> alt=""
    r'\btyp="([^"]*)"': r'type="\1"',              # typ="" -> type=""
    r'\bplaceholde="([^"]*)"': r'placeholder="\1"', # placeholde="" -> placeholder=""
}

# Double quote escape issues
QUOTE_FIXES = {
    r'=""([^"]*)"">': r'="\1">',  # ="" -> ="
    r'=\"\"([^"]*)\"\">': r'="\1">',  # ="" with escaped quotes
}

def fix_streaming_jsx_issues(jsx_content: str) -> str:
    """
    Fix common JSX issues that occur during streaming generation.
    
    Args:
        jsx_content: The JSX content with potential streaming issues
        
    Returns:
        Fixed JSX content
    """
    if not jsx_content or not jsx_content.strip():
        return jsx_content
    
    fixed_content = jsx_content
    fixes_applied = []
    
    try:
        # 1. Fix malformed attributes
        for pattern, replacement in MALFORMED_ATTRIBUTE_FIXES.items():
            if re.search(pattern, fixed_content):
                old_content = fixed_content
                fixed_content = re.sub(pattern, replacement, fixed_content)
                if old_content != fixed_content:
                    fixes_applied.append(f"Fixed malformed attribute: {pattern}")
        
        # 2. Fix double quote issues
        for pattern, replacement in QUOTE_FIXES.items():
            if re.search(pattern, fixed_content):
                old_content = fixed_content
                fixed_content = re.sub(pattern, replacement, fixed_content)
                if old_content != fixed_content:
                    fixes_applied.append(f"Fixed quote issue: {pattern}")
        
        # 3. Fix incomplete JSX tags at chunk boundaries
        fixed_content = fix_incomplete_tags(fixed_content)
        
        # 4. Fix malformed JSX expressions
        fixed_content = fix_malformed_expressions(fixed_content)
        
        if fixes_applied:
            logger.info(f"<JSX_STREAM_FIXER> Applied fixes: {fixes_applied}")
        
        return fixed_content
        
    except Exception as e:
        logger.error(f"<JSX_STREAM_FIXER> Error fixing JSX: {str(e)}")
        return jsx_content  # Return original if fixing fails

def fix_incomplete_tags(content: str) -> str:
    """Fix incomplete JSX tags that were cut off during streaming"""
    
    # Fix incomplete opening tags
    # Example: <div clas -> <div className=""
    incomplete_tag_patterns = [
        (r'<(\w+)\s+clas\s*$', r'<\1 className=""'),
        (r'<(\w+)\s+clas\s*>', r'<\1 className="">'),
        (r'<(\w+)\s+sty\s*$', r'<\1 style=""'),
        (r'<(\w+)\s+sty\s*>', r'<\1 style="">'),
        (r'<(\w+)\s+onCl\s*$', r'<\1 onClick=""'),
        (r'<(\w+)\s+onCl\s*>', r'<\1 onClick="">'),
    ]
    
    for pattern, replacement in incomplete_tag_patterns:
        content = re.sub(pattern, replacement, content)
    
    return content

def fix_malformed_expressions(content: str) -> str:
    """Fix malformed JSX expressions"""
    
    # Fix incomplete expressions
    # Example: {someVar -> {someVariable}
    # But be careful not to break valid code
    
    # Fix missing closing braces for simple expressions
    # content = re.sub(r'\{(\w+)\s*$', r'{\1}', content)
    
    # Fix double opening braces
    content = re.sub(r'\{\{([^}]+)\}', r'{\1}', content)
    
    return content

def validate_jsx_chunk(chunk: str) -> tuple[bool, list[str]]:
    """
    Validate a JSX chunk and identify potential streaming issues.
    
    Args:
        chunk: JSX chunk to validate
        
    Returns:
        (is_valid, list_of_issues)
    """
    issues = []
    
    try:
        # Check for malformed attributes
        for pattern in MALFORMED_ATTRIBUTE_FIXES.keys():
            if re.search(pattern, chunk):
                issues.append(f"Malformed attribute detected: {pattern}")
        
        # Check for incomplete tags
        if re.search(r'<\w+\s+[a-z]+\s*$', chunk):
            issues.append("Incomplete tag attribute")
        
        # Check for unmatched quotes
        quote_count = chunk.count('"')
        if quote_count % 2 != 0:
            issues.append("Unmatched quotes detected")
        
        # Check for incomplete JSX expressions
        open_braces = chunk.count('{')
        close_braces = chunk.count('}')
        if open_braces != close_braces:
            issues.append(f"Unmatched braces: {open_braces} open, {close_braces} close")
        
        return len(issues) == 0, issues
        
    except Exception as e:
        return False, [f"Validation error: {str(e)}"]

def is_jsx_chunk_safe_to_stream(chunk: str) -> bool:
    """
    Check if a JSX chunk is safe to stream to frontend.
    
    Args:
        chunk: JSX chunk to check
        
    Returns:
        True if safe to stream, False if should be held back
    """
    try:
        # Don't stream chunks that end with partial attributes
        if re.search(r'<\w+\s+[a-z]+$', chunk):
            return False
        
        # Don't stream chunks with malformed attributes
        for pattern in MALFORMED_ATTRIBUTE_FIXES.keys():
            if re.search(pattern, chunk):
                return False
        
        # Don't stream chunks with unmatched quotes in attributes
        # Look for attribute patterns: word="..."
        attr_matches = re.findall(r'\w+="[^"]*"', chunk)
        partial_attrs = re.findall(r'\w+="[^"]*$', chunk)
        
        if partial_attrs:
            return False
        
        return True
        
    except Exception:
        return True  # Default to streaming if validation fails

# Test function
def test_jsx_fixer():
    """Test the JSX fixer with common issues"""
    test_cases = [
        # Malformed className
        '<li><a href="#" Name="text-gray-600">Terms</a></li>',
        # Incomplete attributes  
        '<div clas="container">',
        # Double quotes
        '<span =""some-class"">Text</span>',
        # Multiple issues
        '<button onCl="handler" Name="btn-class">Click</button>',
    ]
    
    print("🧪 Testing JSX Stream Fixer")
    for i, test_case in enumerate(test_cases, 1):
        print(f"\nTest {i}:")
        print(f"  Input:  {test_case}")
        fixed = fix_streaming_jsx_issues(test_case)
        print(f"  Output: {fixed}")
        is_valid, issues = validate_jsx_chunk(fixed)
        print(f"  Valid:  {is_valid}")
        if not is_valid:
            print(f"  Issues: {issues}")

if __name__ == "__main__":
    test_jsx_fixer() 