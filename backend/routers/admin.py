from fastapi import APIRouter, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from google import genai
import json
import os
import re

router = APIRouter(prefix="/admin/generator", tags=["admin"])
templates = Jinja2Templates(directory="backend/templates")

QUESTIONS_FILE = "frontend/public/data/python-questions.json"
LESSONS_FILE = "lessons.md"

# Instantiate Gemini Client 
# Note: Requires GEMINI_API_KEY environment variable to be set.
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))
try:
    client = genai.Client()
except Exception as e:
    print(f"Failed to initialize Gemini Client: {e}")
    client = None

def load_questions():
    if not os.path.exists(QUESTIONS_FILE):
        return []
    with open(QUESTIONS_FILE, "r") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def load_lessons_summary():
    if not os.path.exists(LESSONS_FILE):
        return "No lessons available."
    with open(LESSONS_FILE, "r") as f:
        return f.read()

@router.get("/", response_class=HTMLResponse)
async def admin_dashboard(request: Request):
    lessons_data = load_questions()
    return templates.TemplateResponse(
        "admin_dashboard.html", 
        {"request": request, "lessons": lessons_data, "suggestion": None, "error": None}
    )

@router.post("/suggest", response_class=HTMLResponse)
async def suggest_question(request: Request, topic: str = Form(...), lesson_id: int = Form(...)):
    lessons_data = load_questions()
    
    if not client:
        return templates.TemplateResponse(
            "admin_dashboard.html",
            {"request": request, "lessons": lessons_data, "suggestion": None, "error": "Gemini Client not initialized. Is GEMINI_API_KEY set?"}
        )

    lessons_summary = load_lessons_summary()
    
    prompt = f"""
    You are an expert Python teacher for kids.
    Based on the following lesson materials:
    {lessons_summary}
    
    Generate a multiple-choice question about the topic: '{topic}'.
    The question should be suitable for the lesson plan.
    
    Return the response strictly as a JSON object matching this schema:
    {{
      "id": "generate-a-unique-id",
      "question": "The question text",
      "codeSnippet": "Python code snippet with missing parts (optional, use blanks like ____)",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "The exactly matching correct option",
      "explanation": "Why this is correct",
      "youtubeLink": "A relevant youtube link or empty string"
    }}

    Do not include markdown blocks like ```json around the response. Return raw JSON.
    """

    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        # Attempt to clean potential markdown formatting
        cleaned_response = re.sub(r'```json\n|```', '', response.text).strip()
        suggestion = json.loads(cleaned_response)
        
    except Exception as e:
        return templates.TemplateResponse(
            "admin_dashboard.html",
            {"request": request, "lessons": lessons_data, "suggestion": None, "error": f"Failed to generate suggestion: {str(e)}"}
        )

    return templates.TemplateResponse(
        "admin_dashboard.html",
        {"request": request, "lessons": lessons_data, "suggestion": suggestion, "target_lesson_id": lesson_id, "error": None}
    )

@router.post("/save")
async def save_question(
    request: Request, 
    lesson_id: int = Form(...),
    question_id: str = Form(...),
    question: str = Form(...),
    codeSnippet: str = Form(""),
    opt1: str = Form(...),
    opt2: str = Form(...),
    opt3: str = Form(...),
    opt4: str = Form(...),
    correctAnswer: str = Form(...),
    explanation: str = Form(...),
    youtubeLink: str = Form("")
):
    lessons_data = load_questions()
    
    new_question = {
        "id": question_id,
        "question": question,
        "codeSnippet": codeSnippet,
        "options": [opt1, opt2, opt3, opt4],
        "correctAnswer": correctAnswer,
        "explanation": explanation,
        "youtubeLink": youtubeLink
    }
    
    # Find the target lesson and append the question
    for lesson in lessons_data:
        if lesson.get("id") == lesson_id:
            lesson.setdefault("questions", []).append(new_question)
            break
            
    # Save back to file
    with open(QUESTIONS_FILE, "w") as f:
        json.dump(lessons_data, f, indent=2)
        
    # Render dash with success msg
    return templates.TemplateResponse(
        "admin_dashboard.html",
        {"request": request, "lessons": lessons_data, "suggestion": None, "success_message": "Question saved successfully!", "error": None}
    )
