from ai.memory.blackboard.Blackboard import BlackBoard
from dotenv import load_dotenv
from api.services.project_generation.generate_theme import generate_theme
from api.services.project_generation.generate_structure import generate_structure
from api.services.project_generation.compose_page import compose_page
from api.services.project_generation.write_project_files import write_project_files
from api.services.project_generation.write_project_images import write_project_images
load_dotenv(".env")




async def generate_project(website_description: str, user_data, project_id, db_connection):

    blackboard = BlackBoard(project_id, db_connection)
    
    blackboard.set_website_description(website_description)

    print("Generating project for website description:", blackboard.get_website_description())

    generate_theme(website_description, user_data, blackboard)
    structure = generate_structure(website_description, user_data, blackboard)

    compose_page(structure, user_data, blackboard)

    blackboard._persist_data()

    write_project_files(blackboard)
    # write_project_images()





    # Your logic to generate a project based on the user query
    return {"status": "success" }
