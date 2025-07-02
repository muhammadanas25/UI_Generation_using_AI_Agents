from enum import Enum


class AgentBrainModel(str, Enum):

    DALL_E_3 = "dall-e-3"
    DALL_E_2 = "dall-e-2"

    GPT_4_Turbo = "gpt-4-turbo"
    GPT_4_Omni = "gpt-4o"
    GPT_4_Omni_Mini = "gpt-4o-mini"

    GPT_01_Preview = "o1-preview"
    GPT_01_Mini = "o1-mini"

    FINE_TUNED_4_OMNI_ENHANCED = "ft:gpt-4o-2024-08-06:tars:phase1-4o-v2:AXrXRQhq"
    FINE_TUNED_4_OMNI_MINI_ENHANCED = "ft:gpt-4o-mini-2024-07-18:tars:enhanced-phase1-4o-mini-v2:AXruTViG"
    FINE_TUNED_4_OMNI_MINI = "ft:gpt-4o-mini-2024-07-18:tars:phase1-4o-mini-v2:AXq4CL6u"

    Claude_Opus = "claude-3-opus-20240229"
    Claude_Sonnet = "claude-3-sonnet-20240229"
    
    Embedding_Model_3_Small = "text-embedding-3-small"
    
    FLUX_PRO_1_1 = "https://api.bfl.ml/v1/flux-pro-1.1" 
    FLUX_PRO = "https://api.bfl.ml/v1/flux-pro"
    FLUX_DEV = "https://api.bfl.ml/v1/flux-dev"
    FLUX_RESULT_ENDPOINT = "https://api.bfl.ml/v1/get_result"

    gemini_flash_models = 'gemini-2.0-flash-preview-image-generation'
    gemini_imagen_backup = 'imagen-3.0-generate-002'
    # Claude_Sonnet_3_5 = "claude-3-5-sonnet-20240620"

    def __str__(self) -> str:
        return str.__str__(self)


GPT_MODELS = [
    AgentBrainModel.GPT_4_Turbo,
    AgentBrainModel.GPT_4_Omni,
    AgentBrainModel.GPT_4_Omni_Mini,
    AgentBrainModel.GPT_01_Preview,
    AgentBrainModel.GPT_01_Mini,
    AgentBrainModel.FINE_TUNED_4_OMNI_MINI,
    AgentBrainModel.FINE_TUNED_4_OMNI_ENHANCED,
    AgentBrainModel.FINE_TUNED_4_OMNI_MINI_ENHANCED,
]

ANTHROPIC_MODELS = [AgentBrainModel.Claude_Opus, AgentBrainModel.Claude_Sonnet]

EMBEDDING_MODELS = [AgentBrainModel.Embedding_Model_3_Small]

DALL_E_MODELS = [AgentBrainModel.DALL_E_3, AgentBrainModel.DALL_E_2]

FLUX_MODELS = [AgentBrainModel.FLUX_PRO_1_1, 
               AgentBrainModel.FLUX_PRO, 
               AgentBrainModel.FLUX_DEV
               ]
FLASH_MODELS = [AgentBrainModel.gemini_flash_models, AgentBrainModel.gemini_imagen_backup]
