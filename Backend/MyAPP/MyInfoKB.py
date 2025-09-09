from mistralai import Mistral
import requests
import numpy as np
import faiss
import os
from dotenv import load_dotenv
from .chatbot_assistent import chat
# from .Url_KB import get_text_from_url
# from .Pdf_KB import extract_text_from_pdf
# from .Docx_KB import extract_text_from_docx

load_dotenv()
api_key = os.getenv('MISTRAL_API_KEY')
client = Mistral(api_key=api_key)
def Knowledge_Base(QNS):

    ## Get text for text file
    #with open("knowledge_base.txt", "r", encoding="utf-8") as f:
    #    kb_text = f.read()
    

    ## Get text from URL
    # url = "https://indeedinspiring.com/"
    # text = get_text_from_url(url)

    ## Get text from PDF file
    # text = extract_text_from_pdf("path/to/pdf")

    ## Get text from DOCX file
    # doc_path = os.path.join(os.getcwd(), 'Backend', 'MyAPP', 'Documents', 'Dinesh_Ghadge_Resume.docx')
    # text = extract_text_from_docx(doc_path)

    ## Hardcoded text
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
    Given the context information and not prior knowledge, answer the query in human like language in concise manner. if answer is too long, summarize it in 50 words or less.
    Query: {question}
    Answer:
    """

    # Getting output from chatbot
    return chat(prompt)