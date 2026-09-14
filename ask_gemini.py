import os, sys
from google import genai

api_key = "AQ.Ab8RN6IBVF9FNOX_tTp3qnsU0rapSuPv4S3HXa3K5SYKfJShmA"
client = genai.Client(api_key=api_key)

file_path = os.path.expanduser("~/Desktop/ror_system/templates/index.html")

try:
    with open(file_path, "r", encoding="utf-8") as f:
        current_code = f.read()
except FileNotFoundError:
    print(f"❌ لم يتم العثور على الملف: {file_path}")
    sys.exit(1)

prompt = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "تحسين وتطوير الواجهة"

full_prompt = f"""
أنت مبرمج ويب خبير. هذا هو كود الواجهة الحالي لمشروع RoR:
{current_code}

المطلوب تعديله وتطبيقه بدقة:
{prompt}

مهم جداً: أرجع الكود الكامل للملف المعدل فقط بدون أي مقدمات أو شروحات إضافية وبدون استخدام علامات markdown مثل ```html أو ```.
"""

print("⏳ جاري إرسال طلبك إلى Gemini وتعديل الكود في جهازك...")

try:
    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=full_prompt,
    )
    new_code = response.text.strip()
    
    if new_code.startswith("```html"):
        new_code = new_code[7:]
    if new_code.startswith("```"):
        new_code = new_code[3:]
    if new_code.endswith("```"):
        new_code = new_code[:-3]

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_code.strip())

    print("✅ تم تعديل وحفظ ملف index.html تلقائياً على جهازك بنجاح!")
except Exception as e:
    print(f"❌ حدث خطأ: {e}")
