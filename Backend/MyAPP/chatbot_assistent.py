from mistralai import Mistral
import os
from dotenv import load_dotenv
def chat(user_input):
    load_dotenv()
    api_key = os.getenv('MISTRAL_API_KEY')
    model = 'mistral-large-latest'
    client = Mistral(api_key=api_key)
    chat_response = client.chat.complete(
        model=model,
        messages=[
            {
                "role": "user",
                "content": user_input,
            },
        ]
    )
    return chat_response.choices[0].message.content
