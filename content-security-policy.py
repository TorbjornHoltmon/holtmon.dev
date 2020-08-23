import os
import json
import hashlib
import base64
import copy
from bs4 import BeautifulSoup


def get_text_from_soup(soup: BeautifulSoup):
    scripts = []
    scriptSoup: BeautifulSoup
    for scriptSoup in soup:
        scripts.append(scriptSoup.contents[0])
    return scripts


def get_scripts_from_html(path_to_html_file: str):
    with open(path_to_html_file, 'r') as file:
        soup = BeautifulSoup(file.read(), features='html.parser')
        scripts = soup.find_all('script', src=False)
        return get_text_from_soup(scripts)


def get_sha256_base64_of_scripts(path_to_html_file: str):
    hashes = []
    for script in get_scripts_from_html(path_to_html_file):
        hashed_script = base64.b64encode(
            hashlib.sha256(script.encode('utf-8')).digest())
        hashes.append(hashed_script.decode("utf-8"))
    return hashes


def add_root_csp(base_csp_input, hashes: []):
    new_csp: dict = copy.deepcopy(base_csp_input)
    script_hash: str
    for script_hash in hashes:
        new_csp_value: str = new_csp["value"]
        sub_string = "script-src 'self'"
        new_csp["value"] = new_csp_value.replace(
            sub_string, sub_string + " 'sha256-" + script_hash + "'")
    return new_csp


def add_page_csp(base_csp_config, hashes: [], source: str):
    new_csp: dict = copy.deepcopy(base_csp_config)
    source_path = source.replace(
        "./dist", "").replace("/index.html", "")
    new_csp["source"] = source_path
    for script_hash in hashes:
        new_csp_value: str = new_csp["headers"][5]["value"]
        sub_string = "script-src 'self'"
        new_csp["headers"][5]["value"] = new_csp_value.replace(
            sub_string, sub_string + " 'sha256-" + script_hash + "'")
    return new_csp


# parses the existing json into a dictionary
with open('firebase.json', "r") as firebase_json:
    firebase_json_dict = json.load(firebase_json)
firebase_json.close()

base_config = copy.deepcopy(firebase_json_dict["hosting"]["headers"][0])
base_csp = copy.deepcopy(
    firebase_json_dict["hosting"]["headers"][0]["headers"][5])


for root, dirs, files in os.walk("./dist"):
    for file in files:
        file_path = os.path.join(root, file)
        if file_path == "./dist/index.html":
            hashes = get_sha256_base64_of_scripts(file_path)
            firebase_json_dict["hosting"]["headers"][0]["headers"][5] \
                = add_root_csp(base_csp, hashes)
        elif file.endswith(".html"):
            hashes = get_sha256_base64_of_scripts(file_path)
            firebase_json_dict["hosting"]["headers"].append(
                add_page_csp(base_config, hashes, file_path))


with open('firebase.json', 'w') as outfile:
    json.dump(firebase_json_dict, outfile)
