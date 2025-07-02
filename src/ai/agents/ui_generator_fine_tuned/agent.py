from ai.const.models import AgentBrainModel
from ai.agents.base.Agent import Agent
from ai.agents.ui_generator_fine_tuned.prompt.renderer import get_chat_prompt
from ai.memory.blackboard.Blackboard import BlackBoard
from langfuse.decorators import langfuse_context, observe
from ai.const.mappings import Step
import logging
import re

logger = logging.getLogger(__name__)

class UIGeneratorFineTunedAgent(Agent):
    def __init__(
        self,
        user_query: str,
        additional_context: dict,
        user_data,
        blackboard: BlackBoard,
        variant_id: str,
        variant_type: str,
        brain_type: AgentBrainModel = AgentBrainModel.GPT_4_Omni_Mini,
       
    ):  
        self.user_query = user_query
        self.additional_context = additional_context
        self.blackboard = blackboard
        self.user_data = user_data
        self.variant_id = variant_id
        self.variant_type = variant_type
        prompt = get_chat_prompt(blackboard, additional_context)
        agent_output_class = str
        
        super().__init__(brain_type, prompt, agent_output_class)

    @observe()
    def run(self) -> str:
        logger.info(f"Running UIGeneratorFineTunedAgent with query: {self.user_query}")
        langfuse_context.update_current_trace(
            user_id=self.user_data['user_id'],
            name=self.user_data['project_id'],
            session_id=self.user_data['session_id'],
            tags=[Step.UI_Generation],
        )
        print(f"Generating UI with Fine Tuned Model - [{self.additional_context.get('ui', {}).get('name', '')}]...")
        
        # Use parent's implementation to get the response
        raw_content = self._format_response(super().run(self.user_query, "UIGeneratorFineTunedAgent", 
                                                        self.user_data['user_id'], self.user_data['project_id'], self.variant_id, self.variant_type))
        logger.info(f"Raw content starting 100 chars: {raw_content[:100]}")
        return raw_content

    def _format_response(self, response: str) -> str:
        """Format AI responses to separate code and text with clear markers."""
        # If the response is already wrapped, return it as is
        if response.startswith("<code>") or response.startswith("<text>"):
            logger.info("Response already has formatting tags, skipping formatter")
            return response
        
        # Check if response starts directly with code patterns (import, function def, etc.)
        code_patterns = [
            r'^\s*import\s+',
            r'^\s*from\s+\w+\s+import\s+',
            r'^\s*def\s+\w+\s*\(',
            r'^\s*class\s+\w+',
            r'^\s*<\?php',
            r'^\s*<html',
            r'^\s*<!DOCTYPE',
            r'^\s*function\s+\w+\s*\(',
            r'^\s*const\s+\w+\s*=',
            r'^\s*let\s+\w+\s*=',
            r'^\s*var\s+\w+\s*=',
            r'^\s*@\w+',
            r'^\s*#include',
            r'^\s*using\s+\w+',
            r'^\s*package\s+\w+',
            r'^\s*public\s+class',
            r'^\s*export\s+',
            r'^\s*\{\s*$',
            r'^\s*```'
        ]
        
        if any(re.match(pattern, response) for pattern in code_patterns):
            logger.info("Response starts with code pattern, wrapping in <code> tags")
            return f"<code>{response}</code>"
        
        # Check if response contains code blocks
        markdown_code_pattern = r'```[a-zA-Z]*\n([\s\S]*?)```'
        
        # If we find markdown code blocks
        if re.search(markdown_code_pattern, response):
            logger.info("Found markdown code blocks, splitting and wrapping appropriately")
            # Extract code blocks and wrap them
            code_blocks = re.findall(markdown_code_pattern, response)
            text_parts = re.split(markdown_code_pattern, response)
            
            result = ""
            for i, text in enumerate(text_parts):
                if text.strip():
                    result += f"<text>{text.strip()}</text>"
                if i < len(code_blocks):
                    result += f"<code>{code_blocks[i]}</code>"
            
            return result
        
        # If there are common code explanation phrases, split on them
        code_intros = [
            "Here's the code:",
            "Here is the code:",
            "Here is your code:",
            "Here's your code:",
            "Updated code:",
            "The code is:",
            "I've written the code:"
        ]
        
        for intro in code_intros:
            if intro in response:
                logger.info(f"Found code introduction phrase: '{intro}', splitting response")
                parts = response.split(intro, 1)
                if len(parts) == 2:
                    return f"<text>{parts[0].strip()}</text><code>{parts[1].strip()}</code>"
        
        # If we can't determine a clear separation, assume it's all code if it has
        # certain coding patterns, otherwise assume it's text+code needing review
        if any(pattern in response for pattern in ['function', 'class', 'import', 'export', 'const', '<div', '<p']):
            logger.info("No clear separation found but contains code-like patterns, wrapping in <code> tags")
            return f"<code>{response}</code>"
        else:
            logger.info("No code patterns detected, wrapping in <text> tags")
            return f"<text>{response}</text>"
