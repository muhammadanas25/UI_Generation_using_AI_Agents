import os
from dotenv import load_dotenv
from openai import OpenAI
import json
from system_prompt import SYSTEM_PROMPT

class DatasetGenerator():
    
    def __init__(self, root_dir: str, output_file: str, gen_enhanced_data: bool) -> None:
        self.root_dir = root_dir
        self.output_file = output_file    
        self.gen_enhanced_data = gen_enhanced_data
    
    def write_data_to_file(self, data: str) -> None:
        try:
            with open(self.output_file, 'a', encoding='utf-8') as f:
                f.write(data+"\n")
                
        except Exception as e:
            print(f"Unable to append data into the output file due to {e}")
            
            
    def generate_dataset(self, code_content: str, website_description: str) -> None:
        website_description = json.dumps(website_description)
        code_content = json.dumps(code_content)
        output_structure = f"""{{"messages": [{{"role": "system", "content": {json.dumps(SYSTEM_PROMPT)} }}, {{"role": "user", "content": {website_description}}}, {{"role": "assistant", "content": {code_content}}}]}}"""
        self.write_data_to_file(output_structure)    


    
    def process_sub_folder(self, sub_folder_path: str) -> None:

        print("sub_folder_path: ", sub_folder_path)
        for file_name in os.listdir(sub_folder_path):
            file_path = os.path.join(sub_folder_path, file_name)
            
            
            if self.gen_enhanced_data:
                if file_name.endswith('.enhanced.tsx'):
                    print("Inside enhanced data if block")
                    description_file_path = os.path.join(sub_folder_path, "description.txt")
                    
                    print("file_path: ", file_path)
                    print("description_file_path: ", description_file_path) 

                    with open(description_file_path, 'r', encoding='utf-8') as f:
                        website_description = f.read()
                                
                    with open(file_path, 'r', encoding='utf-8') as f:
                        code_content = f.read()
                        
                    self.generate_dataset(code_content, website_description)
            else:
                if file_name.endswith('.tsx') and not file_name.endswith('.enhanced.tsx'):
                    print("Inside standard data else block")
                    description_file_path = os.path.join(sub_folder_path, "description.txt")
                    print("file_path: ", file_path)
                    print("description_file_path: ", description_file_path) 

                    with open(description_file_path, 'r', encoding='utf-8') as f:
                        website_description = f.read()
                                
                    with open(file_path, 'r', encoding='utf-8') as f:
                        code_content = f.read()
                        
                    self.generate_dataset(code_content, website_description)
            
                
    
    def read_files(self) -> None:
        count = 0
        for iteration, dir_name in enumerate(os.listdir(self.root_dir), start=1):
            sub_folder_path = os.path.join(self.root_dir, dir_name)
            count += 1
            print("count: ", count)
            self.process_sub_folder(sub_folder_path)
            
      

if __name__ == "__main__":

    gen_enhanced_data = True
    root_dir = 'phase1-all-samples'
    output_file = 'training_data.jsonl' if not gen_enhanced_data else 'enhanced_training_data.jsonl'

    # delete the output file if it exists
    if os.path.exists(output_file):
        os.remove(output_file)
    
    generator = DatasetGenerator(root_dir, output_file, gen_enhanced_data).read_files()
    print("Sucess...")
