from parsel import Selector
import requests

def fetch_content(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
    except (requests.HTTPError, requests.Timeout):
        return ""
    else:
        return response.text


def delete_more(text, suffix):
    if text.endswith(suffix):
        return text[:-len(suffix)]


def extract_itens(url):
  
    text_html = fetch_content(url)
    selector = Selector(text_html)
    title = selector.css("h1::text").get()
    price = selector.css(".price_color::text").re_first(r"£\d+\.\d{2}")
    url_img = selector.css("img::attr(src)").get()

    suffix = '...more'
    description = selector.css("#product_description ~ p::text").get()
    refatorie_description = delete_more(description, suffix)
    print(f"{title}, {price}, {refatorie_description}, {url_img}")

extract_itens('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')