import uuid
from ai.functions.generate_variant import generate_variant
from ai.const.index import VariantType

def lambda_handler(event, context):

    meta_data = {
        "project_id": "some_project_id",
        "user_data" : {
            'user_id':"user-1",
            'project_id':"proj-11",
            'session_id': str(uuid.uuid4()),  # Generate a random session ID
        }
    }

    description = "Create a website for a Layer-2 EVM Blockchain that focuses on speed & interoperability."
    generate_variant(description, VariantType.ONE, meta_data)

lambda_handler(None, None)