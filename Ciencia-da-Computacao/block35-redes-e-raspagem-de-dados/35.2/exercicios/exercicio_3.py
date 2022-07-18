import requests

def fetch_content(url):
    try:
        response = requests.get(
          url,
          headers={"User-agent": "Mozilla", "Accept": "text/html"},
        )
        response.raise_for_status()        
    except (requests.HTTPError, requests.Timeout):
        return ""
    else:
        assert "bot detected" not in response.text


print(fetch_content('https://scrapethissite.com/pages/advanced/?gotcha=headers'))