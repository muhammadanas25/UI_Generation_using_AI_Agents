from ai.const.models import DALL_E_MODELS, FLUX_MODELS, AgentBrainModel, FLASH_MODELS
import openai
import os
import requests
import time
from PIL import Image
from google import genai
from dotenv import load_dotenv
from google.genai import types
import boto3
from typing import List, Dict, Any
from shared.s3_handler import S3Handler
import logging
import uuid
from io import BytesIO
from ai.vector_search.app import VectorSearchApp
from ai.vector_search.config import VectorSearchConfig
import base64
import binascii
load_dotenv()

class ImageGeneratorAgent():
    def __init__(self, model: AgentBrainModel = AgentBrainModel.gemini_flash_models) -> None:
        self.image_gen_model = model
        self.client = openai.OpenAI() if model in DALL_E_MODELS else genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
        self.config = VectorSearchConfig()
        self.app = VectorSearchApp()
        
        # Initialize S3 handler with environment variables (should work now)
        self.s3_handler = S3Handler(
            bucket_name=os.getenv("AWS_BUCKET_NAME"),
            region_name=os.getenv("AWS_REGION")
        )
    
    def store_image_in_db(self, image_url: str, query_text: str, full_prompt: str, alt_text: str, variant_id: str):
        """Store a newly generated image in the vector database."""
        try:
            start_time = time.time()
            # Create temporary OpenAI client for embeddings (since self.client might be Gemini)
            temp_openai_client = openai.OpenAI()
            
            # Get embedding for the image description
            embedding = temp_openai_client.embeddings.create(
                input=query_text,
                model="text-embedding-3-small"
            ).data[0].embedding
            
            # Create document with all metadata
            document = {
                'variant_id': variant_id,
                'query_text': query_text,
                'full_prompt': full_prompt,
                'alt_text': alt_text,
                'source': 'generated',
                'image_url': image_url,
                'embedding': embedding
            }
            
            # Store in vector database
            self.app.vector_store.index_documents([document])
            logging.info(f'<qdrant logs> Stored new image in vector database: {variant_id} (took {time.time() - start_time:.2f}s)')
            return True
        except Exception as e:
            logging.error(f'<qdrant logs> Failed to store image in database: {str(e)}')
            return False
    
    def generate_image_url(self, img_description: str):
        """Generate or retrieve an image URL with comprehensive fallback strategy."""
        try:
            # First try to find in vector database
            start_time = time.time()
            matches = self.app.search(img_description, top_k=3, score_threshold=0.7)
            
            if matches and len(matches) > 0 and matches[0].get('image_url'):
                print("<vector search debug> matches  ", matches, "matches length  ", matches[0])
                logging.info(f"<vector search debug> IMAGE FOUND IN VECTOR DATABASE... (took {time.time() - start_time:.2f}s)")
                return matches[0].get('image_url')
            
            logging.info("<vector search debug> IMAGE NOT FOUND IN VECTOR DATABASE... OPTING to GENERATE IMAGE .....")
            
            # Strategy 1: Try Gemini Flash
            if self.image_gen_model in FLASH_MODELS:
                logging.info("<vector search debug> GENERATING IMAGE WITH GEMINI FLASH")
                image_url = self._generate_image_gemini_flash(img_description)
                if image_url:
                    # Store the generated image in vector database
                    variant_id = str(uuid.uuid4())
                    success = self.store_image_in_db(
                        image_url=image_url,
                        query_text=img_description,
                        full_prompt=img_description,
                        alt_text=img_description,
                        variant_id=variant_id
                    )
                    
                    if not success:
                        logging.warning("<qdrant logs> Failed to store generated image in database")
                    
                    return image_url
                
                # Fallback to Google Imagen if Gemini Flash fails
                logging.info('<gemini logs> Gemini Flash failed, attempting Google Imagen 3.0 backup...')
                try:
                    backup_result = self._generate_image_gemini_imagen_backup(img_description)
                    if backup_result:
                        logging.info('<gemini logs> Google Imagen 3.0 backup succeeded!')
                        # Store the generated image in vector database
                        variant_id = str(uuid.uuid4())
                        success = self.store_image_in_db(
                            image_url=backup_result,
                            query_text=img_description,
                            full_prompt=img_description,
                            alt_text=img_description,
                            variant_id=variant_id
                        )
                        
                        if not success:
                            logging.warning("<qdrant logs> Failed to store Imagen backup image in database")
                        
                        return backup_result
                    else:
                        logging.error('<gemini logs> Google Imagen 3.0 backup also failed')
                except Exception as backup_error:
                    logging.error(f'<gemini logs> Google Imagen 3.0 backup error: {str(backup_error)}')
                
                # Final fallback to DALL-E
                logging.info('<fallback logs> Both Google models failed, attempting DALL-E fallback...')
                try:
                    # Temporarily switch to DALL-E
                    original_model = self.image_gen_model
                    original_client = self.client
                    
                    self.image_gen_model = AgentBrainModel.DALL_E_3
                    self.client = openai.OpenAI()
                    
                    dalle_result = self._generate_image_dall_e(img_description)
                    
                    # Restore original settings
                    self.image_gen_model = original_model
                    self.client = original_client
                    
                    if dalle_result:
                        logging.info('<fallback logs> DALL-E fallback succeeded!')
                        # Store the generated image in vector database
                        variant_id = str(uuid.uuid4())
                        success = self.store_image_in_db(
                            image_url=dalle_result,
                            query_text=img_description,
                            full_prompt=img_description,
                            alt_text=img_description,
                            variant_id=variant_id
                        )
                        
                        if not success:
                            logging.warning("<qdrant logs> Failed to store DALL-E fallback image in database")
                        
                        return dalle_result
                    else:
                        logging.error('<fallback logs> DALL-E fallback also failed')
                
                except Exception as dalle_error:
                    logging.error(f'<fallback logs> DALL-E fallback error: {str(dalle_error)}')
                    # Restore original settings in case of error
                    self.image_gen_model = original_model
                    self.client = original_client
            
            # Strategy 2: DALL-E models
            elif self.image_gen_model in DALL_E_MODELS:
                logging.info("<vector search debug> GENERATING IMAGE WITH DALL-E")
                image_url = self._generate_image_dall_e(img_description)
                if image_url:
                    # Store the generated image in vector database
                    variant_id = str(uuid.uuid4())
                    success = self.store_image_in_db(
                        image_url=image_url,
                        query_text=img_description,
                        full_prompt=img_description,
                        alt_text=img_description,
                        variant_id=variant_id
                    )
                    
                    if not success:
                        logging.warning("<qdrant logs> Failed to store generated image in database")
                    
                    return image_url
            
            # Strategy 3: Flux models
            elif self.image_gen_model in FLUX_MODELS:
                logging.info("<vector search debug> GENERATING IMAGE WITH FLUX")
                image_url = self._generate_image_flux(img_description)
                if image_url:
                    # Store the generated image in vector database
                    variant_id = str(uuid.uuid4())
                    success = self.store_image_in_db(
                        image_url=image_url,
                        query_text=img_description,
                        full_prompt=img_description,
                        alt_text=img_description,
                        variant_id=variant_id
                    )
                    
                    if not success:
                        logging.warning("<qdrant logs> Failed to store generated image in database")
                    
                    return image_url
            else:
                raise ValueError(f"Model {self.image_gen_model} not supported for image generation")
            
            # If we reach here, all methods failed
            logging.error("<image generation> All image generation methods failed")
            return None
            
        except Exception as e:
            logging.error(f"<image generation> Critical error in image generation: {str(e)}")
            return None
    
    def _generate_image_gemini_flash(self, img_description):
        """Generate image using Gemini Flash."""
        try:
            start_time = time.time()
            response = self.client.models.generate_content(
                model=self.image_gen_model,
                contents=img_description,
                config=types.GenerateContentConfig(
                    response_modalities=['TEXT', 'IMAGE']
                )
            )
            
            for part in response.candidates[0].content.parts:
                if part.text is not None:
                    logging.info(f'<gemini logs> Received text response: {part.text}')
                elif part.inline_data is not None:
                    logging.info(f'<gemini logs> Received image data from Gemini')
                    image_bytes = part.inline_data.data
                    logging.info(f'<gemini logs> Image bytes length: {len(image_bytes)}')
                    
                    try:
                        # Check if we have valid image data
                        if not image_bytes or len(image_bytes) < 100:
                            logging.error(f'<gemini logs> Received invalid or empty image data')
                            return None
                            
                        # Enhanced decoding strategy with multiple approaches
                        image = None
                        decoded_successfully = False
                        
                        # Strategy 1: Try direct bytes approach (Official Google docs approach)
                        try:
                            if isinstance(image_bytes, bytes):
                                image = Image.open(BytesIO(image_bytes))
                                logging.info(f'<gemini logs> Strategy 1 (Direct bytes) successful - size: {image.size}, format: {image.format}, mode: {image.mode}')
                                decoded_successfully = True
                        except Exception as direct_error:
                            logging.warning(f'<gemini logs> Strategy 1 (Direct bytes) failed: {str(direct_error)}')
                        
                        # Strategy 2: Try base64 decode if Strategy 1 failed
                        if not decoded_successfully:
                            try:
                                # Convert bytes to string first (base64 is text-based)
                                if isinstance(image_bytes, bytes):
                                    base64_string = image_bytes.decode('utf-8')
                                else:
                                    base64_string = image_bytes
                                
                                # Decode from base64
                                decoded_bytes = base64.b64decode(base64_string)
                                
                                # Now use PIL on the decoded bytes
                                image = Image.open(BytesIO(decoded_bytes))
                                logging.info(f'<gemini logs> Strategy 2 (Base64 decode) successful - size: {image.size}, format: {image.format}, mode: {image.mode}')
                                decoded_successfully = True
                                
                            except Exception as base64_error:
                                logging.warning(f'<gemini logs> Strategy 2 (Base64 decode) failed: {str(base64_error)}')
                        
                        # Strategy 3: Try to handle if data is hex-encoded
                        if not decoded_successfully:
                            try:
                                if isinstance(image_bytes, (str, bytes)):
                                    # Convert to string if bytes
                                    hex_string = image_bytes.decode('utf-8') if isinstance(image_bytes, bytes) else image_bytes
                                    # Remove any whitespace and newlines
                                    hex_string = hex_string.replace(' ', '').replace('\n', '').replace('\r', '')
                                    # Try to decode from hex
                                    decoded_bytes = bytes.fromhex(hex_string)
                                    image = Image.open(BytesIO(decoded_bytes))
                                    logging.info(f'<gemini logs> Strategy 3 (Hex decode) successful - size: {image.size}, format: {image.format}, mode: {image.mode}')
                                    decoded_successfully = True
                            except Exception as hex_error:
                                logging.warning(f'<gemini logs> Strategy 3 (Hex decode) failed: {str(hex_error)}')
                        
                        # If all strategies failed, log debug info and return None
                        if not decoded_successfully:
                            debug_info = {
                                'data_type': type(image_bytes).__name__,
                                'data_length': len(image_bytes),
                                'first_20_bytes': image_bytes[:20].hex() if isinstance(image_bytes, bytes) and len(image_bytes) >= 20 else str(image_bytes)[:20],
                                'is_bytes': isinstance(image_bytes, bytes),
                                'is_string': isinstance(image_bytes, str)
                            }
                            logging.error(f'<gemini logs> All decoding strategies failed. Debug info: {debug_info}')
                            
                            # Save debug data for analysis
                            try:
                                debug_prefix = f'/tmp/debug_gemini_image_{int(time.time())}'
                                with open(f'{debug_prefix}_raw.bin', 'wb') as f:
                                    if isinstance(image_bytes, bytes):
                                        f.write(image_bytes)
                                    else:
                                        f.write(str(image_bytes).encode('utf-8'))
                                logging.info(f'<gemini logs> Saved debug file: {debug_prefix}_raw.bin')
                            except Exception as debug_error:
                                logging.error(f'<gemini logs> Debug save failed: {str(debug_error)}')
                            
                            return None
                        
                        # Only process image if decoding was successful
                        if decoded_successfully and image:
                            # Convert to RGB if necessary (for S3 compatibility)
                            if image.mode in ('RGBA', 'P'):
                                background = Image.new('RGB', image.size, (255, 255, 255))
                                if image.mode == 'P':
                                    image = image.convert('RGBA')
                                background.paste(image, mask=image.split()[-1] if image.mode == 'RGBA' else None)
                                image = background
                                logging.info('<gemini logs> Converted RGBA/P image to RGB format')
                            elif image.mode != 'RGB':
                                image = image.convert('RGB')
                                logging.info(f'<gemini logs> Converted image from {image.mode} to RGB')
                            
                            # Try to upload to S3, with fallback options
                            image_url = self.upload_image_to_s3(image)
                            if image_url:
                                logging.info('<gemini logs> S3 upload successful')
                                # Store image in vector database
                                try:
                                    # Use asyncio to run the async function
                                    import asyncio
                                    loop = asyncio.new_event_loop()
                                    asyncio.set_event_loop(loop)
                                    loop.run_until_complete(self.app.store_image_in_vector_db(
                                        image_url=image_url,
                                        description=img_description,
                                        variant_id=str(uuid.uuid4()),
                                        query_text=img_description,
                                        full_prompt=img_description,
                                        alt_text=img_description,
                                        source='generated'
                                    ))
                                    loop.close()
                                except Exception as db_error:
                                    logging.warning(f'<gemini logs> Vector DB storage failed: {db_error}')
                                return image_url
                            else:
                                logging.error('<gemini logs> S3 upload failed, trying S3Handler fallback')
                                try:
                                    # Convert PIL Image to bytes for S3Handler
                                    buffer = BytesIO()
                                    image.save(buffer, format="PNG")
                                    buffer.seek(0)
                                    image_bytes = buffer.getvalue()
                                    
                                    # Use S3Handler as fallback (use asyncio to run async function)
                                    import asyncio
                                    loop = asyncio.new_event_loop()
                                    asyncio.set_event_loop(loop)
                                    fallback_url = loop.run_until_complete(self.s3_handler.upload_image_to_s3(
                                        image_content=image_bytes,
                                        image_variant_name=str(uuid.uuid4()),
                                        image_extension="png"
                                    ))
                                    loop.close()
                                    
                                    if fallback_url:
                                        logging.info('<gemini logs> S3Handler fallback successful')
                                        # Store image in vector database
                                        try:
                                            loop = asyncio.new_event_loop()
                                            asyncio.set_event_loop(loop)
                                            loop.run_until_complete(self.app.store_image_in_vector_db(
                                                image_url=fallback_url,
                                                description=img_description,
                                                variant_id=str(uuid.uuid4()),
                                                query_text=img_description,
                                                full_prompt=img_description,
                                                alt_text=img_description,
                                                source='generated'
                                            ))
                                            loop.close()
                                        except Exception as db_error:
                                            logging.warning(f'<gemini logs> Vector DB storage failed: {db_error}')
                                        return fallback_url
                                    else:
                                        logging.error('<gemini logs> S3Handler fallback failed, will trigger backup models')
                                except Exception as s3_error:
                                    logging.error(f'<gemini logs> S3Handler fallback failed: {s3_error}, will trigger backup models')

                    except Exception as e:
                        logging.error(f'<gemini logs> Error processing image: {str(e)}')
                        return None

        except Exception as e:
            logging.error(f'<gemini logs> Error generating image with Gemini Flash: {str(e)}')
            logging.error(f'<gemini logs> Full error details: {getattr(e, "http_status", "No HTTP status")}')
            logging.error(f'<gemini logs> Full error details: {getattr(e, "error", str(e))}')
            return None
    
    def _generate_image_dall_e(self, img_description):
        """Generate image using DALL-E."""
        try:
            start_time = time.time()
            response = self.client.images.generate(
                model=self.image_gen_model,
                prompt=img_description,
                size="1024x1024",
                quality="hd",
                n=1
            )
            
            image_url = response.data[0].url
            logging.info(f"<dalle logs> Generated image (took {time.time() - start_time:.2f}s)")
            return image_url
        except Exception as e:
            logging.error(f"<dalle logs> Error generating image: {str(e)}")
            return None
    
    def _generate_image_flux(self, img_description):
        """Generate image using Flux."""
        try:
            start_time = time.time()
            self.flux_api = os.getenv('FLUX_API_KEY')
            
            # Make the request
            response = requests.post(
                self.image_gen_model,
                headers={
                    'accept': 'application/json',
                    'x-key': self.flux_api,
                    'Content-Type': 'application/json',
                },
                json={
                    'prompt': img_description,
                    'width': 1024,
                    'height': 768,
                }
            )
            result = response.json()
            
            if "id" in result:
                request_id = result["id"]
                max_tries = 0
                
                while max_tries < 15:
                    time.sleep(1)
                    result_response = requests.get(
                        AgentBrainModel.FLUX_RESULT_ENDPOINT,
                        headers={
                            'accept': 'application/json',
                            'x-key': self.flux_api, 
                        },
                        params={
                            'id': request_id,
                        }
                    )
                    result = result_response.json()
                    
                    if result["status"] == "Ready":
                        image_url = result['result']['sample']
                        if image_url:
                            logging.info(f"<flux logs> Generated image (took {time.time() - start_time:.2f}s)")
                            return image_url
                        else:
                            logging.warning("<flux logs> No URL found in result")
                            max_tries += 1
                    else:
                        max_tries += 1
                        logging.debug(f"<flux logs> Image generation status: {result['status']}")
                
                # If we exit the loop without success
                logging.error("<flux logs> Image generation timed out after 15 attempts")
                return None
            else:
                logging.error("<flux logs> No request ID received from Flux API")
                return None
            
        except Exception as e:
            logging.error(f"<flux logs> Error generating image: {str(e)}")
            return None
    
    def _generate_image_gemini_flash_old(self, img_description):
        self.gemini_api = os.getenv('GEMINI_API_KEY')
        try:
            response = self.client.models.generate_content(
                model=self.image_gen_model,
                contents=img_description,
                config=types.GenerateContentConfig(
                    response_modalities=['TEXT', 'IMAGE']
                )
            )
            for part in response.candidates[0].content.parts:
                if part.text is not None:
                    print(part.text)
                elif part.inline_data is not None:
                    image_bytes = part.inline_data.data
                    print('<qdrant logs> image_bytes  ', image_bytes)
                    image = Image.open(BytesIO(image_bytes))

                    # ✅ Upload to S3 and get the public URL
                    image_url = self.upload_image_to_s3(image)
                    print('<qdrant logs> image_url  ', image_url)
                    return image_url

        except Exception as e:
            print(getattr(e, "http_status", "No HTTP status"))
            print(getattr(e, "error", str(e)))
            return None
        
    
    def upload_image_to_s3(self, image):
        """Upload image to S3 with improved error handling."""
        try:
            # FIXED: Try environment variables first, then fallback to hardcoded config
            bucket_name = os.getenv("AWS_BUCKET_NAME") or os.getenv("s3_bucket_name")
            if not bucket_name:
                # Fallback to hardcoded bucket name from shared config
                from shared.config import GENERATED_IMAGES_BUCKET
                bucket_name = GENERATED_IMAGES_BUCKET
                logging.info(f"<s3 upload> Using fallback bucket name: {bucket_name}")
            
            if not bucket_name:
                logging.error("<s3 upload> No bucket name found in environment variables or config")
                return None
                
            # Try both lowercase and uppercase environment variable names
            s3 = boto3.client(
                "s3",
                aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID") or os.getenv("aws_access_key_id"),
                aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY") or os.getenv("aws_secret_access_key"),
                region_name=os.getenv("AWS_REGION") or os.getenv("aws_region")
            )

            image_id = str(uuid.uuid4()).replace('-', '')
            key = f"gemini-images/{image_id}.png"

            buffer = BytesIO()
            # Ensure image is in RGB mode for PNG
            if image.mode != 'RGB':
                image = image.convert('RGB')
            image.save(buffer, format="PNG")
            buffer.seek(0)

            s3.upload_fileobj(
                buffer,
                bucket_name,
                key,
                ExtraArgs={"ContentType": "image/png", "ACL": "public-read"}
            )

            # Return public URL
            region = os.getenv("AWS_REGION") or os.getenv("aws_region") or "us-west-2"
            return f"https://{bucket_name}.s3.{region}.amazonaws.com/{key}"
            
        except Exception as e:
            logging.error(f"<s3 upload> Error uploading to S3: {str(e)}")
            # Return None so fallback can continue
            return None

    def _generate_image_gemini_imagen_backup(self, img_description):
        """Generate image using Google Imagen 3.0 as backup."""
        try:
            start_time = time.time()
            logging.info('<imagen logs> Using Google Imagen 3.0 as backup model')
            
            response = self.client.models.generate_images(
                model=AgentBrainModel.gemini_imagen_backup,
                prompt=img_description,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                )
            )
            
            for generated_image in response.generated_images:
                try:
                    # Official Google Imagen approach
                    image = Image.open(BytesIO(generated_image.image.image_bytes))
                    logging.info(f'<imagen logs> Successfully opened image using official Imagen approach - size: {image.size}, format: {image.format}, mode: {image.mode}')
                    
                    # Convert to RGB if necessary (for S3 compatibility)
                    if image.mode in ('RGBA', 'P'):
                        background = Image.new('RGB', image.size, (255, 255, 255))
                        if image.mode == 'P':
                            image = image.convert('RGBA')
                        background.paste(image, mask=image.split()[-1] if image.mode == 'RGBA' else None)
                        image = background
                        logging.info('<imagen logs> Converted RGBA/P image to RGB format')
                    elif image.mode != 'RGB':
                        image = image.convert('RGB')
                        logging.info(f'<imagen logs> Converted image from {image.mode} to RGB')
                    
                    # Try to upload to S3, but don't fail if it doesn't work
                    image_url = self.upload_image_to_s3(image)
                    if image_url:
                        logging.info(f'<imagen logs> Generated and uploaded image using Imagen backup (took {time.time() - start_time:.2f}s)')
                        return image_url
                    else:
                        # S3 upload failed, but we still have a valid image
                        # Try to use the S3Handler as fallback
                        try:
                            # Convert PIL Image to bytes for S3Handler
                            buffer = BytesIO()
                            image.save(buffer, format="PNG")
                            buffer.seek(0)
                            image_bytes = buffer.getvalue()
                            
                            # FIXED: using correct method name and asyncio for async function
                            import asyncio
                            loop = asyncio.new_event_loop()
                            asyncio.set_event_loop(loop)
                            fallback_url = loop.run_until_complete(self.s3_handler.upload_image_to_s3(
                                image_content=image_bytes,
                                image_variant_name=str(uuid.uuid4()),
                                image_extension="png"
                            ))
                            loop.close()
                            
                            if fallback_url:
                                logging.info(f'<imagen logs> Generated image and uploaded via S3Handler fallback (took {time.time() - start_time:.2f}s)')
                                return fallback_url
                            else:
                                logging.warning('<imagen logs> Both S3 upload methods failed, but image was generated successfully')
                                # Instead of returning None (which triggers DALL-E), we could save locally or use another method
                                # For now, let's still return None but with better logging
                                return None
                        except Exception as fallback_error:
                            logging.error(f'<imagen logs> S3Handler fallback also failed: {str(fallback_error)}')
                            return None
                    
                except Exception as process_error:
                    logging.error(f'<imagen logs> Error processing Imagen image: {str(process_error)}')
                    continue
            
            logging.error('<imagen logs> No valid images generated by Imagen backup')
            return None
            
        except Exception as e:
            logging.error(f'<imagen logs> Error generating image with Imagen backup: {str(e)}')
            return None

def main():
    agent = ImageGeneratorAgent()
    image_url = agent.generate_image_url("A beautiful landscape with mountains and a lake")
    print(image_url)