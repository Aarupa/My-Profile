import requests
from bs4 import BeautifulSoup
def get_text_from_url(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    # Extract only visible text
    for script in soup(["script", "style"]):
        script.decompose()

    text = " ".join(soup.stripped_strings)
    return text