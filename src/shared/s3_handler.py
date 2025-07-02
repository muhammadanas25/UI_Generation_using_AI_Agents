import boto3
import botocore.exceptions
import requests
import uuid
import botocore
from io import BytesIO
from tenacity import retry, stop_after_attempt, wait_fixed


class FailedToDownloadImageException(Exception):
    pass


class FailedToUploadImageException(Exception):
    pass


class S3Handler:
    def __init__(self, bucket_name: str, region_name: str):
        """
        Initialize the S3Handler with the given bucket name and region name.

        :param bucket_name: The name of the S3 bucket.
        :param region_name: The AWS region where the S3 bucket is located.
        """
        self.bucket_name = bucket_name
        self.region_name = region_name
        self.s3_client = boto3.client(
            's3', 
            region_name=region_name, 
            config=botocore.config.Config(connect_timeout=30, read_timeout=300)
        )

    @staticmethod
    @retry(stop=stop_after_attempt(3), wait=wait_fixed(2))
    async def download_image_from_url(image_url: str) -> bytes:
        """
        Download an image from a given URL and return the image content as bytes.
        Enhanced with better timeout handling and retry logic for different URL types.

        :param image_url: The URL of the image to download.
        :return: The content of the downloaded image as bytes.
        """
        try:
            # Enhanced timeout and session configuration
            import aiohttp
            import asyncio
            
            # Configure timeouts based on URL type
            if any(domain in image_url for domain in ['oaidalleapiprodscus.blob.core.windows.net', 'amazonaws.com']):
                # Longer timeout for large cloud storage files
                timeout = aiohttp.ClientTimeout(total=60, connect=10, sock_read=30)
            else:
                # Standard timeout for other URLs
                timeout = aiohttp.ClientTimeout(total=30, connect=5, sock_read=15)
            
            # Use aiohttp for better async handling
            try:
                async with aiohttp.ClientSession(timeout=timeout) as session:
                    async with session.get(image_url, allow_redirects=True) as response:
                        if response.status == 200:
                            content = await response.read()
                            
                            # Validate content is actually an image
                            if len(content) < 100:
                                raise FailedToDownloadImageException(f"Downloaded content too small: {len(content)} bytes")
                            
                            # Basic image format validation
                            if not (content.startswith(b'\xff\xd8\xff') or  # JPEG
                                   content.startswith(b'\x89PNG') or        # PNG
                                   content.startswith(b'GIF') or            # GIF
                                   content.startswith(b'\x42\x4d')):        # BMP
                                print(f"<S3_DEBUG> Warning: Downloaded content may not be a valid image format from {image_url[:100]}...")
                            
                            print(f"<S3_DEBUG> Successfully downloaded {len(content)} bytes from {image_url[:100]}...")
                            return content
                        else:
                            raise FailedToDownloadImageException(f"HTTP {response.status}: Failed to download from {image_url}")
                            
            except aiohttp.ClientError as aio_error:
                print(f"<S3_DEBUG> aiohttp failed for {image_url[:100]}..., trying requests fallback: {str(aio_error)}")
                
                # Fallback to requests with enhanced configuration
                session = requests.Session()
                session.mount('http://', requests.adapters.HTTPAdapter(max_retries=2))
                session.mount('https://', requests.adapters.HTTPAdapter(max_retries=2))
                
                # Set appropriate timeout based on URL
                if any(domain in image_url for domain in ['oaidalleapiprodscus.blob.core.windows.net', 'amazonaws.com']):
                    timeout = (10, 45)  # (connect, read)
                else:
                    timeout = (5, 20)
                
                response = session.get(
                    image_url, 
                    timeout=timeout,
                    allow_redirects=True,
                    stream=True,
                    headers={
                        'User-Agent': 'Mozilla/5.0 (compatible; ImageDownloader/1.0)',
                        'Accept': 'image/*,*/*;q=0.8'
                    }
                )
                response.raise_for_status()
                
                # Download in chunks to handle large files
                content = b''
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        content += chunk
                        # Prevent downloading files that are too large (>50MB)
                        if len(content) > 50 * 1024 * 1024:
                            raise FailedToDownloadImageException(f"File too large: {len(content)} bytes")
                
                if len(content) < 100:
                    raise FailedToDownloadImageException(f"Downloaded content too small: {len(content)} bytes")
                
                print(f"<S3_DEBUG> Fallback download successful: {len(content)} bytes")
                return content
                
        except requests.RequestException as e:
            error_msg = f"Failed to download image from URL: {image_url[:100]}... Error: {str(e)}"
            print(f"<S3_DEBUG> {error_msg}")
            raise FailedToDownloadImageException(error_msg)
        except asyncio.TimeoutError as e:
            error_msg = f"Timeout downloading image from URL: {image_url[:100]}... Error: {str(e)}"
            print(f"<S3_DEBUG> {error_msg}")
            raise FailedToDownloadImageException(error_msg)
        except Exception as e:
            error_msg = f"Unexpected error downloading image from URL: {image_url[:100]}... Error: {str(e)}"
            print(f"<S3_DEBUG> {error_msg}")
            raise FailedToDownloadImageException(error_msg)

    async def upload_image_to_s3(
        self,
        image_content: bytes,
        image_variant_name: str,
        image_extension: str = "jpg"
    ) -> str:
        """
        Upload an image to the configured S3 bucket and return the URL of the uploaded image.

        :param image_content: The binary content of the image to upload.
        :param image_variant_name: The name of the image variant (used in the object key).
        :param image_extension: The file extension for the image (default is "jpg").
        :return: The public URL of the uploaded image.
        """
        image_id = uuid.uuid4().hex
        image_key = f"{image_variant_name}/{image_id}.{image_extension}"

        try:
            # Use upload_fileobj
            with BytesIO(image_content) as image_stream:
                self.s3_client.upload_fileobj(
                    image_stream, 
                    self.bucket_name, 
                    image_key,
                    ExtraArgs={'ACL': 'public-read'}
                )

            return f"https://{self.bucket_name}.s3.{self.region_name}.amazonaws.com/{image_key}"
        except botocore.exceptions.ClientError as e:
            raise FailedToUploadImageException(f"Failed to upload image to S3. Error: {str(e)}")

    async def download_and_upload_image(
        self,
        image_url: str,
        image_variant_name: str,
        image_extension: str = "jpg"
    ) -> str:
        """
        Download an image from a URL and upload it to the configured S3 bucket.

        :param image_url: The URL of the image to download.
        :param image_variant_name: The name of the image variant (used in the object key).
        :param image_extension: The file extension for the image (default is "jpg").
        :return: The public URL of the uploaded image.
        """
        image_content = await self.download_image_from_url(image_url)
        return await self.upload_image_to_s3(
            image_content=image_content,
            image_variant_name=image_variant_name,
            image_extension=image_extension
        )
