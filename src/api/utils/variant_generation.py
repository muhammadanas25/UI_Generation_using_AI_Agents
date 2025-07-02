import uuid
from ai.functions.extract_import_statements import extract_import_statements
from ai.functions.generate_variant_lambda import generate_variant
from ai.agents.ui_updater.agent import UIUpdaterAgent
from ai.agents.ui_snippet_updater.agent import UISnippetUpdaterAgent


def generate_variant_data(query_text, variant_type, project_id, user_id, variant_id):
    meta_data = {
        "project_id": project_id,
        "variant_id": variant_id,
        "user_data": {
            'user_id': user_id,
            'project_id': project_id,
            'session_id': str(uuid.uuid4()),  # Generate a new session ID
        }
    }
    return generate_variant(query_text, variant_type, meta_data)

def update_variant_data(query_text, additional_context, project_id, user_id, variant_id, variant_type):
    meta_data = {
        "project_id": project_id,   
        "variant_id": variant_id,
        "user_data": {
            'user_id': user_id,
            'project_id': project_id,
            'session_id': str(uuid.uuid4()),  # Generate a new session ID
        }
    }
    
    # TODO: replace current_code with an object (additional_context) that contains the current code and the past messages
    # {
    #     "current_code": current_code,
    #     "past_messages": past_messages
    # }

    if additional_context.get('current_code_snippet'):
        updated_variant_tsx = UISnippetUpdaterAgent(query_text, additional_context, meta_data, variant_type, variant_id).run()
    else:
        updated_variant_tsx = UIUpdaterAgent(query_text, additional_context, meta_data, variant_type, variant_id).run()

    imports = extract_import_statements(updated_variant_tsx)
    print("Extracted Imports -------------------------:", imports)
    return updated_variant_tsx, imports
