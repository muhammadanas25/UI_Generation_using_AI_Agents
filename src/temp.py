#  list all ".enhanced.tsx" files in the sub directories of "/dataset/phase1-all-samples"
import os
import os
import json
import sys
import subprocess
from ai.functions.extract_import_statements import extract_code_from_formatted_response

def extract_import_statements(jsx_code):
    try:
        result = subprocess.run(
            ['node', './babel-import-util.js', extract_code_from_formatted_response(jsx_code)],
            capture_output=True,
            text=True,
            check=True
        )
        
        imports = json.loads(result.stdout)
        return imports
    except subprocess.CalledProcessError as e:
        print(f"Error executing Node.js script: {e.stderr}", file=sys.stderr)
        return []
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON output: {e}", file=sys.stderr)
        return []




directory = "./dataset/phase1-all-samples/"
enhanced_file_paths = []

# Walk through all subdirectories
for root, dirs, files in os.walk(directory):
    # Filter files ending with .enhanced.tsx
    for file_path in files:
        if file_path.endswith(".tsx"):
            # Get full absolute path
            full_path = os.path.join(root, file_path)
            enhanced_file_paths.append(full_path)

count = 0
merged_imports = {}
# Print all found .enhanced.tsx files
for file_path in enhanced_file_paths:
    count += 1
    print(file_path)
    # Load file at the path
    with open(file_path, 'r') as file:
        file_content = file.read()
    imports = extract_import_statements(file_content)
    
    for key in imports:
        if key in merged_imports:
            for value in imports[key]:
                if value not in merged_imports[key]:
                    merged_imports[key].append(value)
        else:
            merged_imports[key] = imports[key]

    # print(imports)
    # if count > 1:
    #     break

print("--------")
print(merged_imports)