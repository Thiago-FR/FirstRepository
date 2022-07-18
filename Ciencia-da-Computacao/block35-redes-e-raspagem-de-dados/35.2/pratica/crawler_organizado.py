from parsel import Selector
import requests
import json

def fetch_content(url, timeout=1):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.HTTPError, requests.Timeout):
        return ""
    else:
        return response.text


def extract_quote(text_html):
    selector = Selector(text_html)
    quotes = []
    for quote in selector.css("div.quote"):
        text = quote.css("span.text::text").get()
        author = quote.css("small.author::text").get()
        tags = quote.css("a.tag::text").getall()
        quotes.append({
          "text": text,
          "author": author,
          "tags": tags
        })

    return quotes


def get_all_quotes(url):
    next_page = "/"
    quotes = []
    while next_page:
        content = fetch_content(url + next_page)
        quotes.extend(extract_quote(content))
        next_page = (
          Selector(content).css("li.next > a::attr(href)").get()
        )

    return quotes


def save_json(text):
    with open('log.json', 'w') as file:
        json.dump(text, file)

print(save_json(get_all_quotes('https://quotes.toscrape.com')))