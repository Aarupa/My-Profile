import numpy as np
import requests
import faiss
from .chatbot_assistent import chat_mistral, chat_genai
from .Embeding_models import get_text_embedding_mistral, get_text_embedding_gemini
# from .Url_KB import get_text_from_url
# from .Pdf_KB import extract_text_from_pdf
# from .Docx_KB import extract_text_from_docx

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
    # doc_path = os.path.join(os.getcwd(), '.','Backend', 'MyAPP', 'Documents', 'Dinesh_Ghadge_Resume.docx')
    # text = extract_text_from_docx(doc_path)

    ## Hardcoded text
    text = """My Name is Dinesh Ghadge.\n I am from Gangapur Dist: Chhatrapati Sambhaji Nagar.\n I am currently working in Pune."""

    # split doc into chunks
    chunk_size = 2048
    chunks = [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]
    
    # Create embeddings for each chunk using Mistral embeddings API
    # text_embeddings = np.array([get_text_embedding_mistral(chunk) for chunk in chunks])
    
    # Create embeddings for each chunk using Google Gemini embeddings API
    text_embeddings = np.array([get_text_embedding_gemini(chunk) for chunk in chunks])

    # Load into a vector database
    d = text_embeddings.shape[1]
    index = faiss.IndexFlatL2(d)
    index.add(text_embeddings)

    # Create embeddings for a question
    question = QNS
    # Using Mistral embeddings API
    #question_embeddings = np.array([get_text_embedding_mistral(question)])
    # Using Google Gemini embeddings API
    question_embeddings = np.array([get_text_embedding_gemini(question)])

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
    return chat_genai(prompt)