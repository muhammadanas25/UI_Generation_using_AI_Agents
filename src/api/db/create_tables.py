import boto3
from api.config import PROJECTS_TABLE_NAME, VARIANTS_TABLE_NAME, REGION_NAME

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)

# Create the Projects table
def create_projects_table():
    try:
        table = dynamodb.create_table(
            TableName=PROJECTS_TABLE_NAME,
            KeySchema=[
                {'AttributeName': 'project_id', 'KeyType': 'HASH'}  # Partition key
            ],
            AttributeDefinitions=[
                {'AttributeName': 'project_id', 'AttributeType': 'S'}
            ],
            BillingMode='PAY_PER_REQUEST'  # On-demand pricing
        )
        print(f"Creating {PROJECTS_TABLE_NAME} table. Please wait...")
        table.wait_until_exists()
        print(f"{PROJECTS_TABLE_NAME} table created successfully!")
    except Exception as e:
        print(f"Error creating {PROJECTS_TABLE_NAME}: {str(e)}")


def create_variants_table():
    try:
        table = dynamodb.create_table(
            TableName=VARIANTS_TABLE_NAME,
            KeySchema=[
                {'AttributeName': 'variant_id', 'KeyType': 'HASH'}  # Primary key
            ],
            AttributeDefinitions=[
                {'AttributeName': 'variant_id', 'AttributeType': 'S'},
                {'AttributeName': 'project_id', 'AttributeType': 'S'},
                {'AttributeName': 'updated_at', 'AttributeType': 'S'}  # Sort key for GSI
            ],
            BillingMode='PAY_PER_REQUEST',  # On-demand pricing
            GlobalSecondaryIndexes=[
                {
                    'IndexName': 'project_id-updated_at-index',
                    'KeySchema': [
                        {'AttributeName': 'project_id', 'KeyType': 'HASH'},  # Partition key
                        {'AttributeName': 'updated_at', 'KeyType': 'RANGE'}  # Sort key for latest variant
                    ],
                    'Projection': {'ProjectionType': 'ALL'},  # Include all attributes
                }
            ]
        )
        print(f"Creating {VARIANTS_TABLE_NAME} table. Please wait...")
        table.wait_until_exists()
        print(f"{VARIANTS_TABLE_NAME} table created successfully!")
    except Exception as e:
        print(f"Error creating {VARIANTS_TABLE_NAME}: {str(e)}")


# Main script to create both tables
if __name__ == "__main__":
    create_projects_table()
    create_variants_table()
