from ai.agents.base.Agent import Agent
from ai.const.models import AgentBrainModel
from ai.agents.ui_updater.prompt.renderer import get_chat_prompt
from langfuse.decorators import langfuse_context, observe
from ai.const.mappings import Step
from ai.functions.generate_images import replace_placeholder_images_with_generated_images
from api.config import BACKEND_URL
from shared.notify_variant import notify_agent_status
from ai.utils.response_formatter import format_ai_response
from urllib.parse import urljoin
import re

class UIUpdaterAgent(Agent):
    def __init__(
        self,
        user_query: str,
        additional_context: dict,
        meta_data: dict,
        variant_type: str,
        variant_id: str,
        brain_type: AgentBrainModel = AgentBrainModel.GPT_4_Omni,
    ):  
        self.user_query = user_query
        self.meta_data = meta_data
        self.user_data = meta_data["user_data"]
        self.additional_context = additional_context
        self.variant_type = variant_type
        self.variant_id = variant_id
        prompt = get_chat_prompt(additional_context)
        agent_output_class = str

        super().__init__(brain_type, prompt, agent_output_class)

    @observe()
    def run(self) -> str:
        print(f"\n<ui_updater_agent> Updating UI ...")

        notify_agent_status(
            notify_endpoint=f"{urljoin(BACKEND_URL, 'variants/notify_agent_status')}",
            user_id=self.user_data['user_id'],
            project_id=self.meta_data['project_id'],
            variant_id=self.meta_data["variant_id"],
            variant_type=self.variant_type,
            agent_status="UPDATING_UI"
        )

        langfuse_context.update_current_trace(
            user_id=self.user_data['user_id'],
            name=self.user_data['project_id'],
            session_id=self.user_data['session_id'],
            tags=[Step.UI_Update],
        )
        
        updated_code = super().run(
            self.user_query, "UISnippetUpdaterAgent", 
            self.user_data['user_id'],
            self.user_data['project_id'], 
            self.variant_id, 
            self.variant_type
            )
        
        # Process images and validate code - this now includes comprehensive validation
        final_code = replace_placeholder_images_with_generated_images(updated_code, self.meta_data, self.variant_type)
        
        # The validation and <code> tag wrapping is now handled inside replace_placeholder_images_with_generated_images
        # So we just return the final code directly
        return final_code
