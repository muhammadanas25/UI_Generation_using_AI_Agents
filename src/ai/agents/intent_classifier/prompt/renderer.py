import os
from langchain_core.prompts import (
    ChatPromptTemplate,
)
from ai.const.index import (
    FORMAT_INSTRUCTIONS_PLACEHOLDER,
    USER_MSG_KEY,
)
from ai.utils.index import render_template
from ai.agents.intent_classifier.output import INTENT_DESCRIPTIONS, IntentType


def _get_sys_prompt_template(current_code: str) -> str:
    current_dir = os.path.dirname(os.path.abspath(__file__))

    context = {
        "intents": IntentType,
        "intent_descriptions": INTENT_DESCRIPTIONS,
        "format_instructions_placeholder": FORMAT_INSTRUCTIONS_PLACEHOLDER,
    }
    
    template = render_template(current_dir, context, "template.j2")
    return template


def get_chat_prompt(current_code: str) -> ChatPromptTemplate:
    sys_template = ("system", _get_sys_prompt_template(current_code))
    human_template = ("human", "{" + USER_MSG_KEY + "}")
    return ChatPromptTemplate.from_messages([sys_template, human_template])