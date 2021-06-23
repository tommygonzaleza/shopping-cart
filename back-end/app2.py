import sqlite3
import json

conn = sqlite3.connect('db.sqlite')
cur = conn.cursor()

cur.executescript('''
    CREATE TABLE Product (
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        image TEXT NOT NULL,
        price TEXT NOT NULL,
        brand TEXT,
        description TEXT,
        quantity INTEGER NOT NULL,
        stock INTEGER NOT NULL,
        available BOOLEAN NOT NULL
    )
''')

conn.commit()