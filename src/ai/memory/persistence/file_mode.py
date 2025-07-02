import os
import json
from typing import List
import hashlib

from ai.utils.index import make_sure_is_dict


class FileMode:
    def __init__(self, directory="/tmp/projects"):
        self._data = None
        self.directory = directory
        if not os.path.exists(directory):
            os.makedirs(directory)

    def read_or_create_project(self, project_id):
        if not os.path.exists(f"{self.directory}/{project_id}.json"):
            self._data =  self.create_project(project_id)
            return self._data
        self._data =  self.read_project(project_id)
        return self._data

    def create_project(self, project_id):
        with open(f"{self.directory}/{project_id}.json", 'w') as f:
            json.dump({}, f)
            return {}

    def read_project(self, project_id):
        try:
            with open(f"{self.directory}/{project_id}.json", 'r') as f:
                try:
                    self._data =  json.load(f)
                except json.JSONDecodeError:
                    print(f"[Error] decoding project file... {project_id}, using empty dictionary")
                    self._data =  {}

                return self._data
        except FileNotFoundError:
            self._data =  None
            return self._data
    

    def set_website_description(self, project_id, website_description):
        self._data['website_description'] = website_description

    def get_website_description(self, project_id):
        return self._data['website_description']
    


    def set_theme(self, project_id, theme):
        self._data['theme'] = theme

    def get_theme(self, project_id):
        return self._data.get('theme', None)
    

    def set_page(self, project_id, page_code: str):
        self._data['page'] = page_code

    def get_page(self, project_id):
        return self._data.get('page', "")

    
    def set_structure(self, project_id, structure):
        # Add fake Ids to each section and the header too
        # Id will have HASH of the header/section name and the description
        structure = make_sure_is_dict(structure)
        if structure['header'] is not None:
            structure['header']['id'] = hashlib.sha256((structure['header']['name'] + structure['header']['description']).encode()).hexdigest()
        
        if structure['footer'] is not None:
            structure['footer']['id'] = hashlib.sha256((structure['footer']['name'] + structure['footer']['description']).encode()).hexdigest()
        
        if structure.get('content') is not None:
            for section in structure['content']:
                section = make_sure_is_dict(section)
                section['id'] = hashlib.sha256((section['name'] + section['description']).encode()).hexdigest()
        self._data['structure'] = structure


    def get_structure(self, project_id):
        return self._data.get('structure', None)



    def update_header(self, project_id, new_header):
        current_header = self._data['structure']['header']
        if current_header:
            print(f"< Updated header - [{current_header['name']}] >")
            current_header.update(new_header)
            return
        else:
            print("Header does not exist in structure.")

    def get_header(self, project_id):
        return self._data.get('structure', {}).get('header', None)


    def update_section(self, project_id, new_section):
        content = self._data['structure'].get('content')
        if content:
            for current_section in content:
                if current_section['id'] == new_section['id']:
                    current_section.update(new_section)
                    print(f"< Updated section - [{current_section['name']}] >")
                    return
        else:
            print("Content does not exist in structure.")


    def get_section(self, project_id, section_name: str):
        content = self._data['structure'].get('content')
        if content:
            for current_section in content:
                if current_section['name'] == section_name:
                    return current_section
        return None


    def update_footer(self, project_id, new_footer):
        current_footer = self._data['structure']['footer']
        if current_footer:
            print(f"< Updated footer - [{current_footer['name']}] >")
            current_footer.update(new_footer)
            return
        else:
            print("Footer does not exist in structure.")


    def get_footer(self, project_id):
        return self._data.get('structure', {}).get('footer', None)

    # def update_page(self, project_id, page):
    #     for pg in self._data['structure']:
    #         if pg['id'] == page['id']:
    #             pg.update(page)
    #             print(f"< Updated Page - [{pg['name']}] >")
    #             return


    # def get_page_by_id(self, project_id, page_id):
    #     for page in self._data['structure']:
    #         if page['id'] == page_id:
    #             return page
    #     return None


    """ ----------------------------------------------------------------- """

    def update_project(self, project_id):
        if os.path.exists(f"{self.directory}/{project_id}.json"):
            with open(f"{self.directory}/{project_id}.json", 'w') as f:
                json.dump(self._data, f)
            return self._data
        else:
            return None

    def delete_project(self, project_id):
        try:
            os.remove(f"{self.directory}/{project_id}.json")
            return True
        except FileNotFoundError:
            return False
