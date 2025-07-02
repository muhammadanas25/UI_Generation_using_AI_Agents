# Given a source folder, for each sub folder, check if ".tsx" file in the sub folder has character length less than 1000

import os
import shutil

def check_file_length(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".tsx"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    if len(content) < 1000:
                        print(f"File {file_path} has less than 1000 characters.")

                        # # Create "invalid" folder in the parent directory
                        # parent_dir = os.path.dirname(root)
                        # invalid_folder = os.path.join(parent_dir, "invalid")
                        # os.makedirs(invalid_folder, exist_ok=True)

                        # # Move the entire subfolder to the "invalid" folder
                        # subfolder_name = os.path.basename(root)
                        # new_subfolder_path = os.path.join(invalid_folder, subfolder_name)
                        # shutil.move(root, new_subfolder_path)

                        # # Exit the loop for this subfolder since we've moved it
                        # break

# Example usage
source_folder = "phase1-all-samples"
check_file_length(source_folder)

