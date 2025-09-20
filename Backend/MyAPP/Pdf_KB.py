import pyPDF2

def extract_text_from_pdf(file_path):
    text = []
    with open(file_path, 'rb') as file:
        reader = pyPDF2.PdfReader(file)
        for page in reader.pages:
            text.append(page.extract_text())
    return "\n".join(filter(None, text))