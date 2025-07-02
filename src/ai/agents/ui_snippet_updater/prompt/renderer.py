import os
from langchain_core.prompts import (
    ChatPromptTemplate,
)
from ai.const.index import (
    USER_MSG_KEY,
)
from ai.utils.index import render_template


def _get_sys_prompt_template(additional_context: dict) -> str:
    current_dir = os.path.dirname(os.path.abspath(__file__))

    sanitized_code = additional_context['current_code'].replace("{", "{{").replace("}", "}}")
    sanitized_code_snippet = additional_context['current_code_snippet'].replace("{", "{{").replace("}", "}}")
    past_messages = additional_context['past_messages']

    context = {
        'code': sanitized_code,
        'code_snippet': sanitized_code_snippet,
        'past_messages': past_messages
    }
    
    template = render_template(current_dir, context, "template.j2")
    return template


def get_chat_prompt(additional_context: dict) -> ChatPromptTemplate:
    sys_template = ("system", _get_sys_prompt_template(additional_context))
    human_template = ("human", "{" + USER_MSG_KEY + "}")
    return ChatPromptTemplate.from_messages([sys_template, human_template])