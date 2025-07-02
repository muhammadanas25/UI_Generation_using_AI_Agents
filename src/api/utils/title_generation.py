from ai.agents.title_generator.agent import TitleGeneratorAgent


async def get_title(prompt: str, user_id: str, project_id: str, session_id: str) -> str:
    agent = TitleGeneratorAgent(
        prompt,
        {}, 
        {'user_id':user_id, 'project_id': project_id, 'session_id': session_id}
    )
    output = await agent.run()

    return output
