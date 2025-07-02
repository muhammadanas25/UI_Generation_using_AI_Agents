from typing import List, Dict
from enum import Enum


class Step(str, Enum):
    Title_Generation = "Title_Generation"
    UI_Update = "UI_Update"
    UI_Snippet_Update = "UI_Snippet_Update"
    UI_Generation = "UI_Generation"
    UI_Refactoring = "UI_Refactoring"
    UI_Enhancement = "UI_Enhancement"
    Image_Description_Generation = "Image_Description_Generation"
    Image_Generation = "Image_Generation"


    def __str__(self) -> str:
        return str.__str__(self)
    


