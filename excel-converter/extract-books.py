import datetime
import json
import pandas as pd
from pymongo import MongoClient
from dateutil import parser

class DateTimeEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime.datetime):  # Corrected the check here
            return o.isoformat()
        return super().default(o)

def parse_date(date_str):
    try:
        return parser.parse(date_str)
    except (TypeError, ValueError):
        return None

input_file_path = 'data/Gutenberg.csv'
output_file_path = '../database/scripts/mongo-init.js'

df = pd.read_csv(input_file_path)

# df = df.dropna(subset=['Title', 'Author', 'Requested by', 'Checkout Date (mm/dd/yyyy)', 'Return Date (mm/dd/yyyy)'])

mongo_insert_queries = []

for _, row in df.iterrows():
    checkout_date_str = row.get('Checkout Date (mm/dd/yyyy)')
    return_date_str = row.get('Return Date (mm/dd/yyyy)')

    # Use parse_date function to handle null values and parse dates
    checkout_date = parse_date(checkout_date_str)
    return_date = parse_date(return_date_str)

    mongo_insert_query = {
        "title": row['Title'],
        "author": row['Author'],
        "requestedBy": row['Requested by'],
        "checkoutDate": checkout_date,
        "returnDate": return_date,
    }

    mongo_insert_queries.append(mongo_insert_query)

# Write MongoDB insert queries to output file
with open(output_file_path, 'w') as output_file:
    output_file.write(f"db = new Mongo().getDB('booksDB');\n")
    output_file.write(f"db.createCollection('books', {{ capped: false }});\n")
    output_file.write(f"db.books.insert({json.dumps(mongo_insert_queries, indent=2, cls=DateTimeEncoder, ensure_ascii=False)});\n")

print(f'MongoDB insert queries written to {output_file_path}')
