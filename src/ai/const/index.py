from dataclasses import dataclass
from enum import Enum


USER_MSG_KEY = "user_msg"
FORMAT_INSTRUCTIONS_KEY = "format_instructions"
FORMAT_INSTRUCTIONS_PLACEHOLDER = "{" + FORMAT_INSTRUCTIONS_KEY + "}"
TYPE_KEY = "type"

FRONTEND_SRC_DIR = "fe/src"
FRONTEND_ASSETS_DIR = "fe/src/assets"

THEME_PATH = "../../theme.less"

AGENT_MAX_RETRIES = 5
AGENT_INITIAL_RETRY_DELAY = 2


class MessageSender(str, Enum):
    AI = "ai"
    Human = "human"

    def __str__(self) -> str:
        return str.__str__(self)


@dataclass
class AgentInteractionMessage:
    sender: MessageSender
    content: any


class VariantType(str, Enum):
    ONE = "one"
    TWO = "two"
    THREE = "three"


class VariantCreationStatus(str, Enum):
    GENERATING_VARIANT_DATA = "GENERATING_VARIANT_DATA"
    VARIANT_DATA_GENERATED = "VARIANT_DATA_GENERATED"
    UPDATING_VARIANT_DATA = "UPDATING_VARIANT_DATA"
    DONE = "DONE"
    FAILED = "FAILED"


class VariantStatus(str, Enum):
    COMPLETED = "completed"
    IN_PROGRESS = "in_progress"
    FAILED = "failed"
    DELETED = "deleted"

