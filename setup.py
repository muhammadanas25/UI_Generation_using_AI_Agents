from setuptools import setup, find_packages

setup(
    name="akira-ui-generator",
    version="0.1.0",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    python_requires=">=3.8",
    install_requires=[
        "boto3",
        "openai",
        "qdrant-client",
        "python-dotenv",
        "Pillow"
    ]
)
