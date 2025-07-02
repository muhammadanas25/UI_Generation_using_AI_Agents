from ai.agents.base.Agent import Agent
from ai.const.models import AgentBrainModel
from ai.agents.ui_snippet_updater.prompt.renderer import get_chat_prompt
from langfuse.decorators import langfuse_context, observe
from ai.const.mappings import Step
from ai.functions.generate_images import replace_placeholder_images_with_generated_images
from api.config import BACKEND_URL
from shared.notify_variant import notify_agent_status
from urllib.parse import urljoin
import re

class UISnippetUpdaterAgent(Agent):
    def __init__(
        self,
        user_query: str,
        additional_context: dict,
        meta_data,
        variant_type: str,
        variant_id: str,
        brain_type: AgentBrainModel = AgentBrainModel.GPT_4_Omni,
    ):  
        self.user_query = user_query
        self.meta_data = meta_data
        self.user_data = meta_data["user_data"]
        self.variant_type = variant_type
        self.variant_id = variant_id
        prompt = get_chat_prompt(additional_context)
        agent_output_class = str

        super().__init__(brain_type, prompt, agent_output_class)

    @observe()
    def run(self) -> str:

        print(f"\nUpdating UI Snippet ...")

        notify_agent_status(
            notify_endpoint=f"{urljoin(BACKEND_URL, 'variants/notify_agent_status')}",
            user_id=self.user_data['user_id'],
            project_id=self.meta_data['project_id'],
            variant_id=self.meta_data["variant_id"],
            variant_type=self.variant_type,
            agent_status="UPDATING_UI_SNIPPET"
        )

        langfuse_context.update_current_trace(
            user_id=self.user_data['user_id'],
            name=self.user_data['project_id'],
            session_id=self.user_data['session_id'],
            tags=[Step.UI_Snippet_Update],
        )
        
        updated_code = super().run(
            self.user_query, "UISnippetUpdaterAgent", 
            self.user_data['user_id'],
            self.user_data['project_id'], 
            self.variant_id, 
            self.variant_type
            )
        final_code = replace_placeholder_images_with_generated_images(updated_code, self.meta_data, self.variant_type)
        # Ensure code is wrapped in <code> tags for downstream processing
        if final_code is not None:
            if not re.search(r'<code>[\s\S]*?</code>', final_code):
                final_code = f'<code>{final_code}</code>'
        return final_code
