from ai.const.index import VariantType
from ai.agents.ui_generator_fine_tuned.agent import UIGeneratorFineTunedAgent
from ai.const.models import AgentBrainModel
from ai.memory.blackboard.Blackboard import BlackBoard
from ai.functions.generate_images import replace_placeholder_images_with_generated_images
from ai.functions.extract_import_statements import extract_import_statements
from api.config import BACKEND_URL
from shared.notify_variant import notify_agent_status
from urllib.parse import urljoin


def generate_variant(description: str, variant_type: VariantType, meta_data: dict):
    variant_generators = {
        VariantType.ONE: (UIGeneratorFineTunedAgent, AgentBrainModel.FINE_TUNED_4_OMNI_MINI),
        VariantType.TWO: (UIGeneratorFineTunedAgent, AgentBrainModel.FINE_TUNED_4_OMNI_MINI_ENHANCED),
        VariantType.THREE: (UIGeneratorFineTunedAgent, AgentBrainModel.FINE_TUNED_4_OMNI_ENHANCED),
    }

    if variant_type not in variant_generators:
        raise ValueError(f"Invalid variant type: {variant_type}")


    project_id = meta_data["project_id"]
    variant_id = meta_data["variant_id"]
    user_data = meta_data["user_data"]
    variant_type_value = variant_type

    blackboard = BlackBoard(project_id)
    agent_class, brain_model = variant_generators[variant_type]

    initial_code = generate_initial_code(description, user_data, variant_type_value, variant_id, project_id, agent_class, brain_model, blackboard)
    # print("initial_code", initial_code[:100])
    updated_code = replace_placeholder_images_with_generated_images(initial_code, meta_data, variant_type_value)
    # print("updated_code", updated_code[:100])
    imports = extract_import_statements(updated_code)
    print("<generate_variant_lambda> imports", imports)
    
    return updated_code, imports

def generate_initial_code(description: str, user_data: dict, variant_type_value: str, variant_id: str, project_id: str, agent_class, brain_model, blackboard):
   
    agent = agent_class(
        description,
        {},
        user_data,
        blackboard,
        variant_id,
        variant_type_value,
        brain_model,
        
    )

    notify_agent_status(
        notify_endpoint=f"{urljoin(BACKEND_URL, 'variants/notify_agent_status')}",
        user_id=user_data['user_id'],
        project_id=project_id,
        variant_id=variant_id,
        variant_type=variant_type_value,
        agent_status="GENERATING_UI",
    )

    page_code = agent.run()

    blackboard.set_page(page_code)
    return page_code
