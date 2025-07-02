from fastapi import APIRouter
from pydantic import BaseModel
from api.services.project_generation.project_generation import generate_project
from src.api.services.page_modification.page_modification import modify_page
from src.api.services.section_modification.section_modification import modify_section

router = APIRouter()

class ProjectQuery(BaseModel):
    query: str


USER_DATA = {
    'user_id':"user-1",
    'project_id':"proj-11",
    'session_id':"session-111",
}

@router.post("/generate_project")
async def generate_project_route(req: ProjectQuery):

    # TODO BE Team | Generate random reddit like project_id+UUID 
    project_id = "some_project_1"
    db_connection = None
    return await generate_project(req.query, USER_DATA, project_id, db_connection)

@router.post("/modify_page")
async def modify_page_route(query: str, page: str):
    return await modify_page(query, page)

@router.post("/modify_section")
async def modify_section_route(query: str, page: str, section: str):
    return await modify_section(query, page, section)