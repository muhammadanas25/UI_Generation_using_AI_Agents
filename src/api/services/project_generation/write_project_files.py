import os
from ai.const.index import FRONTEND_SRC_DIR
from ai.memory.blackboard.Blackboard import BlackBoard
from ai.utils.index import save_content_to_file


def write_project_files(blackboard: BlackBoard, root_dir=FRONTEND_SRC_DIR):

    # theme = blackboard.get_theme().theme
    page = blackboard.get_page()

    # save_content_to_file(os.path.join(root_dir, 'styles', 'globals.css'), theme)
    save_content_to_file(os.path.join(root_dir, 'app', 'page.tsx'), page)
