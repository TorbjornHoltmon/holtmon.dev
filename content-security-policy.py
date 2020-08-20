import os
for root, dirs, files in os.walk("./dist"):
    for file in files:
        if file.endswith(".html"):
            print(os.path.join(root, file))
