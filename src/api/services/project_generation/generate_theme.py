from ai.agents.theme_generator.agent import ThemeGeneratorAgent
from ai.agents.theme_generator.output import Theme
from ai.memory.blackboard.Blackboard import BlackBoard


def generate_theme(website_description: str, user_data, blackboard: BlackBoard):
    output: Theme = ThemeGeneratorAgent(website_description, {}, user_data, blackboard).run()
    blackboard.set_theme(output.theme)