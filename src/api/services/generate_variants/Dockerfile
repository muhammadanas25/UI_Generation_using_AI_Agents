FROM public.ecr.aws/lambda/python:3.10

ARG FUNCTION_DIR="/var/task"
ENV HOME=/tmp
WORKDIR ${FUNCTION_DIR}
RUN yum update -y
RUN yum install libglvnd-glx -y

# Install Node.js using NodeSource
RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash -
RUN yum install -y nodejs

# Copy both Python and Node.js dependency files
COPY requirements.txt package.json ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt 

# Install Node.js dependencies
RUN npm install

# Accept build arguments
ARG OPENAI_API_KEY
ARG ANTHROPIC_API_KEY
ARG BLACKBOARD_TABLE
ARG LANGFUSE_SECRET_KEY
ARG LANGFUSE_PUBLIC_KEY
ARG LANGFUSE_HOST
ARG FLUX_API_KEY

# Set environment variables
ENV OPENAI_API_KEY=${OPENAI_API_KEY}
ENV ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
ENV BLACKBOARD_TABLE=${BLACKBOARD_TABLE}
ENV LANGFUSE_SECRET_KEY=${LANGFUSE_SECRET_KEY}
ENV LANGFUSE_PUBLIC_KEY=${LANGFUSE_PUBLIC_KEY}
ENV LANGFUSE_HOST=${LANGFUSE_HOST}
ENV FLUX_API_KEY=${FLUX_API_KEY}

COPY . .

CMD [ "api.services.generate_variants.main.lambda_handler" ]
