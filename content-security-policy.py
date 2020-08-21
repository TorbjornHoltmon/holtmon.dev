import os
import json

# parses the existing json into a dictionary
with open('firebase.json') as firebase_json:
    firebase_json_dict = json.loads(firebase_json)


for root, dirs, files in os.walk("./dist"):
    for file in files:
        if file.endswith(".html"):
            print(os.path.join(root, file))
