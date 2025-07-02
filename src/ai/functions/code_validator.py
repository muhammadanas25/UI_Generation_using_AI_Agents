import subprocess
import json
import re
from typing import Dict, List, Tuple, Optional
from ai.functions.extract_import_statements import extract_code_from_formatted_response

class CodeValidationError(Exception):
    pass

class CodeValidator:
    def __init__(self):
        self.validation_timeout = 30
        
    def validate_jsx_code(self, jsx_code: str, imports) -> Tuple[bool, List[str]]:
        """
        Comprehensive JSX code validation
        Returns: (is_valid, list_of_errors)
        
        Args:
            jsx_code: The JSX code to validate
            imports: Can be List[Dict] or Dict[str, str] depending on extraction method
        """
        errors = []
        
        try:
            # 1. Syntax validation using existing babel infrastructure
            syntax_errors = self._validate_syntax(jsx_code)
            errors.extend(syntax_errors)
            
            # 2. JSX structure validation
            structure_errors = self._validate_jsx_structure(jsx_code)
            errors.extend(structure_errors)
            
            # 3. Import validation
            import_errors = self._validate_imports(jsx_code, imports)
            errors.extend(import_errors)
            
            return len(errors) == 0, errors
            
        except Exception as e:
            return False, [f"Validation system error: {str(e)}"]
    
    def _validate_syntax(self, jsx_code: str) -> List[str]:
        """Basic syntax validation using existing babel utility"""
        try:
            # Use existing babel-img-util.js for validation
            # If it can parse for image nodes, the syntax is likely valid
            result = subprocess.run(
                ['node', './ai/functions/babel-img-util.js', jsx_code],
                capture_output=True,
                text=True,
                timeout=self.validation_timeout
            )
            
            # If the command succeeds and returns valid JSON, syntax is OK
            if result.returncode == 0:
                try:
                    json.loads(result.stdout)
                    return []  # No syntax errors
                except json.JSONDecodeError:
                    return ["Invalid JSON output from babel parser"]
            else:
                # Parse error message for common issues
                error_msg = result.stderr.strip()
                if not error_msg:
                    error_msg = result.stdout.strip()
                    
                if "Adjacent JSX elements" in error_msg:
                    return ["Adjacent JSX elements must be wrapped in an enclosing tag"]
                elif "Unexpected token" in error_msg:
                    return [f"Syntax error: {error_msg[:200]}"]  # Limit error message length
                elif "Cannot find module" in error_msg:
                    return ["Babel dependencies not installed properly"]
                else:
                    return [f"Parse error: {error_msg[:200]}"]  # Limit error message length
            
        except subprocess.TimeoutExpired:
            return ["Syntax validation timed out - possible infinite loop in code"]
        except FileNotFoundError:
            return ["Node.js or babel utilities not found"]
        except Exception as e:
            return [f"Syntax validation error: {str(e)[:100]}"]  # Limit error message length
    
    def _validate_jsx_structure(self, jsx_code: str) -> List[str]:
        """Validate JSX structure"""
        errors = []
        
        try:
            clean_code = extract_code_from_formatted_response(jsx_code)
            
            # Check if this is a function component (has export default function or return statement)
            is_function_component = bool(
                re.search(r'export\s+default\s+function', clean_code) or
                re.search(r'return\s*\(', clean_code) or
                re.search(r'const\s+\w+\s*=\s*\(\)', clean_code)
            )
            
            # Only check for adjacent JSX elements if NOT inside a function component
            if not is_function_component:
                lines = clean_code.split('\n')
                jsx_elements_at_root = []
                
                for i, line in enumerate(lines):
                    stripped = line.strip()
                    # More careful detection of actual root JSX elements
                    if (stripped.startswith('<') and not stripped.startswith('</') and 
                        not stripped.startswith('<!--') and 
                        not any(keyword in line for keyword in ['return', 'const', 'let', 'var', 'function']) and
                        not re.search(r'[=({].*<', line)):  # Not inside assignment or call
                        jsx_elements_at_root.append(i)
                
                if len(jsx_elements_at_root) > 1:
                    error_lines = ', '.join(str(i+1) for i in jsx_elements_at_root)
                    errors.append(f"Multiple JSX elements at root level (lines: [{error_lines}]). Consider wrapping in React.Fragment or div.")
            
            # Check for basic tag matching
            open_tags = len(re.findall(r'<[^/][^>]*[^/]>', clean_code))
            self_closing = len(re.findall(r'<[^>]*/>', clean_code))
            close_tags = len(re.findall(r'</[^>]*>', clean_code))
            
            # Basic heuristic: open tags should roughly equal close tags (accounting for self-closing)
            if abs(open_tags - close_tags) > self_closing + 2:  # Allow some margin for complex cases
                errors.append("Potential unclosed JSX tags detected")
                
        except Exception as e:
            errors.append(f"Structure validation error: {str(e)}")
        
        return errors
    
    def _validate_imports(self, jsx_code: str, imports) -> List[str]:
        """Validate that all used components have corresponding imports"""
        errors = []
        
        try:
            # Extract used components from JSX
            used_components = self._extract_used_components(jsx_code)
            imported_components = set()
            
            # Handle different import formats
            if isinstance(imports, dict):
                # Dictionary format: {'React': 'react', 'Button': '@/components/ui/button'}
                imported_components.update(imports.keys())
            elif isinstance(imports, list):
                # List format: [{'type': 'default', 'name': 'React', 'from': 'react'}, ...]
                for imp in imports:
                    if isinstance(imp, dict):
                        if imp.get('type') == 'default':
                            imported_components.add(imp.get('name', ''))
                        elif imp.get('type') == 'named':
                            names = imp.get('names', [])
                            if isinstance(names, list):
                                imported_components.update(names)
                            else:
                                imported_components.add(names)
                    elif isinstance(imp, str):
                        # Handle case where imports is a list of strings
                        imported_components.add(imp)
            else:
                # Unknown format, skip validation
                return []
            
            # HTML elements that don't need imports
            html_elements = {'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
                           'img', 'a', 'button', 'input', 'form', 'section', 'article', 
                           'header', 'footer', 'nav', 'main', 'ul', 'li', 'ol'}
            
            # Check for missing imports
            missing_imports = used_components - imported_components - html_elements
            
            if missing_imports:
                errors.append(f"Potentially missing imports for components: {', '.join(missing_imports)}")
                
        except Exception as e:
            errors.append(f"Import validation error: {str(e)}")
        
        return errors
    
    def _extract_used_components(self, jsx_code: str) -> set:
        """Extract component names used in JSX"""
        components = set()
        
        try:
            clean_code = extract_code_from_formatted_response(jsx_code)
            
            # Extract JSX elements that start with capital letters (React components)
            jsx_pattern = r'<([A-Z][a-zA-Z0-9]*)'
            matches = re.findall(jsx_pattern, clean_code)
            components.update(matches)
            
        except Exception:
            # Fallback to basic regex if extraction fails
            jsx_pattern = r'<([A-Z][a-zA-Z0-9]*)'
            matches = re.findall(jsx_pattern, jsx_code)
            components.update(matches)
        
        return components

def fix_common_jsx_issues(code: str, errors: List[str]) -> str:
    """Attempt to fix common JSX issues automatically"""
    try:
        clean_code = extract_code_from_formatted_response(code)
        
        # Check if this is a function component
        is_function_component = bool(
            re.search(r'export\s+default\s+function', clean_code) or
            re.search(r'return\s*\(', clean_code) or
            re.search(r'const\s+\w+\s*=\s*\(\)', clean_code)
        )
        
        # Only fix adjacent JSX elements if NOT inside a function component
        if not is_function_component and any("Multiple JSX elements" in error or "Adjacent JSX elements" in error for error in errors):
            lines = clean_code.split('\n')
            jsx_elements_at_root = []
            
            for i, line in enumerate(lines):
                stripped = line.strip()
                if (stripped.startswith('<') and not stripped.startswith('</') and 
                    not stripped.startswith('<!--') and 
                    not any(keyword in line for keyword in ['return', 'const', 'let', 'var', 'function']) and
                    not re.search(r'[=({].*<', line)):
                    jsx_elements_at_root.append(i)
            
            if len(jsx_elements_at_root) > 1:
                print("<VALIDATION> Wrapping multiple JSX elements in React.Fragment")
                # Insert React.Fragment wrapper
                lines.insert(jsx_elements_at_root[0], '<>')
                lines.append('</>')
                clean_code = '\n'.join(lines)
        
        return clean_code
        
    except Exception as e:
        print(f"<VALIDATION> Error fixing JSX issues: {e}")
        return code

def sanitize_jsx_input(jsx_code: str) -> str:
    """Sanitize JSX input to prevent common parsing errors"""
    if not jsx_code or not jsx_code.strip():
        return ""
    
    # Remove any potential problematic characters
    jsx_code = jsx_code.replace('\x00', '')  # Remove null bytes
    
    # Ensure proper encoding
    if isinstance(jsx_code, bytes):
        jsx_code = jsx_code.decode('utf-8', errors='ignore')
    
    return jsx_code

# Global validator instance
code_validator = CodeValidator() 