from mistralai import Mistral
import os
from dotenv import load_dotenv
from mistralai import Mistral
from google import genai
load_dotenv()

# Function to get text embeddings using Mistral API
api_key_mistral = os.getenv('MISTRAL_API_KEY')
client = Mistral(api_key=api_key_mistral)
def get_text_embedding_mistral(input):
    embeddings_batch_response = client.embeddings.create(
        model="mistral-embed",
        inputs=input
    )
    return embeddings_batch_response.data[0].embedding

# Function to get text embeddings using Google GenAI API
api_key_google = os.getenv('GOOGLE_API_KEY')
client = genai.Client(api_key=api_key_google)
def get_text_embedding_gemini(input):
    embeddings_batch_response = client.models.embed_content(
        model="gemini-embedding-001",
        contents=input,
    )
    return embeddings_batch_response.embeddings[0].values
