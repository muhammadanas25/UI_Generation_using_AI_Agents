from typing import Optional
from ai.const.models import GPT_MODELS, ANTHROPIC_MODELS, AgentBrainModel
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic
from ai.const.index import FORMAT_INSTRUCTIONS_KEY, USER_MSG_KEY, VariantCreationStatus
from ai.memory.blackboard.Blackboard import BlackBoard
from langchain_core.output_parsers import JsonOutputParser
import time
from pydantic import ValidationError
from ai.const.index import AGENT_INITIAL_RETRY_DELAY, AGENT_MAX_RETRIES
from langfuse.decorators import langfuse_context
import json
import asyncio
from shared.notify_variant import notify_variant_stream
from api.config import BACKEND_URL
from urllib.parse import urljoin

# from ai.agents.ui_generator_fine_tuned.agent import UIGeneratorFineTunedAgent


class Agent():
    def __init__(
        self,
        brain_model: AgentBrainModel,
        prompt,
        output_pydantic_class,
    ):
        self.brain_model = brain_model
        self.brain = self._initialize_brain()
        self.prompt = prompt
        self.output_pydantic_class = output_pydantic_class
        
        # Only initialize the output parser if output_pydantic_class is not str
        if output_pydantic_class != str:
            self.output_parser = JsonOutputParser(pydantic_object=output_pydantic_class)
        else:
            self.output_parser = None


    def _initialize_brain(self):
        if self.brain_model in GPT_MODELS:
            return ChatOpenAI(model=self.brain_model)
        elif self.brain_model in ANTHROPIC_MODELS:
            return ChatAnthropic(model=self.brain_model)
        else:
            raise ValueError("Invalid agent type provided.")


    def run(self, user_msg: str, agent: Optional[str] = None, 
            user_id: Optional[str] = None, project_id: Optional[str] = None, 
                variant_id: Optional[str] = None, variant_type: Optional[str] = None) -> str:
        
        if agent:
            agent_output, attempts = asyncio.run(self._actually_run_astream(user_msg, user_id, project_id, variant_id, variant_type))
            langfuse_context.update_current_trace(
                metadata=f" Retries: {attempts}" if attempts > 0 else ""
            )
            
        else:    
            agent_output, attempts = self._actually_run(user_msg)
            langfuse_context.update_current_trace(
                metadata=f" Retries: {attempts}" if attempts > 0 else ""
            )
        
        return agent_output
       

    def _actually_run(self, user_msg: str):
        langfuse_handler = langfuse_context.get_current_langchain_handler()

        retry_delay = AGENT_INITIAL_RETRY_DELAY
        attempt = 0

        while attempt < AGENT_MAX_RETRIES:
            try:
                chain = self.prompt | self.brain
                
                # Only use the output parser if it's initialized
                if self.output_parser:
                    chain = chain | self.output_parser

                # Prepare input dictionary
                input_dict = {USER_MSG_KEY: user_msg}
                if self.output_parser:
                    input_dict[FORMAT_INSTRUCTIONS_KEY] = self.output_parser.get_format_instructions()

                raw_result = chain.invoke(
                    input_dict,
                    config={"callbacks": [langfuse_handler]},
                )

                # Handle the result based on output_pydantic_class
                if self.output_pydantic_class == str:
                    output = raw_result.content
                else:
                    output = self.output_pydantic_class(**raw_result)
                
                return output, attempt

            except (ValidationError, KeyError) as e:
                print(
                    f"Attempt {attempt + 1}/{AGENT_MAX_RETRIES} failed with error: {e}"
                )
            except Exception as e:
                print(
                    f"An unexpected error occurred on attempt {attempt + 1}/{AGENT_MAX_RETRIES}: {e}"
                )

            attempt += 1
            if attempt < AGENT_MAX_RETRIES:
                retry_delay += attempt
                print(f"Retrying in {retry_delay} seconds...")
                time.sleep(retry_delay)
            else:
                raise RuntimeError(
                    "Max retries reached. Unable to cast result into Pydantic model."
                )

        raise RuntimeError(
            "Failed to cast result into Pydantic model after maximum retries."
        )
        
        
        
    async def _actually_run_astream(self, user_msg: str, 
                                    user_id: str, project_id: str, 
                                    variant_id: str, variant_type: str):
        langfuse_handler = langfuse_context.get_current_langchain_handler()

        retry_delay = AGENT_INITIAL_RETRY_DELAY
        attempt = 0

        while attempt < AGENT_MAX_RETRIES:
            try:
                chain = self.prompt | self.brain
                
                # Only use the output parser if it's initialized
                if self.output_parser:
                    chain = chain | self.output_parser

                # Prepare input dictionary
                input_dict = {USER_MSG_KEY: user_msg}
                if self.output_parser:
                    input_dict[FORMAT_INSTRUCTIONS_KEY] = self.output_parser.get_format_instructions()
                    
                raw_result = ""  #initialize an empty string to store the output chunks
                buffer = ""
                chunk_size = 100 #chunksize 100 so we print 100 chrcs at a single time

                async for chunk in chain.astream(
                    input_dict,
                    config={"callbacks": [langfuse_handler]}
                ):
                    #lets first e3xtract the content from the AIMessageChunk object
                    if hasattr(chunk, "content"):
                        buffer += chunk.content 
                    else:
                        raise TypeError(f"Unexpected chunk type: {type(chunk)}")
                
                    if len(buffer) >= chunk_size:
                        raw_result += buffer  
                        print(buffer, end="", flush=True)  # Print the buffer content                
        
                        #lets notify the webhook  
                        
                        try:              
                            print("\n\n NOIFYING THE STREAM")
                            notify_variant_stream(
                                notify_endpoint=f"{urljoin(BACKEND_URL, 'variants/notify_variant_stream')}",
                                user_id=user_id,
                                project_id=project_id,
                                variant_id=variant_id,
                                variant_type=variant_type,
                                stream_data={
                                    "content": buffer,
                                    "imports": []
                                },
                                query_text=user_msg, 
                                variant_creation_status=VariantCreationStatus.GENERATING_VARIANT_DATA.value
                            )
                            
                        except Exception as e:
                           print("\n\n\n\n\n UNABLE TO NOTIFY THE WEBHOOK in the main Agent.py", e)
                        
                        buffer = ""  #reset buffer after processing so we get the new 100charecters
                        # time.sleep(2) 
                    
                if buffer: #processing any remaining content in the buffer
                    raw_result += buffer
                    print(buffer, end="", flush=True)
                    
                    try:              
                        print("\n\n NOIFYING THE STREAM")
                        notify_variant_stream(
                            notify_endpoint=f"{urljoin(BACKEND_URL, 'variants/notify_variant_stream')}",
                            user_id=user_id,
                            project_id=project_id,
                            variant_id=variant_id,
                            variant_type=variant_type,
                            stream_data={
                                "content": buffer,
                                "imports": []
                            },
                            query_text=user_msg,
                            variant_creation_status=VariantCreationStatus.GENERATING_VARIANT_DATA.value
                        )
                            
                    except Exception as e:
                        print("\n\n\n\n\n UNABLE TO NOTIFY THE WEBHOOK in the main Agent.py", e)

                if self.output_pydantic_class == str:
                    output = raw_result
                else:
                    output = self.output_pydantic_class(raw_result)
                
                return output, attempt

            except (ValidationError, KeyError) as e:
                print(
                    f"Attempt {attempt + 1}/{AGENT_MAX_RETRIES} failed with error: {e}"
                )
            except Exception as e:
                print(
                    f"An unexpected error occurred on attempt {attempt + 1}/{AGENT_MAX_RETRIES}: {e}"
                )

            attempt += 1
            if attempt < AGENT_MAX_RETRIES:
                retry_delay += attempt
                print(f"Retrying in {retry_delay} seconds...")
                time.sleep(retry_delay)
            else:
                raise RuntimeError(
                    "Max retries reached. Unable to cast result into Pydantic model."
                )

        raise RuntimeError(
            "Failed to cast result into Pydantic model after maximum retries."
        )

    def _runAnthropic(self, user_msg: str):
        # Implement runAnthropic functionality here
        print("Running Anthropic...", self.brain_model, self.brain)
