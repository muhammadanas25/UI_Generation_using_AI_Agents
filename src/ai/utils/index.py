import json
from jinja2 import Environment, FileSystemLoader, StrictUndefined
from ai.const.mappings import Step
from typing import List
from ai.const.index import USER_MSG_KEY, AgentInteractionMessage, MessageSender
from langchain_core.prompts import AIMessagePromptTemplate, ChatPromptTemplate
# from ai.memory.blackboard.Blackboard import BlackBoard


def render_template(curr_dir, context, template_name) -> str:
    env = Environment(
        loader=FileSystemLoader(["./common/prompt_partials", curr_dir]),
        undefined=StrictUndefined,
    )
    raw_template = env.get_template(template_name)
    return raw_template.render(context)


def get_step_from_agent_name(agent_name: str, step_to_agent_mapping) -> Step:
    for step, agent in step_to_agent_mapping.items():
        if agent.__name__ == agent_name:
            return step
    return None


def get_chat_formatted_human_ai_conversation(
    step_interaction_history: List[AgentInteractionMessage],
):
    past_conversation = []
    for msg in step_interaction_history:
        if msg.sender == MessageSender.Human:
            past_conversation.append((msg.sender, msg.content))
        else:
            msg_content = msg.content

            # checking if msg.content is a JSON string and converting it to a dictionary
            if isinstance(msg.content, str):
                try:
                    msg_content = json.loads(msg.content)
                except json.JSONDecodeError as e:
                    raise ValueError(f"Error decoding JSON from msg.content: {e}")

            # making sure that the msg_content is a dictionary
            if not isinstance(msg_content, dict):
                raise ValueError(
                    "msg.content must be a dictionary or a JSON string representing a dictionary"
                )

            past_conversation.append(
                AIMessagePromptTemplate.from_template(
                    msg_content, template_format="jinja2"
                )
            )

    return past_conversation


# def assemble_chat_prompt_template(sys_template, blackboard: BlackBoard, step: Step):
#     human_ai_conversation_list = get_chat_formatted_human_ai_conversation(
#         blackboard.get_interaction_history(step)
#     )
    
#     human_template = ("human", "{" + USER_MSG_KEY + "}")

#     template_msg_list = [sys_template]
    
#     if human_ai_conversation_list:
#         template_msg_list += human_ai_conversation_list
        
#     template_msg_list.append(human_template)

#     return ChatPromptTemplate.from_messages(template_msg_list)


def make_sure_is_dict(data):
    if type(data)==str:
        data = json.loads(data)
    return data


def save_content_to_file(file_path, content):
    if content:
        with open(file_path, 'w') as file:
            file.write(content)