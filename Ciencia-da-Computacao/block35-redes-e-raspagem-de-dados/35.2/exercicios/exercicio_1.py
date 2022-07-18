import requests

def fetch_content(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
    except (requests.HTTPError, requests.Timeout):
        return ""
    else:
        return response.text

print(fetch_content('https://httpbin.org/encoding/utf8'))
