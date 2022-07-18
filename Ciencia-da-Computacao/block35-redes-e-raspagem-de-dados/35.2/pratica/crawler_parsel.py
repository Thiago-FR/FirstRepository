from parsel import Selector
import requests
import json

# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)
# print(selector)

# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# prices = selector.css(".product_price .price_color::text").getall()

# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)


# Outra forma de fazer a mesma coisa
# for index in range(len(titles)):
#     print(titles[index], prices[index])

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'

log = list()

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        # print(title, price)
        # Arquivo .txt
        # log += f"title: {title}, price: {price}\n"

        # Arquivo .json
        log.append({"title": title, "price": price})        

    next_page_url = selector.css(".next a::attr(href)").get()

# Arquivo .txt
# with open('log.txt', 'w') as file:
#     # file.write(log)

# Arquivo .json
with open('log.json', 'w') as file:
    json.dump(log, file)