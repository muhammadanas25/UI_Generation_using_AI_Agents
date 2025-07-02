from typing import Optional
from ai.memory.persistence.file_mode import FileMode
from ai.memory.persistence.db_mode import DBMode
from ai.utils.index import make_sure_is_dict


class BlackBoard:
    def __init__(self, project_id, db_connection=None, mode ="FILE"):

        self.project_id = project_id
        self.mode = mode

        if mode == "FILE":
            self.handler = FileMode()
        elif mode == "DB":
            self.handler = DBMode(db_connection)
        else:
            raise ValueError("Invalid mode. Choose 'FILE' or 'DB'.")
        
        self._read_or_create_project(project_id)


    def _read_or_create_project(self, project_id):
        return self.handler.read_or_create_project(project_id)
    
    
    def set_website_description(self, website_description: str) -> None:
        self.handler.set_website_description(self.project_id, website_description)

    def get_website_description(self) -> str:
        return self.handler.get_website_description(self.project_id)
    

    def set_page(self, page_code: str):
        self.handler.set_page(self.project_id, page_code)

    def get_page(self) -> str:
        return self.handler.get_page(self.project_id)   
    


    def _persist_data(self):
        if self.mode == "FILE":
            self.handler.update_project(self.project_id)
