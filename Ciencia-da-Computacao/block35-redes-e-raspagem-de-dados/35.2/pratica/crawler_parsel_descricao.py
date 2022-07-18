from parsel import Selector
import requests
import json

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
# Paginação
last_page_url = 'page-2.html'

log = list()

while next_page_url != last_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_responde = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_responde.text)

        # Extrai a descrição do produto
        description = detail_selector.css("#product_description ~ p::text").get()
        # print(title, price)
        # Arquivo .txt
        # log += f"title: {title}, price: {price}\n"

        # Arquivo .json
        log.append({"title": title, "price": price, "description": description})        

    next_page_url = selector.css(".next a::attr(href)").get()

# Arquivo .txt
# with open('log.txt', 'w') as file:
#     # file.write(log)

# Arquivo .json
with open('log.json', 'w') as file:
    json.dump(log, file)