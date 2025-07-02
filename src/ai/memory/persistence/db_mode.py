import boto3
from botocore.exceptions import ClientError

class DBMode:
    def __init__(self, table_name="PROJECTS"):
        self.dynamodb = boto3.resource('dynamodb')
        self.table = self.dynamodb.Table(table_name)

    def create_project(self, project):
        try:
            self.table.put_item(Item=project)
            return project
        except ClientError as e:
            print(e.response['Error']['Message'])
            return None

    def read_project(self, project_id):
        try:
            response = self.table.get_item(Key={'id': project_id})
            return response.get('Item', None)
        except ClientError as e:
            print(e.response['Error']['Message'])
            return None

    def update_project(self, project_id, updated_project):
        try:
            self.table.put_item(Item=updated_project)
            return updated_project
        except ClientError as e:
            print(e.response['Error']['Message'])
            return None

    def delete_project(self, project_id):
        try:
            self.table.delete_item(Key={'id': project_id})
            return True
        except ClientError as e:
            print(e.response['Error']['Message'])
            return False
