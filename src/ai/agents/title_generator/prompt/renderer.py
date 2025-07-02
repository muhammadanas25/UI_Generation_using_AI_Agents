import os
from langchain_core.prompts import (
    ChatPromptTemplate,
)
from ai.const.index import (
    USER_MSG_KEY,
)
from ai.utils.index import render_template


def _get_sys_prompt_template(additional_context: str) -> str:
    current_dir = os.path.dirname(os.path.abspath(__file__))

    context = { }
    
    template = render_template(current_dir, context, "template.j2")
    return template


def get_chat_prompt(additional_context: str) -> ChatPromptTemplate:
    sys_template = ("system", _get_sys_prompt_template(additional_context))
    human_template = ("human", "{" + USER_MSG_KEY + "}")
    return ChatPromptTemplate.from_messages([sys_template, human_template])