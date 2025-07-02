import httpx
import asyncio

async def send_dummy_request():
    url = "http://127.0.0.1:8000/generate_project"
    payload = {"query": "Build me a website that shows information about polar bears."}

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload, timeout=60)
        print(response.status_code)
        print("API response ==",response.json())

if __name__ == "__main__":
    asyncio.run(send_dummy_request())