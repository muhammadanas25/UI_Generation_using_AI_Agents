import uuid
from ai.functions.generate_images import update_code_with_generated_images
from ai.memory.blackboard.Blackboard import BlackBoard
from dotenv import load_dotenv
load_dotenv()

meta_data = {
    "project_id": "some_project_id",
    "user_data" : {
        'user_id':"user-1",
        'project_id':"proj-11",
        'session_id': str(uuid.uuid4()),  # Generate a random session ID
    }
}


project_id = meta_data["project_id"]
user_data = meta_data["user_data"]

blackboard = BlackBoard(project_id)
orig_page__code = blackboard.get_page()

new_page_code = update_code_with_generated_images(orig_page__code, meta_data)

blackboard.set_page(new_page_code)
blackboard._persist_data()


