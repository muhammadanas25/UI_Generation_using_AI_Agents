import boto3
from api.config import PROJECTS_TABLE_NAME, VARIANTS_TABLE_NAME, REGION_NAME

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)

# Function to delete all items from a table
def delete_all_items_from_table(table_name):
    table = dynamodb.Table(table_name)
    
    # Scan the table to get all items
    response = table.scan()
    items = response.get('Items', [])
    
    # Loop through items and delete each one
    for item in items:
        print(f"Deleting item: {item}")
        table.delete_item(
            Key={
                'project_id': item['project_id']  # Adjust key as needed
            }
        )
    
    # Handle pagination if there are more items
    while 'LastEvaluatedKey' in response:
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        items = response.get('Items', [])
        
        for item in items:
            print(f"Deleting item: {item}")
            table.delete_item(
                Key={
                    'project_id': item['project_id']  # Adjust key as needed
                }
            )

# Main script to delete contents of both tables
if __name__ == "__main__":
    delete_all_items_from_table(PROJECTS_TABLE_NAME)
    delete_all_items_from_table(VARIANTS_TABLE_NAME)
