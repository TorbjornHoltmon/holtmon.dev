import os
import json
from bs4 import BeautifulSoup


def get_text_from_soup(soup):
    scripts = []
    for script in soup:
        print(script.contents)
        scripts.append(script.contents)
    return scripts


def get_scripts_from_html(path_to_html_file):
    with open(path_to_html_file, 'r') as file:
        soup = BeautifulSoup(file.read(), features='html.parser')
        scripts = soup.find_all('script', src=False)
        print(get_text_from_soup(scripts))


def get_sha256_base64_from_string():
    return "string"


# parses the existing json into a dictionary
with open('firebase.json') as firebase_json:
    firebase_json_dict = json.load(firebase_json)

base_csp = firebase_json_dict["hosting"]["headers"][0]["headers"][5]


for root, dirs, files in os.walk("./dist"):
    for file in files:
        file_path = os.path.join(root, file)
        if file.endswith("404.html"):
            print("404")
            print(get_scripts_from_html(file_path))
        # elif file.endswith(".html") \
        #         & (os.path.join(root, file) != "./dist/index.html"):
        #     print("anything else")
        #     print(os.path.join(root, file))
        # elif os.path.join(root, file) == "./dist/index.html":
        #     print("root")
        #     print(os.path.join(root, file))
