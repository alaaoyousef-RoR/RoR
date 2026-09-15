import os
from flask import Flask, render_template
from database import init_db
from routes import auth_bp, sales_bp, operations_bp

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "ror_secret_key_2026")

# Initialize database
init_db()

# Register Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(sales_bp)
app.register_blueprint(operations_bp)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/mindmap')
def mindmap():
    return render_template('mindmap.html')

if __name__ == '__main__':
    print("السيرفر جاهز مع الهندسة النمطية الجديدة (Blueprints)! الرابط: http://127.0.0.1:5050")
    app.run(host='127.0.0.1', port=5050, debug=True)
