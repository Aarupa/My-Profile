from mistralai import Mistral
import requests
import numpy as np
import faiss
import os
from getpass import getpass

def Knowledge_Base(QNS):
    text = """My Name is Dinesh Ghadge.\n I am from Gangapur Dist: Chhatrapati Sambhaji Nagar.\n I am currently working in Pune."""

    # split doc into chunks
    chunk_size = 2048
    chunks = [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]

    # Create embeddings for each text chunk
    def get_text_embedding(input):
        embeddings_batch_response = client.embeddings.create(
              model="mistral-embed",
              inputs=input
          )
        return embeddings_batch_response.data[0].embedding
    text_embeddings = np.array([get_text_embedding(chunk) for chunk in chunks])

    # Load into a vector database
    d = text_embeddings.shape[1]
    index = faiss.IndexFlatL2(d)
    index.add(text_embeddings)

    # Create embeddings for a question
    question = QNS
    question_embeddings = np.array([get_text_embedding(question)])

    # Retrieve similar chunks from the vector database
    D, I = index.search(question_embeddings, k=2) # distance, index
    retrieved_chunk = [chunks[i] for i in I.tolist()[0]]

    #Combine context and question in a prompt and generate response
    prompt = f"""
    Context information is below.
    ---------------------
    {retrieved_chunk}
    ---------------------
    Given the context information and not prior knowledge, answer the query.
    Query: {question}
    Answer:
    """

    # Getting output from chatbot
    return chat(prompt)