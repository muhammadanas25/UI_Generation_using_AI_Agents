from enum import Enum
from langchain_core.pydantic_v1 import BaseModel, Field

class IntentType(str, Enum):
    Undo_Changes = "Undo_Changes"
    Code_Generation = "Code_Generation"
    Remark = "Remark"
    Other = "Other"

    def __str__(self) -> str:
        return str.__str__(self)
    
INTENT_DESCRIPTIONS = {
    IntentType.Undo_Changes: "The user wants to undo the changes made to the code.",
    IntentType.Code_Generation: "The user wants to generate, develop or modify code/UI. Note this does not include undoing or reverting changes.",
    IntentType.Remark: "The user wants to make a remark about the code. Such as liking it or disliking it.",
    IntentType.Other: "The user has some other intent that does not fit in the above categories."
}
    

class IntentClassifierOutput(BaseModel):
    intent: IntentType = Field(
        description="the type of intent", default=None
    )

 