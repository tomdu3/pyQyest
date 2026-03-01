# PyQuest & Python Lessons 🐍

Welcome to **PyQuest** and the **Python Lessons** repository! This project is designed to help beginners learn Python through a comprehensive markdown guide and test their knowledge with an interactive React-based quiz application.

## 📁 Repository Structure

- `lessons.md`: A complete, beginner-friendly Python curriculum covering everything from basic syntax to functions and loops.
- `frontend/`: The source code for **PyQuest**, a React application built with Vite, Tailwind CSS, and Framer Motion that offers interactive quizzes based on the lessons.

---

## 📖 Features

### 1. Python Lessons (`lessons.md`)
A structured markdown guide tailored for beginners. It features:
- **10 Comprehensive Modules:** Starting with printing "Hello World" and progressing through variables, numbers, strings, user input, conditionals, lists, loops, and functions.
- **Engaging Explanations:** Fun, real-world analogies (like comparing variables to boxes and functions to magic recipes).
- **Code Examples:** Clear, easy-to-read Python code snippets demonstrating each concept.
- **Micro-tasks & Homework:** Small, practical exercises embedded within the lessons to reinforce learning right away.

### 2. PyQuest App (`frontend/`)
A gamified, interactive quiz application built to test the knowledge gained from the `lessons.md` curriculum.
- **10 Unique Quests:** Each quest maps directly to one of the 10 lesson modules.
- **Gamified Learning Experience:** Earn XP coins, build answer streaks, and receive instant visual and audio feedback.
- **Animated Mascot:** Meet "Pixel the Python," an animated companion who reacts to your answers (cheering when you're correct, and thinking when you're wrong).
- **Rich UI/UX:** Features a beautiful, responsive, modern design using Tailwind CSS, smooth transitions via Framer Motion, and code block syntax highlighting.
- **200 Total Questions:** 20 carefully crafted multiple-choice questions for each lesson, complete with explanations and video links for further learning.

---

## 🚀 Local Deployment Instructions

### Python Lessons
No setup is required! You can read the lessons directly in your favorite text editor, IDE (like VS Code), or Markdown viewer. Just open the `lessons.md` file in the root directory.

### PyQuest React App
To run the PyQuest frontend application locally, ensure you have [Node.js](https://nodejs.org/) installed (Node.js version 20.19+ or 22.12+ is recommended by Vite).

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install the required dependencies:**
   ```bash
   npm install
   ```

3. **Start the Vite development server:**
   ```bash
   npm run dev
   ```

4. **Start Learning!**
   Open your web browser and navigate to the local server address provided in the terminal window (usually `http://localhost:5173`) to launch the interactive quiz.
