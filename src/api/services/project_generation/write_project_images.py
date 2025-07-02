import os
import re
import cv2
import numpy as np
from ai.const.index import FRONTEND_ASSETS_DIR, FRONTEND_SRC_DIR


def write_project_images():
    images = extract_image_info(FRONTEND_SRC_DIR)
    [print(image['image_description']+"_"+image['image_resolution']+"."+image['image_extension']) for image in images]
    generate_images(images)


def extract_image_info(root_path):
    image_path_pattern = re.compile(r'\.\./\.\./assets/(?P<description>[^@]+)@(?P<resolution>\d+x\d+)\.(?P<extension>jpg|png)')

    image_info_list = []

    # Walk through all directories and files under the root path
    for dirpath, _, filenames in os.walk(root_path):
        for filename in filenames:
            if filename.endswith('.tsx'):
                file_path = os.path.join(dirpath, filename)
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    # Find all matching image paths in the file content
                    matches = image_path_pattern.finditer(content)
                    for match in matches:
                        # Extract the components
                        image_path = match.group(0)
                        image_description = match.group('description')
                        image_resolution = match.group('resolution')
                        image_extension = match.group('extension')

                        # Append the dictionary to the list
                        image_info_list.append({
                            'image_path': image_path,
                            'image_description': image_description,
                            'image_resolution': image_resolution,
                            'image_extension': image_extension
                        })
    
    return image_info_list


def generate_images(image_info_list, output_dir=FRONTEND_ASSETS_DIR):

    if os.path.exists(output_dir):
        os.system(f'rm -rf {output_dir}')

    os.makedirs(output_dir, exist_ok=True)
    
    for image_info in image_info_list:
        # Extract image information
        resolution = image_info['image_resolution']
        extension = image_info['image_extension']
        width, height = map(int, resolution.split('x'))
        filename = image_info['image_description'] +'@'+resolution +'.'+extension
        
        # Create a blank image with background color
        background_color = (234, 234, 234)  # Light gray color
        image = np.full((height, width, 3), background_color, dtype=np.uint8)
        
        # Draw a central circle with stroke
        circle_center = (width // 2, height // 2)
        circle_radius = min(width, height) // 4
        cv2.circle(image, circle_center, circle_radius, (250, 250, 250), -1)  # Inner circle (filled)
        cv2.circle(image, circle_center, circle_radius, (201, 201, 201), 2)  # Outer circle (stroke)
        
        # Draw diagonal lines crossing at the circle center
        line_color = (201, 201, 201)
        cv2.line(image, (0, height), (width, 0), line_color, 2)
        cv2.line(image, (0, 0), (width, height), line_color, 2)
        cv2.line(image, (width, 0), (0, height), line_color, 2)
        cv2.line(image, (width // 4, height // 2), (3 * width // 4, height // 2), line_color, 2)
        cv2.line(image, (width // 2, height // 4), (width // 2, 3 * height // 4), line_color, 2)
        
        # Draw a smaller circle in the center with a stroke
        small_circle_radius = circle_radius // 2
        cv2.circle(image, circle_center, small_circle_radius, (255, 255, 255), -1)  # Inner small circle (filled)
        cv2.circle(image, circle_center, small_circle_radius, (201, 201, 201), 2)  # Outer small circle (stroke)
        
        # Add a placeholder icon in the small circle
        icon_start = (circle_center[0] - 15, circle_center[1] - 15)
        icon_end = (circle_center[0] + 15, circle_center[1] + 15)
        cv2.rectangle(image, icon_start, icon_end, (102, 102, 102), -1)  # Simple placeholder rectangle
        
        # Save the image
        output_path = os.path.join(output_dir, filename)
        cv2.imwrite(output_path, image)



