import asyncio
import json
from typing import List, Dict
from ai.functions.image_cache import ImageCache
from ai.agents.image_generator.agent import ImageGeneratorAgent
from shared.config import (
    IMAGE_CACHE_TABLE_NAME,
    IMAGE_CACHE_BACKGROUND_JOB_INTERVAL
)

class ImageCacheBackgroundJob:
    def __init__(self):
        self.cache = ImageCache()
        self.running = False

    async def generate_additional_images(self, prompt: str, count: int = 3) -> List[str]:
        """Generate additional images for a given prompt"""
        image_urls = []
        for _ in range(count):
            try:
                image_url = ImageGeneratorAgent().generate_image_url(prompt)
                if image_url:
                    await self.cache.cache_image(prompt, image_url)
                    image_urls.append(image_url)
            except Exception as e:
                print(f"Error generating additional image: {e}")
        return image_urls

    async def process_popular_prompts(self, limit: int = 10) -> None:
        """Process the most popular prompts and generate additional images"""
        try:
            popular_prompts = await self.cache.get_most_used_images(limit)
            for prompt_data in popular_prompts:
                prompt = prompt_data.get('description')
                if prompt:
                    await self.generate_additional_images(prompt)
        except Exception as e:
            print(f"Error processing popular prompts: {e}")

    async def run(self) -> None:
        """Run the background job"""
        if self.running:
            return

        self.running = True
        while True:
            try:
                await self.process_popular_prompts()
                await asyncio.sleep(IMAGE_CACHE_BACKGROUND_JOB_INTERVAL)
            except Exception as e:
                print(f"Error in background job: {e}")
                await asyncio.sleep(60)  # Wait before retrying

    def start(self) -> None:
        """Start the background job"""
        asyncio.create_task(self.run())

# Initialize and start the background job
background_job = ImageCacheBackgroundJob()
background_job.start()
