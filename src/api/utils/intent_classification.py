from ai.agents.intent_classifier.agent import IntentClassifierAgent


async def get_intent(prompt: str, user_id: str, project_id: str, session_id: str) -> str:
    agent = IntentClassifierAgent(
        prompt,
        {}, 
        {'user_id':user_id, 'project_id': project_id, 'session_id': session_id}
    )
    output = await agent.run()

    return output.intent
