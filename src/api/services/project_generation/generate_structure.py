from concurrent.futures import ThreadPoolExecutor, as_completed
from ai.agents.structure_generator.agent import StructureGeneratorAgent
from ai.agents.structure_generator.output import Structure
from ai.memory.blackboard.Blackboard import BlackBoard


def generate_structure(website_description: str, user_data, blackboard: BlackBoard) -> Structure:
    structure: Structure = StructureGeneratorAgent(website_description, {"website_description": website_description}, user_data, blackboard).run()
    blackboard.set_structure(structure)

    # We expicitly re-fetch the structure from blackboard, because after saving to blackboard, 
    # the structure will have IDs, not present in the original structure
    return blackboard.get_structure()
