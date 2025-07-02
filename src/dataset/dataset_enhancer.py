import os
from ai.agents.ui_enhancer.agent import UIEnhancerAgent
from dotenv import load_dotenv

load_dotenv()

def process_folder(source_folder):
    for root, dirs, files in os.walk(source_folder):
        print("files = ", files, "root = ", root)
        tsx_file = next((f for f in files if f.endswith('.tsx')), None)
        txt_file = next((f for f in files if f.endswith('.txt')), None)

        if tsx_file and txt_file:
            with open(os.path.join(root, tsx_file), 'r') as f:
                UI_CODE = f.read()
            
            with open(os.path.join(root, txt_file), 'r') as f:
                UI_DESCRIPTION = f.read()

            query = f"""
            UI Description: {UI_DESCRIPTION}
            UI Code: {UI_CODE}
            """
            print("query = ", query)


            agent = UIEnhancerAgent()
            output = agent.enhance_ui(query)

            # Save output to a file with the same name as the tsx file but with .tsx.enhanced suffix
            enhanced_tsx_file = os.path.join(root, tsx_file.replace('.tsx', '.enhanced.tsx'))
            with open(enhanced_tsx_file, 'w') as f:
                f.write(output)

            print("output = ", output)
            print(f"folder: {root}:")
            print("\n" + "="*50 + "\n")

# Specify the source folder
source_folder = "path/to/your/source/folder"

# Process the folder
process_folder(source_folder)
