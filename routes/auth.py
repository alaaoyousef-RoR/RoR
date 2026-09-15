from flask import Blueprint, jsonify, request, session

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    username = data.get('username', '').strip()
    password = data.get('password', '').strip()

    # Simple session auth for RoR partners
    partners = ['علاء', 'عبدالله', 'جود', 'أنس']
    if username in partners or username.lower() == 'admin':
        session['user'] = username or 'علاء'
        return jsonify({"status": "success", "message": f"مرحباً بك {session['user']}", "user": session['user']})
    
    return jsonify({"status": "error", "message": "اسم المستخدم غير صحيح"}), 401

@auth_bp.route('/api/auth/logout', methods=['POST', 'GET'])
def logout():
    session.pop('user', None)
    return jsonify({"status": "success", "message": "تم تسديد الخروج بنجاح"})

@auth_bp.route('/api/auth/status', methods=['GET'])
def auth_status():
    user = session.get('user', 'علاء')
    return jsonify({"authenticated": True, "user": user})
