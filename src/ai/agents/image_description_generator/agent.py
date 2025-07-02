import json
from ai.agents.base.Agent import Agent
from ai.const.models import AgentBrainModel
from ai.agents.image_description_generator.prompt.renderer import get_chat_prompt
from ai.memory.blackboard.Blackboard import BlackBoard
from langfuse.decorators import langfuse_context, observe
from ai.const.mappings import Step


class ImageDescriptionGeneratorAgent(Agent):
    def __init__(
        self,
        user_query: str,
        additional_context: dict,
        user_data,
        brain_type: AgentBrainModel = AgentBrainModel.GPT_4_Omni_Mini,
    ):  
        self.user_query = user_query
        self.additional_context = additional_context
        self.user_data = user_data
        prompt = get_chat_prompt(additional_context)
        agent_output_class = str

        
        super().__init__(brain_type, prompt, agent_output_class)

    def sanitize_user_query(self):
        if isinstance(self.user_query, dict):
            self.user_query = json.dumps(self.user_query)
        return self.user_query.replace("{", "{{").replace("}", "}}")


    @observe()
    def run(self) -> str:

        langfuse_context.update_current_trace(
            user_id=self.user_data.get('user_id', None),
            name=self.user_data.get('project_id', None),
            session_id=self.user_data.get('session_id', None),
            tags=[Step.Image_Description_Generation],
        )
        sanitized_user_query = self.sanitize_user_query()
        print(f"<image_description_generator_agent> Generating image descriptions...")
        return super().run(sanitized_user_query)


