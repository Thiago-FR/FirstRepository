from collections.abc import Iterable, Iterator

class DbSimulator:
    def __init__(self):
        self.person_table = [
            {"name": "Morgana", "age": "22"},
            {"name": "Sarah", "age": "24"},
            {"name": "Will", "age": "33"},
            {"name": "Rick", "age": "23"},
            {"name": "John", "age": "22"},
            {"name": "Peter", "age": "35"},
            {"name": "Groove", "age": "48"},
            {"name": "Sam", "age": "19"},
        ]


    def get(self, query, page):
        per_page = 2

        if query == "select * from person":
            first = (page * per_page) - per_page
            last = page * per_page
            return self.person_table[first:last]


class DatabaseIterable(Iterable):
    def __init__(self, db, query):
        self.db = db
        self.query = query


    def __iter__(self):
        return DatabaseIterator(self.db, self.query)


class DatabaseIterator(Iterator):
    def __init__(self, db, query):
        self.db = db
        self.query = query
        self.current_page = 1


    def get_page(self, page):
        return self.db.get(self.query, page)


    def __next__(self):
        data = self.get_page(page=self.current_page)

        if not data:
            raise StopIteration()

        
        self.current_page += 1
        return data


record_paginator = DatabaseIterable(DbSimulator(), "select * from person")


for page in record_paginator:
    for record in page:
        print(record["name"])
