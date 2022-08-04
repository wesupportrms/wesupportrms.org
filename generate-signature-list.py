# source code is forked from https://github.com/rms-support-letter/rms-support-letter.github.io
import json
import os
import re


ok = True
all_signatures = []

def report(arg):
    global ok
    ok = False
    print(arg)

def generate(signatures):
    signatures = sorted(signatures, key=lambda item: item[0])
    content = '**Signed by %s individuals:**\n\n' % len(signatures)
    for name, link in signatures:
        content += '1. [%s](%s)\n' % (name, link)
    filename = "src/content/campaign/index.md"
    contents = ''
    with open(filename) as f:
        contents = f.read()
    with open(filename, 'w') as f:
        contents = contents.replace("[CURRENT_SUPPORTER]", content)
        f.write(contents)

for file_name in sorted(os.listdir("_data/signed")):
    if not file_name.endswith(".yaml"):
        continue
    
    with open(f"_data/signed/{file_name}") as f:
        contents = f.read().replace("\r", "")

    existing_keys = {}
    for i, line in enumerate(contents.split("\n")):
        if not line:
            continue
        line = line.strip()
        if line == "":
            continue
        if ":" in line:
            key = line[:line.index(":")].strip()
            value = line[line.index(":") + 1:].strip()
            if key not in ['name', 'link']:
                continue
            existing_keys[key] = value
        else:
            continue
    all_signatures.append((existing_keys['name'], existing_keys['link']))


if not ok:
    raise SystemExit(1)

# start to generate
generate(all_signatures)
