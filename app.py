import sqlite3
import os
import requests
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
DB_FILE = os.path.expanduser('~/Desktop/ror_system/ror_system.db')

def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/ai/analyze', methods=['GET'])
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

        # تحديث الموديل إلى gemini-3.6-flash كما طلبت رسالة API بالضبط
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

if __name__ == '__main__':
    print("السيرفر جاهز مع نموذج gemini-3.6-flash! الرابط: http://127.0.0.1:5050")
    app.run(host='127.0.0.1', port=5050, debug=True)
