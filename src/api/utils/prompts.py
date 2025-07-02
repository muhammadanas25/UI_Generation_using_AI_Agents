def generate_prompt(previous_variant_tsx: str, query_text: str) -> str:
    """
    Generates a prompt for reviewing and modifying TSX code.

    Parameters:
        previous_variant_tsx (str): The existing TSX code to use as context.
        query_text (str): The query detailing the changes needed.

    Returns:
        str: A formatted prompt that includes the previous variant TSX and query text.
    """
    prompt = (
        f"Given the previous variant TSX context:\n\n"
        f"{previous_variant_tsx}\n\n"
        f"Please review the existing TSX code and consider the following modifications based on the provided query:\n\n"
        f"- Query: {query_text}\n\n"
        f"Your task is to suggest specific changes or improvements to the existing TSX code that address the requirements mentioned in the query."
    )
    return prompt