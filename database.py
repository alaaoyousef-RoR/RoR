import sqlite3
import os

DB_FILE = os.path.expanduser('~/Desktop/ror_system/ror_system.db')

def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    # Create tables if not exists
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            week INTEGER,
            task TEXT,
            status TEXT,
            responsible TEXT
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS menu_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item TEXT,
            category TEXT,
            price REAL,
            cost REAL,
            popularity INTEGER,
            contribution REAL
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS cafe_sales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            shift TEXT,
            barista TEXT,
            cups INTEGER,
            desserts INTEGER,
            revenue REAL,
            tickets INTEGER,
            avgTicket REAL,
            notes TEXT
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS roastery_sales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            client TEXT,
            kg REAL,
            pricePerKg REAL,
            type TEXT,
            paid REAL,
            pending REAL,
            status TEXT
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS financial_records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            type TEXT,
            amount REAL,
            dueDate TEXT,
            status TEXT,
            category TEXT
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS waste_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            item TEXT,
            qty TEXT,
            value REAL,
            reason TEXT,
            section TEXT
        )
    ''')
    conn.commit()
    conn.close()
