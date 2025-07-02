from ai.agents.base.Agent import Agent
from ai.const.models import AgentBrainModel
from ai.agents.intent_classifier.prompt.renderer import get_chat_prompt
from langfuse.decorators import langfuse_context, observe
from ai.const.mappings import Step
from ai.agents.intent_classifier.output import IntentClassifierOutput


class IntentClassifierAgent(Agent):
    def __init__(
        self,
        user_query: str,
        additional_context: dict,
        user_data,
        brain_type: AgentBrainModel = AgentBrainModel.GPT_4_Omni,
    ):  
        self.user_query = user_query
        self.user_data = user_data
        prompt = get_chat_prompt(additional_context)
        agent_output_class = IntentClassifierOutput

        super().__init__(brain_type, prompt, agent_output_class)

    @observe()
    async def run(self) -> str:

        print(f"\nClassifying intent ...")
        langfuse_context.update_current_trace(
            user_id=self.user_data['user_id'],
            name=self.user_data['project_id'],
            session_id=self.user_data['session_id'],
            tags=[Step.UI_Update],
        )
        return super().run(self.user_query)


