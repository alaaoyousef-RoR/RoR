import os
import requests
from flask import Blueprint, jsonify, request
from database import get_db_connection

operations_bp = Blueprint('api_operations', __name__)

@operations_bp.route('/api/operations/tasks', methods=['GET', 'POST'])
def handle_tasks():
    conn = get_db_connection()
    if request.method == 'POST':
        data = request.get_json() or {}
        conn.execute('''
            INSERT INTO tasks (week, task, status, responsible)
            VALUES (?, ?, ?, ?)
        ''', (
            data.get('week', 1),
            data.get('task', ''),
            data.get('status', 'pending'),
            data.get('responsible', 'علاء')
        ))
        conn.commit()
        conn.close()
        return jsonify({"status": "success", "message": "تم إضافة المهمة بنجاح"})
    
    tasks = [dict(r) for r in conn.execute('SELECT * FROM tasks ORDER BY id ASC').fetchall()]
    conn.close()
    return jsonify({"status": "success", "data": tasks})

@operations_bp.route('/api/operations/waste', methods=['GET', 'POST'])
def handle_waste():
    conn = get_db_connection()
    if request.method == 'POST':
        data = request.get_json() or {}
        conn.execute('''
            INSERT INTO waste_logs (date, item, qty, value, reason, section)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (
            data.get('date', ''),
            data.get('item', ''),
            data.get('qty', ''),
            data.get('value', 0.0),
            data.get('reason', ''),
            data.get('section', 'bar')
        ))
        conn.commit()
        conn.close()
        return jsonify({"status": "success", "message": "تم إدراج سجل الهدر بنجاح"})

    waste = [dict(r) for r in conn.execute('SELECT * FROM waste_logs ORDER BY id DESC').fetchall()]
    conn.close()
    return jsonify({"status": "success", "data": waste})

@operations_bp.route('/api/operations/breakeven', methods=['POST'])
def calculate_breakeven_api():
    data = request.get_json() or {}
    fixed_costs = float(data.get('fixedCosts', 30000))
    avg_ticket = float(data.get('avgTicket', 35))
    cogs_percent = float(data.get('cogsPercent', 30)) / 100.0
    variable_percent = float(data.get('variablePercent', 15)) / 100.0

    margin = avg_ticket * (1.0 - cogs_percent - variable_percent)
    invoices = int(fixed_costs / margin) if margin > 0 else 0
    revenue = invoices * avg_ticket
    daily = int(invoices / 30)

    return jsonify({
        "status": "success",
        "breakevenInvoices": invoices,
        "breakevenRevenue": revenue,
        "breakevenDaily": daily,
        "contributionMargin": round(margin, 2)
    })

@operations_bp.route('/api/ai/analyze', methods=['GET'])
def ai_analyze():
    try:
        api_key = os.environ.get("GEMINI_API_KEY", "AQ.Ab8RN6IBVF9FNOX_tTp3qnsU0rapSuPv4S3HXa3K5SYKfJShmA")
        
        conn = get_db_connection()
        fin = [dict(r) for r in conn.execute('SELECT * FROM financial_records LIMIT 20').fetchall()]
        cafe = [dict(r) for r in conn.execute('SELECT * FROM cafe_sales ORDER BY id DESC LIMIT 10').fetchall()]
        roast = [dict(r) for r in conn.execute('SELECT * FROM roastery_sales ORDER BY id DESC LIMIT 10').fetchall()]
        conn.close()

        prompt_text = f"""
        أنت مستشار أعمال خبير في قطاع المقاهي والمحامص المختصة.
        قم بتحليل أرقام مشروع مقهى ومحمصة RoR الحالية (المرحلة الانتقالية بعد 4 سنوات تشغيل):
        - المصاريف الثابتة والتشغيلية: {fin}
        - سجل مبيعات البار اليومية: {cafe}
        - سجل مبيعات المحمصة (الجملة والأرباع): {roast}

        المطلوب:
        قدم 3 قرارات تشغيلية وتنفيذية حاسمة لزيادة الربحية، وتصريف المحاصيل، وخفض المصاريف بصفر تكلفة إضافية، بنبرة واضحة ومحفزة للشريك التنفيذي.
        """

        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={api_key}"
        headers = {"Content-Type": "application/json"}
        payload = {
            "contents": [{
                "parts": [{"text": prompt_text}]
            }]
        }

        res = requests.post(url, json=payload, headers=headers)
        res_data = res.json()

        if "candidates" in res_data:
            text = res_data["candidates"][0]["content"]["parts"][0]["text"]
            return jsonify({"analysis": text})
        else:
            return jsonify({"error": res_data}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500
