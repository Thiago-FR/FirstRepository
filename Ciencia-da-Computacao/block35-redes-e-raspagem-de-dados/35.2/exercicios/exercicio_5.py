from parsel import Selector
from exercicio_4 import fetch_content, delete_more


def extract_itens(url):
  
    text_html = fetch_content(url)
    selector = Selector(text_html)
    title = selector.css("h1::text").get()
    price = selector.css(".price_color::text").re_first(r"£\d+\.\d{2}")
    url_img = selector.css("img::attr(src)").get()
    in_stock = selector.css(".instock::text").re_first("\d")

    suffix = '...more'
    description = selector.css("#product_description ~ p::text").get()
    refatorie_description = delete_more(description, suffix)
    print(f"{title}, {price}, {refatorie_description}, {url_img}, {in_stock}")

extract_itens('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')