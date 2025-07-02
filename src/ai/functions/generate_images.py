import re
import os
import json
import sys
import asyncio
import subprocess
from api.config import BACKEND_URL
from uuid import uuid4
from ai.memory.blackboard.Blackboard import BlackBoard
from ai.agents.image_description_generator.agent import ImageDescriptionGeneratorAgent
from ai.agents.image_generator.agent import ImageGeneratorAgent
from shared.s3_handler import S3Handler, FailedToDownloadImageException, FailedToUploadImageException
from shared.config import GENERATED_IMAGES_BUCKET, REGION_NAME
from shared.notify_variant import notify_agent_status
from ai.functions.extract_import_statements import extract_code_from_formatted_response, extract_import_statements_with_fallback
from ai.functions.circuit_breaker import get_circuit_breaker, CircuitBreakerOpenException
from ai.functions.code_validator import code_validator, fix_common_jsx_issues, sanitize_jsx_input
from urllib.parse import urljoin
from typing import List, Dict

def replace_placeholder_images_with_generated_images(code: str, meta_data: dict, variant_type: str) -> str:
    """
    Main function to replace placeholder images with generated images.
    Now includes validation and circuit breaker protection.
    """
    try:
        # Sanitize input first
        code = sanitize_jsx_input(code)
        
        if not code.strip():
            print("<IMG_DEBUG> Empty or invalid code provided")
            return code

        project_id = meta_data["project_id"]

        print("<IMG_DEBUG> Trying to grab image nodes")
        image_nodes = grab_image_nodes(code)

        if len(image_nodes) == 0:
            print("<IMG_DEBUG> No image nodes found")
            # Still validate the code before returning
            return validate_and_fix_code(code, meta_data)

        print("<IMG_DEBUG> Found some image nodes")
        
        try:
            image_nodes_with_descriptions_and_urls = generate_description_and_image_urls(image_nodes, code, meta_data, variant_type)
            print("<IMG_DEBUG> Generated descriptions and image URLs")
            
            # Filter out completely failed nodes before processing
            valid_nodes = [(node, result) for node, result in image_nodes_with_descriptions_and_urls 
                          if result.get('description') and result.get('image_url')]
            
            if not valid_nodes:
                print("<IMG_DEBUG> No valid image nodes after processing, using original code")
                return validate_and_fix_code(code, meta_data)
            
            print(f"<IMG_DEBUG> Processing {len(valid_nodes)} valid image nodes")
            
            try:
                image_nodes_with_s3_urls = upload_images_to_s3_and_replace_urls_with_s3_urls(valid_nodes, project_id)
                print("<IMG_DEBUG> Uploaded images to S3 and replaced URLs with S3 URLs")
                
                if image_nodes_with_s3_urls:
                    updated_code_with_generated_images = update_code_with_generated_images(code, image_nodes_with_s3_urls)
                    print("<IMG_DEBUG> Updated code with generated images")
                    
                    if updated_code_with_generated_images and updated_code_with_generated_images.strip():
                        return validate_and_fix_code(updated_code_with_generated_images, meta_data)
                    else:
                        print("<IMG_DEBUG> Code update returned empty result, using original")
                        return validate_and_fix_code(code, meta_data)
                else:
                    print("<IMG_DEBUG> No valid S3 URLs after upload, using original code")
                    return validate_and_fix_code(code, meta_data)
                    
            except Exception as s3_error:
                print(f"<IMG_DEBUG> S3 upload failed: {s3_error}, using original code")
                return validate_and_fix_code(code, meta_data)
                
        except Exception as img_gen_error:
            print(f"<IMG_DEBUG> Image generation failed: {img_gen_error}, using original code")
            return validate_and_fix_code(code, meta_data)
        
    except Exception as e:
        print(f"<IMG_DEBUG> Critical error in replace_placeholder_images_with_generated_images: {e}")
        # Always try to return validated original code as fallback
        try:
            return validate_and_fix_code(code, meta_data)
        except Exception as validation_error:
            print(f"<IMG_DEBUG> Even validation failed: {validation_error}, returning original code")
            # Last resort: return the original code wrapped in code tags
            if not re.search(r'<code>[\s\S]*?</code>', code):
                return f'<code>{code}</code>'
            return code

def validate_and_fix_code(code: str, meta_data: dict, max_fix_attempts: int = 2) -> str:
    """Validate code and attempt to fix common issues"""
    original_code = code
    
    # Quick pre-validation check
    if not code or not code.strip():
        print("<VALIDATION> Empty code provided, returning minimal structure")
        return '<code>// Empty code provided</code>'
    
    # Check if code already contains <text> tags - if so, extract just the code part
    if '<text>' in code and '<code>' in code:
        print("<VALIDATION> Code contains both <text> and <code> tags, extracting code only")
        code = extract_code_from_formatted_response(code)
        # If we successfully extracted clean code, use it without validation warnings
        if code and not code.startswith('//') and 'import' in code:
            if not re.search(r'<code>[\s\S]*?</code>', code):
                code = f'<code>{code}</code>'
            print("<VALIDATION> Successfully extracted clean code from mixed content")
            return code
    
    for attempt in range(max_fix_attempts):
        try:
            # Extract imports with fallback handling
            imports = extract_import_statements_with_fallback(code)
            
            # Validate the code with timeout protection
            is_valid, errors = code_validator.validate_jsx_code(code, imports)
            
            if is_valid:
                print(f"<VALIDATION> Code validated successfully on attempt {attempt + 1}")
                # Ensure code is wrapped in <code> tags
                if not re.search(r'<code>[\s\S]*?</code>', code):
                    code = f'<code>{code}</code>'
                return code
            
            print(f"<VALIDATION> Validation failed on attempt {attempt + 1}: {errors[:3]}")  # Limit error output
            
            # Try to fix common issues only if we have specific fixable errors
            if any("Adjacent JSX elements" in error or "Multiple JSX elements" in error for error in errors):
                print(f"<VALIDATION> Attempting to fix JSX structure issues")
                fixed_code = fix_common_jsx_issues(code, errors)
                if fixed_code and fixed_code != code:
                    code = fixed_code
                    continue
                else:
                    print(f"<VALIDATION> JSX fix didn't change code, using original")
                    break
            elif any("Syntax error" in error or "Parse error" in error for error in errors):
                print(f"<VALIDATION> Syntax errors detected, cannot auto-fix")
                break
            else:
                # For other errors, don't attempt to fix to avoid infinite loops
                print(f"<VALIDATION> Unfixable errors detected, using original code")
                break
            
        except Exception as e:
            print(f"<VALIDATION> Validation error on attempt {attempt + 1}: {str(e)[:100]}")
            # Don't continue if validation itself is failing
            break
    
    # Always return something - prefer original code over broken attempts
    final_code = original_code
    
    # Only add warning if the code seems genuinely problematic
    # Don't add warning if it already has valid JSX structure
    if (not "Warning:" in final_code and 
        not "validation had issues" in final_code and
        not re.search(r'export\s+default\s+function|const.*=.*=>', final_code)):
        warning_comment = "// Warning: Code validation had issues but proceeding with original code\n"
        final_code = warning_comment + final_code
        print("<VALIDATION> Added validation warning")
    else:
        print("<VALIDATION> Skipped adding warning - code appears to have valid structure")
    
    # Ensure final code is wrapped
    if not re.search(r'<code>[\s\S]*?</code>', final_code):
        final_code = f'<code>{final_code}</code>'
    
    print(f"<VALIDATION> Returning {'validated' if 'Warning:' not in final_code else 'unvalidated'} code")
    return final_code

def grab_image_nodes(jsx_code):
    """Enhanced image node extraction with circuit breaker protection"""
    circuit_breaker = get_circuit_breaker('jsx_parsing')
    
    try:
        return circuit_breaker.call(_grab_image_nodes_protected, jsx_code)
    except CircuitBreakerOpenException:
        print("<IMG_DEBUG> Circuit breaker open for JSX parsing, returning empty list")
        return []
    except Exception as e:
        print(f"<IMG_DEBUG> Error grabbing image nodes: {e}")
        return []

def _grab_image_nodes_protected(jsx_code):
    """Protected image node extraction with enhanced loop detection"""
    try:
        print("<IMG_DEBUG> inside try block for grab_image_nodes, current files in directory: ", os.listdir('.'))
        
        # Extract code from formatted response if it has <code> tags
        clean_code = extract_code_from_formatted_response(jsx_code)
        
        result = subprocess.run(
            ['node', './ai/functions/babel-img-util.js', clean_code],
            capture_output=True,
            text=True,
            check=True,
            timeout=30  # Add timeout
        )
        
        if result.stderr:
            print(f"<IMG_DEBUG> Node.js warnings: {result.stderr}")
        
        raw_nodes = json.loads(result.stdout)
        print(f"<IMG_DEBUG> Enhanced babel parser found {len(raw_nodes)} raw nodes")
        
        # Process both regular nodes and loop image nodes
        processed_nodes = []
        
        for node in raw_nodes:
            try:
                # Check if this is a loop image node (JSON string)
                if isinstance(node, str) and node.startswith('{"type":"loop-image"'):
                    loop_data = json.loads(node)
                    print(f"<IMG_DEBUG> Found loop image: {loop_data.get('arraySource', 'unknown')}")
                    
                    # Convert loop image to processable format
                    processed_node = {
                        "type": "loop-image",
                        "src": "/placeholder.jpg",  # Will be replaced with generated image
                        "alt": f"Loop image from {loop_data.get('callbackParam', 'item')}",
                        "loopContext": loop_data,
                        "originalCode": loop_data.get('imageElement', node)
                    }
                    processed_nodes.append(processed_node)
                else:
                    # Regular node
                    processed_nodes.append(node)
                    
            except json.JSONDecodeError:
                # Regular string node, not JSON
                processed_nodes.append(node)
            except Exception as e:
                print(f"<IMG_DEBUG> Error processing node: {str(e)[:100]}")
                # Fallback: treat as regular node
                processed_nodes.append(node)
        
        print(f"<IMG_DEBUG> Processed {len(processed_nodes)} nodes ({len([n for n in processed_nodes if isinstance(n, dict) and n.get('type') == 'loop-image'])} loop images)")
        return processed_nodes
        
    except subprocess.CalledProcessError as e:
        print(f"<IMG_DEBUG> Babel parser failed: {str(e)[:100]}")
        return []
    except json.JSONDecodeError as e:
        print(f"<IMG_DEBUG> JSON decode error: {str(e)[:100]}")
        return []
    except Exception as e:
        print(f"<IMG_DEBUG> Unexpected error: {str(e)[:100]}")
        return []

def _validate_jsx_syntax(jsx_code):
    """Validate JSX syntax before processing - REMOVED FAULTY LOGIC"""
    # Simply return the extracted code without incorrect validation
    return extract_code_from_formatted_response(jsx_code)

async def process_node(node, code, meta_data, variant_type):
    """Enhanced node processing with circuit breaker protection"""
    max_retries = 3
    for attempt in range(1, max_retries + 1):
        try:
            print("<IMG_DEBUG> Processing single node, node: ", json.dumps(node))

            notify_agent_status(
                notify_endpoint=f"{urljoin(BACKEND_URL, 'variants/notify_agent_status')}",
                user_id=meta_data["user_data"]['user_id'],
                project_id=meta_data['project_id'],
                variant_id=meta_data['variant_id'],
                variant_type=variant_type,
                agent_status="GENERATING_IMAGE_DESCRIPTION",
            )

            # Use circuit breaker for image description generation
            description_circuit_breaker = get_circuit_breaker('image_description')
            description = None
            try:
                description = description_circuit_breaker.call(
                    ImageDescriptionGeneratorAgent(node, {'code': code}, {}).run
                )
                # sanitize description, replace double quotes with single quotes, because javascript double quotes inside alt text error out
                if description:
                    description = description.replace('"', "'")
                    print("<IMG_DEBUG> Generated description for node: ", description)
                else:
                    description = "Generated image placeholder"
                    print("<IMG_DEBUG> Empty description generated, using placeholder")
            except CircuitBreakerOpenException:
                print("<IMG_DEBUG> Image description circuit breaker open, using placeholder")
                description = "Generated image placeholder"
            except Exception as e:
                print(f"<IMG_DEBUG> Image description generation failed: {str(e)[:100]}")
                description = "Generated image placeholder"

            notify_agent_status(
                notify_endpoint=f"{urljoin(BACKEND_URL, 'variants/notify_agent_status')}",
                user_id=meta_data["user_data"]['user_id'],
                project_id=meta_data['project_id'],
                variant_id=meta_data['variant_id'],
                variant_type=variant_type,
                agent_status="GENERATING_IMAGE",
            )
            
            # Use circuit breaker for image generation
            image_circuit_breaker = get_circuit_breaker('image_generation')
            image_url = None
            try:
                image_url = image_circuit_breaker.call(
                    ImageGeneratorAgent().generate_image_url, description
                )
                
                # Validate the image URL
                if not image_url or image_url == "None" or image_url.lower() == "none":
                    print("<IMG_DEBUG> Invalid/None image URL generated, using placeholder")
                    image_url = "/placeholder.png"
                else:
                    print("<IMG_DEBUG> Generated image URL for node: ", str(image_url)[:100])
                    
            except CircuitBreakerOpenException:
                print("<IMG_DEBUG> Image generation circuit breaker open, using placeholder")
                image_url = "/placeholder.png"
            except Exception as e:
                print(f"<IMG_DEBUG> Image generation failed: {str(e)[:100]}")
                image_url = "/placeholder.png"
            
            # Ensure we always return valid values
            if not description:
                description = "Generated image placeholder"
            if not image_url:
                image_url = "/placeholder.png"
                
            return {"description": description, "image_url": image_url}
            
        except Exception as e:
            print(f"<IMG_DEBUG> Error processing node on attempt {attempt}: {str(e)[:100]}")
            if attempt == max_retries:
                print(f"<IMG_DEBUG> Failed to process node after {max_retries} attempts, using fallback")
                return {
                    "description": "Error generating image", 
                    "image_url": "/placeholder.png"
                }
            print(f"<IMG_DEBUG> Retrying in {attempt} seconds")
            await asyncio.sleep(attempt)  # Progressive delay

async def process_nodes(nodes, code, meta_data, variant_type):
    tasks = [process_node(node, code, meta_data, variant_type) for node in nodes]
    results = await asyncio.gather(*tasks)
    return list(zip(nodes, results))

async def upload_images_to_s3(image_nodes_with_descriptions_and_urls, project_id):
    """
    This function downloads images from the URLs in the image_nodes_with_descriptions_and_urls list,
    uploads them to S3, and returns a list of tuples containing the original node and the S3 URL.
    """
    s3_handler = S3Handler(
        bucket_name=GENERATED_IMAGES_BUCKET,
        region_name=REGION_NAME
    )
    image_urls = []
    successful_uploads = 0
    total_attempts = len(image_nodes_with_descriptions_and_urls)
    
    for node, result in image_nodes_with_descriptions_and_urls:
        image_url = result["image_url"]
        try:
            if not image_url or image_url.startswith('/') or image_url == "None" or image_url.lower() == "none":
                # Skip placeholder/invalid URLs
                print(f"<IMG_DEBUG> Skipping placeholder URL: {image_url}")
                image_urls.append((node, "/placeholder.png"))
                continue
                
            print(f"<IMG_DEBUG> Attempting S3 upload for URL: {image_url[:100]}...")
            s3_image_url = await s3_handler.download_and_upload_image(
                image_url,
                project_id
            )
            image_urls.append((node, s3_image_url))
            successful_uploads += 1
            print(f"<IMG_DEBUG> Successfully uploaded image to S3")
            
        except FailedToDownloadImageException as e:
            print(f"<IMG_DEBUG> Failed to download image from URL: {str(image_url)[:100]}. Using placeholder. Error: {str(e)[:100]}")
            image_urls.append((node, "/placeholder.png"))
        except FailedToUploadImageException as e:
            print(f"<IMG_DEBUG> Failed to upload image to S3. Using placeholder. Error: {str(e)[:100]}")
            image_urls.append((node, "/placeholder.png"))
        except Exception as e:
            print(f"<IMG_DEBUG> Unexpected error during S3 upload: {str(e)[:100]}. Using placeholder.")
            image_urls.append((node, "/placeholder.png"))
    
    print(f"<IMG_DEBUG> S3 upload summary: {successful_uploads}/{total_attempts} successful")
    return image_urls

def upload_images_to_s3_and_replace_urls_with_s3_urls(image_nodes_with_descriptions_and_urls, project_id):
    """
    This function uploads images to S3 and replaces the image URLs in the image_nodes_with_descriptions_and_urls list
    with the S3 URLs. Valid placeholder URLs are preserved.
    """
    image_urls = asyncio.run(upload_images_to_s3(image_nodes_with_descriptions_and_urls, project_id))
    
    # Create a new list to store valid entries
    valid_entries = []
    
    for (node, result), (_, s3_image_url) in zip(image_nodes_with_descriptions_and_urls, image_urls):
        if s3_image_url:
            result["image_url"] = s3_image_url
            valid_entries.append((node, result))
        else:
            print(f"<IMG_DEBUG> Removing entry with invalid S3 URL for node: {node}")
    
    return valid_entries

def generate_description_and_image_urls(image_nodes, code, meta_data, variant_type):
    try:
        # Create the async function and run it with timeout
        async def process_with_timeout():
            return await asyncio.wait_for(
                process_nodes(image_nodes, code, meta_data, variant_type),
                timeout=300  # 5 minutes timeout
            )
        
        return asyncio.run(process_with_timeout())
    except asyncio.TimeoutError:
        print("<IMG_DEBUG> Image processing timed out after 5 minutes")
        # Return placeholder results to avoid hanging
        return [(node, {"description": "Image generation timed out", "image_url": "/placeholder.png"}) 
                for node in image_nodes]
    except Exception as e:
        print(f"<IMG_DEBUG> Error in async image processing: {e}")
        # Return placeholder results to avoid hanging
        return [(node, {"description": "Image generation failed", "image_url": "/placeholder.png"}) 
                for node in image_nodes]

def update_code_with_generated_images(code, image_nodes_with_descriptions_and_urls):
    """Enhanced code update with circuit breaker protection"""
    circuit_breaker = get_circuit_breaker('jsx_parsing')
    
    try:
        return circuit_breaker.call(_update_code_protected, code, image_nodes_with_descriptions_and_urls)
    except CircuitBreakerOpenException:
        print("<IMG_DEBUG> Circuit breaker open for code update, returning original code")
        return code
    except Exception as e:
        print(f"<IMG_DEBUG> Error updating code: {e}")
        return code

def _update_code_protected(code, image_nodes_with_descriptions_and_urls):
    """Protected code update with enhanced loop image handling"""
    try:
        # Convert loop images back to the format expected by Node.js script
        processed_results = []
        
        for node, result in image_nodes_with_descriptions_and_urls:
            if isinstance(node, dict) and node.get('type') == 'loop-image':
                # Convert back to JSON string format for the Node.js script
                loop_context = node.get('loopContext', {})
                json_key = json.dumps(loop_context)
                processed_results.append([json_key, result])
                print(f"<IMG_DEBUG> Processing loop image: {loop_context.get('arraySource', 'unknown')[:50]}...")
            else:
                # Regular node
                processed_results.append([node, result])
        
        # Call the Node.js script with both JSX code and results
        result = subprocess.run(
            ['node', './ai/functions/babel-img-util.js', extract_code_from_formatted_response(code), json.dumps(processed_results)],
            capture_output=True,
            text=True,
            check=True,
            timeout=30
        )
        
        if result.stderr:
            print(f"<IMG_DEBUG> Node.js update warnings: {result.stderr}")
        
        updated_code = result.stdout
        
        if updated_code and updated_code.strip():
            print("<IMG_DEBUG> Enhanced code update completed successfully")
            return updated_code
        else:
            print("<IMG_DEBUG> Code update returned empty result")
            return code
            
    except subprocess.CalledProcessError as e:
        print(f"<IMG_DEBUG> Node.js update failed: {str(e)[:100]}")
        return code
    except Exception as e:
        print(f"<IMG_DEBUG> Error in _update_code_protected: {str(e)[:100]}")
        return code

