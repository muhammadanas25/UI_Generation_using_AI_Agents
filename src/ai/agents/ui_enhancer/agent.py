from ai.const.models import DALL_E_MODELS, AgentBrainModel
from ai.agents.ui_enhancer.prompt.renderer import get_chat_prompt
import openai
from ai.utils.response_formatter import format_ai_response

class UIEnhancerAgent():

    def __init__(self, model: AgentBrainModel = AgentBrainModel.GPT_01_Mini) -> None:
        self.model = model
        self.instruction = get_chat_prompt()
        self.client = openai.OpenAI()
    
    def enhance_ui(self, code: str):
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": self.instruction +"\n"+ code}]
        )
        raw_content = response.choices[0].message.content
        
        return raw_content
            