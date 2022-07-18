from pymongo import MongoClient


def find_all():
  with MongoClient() as client:
    db = client.library.books.find()
    list_lib = []
    for book in db:
        list_lib.append(book)

    return list_lib


def find_by_key(key, value):
  with MongoClient() as client:
    db = client.library.books.find()
    for book in db:
        if value in book[key]:
            print(book["title"])


find_by_key('categories', 'Internet')