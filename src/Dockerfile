# Use the official Python 3.10 image as the base image
FROM python:3.10

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY api/requirements.txt .

# Install the required Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application into the container
COPY . .

# Expose the port that the application runs on
EXPOSE 8000

# Command to run the Uvicorn server
CMD ["uvicorn", "api/app.py:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]