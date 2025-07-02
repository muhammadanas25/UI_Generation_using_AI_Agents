import sys
import os
import asyncio
import uuid  # Add this import at the top

# Add the root directory of your project to sys.path
# sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from api.services.project_generation.project_generation import generate_project

USER_DATA = {
    'user_id':"user-1",
    'project_id':"proj-11",
    'session_id': str(uuid.uuid4()),  # Generate a random session ID
}

async def main():
    query = "Create a website for a Layer-2 EVM Blockchain that focuses on speed & interoperability."
    # query = "Build me a website that shows information about polar bears."
    # query = "Build me a website for an IT services company"
    result = await generate_project(query, USER_DATA, "test-func-p1", None)

if __name__ == "__main__":
    asyncio.run(main())