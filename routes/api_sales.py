from flask import Blueprint, jsonify, request
from database import get_db_connection

sales_bp = Blueprint('api_sales', __name__)

@sales_bp.route('/api/sales/cafe', methods=['GET', 'POST'])
def handle_cafe_sales():
    conn = get_db_connection()
    if request.method == 'POST':
        data = request.get_json() or {}
        conn.execute('''
            INSERT INTO cafe_sales (date, shift, barista, cups, desserts, revenue, tickets, avgTicket, notes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            data.get('date', ''),
            data.get('shift', 'morning'),
            data.get('barista', 'عارف'),
            data.get('cups', 0),
            data.get('desserts', 0),
            data.get('revenue', 0.0),
            data.get('tickets', 0),
            data.get('avgTicket', 0.0),
            data.get('notes', '')
        ))
        conn.commit()
        conn.close()
        return jsonify({"status": "success", "message": "تم حفظ وردية المبيعات بنجاح"})
    
    # GET
    sales = [dict(r) for r in conn.execute('SELECT * FROM cafe_sales ORDER BY id DESC LIMIT 50').fetchall()]
    conn.close()
    return jsonify({"status": "success", "data": sales})

@sales_bp.route('/api/sales/roastery', methods=['GET', 'POST'])
def handle_roastery_sales():
    conn = get_db_connection()
    if request.method == 'POST':
        data = request.get_json() or {}
        conn.execute('''
            INSERT INTO roastery_sales (date, client, kg, pricePerKg, type, paid, pending, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            data.get('date', ''),
            data.get('client', ''),
            data.get('kg', 0.0),
            data.get('pricePerKg', 0.0),
            data.get('type', 'wholesale'),
            data.get('paid', 0.0),
            data.get('pending', 0.0),
            data.get('status', 'مدفوع')
        ))
        conn.commit()
        conn.close()
        return jsonify({"status": "success", "message": "تم حفظ مبيعات المحمصة بنجاح"})
    
    # GET
    sales = [dict(r) for r in conn.execute('SELECT * FROM roastery_sales ORDER BY id DESC LIMIT 50').fetchall()]
    conn.close()
    return jsonify({"status": "success", "data": sales})
