

import os
from dotenv import load_dotenv
import logging
from pathlib import Path

load_dotenv()

REGION_NAME = 'us-west-2'  # Replace with your AWS region
GENERATED_IMAGES_BUCKET = 'akira-ui-generator'
IMAGE_CACHE_TABLE_NAME = 'akira-ui-generator-image-cache'
OPENAI_API_KEY=  os.getenv("OPENAI_API_KEY")

