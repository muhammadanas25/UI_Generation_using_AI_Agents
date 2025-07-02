import os
from langchain_core.prompts import (
    ChatPromptTemplate,
)
from ai.utils.index import render_template


def _get_sys_prompt_template() -> str:
    current_dir = os.path.dirname(os.path.abspath(__file__))

    context = {}
   
    template = render_template(current_dir, context, "template.j2")
    return template


def get_chat_prompt() -> ChatPromptTemplate:
    return _get_sys_prompt_template()