import requests
import json

def fetch_content(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
    except (requests.HTTPError, requests.Timeout):
        return ""
    else:
        return response.text


def convert_text_to_json(text):
    content_json = json.loads(text)
    return content_json


def extract_methods_git(url):
    text = fetch_content(url)
    text_json = convert_text_to_json(text)

    for item in text_json:
        username = item["login"]
        url_user = item["url"]
        print(username, url_user)

print(extract_methods_git('https://api.github.com/users'))
