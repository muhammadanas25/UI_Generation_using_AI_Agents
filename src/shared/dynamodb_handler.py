import boto3
from typing import Dict, Optional, Any
from botocore.exceptions import ClientError

class DynamoDBHandler:
    def __init__(self):
        self.client = boto3.client('dynamodb')
        self.resource = boto3.resource('dynamodb')

    async def put_item(self, table_name: str, item: Dict) -> None:
        """Add a new item to the table"""
        try:
            self.client.put_item(
                TableName=table_name,
                Item=self._convert_to_dynamodb_format(item)
            )
        except ClientError as e:
            print(f"Error putting item: {e}")
            raise

    async def get_item(self, table_name: str, key: Dict) -> Optional[Dict]:
        """Get an item from the table"""
        try:
            response = self.client.get_item(
                TableName=table_name,
                Key=self._convert_to_dynamodb_format(key)
            )
            return self._convert_from_dynamodb_format(response.get('Item', {}))
        except ClientError as e:
            print(f"Error getting item: {e}")
            return None

    async def update_item(self, table_name: str, key: Dict, update_expression: str, 
                        expression_attribute_values: Dict) -> None:
        """Update an existing item"""
        try:
            self.client.update_item(
                TableName=table_name,
                Key=self._convert_to_dynamodb_format(key),
                UpdateExpression=update_expression,
                ExpressionAttributeValues=self._convert_to_dynamodb_format(
                    expression_attribute_values
                )
            )
        except ClientError as e:
            print(f"Error updating item: {e}")
            raise

    async def query(self, table_name: str, key_condition_expression: str, 
                   expression_attribute_values: Dict) -> list[Dict]:
        """Query items from the table"""
        try:
            response = self.client.query(
                TableName=table_name,
                KeyConditionExpression=key_condition_expression,
                ExpressionAttributeValues=self._convert_to_dynamodb_format(
                    expression_attribute_values
                )
            )
            return [self._convert_from_dynamodb_format(item) 
                   for item in response.get('Items', [])]
        except ClientError as e:
            print(f"Error querying items: {e}")
            return []

    async def scan(self, table_name: str) -> list[Dict]:
        """Scan all items in the table"""
        try:
            response = self.client.scan(TableName=table_name)
            return [self._convert_from_dynamodb_format(item) 
                   for item in response.get('Items', [])]
        except ClientError as e:
            print(f"Error scanning table: {e}")
            return []

    def _convert_to_dynamodb_format(self, item: Dict) -> Dict:
        """Convert Python types to DynamoDB format"""
        converted = {}
        for key, value in item.items():
            if value is None:
                continue
            elif isinstance(value, str):
                converted[key] = {'S': value}
            elif isinstance(value, (int, float)):
                converted[key] = {'N': str(value)}
            elif isinstance(value, dict):
                converted[key] = {'M': self._convert_to_dynamodb_format(value)}
            elif isinstance(value, list):
                converted[key] = {'L': [self._convert_to_dynamodb_format(v) for v in value]}
            elif isinstance(value, bool):
                converted[key] = {'BOOL': value}
        return converted

    def _convert_from_dynamodb_format(self, item: Dict) -> Dict:
        """Convert DynamoDB format to Python types"""
        converted = {}
        for key, value in item.items():
            if 'S' in value:
                converted[key] = value['S']
            elif 'N' in value:
                try:
                    converted[key] = int(value['N'])
                except ValueError:
                    converted[key] = float(value['N'])
            elif 'M' in value:
                converted[key] = self._convert_from_dynamodb_format(value['M'])
            elif 'L' in value:
                converted[key] = [self._convert_from_dynamodb_format(v) for v in value['L']]
            elif 'BOOL' in value:
                converted[key] = value['BOOL']
        return converted
