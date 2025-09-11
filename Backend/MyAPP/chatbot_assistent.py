
from mistralai import Mistral
import os
from dotenv import load_dotenv

# Function to get chat response using Mistral API
def chat_mistral(user_input):
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

# Function to get chat response using genai API
from google import genai
def chat_genai(user_input):
    load_dotenv()
    api_key = os.getenv('GOOGLE_API_KEY')
    model = 'gemini-2.5-flash'
    client = genai.Client(api_key=api_key)
    response = client.models.generate_content(
        model=model,
        contents=user_input
    )
    return response.text