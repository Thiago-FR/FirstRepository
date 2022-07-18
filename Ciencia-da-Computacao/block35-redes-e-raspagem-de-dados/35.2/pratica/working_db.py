from pymongo import MongoClient

client = MongoClient()

db = client.catalogue

book = {
  "title": "A Light in the Attic"
}

document_id = db.books.insert_one(book).inserted_id

print(document_id)

client.close()

# Realizar busca no mongodb
# with MongoClient() as client:
#     db = client.catalogue
#     for book in db.books.find({"title": {"$regex": "t"}}):
#         print(book["title"])