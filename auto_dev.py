import os
import time
from google import genai

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("Missing API KEY")

client = genai.Client(api_key=api_key)

app_path = os.path.expanduser('~/Desktop/ror_system/app.py')
with open(app_path, 'r', encoding='utf-8') as f:
    current_app_code = f.read()

input_prompt = f"""
إليك الكود الحالي لمشروع RoR (مقهى ومحمصة قهوة مختصة):
```python
{current_app_code}
