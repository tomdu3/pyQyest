# PyQuest Admin Dashboard Documentation

## Overview
The PyQuest Admin Dashboard is a backend-driven application built using FastAPI and Jinja2 templating. It allows administrators and content creators to easily generate and edit interactive quiz questions for different lessons in the PyQuest platform using Gemini AI. 

## Key Features
- **AI-Powered Suggestions**: Uses `google-genai` to read the lesson content (`lessons.md`) and automatically generate new multiple-choice questions based on a given topic.
- **Preview & Edit**: Provides an interface for the admin to review the AI's suggested question, code snippets, options, and explanations, and make manual adjustments.
- **Direct Save to Data Bank**: Hitting "Save" will directly append the newly validated question into the frontend's static JSON data store (`frontend/public/data/python-questions.json`), immediately making the question available in the app.

## Architecture

* **Backend Router (`backend/routers/admin.py`)**: 
  - Handles the `/admin/generator/` endpoints.
  - Implements `GET /` to render the initial interface.
  - Implements `POST /suggest` to interact with Gemini API and fetch question formats.
  - Implements `POST /save` to update the local JSON file safely.
* **Frontend Template (`backend/templates/admin_dashboard.html`)**: 
  - A clean, responsive dashboard designed with Tailwind CSS to manage inputs and formatting visually.

## Dependencies

The generator relies on three extra Python dependencies installed in the backend:
- `jinja2` (for HTML templating)
- `google-genai` (for AI suggestions via Gemini)
- `python-multipart` (for handling HTML form data POST requests)

## How to Run & Use the Dashboard

1. **Set Environment Variable:**
   The generator requires a Gemini API key. Make sure it is exported in your terminal before running the server:
   ```bash
   export GEMINI_API_KEY="your-api-key-here"
   ```

2. **Start the Backend:**
   Run the FastAPI server from the root of the project to ensure file paths resolve correctly:
   ```bash
   uv run uvicorn backend.main:app --reload
   ```

3. **Open the Dashboard:**
   Navigate in your browser to: `http://127.0.0.1:8000/admin/generator/`

4. **Generate a Question:**
   - Select the **Target Lesson** from the dropdown (this maps to lessons found in your JSON bank).
   - Enter a **Topic** (e.g. "String slicing" or "Math operations").
   - Click **Generate with Gemini ✨**.

5. **Edit & Save:**
   - The AI will populate the generated question into the "Preview & Edit" panel.
   - Adjust the ID (make sure it's unique), question text, options, or explanations. 
   - Click **💾 Save to JSON Bank**. You will receive a green success notification if it successfully saves directly to the frontend data file.
