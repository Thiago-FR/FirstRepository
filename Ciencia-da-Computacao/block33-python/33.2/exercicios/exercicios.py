# Exercício 1: 

# name = input("digite seu nome: ")

# for letra in range(len(name), 0, -1):
#   print(name)
#   newName = list(name)
#   newName.remove(name[-1])
#   name = ''.join(newName)

# Exercício 2

from email import header
import json
import random
import csv
from unicodedata import category

# with open("words.txt") as file:
#   word2 = file.read()
#   print(word2)

word = ['comida', 'cachorro', 'escola', 'carro', 'pessoa']

choice_word = random.choice(word)

scrambled_word = "".join(random.sample(choice_word, len(choice_word)))

count = 3

# while count > 0:
#   print(scrambled_word)
#   user_word = input("Tente adivinhar a palavra: ")

#   if user_word == choice_word:
#     print(f"Parabéns você acertou a palavra '{choice_word}'")
#     count = 0
#   else:
#     count -= 1
#     print(f"Palavra incorreta, você tem mais {count} tentativas")

# Exercicío 3

# Localizar caminho
# import os
# cwd = os.getcwd()
# files = os.listdir(cwd)
# print("Files in %r: %s" % (cwd, files))

with open('exercicios/arquivo.json', 'r') as file:
  word = json.load(file)

category_by_book = {}

for book in word:
  for categorie_book in book['categories']:
    if categorie_book not in category_by_book:
      category_by_book[categorie_book] = 0
    category_by_book[categorie_book] += 1

for book, quantity in category_by_book.items():
  category_by_book[book] = (quantity * 100) / len(word)

with open('exercicios/arquivo.csv', 'w', encoding='utf8') as file:
  write = csv.writer(file)

  header = [
    "Linguagem",
    "Porcentagem"
  ]

  write.writerow(header)

  for book, quantity in category_by_book.items():
    body = [
      book,
      quantity,
    ]

    write.writerow(body)
