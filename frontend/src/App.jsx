import React, { useState, useEffect, useMemo } from 'react';
import {
    Flame,
    Coins,
    ChevronRight,
    RotateCcw,
    Play,
    ExternalLink,
    CheckCircle2,
    XCircle,
    Award,
    BookOpen,
    LayoutGrid,
    Map,
    Code2,
    Variable,
    Hash,
    Type,
    Terminal,
    Split,
    ListOrdered,
    RefreshCw,
    Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION ---
const QUESTIONS_PER_SESSION = 5;

// --- DATABASE (10 LESSONS x 20 QUESTIONS = 200 TOTAL) ---
const LESSONS_DATA = [
    {
        id: 1,
        title: "Meet Python! 🐍",
        icon: <Terminal className="text-emerald-500" />,
        description: "Learn how to make the computer talk with print() and comments.",
        questions: [
            { id: "l1-q1", question: "How do you tell Python to show 'Hello'?", codeSnippet: "____('Hello')", options: ["show", "print", "say", "talk"], correctAnswer: "print", explanation: "print() is Python's voice!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=300s" },
            { id: "l1-q2", question: "Which symbol starts a comment?", codeSnippet: "____ This is a note", options: ["//", "--", "#", "/*"], correctAnswer: "#", explanation: "# is for comments!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=320s" },
            { id: "l1-q3", question: "Can Python print numbers directly?", codeSnippet: "print(____)", options: ["42", "'42'", "number(42)", "Both A and B"], correctAnswer: "Both A and B", explanation: "Python can print numbers or strings!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q4", question: "How do you print on two different lines?", codeSnippet: "print('Hi')\n____('Bye')", options: ["print", "next", "line", "show"], correctAnswer: "print", explanation: "Each print() starts a new line!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q5", question: "Is Python case sensitive?", codeSnippet: "PRINT('Hello')\n# Does this work?", options: ["Yes", "No", "Maybe", "Only on Mondays"], correctAnswer: "No", explanation: "Python keywords must be lowercase (print, not PRINT).", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q6", question: "What happens to comments when code runs?", codeSnippet: "# print('Secret')\nprint('Visible')", options: ["Nothing prints", "Only 'Visible' prints", "Both print", "It crashes"], correctAnswer: "Only 'Visible' prints", explanation: "Python ignores comments!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q7", question: "How do you print a name 'Katya'?", codeSnippet: "print(____)", options: ["'Katya'", "Katya", "str(Katya)", "say Katya"], correctAnswer: "'Katya'", explanation: "Text needs quotes!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q8", question: "Where do the things you want to print go?", codeSnippet: "print____", options: ["{ }", "[ ]", "( )", "< >"], correctAnswer: "( )", explanation: "Functions use parentheses!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q9", question: "What is a programming language?", codeSnippet: "# Python is...", options: ["A snake", "Computer instructions", "A keyboard", "A game"], correctAnswer: "Computer instructions", explanation: "It's how we talk to computers!", youtubeLink: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
            { id: "l1-q10", question: "Can a comment be on the same line as code?", codeSnippet: "print('Hi') ____ Note", options: ["#", "//", "note:", "--"], correctAnswer: "#", explanation: "Yes, after the code!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q11", question: "What does print(2 + 2) show?", codeSnippet: "print(2 + 2)", options: ["2 + 2", "4", "22", "Error"], correctAnswer: "4", explanation: "Python does the math first!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q12", question: "What is print(\"2 + 2\")?", codeSnippet: "print(\"2 + 2\")", options: ["4", "2 + 2", "22", "Error"], correctAnswer: "2 + 2", explanation: "Quotes mean 'just text'!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q13", question: "What is the result of print() with nothing inside?", codeSnippet: "print()", options: ["Error", "A blank line", "Zero", "Nothing"], correctAnswer: "A blank line", explanation: "It prints a newline!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q14", question: "Python is known for being...", codeSnippet: "# Goal of Python", options: ["Hard to read", "Easy to read", "For robots only", "Slow"], correctAnswer: "Easy to read", explanation: "It's like English!", youtubeLink: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
            { id: "l1-q15", question: "Which is the classic 'first program'?", codeSnippet: "print(____)", options: ["'Ready'", "'Hello World'", "'Go'", "'Python'"], correctAnswer: "'Hello World'", explanation: "The tradition!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q16", question: "Which quotes can you use for strings?", codeSnippet: "print('Hi')\nprint(\"Hi\")", options: ["Only single", "Only double", "Both work", "Neither"], correctAnswer: "Both work", explanation: "Single or double are both okay!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q17", question: "How many lines will print('A', 'B') print?", codeSnippet: "print('A', 'B')", options: ["1", "2", "0", "Error"], correctAnswer: "1", explanation: "Comma puts them on the same line!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q18", question: "What is Python's logo?", codeSnippet: "# Visual identity", options: ["A Bird", "Two Snakes", "A Robot", "A PC"], correctAnswer: "Two Snakes", explanation: "Blue and Yellow snakes!", youtubeLink: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
            { id: "l1-q19", question: "Can print() show numbers and text together?", codeSnippet: "print('Age:', 10)", options: ["Yes", "No", "Only if quoted", "Error"], correctAnswer: "Yes", explanation: "Use a comma to mix types!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l1-q20", question: "What is the 'IDLE' in Python?", codeSnippet: "# Tooling", options: ["A game", "An editor", "A browser", "A snake name"], correctAnswer: "An editor", explanation: "It's where we write code!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" }
        ]
    },
    {
        id: 2,
        title: "Variables & Boxes 📦",
        icon: <Variable className="text-blue-500" />,
        description: "Store data in labeled boxes called variables.",
        questions: [
            { id: "l2-q1", question: "Which is a valid variable name for a name?", codeSnippet: "____ = 'Katya'", options: ["1st_name", "my name", "my_name", "my-name"], correctAnswer: "my_name", explanation: "Underscores are great; spaces are bad!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q2", question: "What does '=' do in Python?", codeSnippet: "score = 10", options: ["Check if equal", "Assignment (save)", "Addition", "Nothing"], correctAnswer: "Assignment (save)", explanation: "It puts the value in the box!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q3", question: "Can variable values change?", codeSnippet: "score = 5\nscore = 10", options: ["Yes", "No", "Only once", "Error"], correctAnswer: "Yes", explanation: "That's why they are called variables!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q4", question: "Can a variable name start with a number?", codeSnippet: "1st_place = 1", options: ["Yes", "No", "Only if small", "Maybe"], correctAnswer: "No", explanation: "Variable names must start with a letter!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q5", question: "How do you set x, y, and z to 5, 10, 15?", codeSnippet: "____ = 5, 10, 15", options: ["x, y, z", "x; y; z", "x-y-z", "x+y+z"], correctAnswer: "x, y, z", explanation: "Multiple assignment!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q6", question: "What happens if you print a variable that doesn't exist?", codeSnippet: "print(ghost)", options: ["Prints 0", "Prints None", "NameError", "Nothing"], correctAnswer: "NameError", explanation: "You must create it first!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l2-q7", question: "Which is more semantic for a score?", options: ["s = 10", "score = 10", "val = 10", "x = 10"], correctAnswer: "score = 10", explanation: "Names should describe what's inside!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q8", question: "What is a 'label' for a variable?", options: ["The Value", "The Name", "The Box", "The Type"], correctAnswer: "The Name", explanation: "The name is the label on the box!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q9", question: "Can variables store other variables?", codeSnippet: "a = 5\nb = a", options: ["Yes", "No", "Only strings", "Error"], correctAnswer: "Yes", explanation: "b now holds 5!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l2-q10", question: "How do you give a, b, and c the value 50 at once?", codeSnippet: "____ = 50", options: ["a = b = c", "a, b, c", "a-b-c", "all"], correctAnswer: "a = b = c", explanation: "Chained assignment!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q11", question: "Which is a valid start for a variable name?", options: ["_", "7", "-", "!"], correctAnswer: "_", explanation: "Letters or underscores only!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q12", question: "What is the value of 'a' here?", codeSnippet: "a = 1\na = 2\na = 3", options: ["1", "2", "3", "6"], correctAnswer: "3", explanation: "The last value assigned wins!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l2-q13", question: "Can variable names have symbols like $?", codeSnippet: "cash$ = 10", options: ["Yes", "No", "Only for money", "Maybe"], correctAnswer: "No", explanation: "Only letters, numbers, and underscores!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q14", question: "Which name follows Python's 'snake_case' style?", options: ["MyName", "my_name", "my-name", "myname"], correctAnswer: "my_name", explanation: "All lowercase with underscores!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q15", question: "Is 'print' a good variable name?", codeSnippet: "print = 10", options: ["Yes", "No", "Great!", "Only for text"], correctAnswer: "No", explanation: "Don't use built-in keywords!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q16", question: "What is stored in 'ans'?", codeSnippet: "x = 5\ny = 2\nans = x + y", options: ["7", "x+y", "52", "Error"], correctAnswer: "7", explanation: "Variables can store math results!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l2-q17", question: "Variable names are case sensitive. Is 'Age' the same as 'age'?", options: ["Yes", "No", "Depends", "Only if quoted"], correctAnswer: "No", explanation: "Python sees them as two different boxes!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q18", question: "What is an 'assignment statement'?", options: ["print()", "x = 5", "# comment", "type(x)"], correctAnswer: "x = 5", explanation: "The line that assigns a value!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l2-q19", question: "Why do we use variables?", options: ["To store data", "To name things", "To reuse values", "All of the above"], correctAnswer: "All of the above", explanation: "They make code flexible!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" },
            { id: "l2-q20", question: "How do you swap x and y in one line?", codeSnippet: "x, y = ____", options: ["y, x", "x, y", "swap(x,y)", "y = x"], correctAnswer: "y, x", explanation: "Pythonic swapping!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=335s" }
        ]
    },
    {
        id: 3,
        title: "Data Types 🔤",
        icon: <Type className="text-purple-500" />,
        description: "Numbers, text, and booleans—what's in the box?",
        questions: [
            { id: "l3-q1", question: "What type is 10.5?", codeSnippet: "x = 10.5", options: ["int", "float", "str", "bool"], correctAnswer: "float", explanation: "Decimals are floats!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=990s" },
            { id: "l3-q2", question: "What type is 'Python'?", codeSnippet: "x = 'Python'", options: ["int", "float", "str", "bool"], correctAnswer: "str", explanation: "Text is a string!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=990s" },
            { id: "l3-q3", question: "What type is True?", codeSnippet: "x = True", options: ["int", "float", "str", "bool"], correctAnswer: "bool", explanation: "True/False are Booleans!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8&t=990s" },
            { id: "l3-q4", question: "What function checks the type?", codeSnippet: "____(x)", options: ["check", "kind", "type", "what"], correctAnswer: "type", explanation: "type() tells you the type!", youtubeLink: "https://www.youtube.com/watch?v=4e8OE9dL3DI" },
            { id: "l3-q5", question: "What is an 'int'?", options: ["International", "Integer", "Internal", "Interview"], correctAnswer: "Integer", explanation: "Whole numbers!", youtubeLink: "https://www.youtube.com/watch?v=4e8OE9dL3DI" },
            { id: "l3-q6", question: "Is \"123\" an integer or string?", codeSnippet: "x = \"123\"", options: ["int", "str", "bool", "float"], correctAnswer: "str", explanation: "Quotes make it a string!", youtubeLink: "https://www.youtube.com/watch?v=4e8OE9dL3DI" },
            { id: "l3-q7", question: "How do you turn '5' into a number?", codeSnippet: "x = ____('5')", options: ["int", "num", "make_int", "float"], correctAnswer: "int", explanation: "Use int() to convert!", youtubeLink: "https://www.youtube.com/watch?v=gCCVsvgR2KU" },
            { id: "l3-q8", question: "What is None in Python?", options: ["Zero", "Nothing", "Error", "False"], correctAnswer: "Nothing", explanation: "NoneType represents 'nothing'!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l3-q9", question: "What is str(10)?", options: ["10", "'10'", "Error", "str 10"], correctAnswer: "'10'", explanation: "str() turns it to text!", youtubeLink: "https://www.youtube.com/watch?v=gCCVsvgR2KU" },
            { id: "l3-q10", question: "What type is result?", codeSnippet: "result = 5 > 3", options: ["int", "str", "bool", "None"], correctAnswer: "bool", explanation: "Comparisons give True or False!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l3-q11", question: "Can you add a string and an integer?", codeSnippet: "print('Age: ' + 10)", options: ["Yes", "No", "Only with +", "Maybe"], correctAnswer: "No", explanation: "You must convert 10 to a string first!", youtubeLink: "https://www.youtube.com/watch?v=gCCVsvgR2KU" },
            { id: "l3-q12", question: "What is float(5)?", options: ["5", "5.0", "'5.0'", "Error"], correctAnswer: "5.0", explanation: "Floats always have decimals!", youtubeLink: "https://www.youtube.com/watch?v=gCCVsvgR2KU" },
            { id: "l3-q13", question: "What is bool(0)?", options: ["True", "False", "None", "0"], correctAnswer: "False", explanation: "0 is always False in Boolean!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l3-q14", question: "What is bool(1)?", options: ["True", "False", "None", "1"], correctAnswer: "True", explanation: "Numbers other than 0 are True!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l3-q15", question: "What type is x?", codeSnippet: "x = \"\"", options: ["None", "bool", "str", "Empty"], correctAnswer: "str", explanation: "Even an empty string is a string!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l3-q16", question: "What does int(9.99) give?", options: ["9.99", "10", "9", "Error"], correctAnswer: "9", explanation: "int() just cuts off the decimal!", youtubeLink: "https://www.youtube.com/watch?v=gCCVsvgR2KU" },
            { id: "l3-q17", question: "Is 'True' (with quotes) a boolean?", options: ["Yes", "No", "Maybe", "Only in loops"], correctAnswer: "No", explanation: "Quotes make it a string!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l3-q18", question: "What is the type of type(5)?", options: ["int", "type", "str", "class"], correctAnswer: "type", explanation: "Meta! But it shows as <class 'type'>", youtubeLink: "https://www.youtube.com/watch?v=4e8OE9dL3DI" },
            { id: "l3-q19", question: "Can a variable change its type?", codeSnippet: "x = 5\nx = 'Hi'", options: ["Yes", "No", "Only once", "Error"], correctAnswer: "Yes", explanation: "Python is dynamically typed!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l3-q20", question: "What is bool(\"Hi\")?", options: ["True", "False", "None", "Error"], correctAnswer: "True", explanation: "Any text is True, empty is False!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" }
        ]
    },
    {
        id: 4,
        title: "Numbers & Math ➕",
        icon: <Hash className="text-orange-500" />,
        description: "Use Python as a super-powered calculator.",
        questions: [
            { id: "l4-q1", question: "What is 15 // 4?", codeSnippet: "print(15 // 4)", options: ["3.75", "3", "4", "3.0"], correctAnswer: "3", explanation: "Floor division gives the whole number!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q2", question: "What is 15 % 4?", codeSnippet: "print(15 % 4)", options: ["3.75", "3", "4", "1"], correctAnswer: "3", explanation: "Modulo (%) gives the remainder!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q3", question: "What symbol is for exponents (powers)?", options: ["^", "*", "**", "^^"], correctAnswer: "**", explanation: "2 ** 3 = 8!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q4", question: "What is 2 + 3 * 4?", options: ["20", "14", "24", "10"], correctAnswer: "14", explanation: "Multiplication first! (PEMDAS)", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q5", question: "How do you add 5 to x?", codeSnippet: "x ____ 5", options: ["+=", "=+", "++", "add"], correctAnswer: "+=", explanation: "Shortcut for x = x + 5!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q6", question: "What is round(3.7)?", options: ["3", "4", "3.0", "4.0"], correctAnswer: "4", explanation: "round() goes to the nearest whole!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q7", question: "What is abs(-5)?", options: ["5", "-5", "0", "Error"], correctAnswer: "5", explanation: "Absolute value is distance from 0!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q8", question: "What is max(1, 5, 2)?", options: ["1", "5", "2", "8"], correctAnswer: "5", explanation: "max() finds the biggest!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q9", question: "What is min(1, 5, 2)?", options: ["1", "5", "2", "0"], correctAnswer: "1", explanation: "min() finds the smallest!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q10", question: "What is 10 / 2?", options: ["5", "5.0", "5.2", "20"], correctAnswer: "5.0", explanation: "Normal division always gives a float!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q11", question: "In PEMDAS, what is 'P'?", options: ["Power", "Plus", "Parentheses", "Point"], correctAnswer: "Parentheses", explanation: "Brackets first!", youtubeLink: "https://www.mathsisfun.com/operation-order-pemdas.html" },
            { id: "l4-q12", question: "What is 5 ** 2?", options: ["10", "25", "7", "52"], correctAnswer: "25", explanation: "5 squared is 25!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q13", question: "What is sum([1, 2, 3])?", options: ["6", "123", "Error", "1,2,3"], correctAnswer: "6", explanation: "sum() adds them all up!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q14", question: "What is 10 - 2 * 3?", options: ["24", "4", "8", "6"], correctAnswer: "4", explanation: "2 * 3 = 6, then 10 - 6 = 4!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q15", question: "What is (10 - 2) * 3?", options: ["24", "4", "8", "30"], correctAnswer: "24", explanation: "Parentheses first!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q16", question: "What is 7 % 2?", options: ["3.5", "3", "1", "0"], correctAnswer: "1", explanation: "7 divided by 2 is 3 with 1 left!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q17", question: "What is round(3.2)?", options: ["3", "4", "3.0", "3.2"], correctAnswer: "3", explanation: "Round down for .2!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q18", question: "How do you multiply x by 2 shortcut?", codeSnippet: "x ____ 2", options: ["*=", "=*", "x2", "mul"], correctAnswer: "*=", explanation: "Shortcut for multiplication and assignment!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q19", question: "What is 2 ** 0?", options: ["0", "1", "2", "Error"], correctAnswer: "1", explanation: "Anything to the power of 0 is 1!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" },
            { id: "l4-q20", question: "What is 10 // 3?", options: ["3.33", "3", "4", "1"], correctAnswer: "3", explanation: "Integer division!", youtubeLink: "https://www.youtube.com/watch?v=khKv-8q7YmY" }
        ]
    },
    {
        id: 5,
        title: "Strings & Text ✏️",
        icon: <Code2 className="text-pink-500" />,
        description: "Slice, dice, and glue text together.",
        questions: [
            { id: "l5-q1", question: "What is 'Python'[0]?", options: ["P", "y", "n", "0"], correctAnswer: "P", explanation: "Starts at index 0!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q2", question: "What is len('Hi')?", options: ["1", "2", "3", "0"], correctAnswer: "2", explanation: "len() counts characters!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q3", question: "How do you make text ALL CAPS?", codeSnippet: "text.____()", options: ["CAPS", "upper", "BIG", "loud"], correctAnswer: "upper", explanation: ".upper() does it!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" },
            { id: "l5-q4", question: "How do you find the last letter of any string?", codeSnippet: "text[____]", options: ["-1", "end", "len", "last"], correctAnswer: "-1", explanation: "Negative index starts from the end!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q5", question: "What is 'Apple' + 'Pie'?", options: ["ApplePie", "Apple Pie", "Apple+Pie", "Error"], correctAnswer: "ApplePie", explanation: "Glueing strings! (Concatenation)", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q6", question: "What does 'Python'[1:4] give?", options: ["Pyt", "yth", "ytho", "Pyth"], correctAnswer: "yth", explanation: "Index 1 to 3 (4 is excluded)!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q7", question: "What is 'A' * 3?", options: ["AAA", "A3", "3A", "Error"], correctAnswer: "AAA", explanation: "Multiplication repeats strings!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q8", question: "How do you replace 'bad' with 'good'?", codeSnippet: "text.____('bad', 'good')", options: ["change", "fix", "replace", "swap"], correctAnswer: "replace", explanation: ".replace() is built-in!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" },
            { id: "l5-q9", question: "Which is an 'f-string'?", options: ["f'Hi'", "'fHi'", "str(f)", "f-Hi"], correctAnswer: "f'Hi'", explanation: "f before the quotes!", youtubeLink: "https://www.youtube.com/watch?v=nghuHvKLhJA" },
            { id: "l5-q10", question: "What is 'hello'.capitalize()?", options: ["HELLO", "Hello", "hELLO", "Hello!"], correctAnswer: "Hello", explanation: "First letter big, rest small!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" },
            { id: "l5-q11", question: "What is len(' ') (space)?", options: ["0", "1", "Error", "None"], correctAnswer: "1", explanation: "Spaces count as characters!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q12", question: "What is 'Python'[-2]?", options: ["o", "n", "h", "t"], correctAnswer: "o", explanation: "Second from the end!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q13", question: "What does 'Py' in 'Python' return?", options: ["True", "False", "Error", "Found"], correctAnswer: "True", explanation: "'in' checks if it's there!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q14", question: "How to strip spaces from the ends?", codeSnippet: "text.____()", options: ["clean", "cut", "strip", "clear"], correctAnswer: "strip", explanation: ".strip() removes whitespace!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" },
            { id: "l5-q15", question: "What is f'{2+2}'?", options: ["2+2", "4", "{4}", "f4"], correctAnswer: "4", explanation: "f-strings do math inside!", youtubeLink: "https://www.youtube.com/watch?v=nghuHvKLhJA" },
            { id: "l5-q16", question: "How to get every other letter of 'ABCDEF'?", options: ["text[::2]", "text[1:2]", "text[::]", "text[2]"], correctAnswer: "text[::2]", explanation: "Step of 2!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q17", question: "What is 'Python'.find('y')?", options: ["0", "1", "2", "y"], correctAnswer: "1", explanation: ".find() returns the index!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" },
            { id: "l5-q18", question: "What does 'Python'[::-1] do?", options: ["Reverse", "Upper", "Slice", "Error"], correctAnswer: "Reverse", explanation: "Cool trick to flip text!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l5-q19", question: "What is 'apple'.islower()?", options: ["True", "False", "Error", "None"], correctAnswer: "True", explanation: "Checks if all are lowercase!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" },
            { id: "l5-q20", question: "What is '123'.isdigit()?", options: ["True", "False", "Error", "None"], correctAnswer: "True", explanation: "Checks if all are numbers!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" }
        ]
    },
    {
        id: 6,
        title: "User Input 🎤",
        icon: <Zap className="text-yellow-500" />,
        description: "Make your program listen to the user.",
        questions: [
            { id: "l6-q1", question: "What function asks the user a question?", options: ["ask", "get", "input", "say"], correctAnswer: "input", explanation: "input() is the listener!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q2", question: "What type is input() ALWAYS?", options: ["int", "float", "str", "bool"], correctAnswer: "str", explanation: "Even if they type 10, it's '10'!", youtubeLink: "https://www.youtube.com/watch?v=r2KcOsUPTzw" },
            { id: "l6-q3", question: "How to get a number from input?", codeSnippet: "age = ____(input('Age? '))", options: ["int", "num", "make_int", "str"], correctAnswer: "int", explanation: "Wrap it in int()!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q4", question: "What goes inside input('____')?", options: ["The answer", "The prompt", "A variable", "A number"], correctAnswer: "The prompt", explanation: "The question for the user!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q5", question: "Can input() be used without a prompt?", options: ["Yes", "No", "Only for math", "Only once"], correctAnswer: "Yes", explanation: "input() works but shows nothing!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q6", question: "What happens when code reaches input()?", options: ["Stops and waits", "Crashes", "Skips it", "Prints zero"], correctAnswer: "Stops and waits", explanation: "It waits for 'Enter'!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q7", question: "How to get a decimal from input?", codeSnippet: "price = ____(input('Price? '))", options: ["float", "decimal", "int", "str"], correctAnswer: "float", explanation: "Use float()!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q8", question: "If user types 'Hi', what is x + '!'?", codeSnippet: "x = input()", options: ["Hi!", "Hi !", "Error", "!"], correctAnswer: "Hi!", explanation: "Strings can glue!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l6-q9", question: "What is age + 1 if age = input() and user types 10?", options: ["11", "Error", "101", "Nothing"], correctAnswer: "Error", explanation: "Can't add number to string!", youtubeLink: "https://www.youtube.com/watch?v=r2KcOsUPTzw" },
            { id: "l6-q10", question: "How to handle YES vs yes from input?", codeSnippet: "ans = input().____()", options: ["lower", "small", "strip", "clear"], correctAnswer: "lower", explanation: "Convert to lowercase to be safe!", youtubeLink: "https://www.youtube.com/watch?v=9aS-ZugS-cQ" },
            { id: "l6-q11", question: "Can you store input directly in a variable?", codeSnippet: "name = input()", options: ["Yes", "No", "Only if quoted", "Error"], correctAnswer: "Yes", explanation: "That's how we save it!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q12", question: "What does \n do in a prompt?", options: ["New Line", "Note", "Number", "Next"], correctAnswer: "New Line", explanation: "Adds a line break!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l6-q13", question: "What button ends the input task?", options: ["Space", "Enter", "Tab", "Esc"], correctAnswer: "Enter", explanation: "The user must press Enter!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q14", question: "What is input('Name: ') + '!'?", options: ["The name!", "Error", "Name:!", "!"], correctAnswer: "The name!", explanation: "Adds exclamation to the input!", youtubeLink: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
            { id: "l6-q15", question: "Which is better for kids' programs?", options: ["input()", "Raw Input", "GUI", "API"], correctAnswer: "input()", explanation: "Simple and interactive!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q16", question: "How many inputs can you have in one file?", options: ["1", "10", "Unlimited", "0"], correctAnswer: "Unlimited", explanation: "As many as you need!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q17", question: "Can you do input(f'Hello {user}')?", options: ["Yes", "No", "Only math", "Error"], correctAnswer: "Yes", explanation: "f-strings work in prompts!", youtubeLink: "https://www.youtube.com/watch?v=nghuHvKLhJA" },
            { id: "l6-q18", question: "What is x if x = int(input()) and user types 5.5?", options: ["5.5", "5", "Error", "Nothing"], correctAnswer: "Error", explanation: "int() expects a whole number or text representing one!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q19", question: "How to tell user to type a color?", options: ["input('Color?')", "ask('Color?')", "print(Color?)", "get(Color?)"], correctAnswer: "input('Color?')", explanation: "Use the prompt!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" },
            { id: "l6-q20", question: "Does input wait forever?", options: ["Yes", "No (1 min)", "Only on PC", "No (1 hour)"], correctAnswer: "Yes", explanation: "It waits until the user acts!", youtubeLink: "https://www.youtube.com/watch?v=dUpNTLk6aT4" }
        ]
    },
    {
        id: 7,
        title: "Decisions (If) 🤔",
        icon: <Split className="text-indigo-500" />,
        description: "Teach your code how to make choices.",
        questions: [
            { id: "l7-q1", question: "What symbol checks for equality?", options: ["=", "==", "is", "==="], correctAnswer: "==", explanation: "Double equals for checking!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q2", question: "What is 'not equal'?", options: ["!=", "==", "<>", "no="], correctAnswer: "!=", explanation: "!= means not equal!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q3", question: "What comes after 'if' if the condition is false?", options: ["then", "else", "or", "stop"], correctAnswer: "else", explanation: "else handles the rest!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q4", question: "How do you check a third choice?", options: ["else if", "elif", "case", "other"], correctAnswer: "elif", explanation: "elif is short for else if!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q5", question: "Is indentation important in an 'if'?", options: ["Yes", "No", "Sometimes", "Only for strings"], correctAnswer: "Yes", explanation: "It tells Python what's inside!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q6", question: "Which operator means BOTH must be true?", options: ["or", "and", "but", "plus"], correctAnswer: "and", explanation: "and needs both sides to be True!", youtubeLink: "https://www.youtube.com/watch?v=7qHMXu99d88" },
            { id: "l7-q7", question: "Which operator means AT LEAST ONE is true?", options: ["or", "and", "either", "any"], correctAnswer: "or", explanation: "or only needs one True!", youtubeLink: "https://www.youtube.com/watch?v=7qHMXu99d88" },
            { id: "l7-q8", question: "What is the result of 10 > 5?", options: ["True", "False", "10", "Error"], correctAnswer: "True", explanation: "10 is bigger than 5!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q9", question: "How do you check if 'a' is in a list?", options: ["in", "has", "check", "with"], correctAnswer: "in", explanation: "Use the 'in' operator!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l7-q10", question: "What is 'not True'?", options: ["False", "True", "None", "Error"], correctAnswer: "False", explanation: "'not' flips the value!", youtubeLink: "https://www.youtube.com/watch?v=7qHMXu99d88" },
            { id: "l7-q11", question: "What symbol ends the 'if' line?", options: [":", ";", ".", "!"], correctAnswer: ":", explanation: "Always end if/elif/else with a colon!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q12", question: "Is age = 10 the same as age == 10?", options: ["Yes", "No", "Depends", "Error"], correctAnswer: "No", explanation: "One saves, one checks!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q13", question: "What will 5 >= 5 return?", options: ["True", "False", "Error", "None"], correctAnswer: "True", explanation: "It is equal to 5!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q14", question: "Can you have an 'if' inside another 'if'?", options: ["Yes", "No", "Only once", "Error"], correctAnswer: "Yes", explanation: "That's a nested if!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q15", question: "What is a Boolean?", options: ["A snake", "True/False", "A number", "Text"], correctAnswer: "True/False", explanation: "Yes/No in computer speak!", youtubeLink: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
            { id: "l7-q16", question: "Does else need a condition?", codeSnippet: "else age > 10:", options: ["Yes", "No", "Sometimes", "Only if big"], correctAnswer: "No", explanation: "else covers everything else!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q17", question: "What is result of True and False?", options: ["True", "False", "None", "Error"], correctAnswer: "False", explanation: "'and' needs both!", youtubeLink: "https://www.youtube.com/watch?v=7qHMXu99d88" },
            { id: "l7-q18", question: "What is result of True or False?", options: ["True", "False", "None", "Error"], correctAnswer: "True", explanation: "'or' only needs one!", youtubeLink: "https://www.youtube.com/watch?v=7qHMXu99d88" },
            { id: "l7-q19", question: "How many elifs can you have?", options: ["1", "0", "Unlimited", "10"], correctAnswer: "Unlimited", explanation: "As many as you need!", youtubeLink: "https://www.youtube.com/watch?v=Zp5MuPOtR4E" },
            { id: "l7-q20", question: "What is result of not(5 == 5)?", options: ["True", "False", "Error", "None"], correctAnswer: "False", explanation: "not(True) is False!", youtubeLink: "https://www.youtube.com/watch?v=7qHMXu99d88" }
        ]
    },
    {
        id: 8,
        title: "Lists 🛒",
        icon: <ListOrdered className="text-cyan-500" />,
        description: "Organize collections of items in shopping carts.",
        questions: [
            { id: "l8-q1", question: "Which brackets create a list?", options: ["( )", "[ ]", "{ }", "< >"], correctAnswer: "[ ]", explanation: "Square brackets for lists!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q2", question: "How to add to the end?", codeSnippet: "items.____('A')", options: ["add", "append", "plus", "insert"], correctAnswer: "append", explanation: ".append() adds to the end!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q3", question: "What is the index of the first item?", options: ["0", "1", "-1", "A"], correctAnswer: "0", explanation: "Always start at 0!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q4", question: "How to remove the last item?", codeSnippet: "items.____()", options: ["pop", "remove", "cut", "del"], correctAnswer: "pop", explanation: ".pop() takes the last one!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q5", question: "How to check if 'apple' is in fruits?", options: ["in", "has", "exists", "contains"], correctAnswer: "in", explanation: "'in' is a keyword!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q6", question: "How to count items in a list?", options: ["len()", "count()", "size()", "items()"], correctAnswer: "len()", explanation: "len() counts them!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q7", question: "What is fruit[0:2] of ['a','b','c']?", options: ["['a','b']", "['a','b','c']", "['b','c']", "['a']"], correctAnswer: "['a','b']", explanation: "Slicing works like strings!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q8", question: "How to sort a list?", codeSnippet: "nums.____()", options: ["order", "arrange", "sort", "fix"], correctAnswer: "sort", explanation: ".sort() arranges them!", youtubeLink: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
            { id: "l8-q9", question: "Can a list hold different types?", codeSnippet: "[1, 'Hi', True]", options: ["Yes", "No", "Only if small", "Error"], correctAnswer: "Yes", explanation: "Lists are mixed bags!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q10", question: "How to reverse a list?", codeSnippet: "nums.____()", options: ["flip", "back", "reverse", "swap"], correctAnswer: "reverse", explanation: ".reverse() flips order!", youtubeLink: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
            { id: "l8-q11", question: "How to change the first item to 'X'?", codeSnippet: "items[0] = ____", options: ["'X'", "X", "change 'X'", "set 'X'"], correctAnswer: "'X'", explanation: "Assign directly to index!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q12", question: "What is items[-1]?", options: ["First", "Last", "None", "Error"], correctAnswer: "Last", explanation: "Negative index starts from end!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q13", question: "How to remove 'apple' by name?", codeSnippet: "items.____('apple')", options: ["pop", "remove", "del", "cut"], correctAnswer: "remove", explanation: ".remove() finds the value!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q14", question: "How to insert at index 1?", codeSnippet: "items.____(1, 'Hi')", options: ["add", "append", "insert", "push"], correctAnswer: "insert", explanation: ".insert() needs position!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q15", question: "What is [1, 2] + [3, 4]?", options: ["[1,2,3,4]", "[1,2],[3,4]", "[4,6]", "Error"], correctAnswer: "[1,2,3,4]", explanation: "Plus joins lists!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q16", question: "How to clear a list?", codeSnippet: "items.____()", options: ["empty", "delete", "clear", "wipe"], correctAnswer: "clear", explanation: ".clear() removes all!", youtubeLink: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
            { id: "l8-q17", question: "What is [0] * 3?", options: ["[0,0,0]", "[0,3]", "000", "Error"], correctAnswer: "[0,0,0]", explanation: "Repeat items with *!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q18", question: "How to find index of 'A'?", codeSnippet: "items.____('A')", options: ["where", "index", "find", "get"], correctAnswer: "index", explanation: ".index() finds position!", youtubeLink: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
            { id: "l8-q19", question: "Can you have a list inside a list?", options: ["Yes", "No", "Only if empty", "Error"], correctAnswer: "Yes", explanation: "Those are nested lists!", youtubeLink: "https://www.youtube.com/watch?v=ohCDWZgNIU0" },
            { id: "l8-q20", question: "How to count 'A's in a list?", codeSnippet: "items.____('A')", options: ["len", "size", "count", "num"], correctAnswer: "count", explanation: ".count() finds frequency!", youtubeLink: "https://www.youtube.com/watch?v=W8KRzm-HUcc" }
        ]
    },
    {
        id: 9,
        title: "Loops 🔄",
        icon: <RefreshCw className="text-rose-500" />,
        description: "Repeat actions without writing them twice.",
        questions: [
            { id: "l9-q1", question: "What keyword repeats for a list?", options: ["repeat", "each", "for", "loop"], correctAnswer: "for", explanation: "for loops through collections!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q2", question: "What does range(5) count to?", options: ["1-5", "0-4", "0-5", "1-4"], correctAnswer: "0-4", explanation: "Starts at 0, 5 numbers!", youtubeLink: "https://www.youtube.com/watch?v=Z3tO0xRw-XI" },
            { id: "l9-q3", question: "How to loop while a condition is true?", options: ["while", "until", "during", "if"], correctAnswer: "while", explanation: "while loops use conditions!", youtubeLink: "https://www.youtube.com/watch?v=OnDr4J2UXSA" },
            { id: "l9-q4", question: "What is range(1, 4)?", options: ["1,2,3,4", "1,2,3", "0,1,2,3", "4,4,4"], correctAnswer: "1,2,3", explanation: "Starts at 1, ends before 4!", youtubeLink: "https://www.youtube.com/watch?v=Z3tO0xRw-XI" },
            { id: "l9-q5", question: "What does range(0, 10, 2) do?", options: ["0,1,2", "0,2,4,6,8", "2,4,6,8,10", "Error"], correctAnswer: "0,2,4,6,8", explanation: "Step of 2!", youtubeLink: "https://www.youtube.com/watch?v=Z3tO0xRw-XI" },
            { id: "l9-q6", question: "Can you loop through a string?", codeSnippet: "for char in 'Hi':", options: ["Yes", "No", "Only if list", "Error"], correctAnswer: "Yes", explanation: "Strings are sequences!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q7", question: "What stops an infinite loop?", options: ["break", "stop", "end", "Exit"], correctAnswer: "break", explanation: "break exits the loop!", youtubeLink: "https://www.youtube.com/watch?v=OnDr4J2UXSA" },
            { id: "l9-q8", question: "What skips to the next turn?", options: ["next", "continue", "skip", "pass"], correctAnswer: "continue", explanation: "continue starts next turn!", youtubeLink: "https://www.youtube.com/watch?v=OnDr4J2UXSA" },
            { id: "l9-q9", question: "Does a for loop need a variable?", codeSnippet: "for ____ in items:", options: ["Yes", "No", "Only if math", "Maybe"], correctAnswer: "Yes", explanation: "To hold the current item!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q10", question: "What is an infinite loop?", options: ["Never ends", "Loops 100 times", "Fast loop", "Slow loop"], correctAnswer: "Never ends", explanation: "Usually a bug!", youtubeLink: "https://www.youtube.com/watch?v=OnDr4J2UXSA" },
            { id: "l9-q11", question: "What is range(5, 0, -1)?", options: ["5,4,3,2,1", "0,1,2,3,4", "Error", "5,0,-1"], correctAnswer: "5,4,3,2,1", explanation: "Counting backwards!", youtubeLink: "https://www.youtube.com/watch?v=Z3tO0xRw-XI" },
            { id: "l9-q12", question: "How to repeat 10 times?", options: ["range(10)", "repeat(10)", "x10", "for 10:"], correctAnswer: "range(10)", explanation: "Standard way!", youtubeLink: "https://www.youtube.com/watch?v=Z3tO0xRw-XI" },
            { id: "l9-q13", question: "What is nesting loops?", options: ["Loop in loop", "Loop in bird", "Loop in list", "Loop in if"], correctAnswer: "Loop in loop", explanation: "Like a clock!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q14", question: "What is range(len(mylist))?", options: ["The items", "The indexes", "The total", "Error"], correctAnswer: "The indexes", explanation: "Useful for tracking position!", youtubeLink: "https://www.youtube.com/watch?v=Z3tO0xRw-XI" },
            { id: "l9-q15", question: "Does indentation matter in loops?", options: ["Yes", "No", "Sometimes", "Only while"], correctAnswer: "Yes", explanation: "Tells Python what to repeat!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q16", question: "What will print for i in range(1)?", options: ["0", "1", "0, 1", "Nothing"], correctAnswer: "0", explanation: "Just the first number!", youtubeLink: "https://www.youtube.com/watch?v=Z3tO0xRw-XI" },
            { id: "l9-q17", question: "Is 'for i in range(5):' valid?", options: ["Yes", "No", "Missing end", "Error"], correctAnswer: "Yes", explanation: "Needs the colon!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q18", question: "What is 'iterating'?", options: ["Math", "Looping", "Saving", "Deleting"], correctAnswer: "Looping", explanation: "Fancy word for looping!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q19", question: "Which loop is better for a list?", options: ["for", "while", "if", "print"], correctAnswer: "for", explanation: "for is built for collections!", youtubeLink: "https://www.youtube.com/watch?v=zmIdC0_0fgY" },
            { id: "l9-q20", question: "Can a while loop become a for loop?", options: ["Yes", "No", "Sometimes", "Only in Python 4"], correctAnswer: "Yes", explanation: "Logic can be similar!", youtubeLink: "https://www.youtube.com/watch?v=OnDr4J2UXSA" }
        ]
    },
    {
        id: 10,
        title: "Functions 🪄",
        icon: <Zap className="text-amber-500" />,
        description: "Write magic spells once and use them forever.",
        questions: [
            { id: "l10-q1", question: "What keyword defines a function?", options: ["func", "def", "define", "make"], correctAnswer: "def", explanation: "def for Define!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q2", question: "How to send an answer back?", options: ["give", "send", "return", "back"], correctAnswer: "return", explanation: "return sends output!", youtubeLink: "https://www.youtube.com/watch?v=0c9W3IBxYf4" },
            { id: "l10-q3", question: "What is an argument?", options: ["Fight", "Input data", "Error", "Title"], correctAnswer: "Input data", explanation: "The info you give to the function!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q4", question: "How do you 'call' a function?", options: ["call()", "name()", "run()", "start()"], correctAnswer: "name()", explanation: "Just use the name + ()!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q5", question: "Can functions have multiple parameters?", options: ["Yes", "No", "Max 2", "Max 5"], correctAnswer: "Yes", explanation: "As many as you need!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q6", question: "What is a 'local' variable?", options: ["Lives everywhere", "Lives in function", "Lives on PC", "Small"], correctAnswer: "Lives in function", explanation: "Private to that function!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q7", question: "Does a function run before it's called?", options: ["Yes", "No", "Maybe", "On Tuesdays"], correctAnswer: "No", explanation: "Must call it to start!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q8", question: "What is a parameter?", options: ["Empty box", "Value", "The Result", "Error"], correctAnswer: "Empty box", explanation: "It's the placeholder!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q9", question: "What is scope?", options: ["Mouthwash", "Variable life", "Magnifier", "List"], correctAnswer: "Variable life", explanation: "Where a variable exists!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q10", question: "Can a function call another function?", options: ["Yes", "No", "Only if same", "Error"], correctAnswer: "Yes", explanation: "Chain them together!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q11", question: "What is a default parameter?", options: ["Standard value", "First one", "Last one", "None"], correctAnswer: "Standard value", explanation: "Value used if none given!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q12", question: "Does return stop the function?", options: ["Yes", "No", "Only if big", "Maybe"], correctAnswer: "Yes", explanation: "It exits immediately!", youtubeLink: "https://www.youtube.com/watch?v=0c9W3IBxYf4" },
            { id: "l10-q13", question: "Can you return multiple values?", options: ["Yes", "No", "Only strings", "Error"], correctAnswer: "Yes", explanation: "Returns them as a tuple!", youtubeLink: "https://www.youtube.com/watch?v=0c9W3IBxYf4" },
            { id: "l10-q14", question: "Why use functions?", options: ["Organization", "Reuse code", "Cleanliness", "All of these"], correctAnswer: "All of these", explanation: "They make code smart!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q15", question: "What is def greet(): print('Hi')?", options: ["Definition", "Call", "Error", "String"], correctAnswer: "Definition", explanation: "Writing the recipe!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q16", question: "What is greet()?", options: ["Definition", "Call", "Error", "String"], correctAnswer: "Call", explanation: "Pressing the GO button!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q17", question: "What if a function has no return?", options: ["Returns None", "Error", "Returns 0", "Stops"], correctAnswer: "Returns None", explanation: "Default return is None!", youtubeLink: "https://www.youtube.com/watch?v=0c9W3IBxYf4" },
            { id: "l10-q18", question: "What are parentheses for?", options: ["Arguments", "Looks", "Math", "Comments"], correctAnswer: "Arguments", explanation: "To pass info in!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q19", question: "Is 'my_func' a good function name?", options: ["Yes", "No", "Too long", "No underscore"], correctAnswer: "Yes", explanation: "Descriptive and snake_case!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" },
            { id: "l10-q20", question: "What is recursion?", options: ["Self-calling", "Double-loop", "Triple-if", "Error"], correctAnswer: "Self-calling", explanation: "A function that calls itself!", youtubeLink: "https://www.youtube.com/watch?v=NSbOtYzIQI0" }
        ]
    }
];

// --- UTILS ---
const playSound = (type) => {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        if (type === 'success') {
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1046, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
        } else {
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(50, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
        }
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
    } catch (e) { }
};

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

// --- COMPONENTS ---

const PixelThePython = ({ mood }) => {
    const animations = {
        idle: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity } },
        happy: { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0], transition: { duration: 0.5 } },
        thinking: { x: [0, 5, -5, 0], transition: { duration: 2, repeat: Infinity } },
    };

    return (
        <motion.div className="relative w-24 h-24" animate={animations[mood] || animations.idle}>
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                <path d="M40,140 C40,100 80,60 100,60 C120,60 160,100 160,140 C160,180 120,180 100,180 C80,180 40,180 40,140" fill="#4ADE80" stroke="#166534" strokeWidth="8" />
                <circle cx="85" cy="110" r="8" fill="white" />
                <circle cx="115" cy="110" r="8" fill="white" />
                <circle cx={mood === 'thinking' ? 88 : 85} cy="110" r="4" fill="black" />
                <circle cx={mood === 'thinking' ? 118 : 115} cy="110" r="4" fill="black" />
                {mood === 'happy' ? (
                    <path d="M85,130 Q100,145 115,130" fill="none" stroke="#166534" strokeWidth="4" strokeLinecap="round" />
                ) : (
                    <line x1="90" y1="135" x2="110" y2="135" stroke="#166534" strokeWidth="4" strokeLinecap="round" />
                )}
            </svg>
        </motion.div>
    );
};

const CodeBlock = ({ code }) => (
    <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-300 relative overflow-hidden shadow-inner">
        <div className="flex gap-2 mb-2 border-b border-slate-800 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
        </div>
        <pre className="whitespace-pre-wrap">
            {code ? code.split('\n').map((line, i) => (
                <div key={i} className="flex">
                    <span className="text-slate-600 mr-4 w-4 text-right select-none">{i + 1}</span>
                    <span>
                        {line.split(' ').map((word, j) => {
                            let color = "text-slate-300";
                            const cleanWord = word.replace(/[()_]/g, '');
                            if (['if', 'print', 'type', 'int', 'str', 'def', 'for', 'in', 'range', 'return'].includes(cleanWord)) color = "text-purple-400";
                            if (word.startsWith("'") || word.endsWith("'") || word.startsWith('"') || word.endsWith('"')) color = "text-emerald-400";
                            if (!isNaN(word) && word !== '') color = "text-amber-400";
                            if (word.startsWith('#')) color = "text-slate-500 italic";
                            if (word.includes('____')) color = "text-white bg-slate-700 rounded px-1";
                            return <span key={j} className={color}>{word} </span>;
                        })}
                    </span>
                </div>
            )) : <div className="italic text-slate-500">No code snippet provided</div>}
        </pre>
    </div>
);

export default function App() {
    const [gameState, setGameState] = useState('welcome');
    const [coins, setCoins] = useState(0);
    const [streak, setStreak] = useState(0);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [mascotMood, setMascotMood] = useState('idle');

    const startLesson = (lesson) => {
        setSelectedLesson(lesson);
        const pool = shuffleArray(lesson.questions).slice(0, QUESTIONS_PER_SESSION);
        setShuffledQuestions(pool);
        setCurrentQuestionIdx(0);
        setGameState('quiz');
        setMascotMood('idle');
        playSound('click');
    };

    const handleAnswer = (option) => {
        const question = shuffledQuestions[currentQuestionIdx];
        setSelectedOption(option);
        const correct = option === question.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            playSound('success');
            setCoins(prev => prev + 10);
            setStreak(prev => prev + 1);
            setMascotMood('happy');
        } else {
            playSound('error');
            setMascotMood('thinking');
        }
        setGameState('feedback');
    };

    const nextAction = () => {
        if (currentQuestionIdx < shuffledQuestions.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
            setGameState('quiz');
            setSelectedOption(null);
            setIsCorrect(null);
            setMascotMood('idle');
        } else {
            setGameState('complete');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col items-center p-4">
            <header className="w-full max-w-2xl flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setGameState('welcome')}>
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-black text-xl">P</div>
                    <h1 className="text-xl font-black text-slate-800 hidden sm:block">PyQuest</h1>
                </div>

                <div className="flex gap-3">
                    <div className="flex items-center gap-1.5 bg-white border px-3 py-1.5 rounded-full shadow-sm">
                        <Flame size={16} className="text-orange-500 fill-orange-500" />
                        <span className="font-bold text-sm">{streak}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white border px-3 py-1.5 rounded-full shadow-sm">
                        <Coins size={16} className="text-amber-500" />
                        <span className="font-bold text-sm">{coins}</span>
                    </div>
                </div>
            </header>

            <main className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px] flex flex-col">
                {(gameState === 'quiz' || gameState === 'feedback') && (
                    <div className="w-full h-1.5 bg-slate-100">
                        <motion.div
                            className="h-full bg-emerald-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestionIdx + 1) / shuffledQuestions.length) * 100}%` }}
                        />
                    </div>
                )}

                <div className="flex-1 p-6 sm:p-8">
                    <AnimatePresence mode="wait">
                        {gameState === 'welcome' && (
                            <motion.div key="welcome" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-8">
                                <PixelThePython mood="idle" />
                                <h2 className="text-3xl font-black text-slate-800 mt-6 mb-2">Welcome, Explorer!</h2>
                                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Master Python bit by bit. Pick a quest and start your journey.</p>
                                <button
                                    onClick={() => setGameState('selection')}
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-10 py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all flex items-center gap-2 mx-auto"
                                >
                                    OPEN QUEST MAP <Map size={20} />
                                </button>
                            </motion.div>
                        )}

                        {gameState === 'selection' && (
                            <motion.div key="selection" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <LayoutGrid className="text-emerald-500" />
                                    <h2 className="text-xl font-black text-slate-800">Your Quests</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {LESSONS_DATA.map((lesson) => (
                                        <motion.button
                                            whileHover={{ y: -2 }}
                                            key={lesson.id}
                                            onClick={() => startLesson(lesson)}
                                            className="text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all flex items-start gap-4 group"
                                        >
                                            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                                {lesson.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 leading-none mb-1">Quest {lesson.id}</h4>
                                                <p className="font-bold text-slate-600 text-sm mb-1">{lesson.title}</p>
                                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{lesson.description}</p>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {(gameState === 'quiz' || gameState === 'feedback') && (
                            <motion.div key="quiz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex-1">
                                        <button
                                            onClick={() => setGameState('selection')}
                                            className="text-xs font-bold text-slate-400 hover:text-emerald-500 transition-colors mb-2 flex items-center gap-1"
                                        >
                                            <RotateCcw size={12} /> EXIT TO MAP
                                        </button>
                                        <h3 className="text-lg font-bold text-slate-800 leading-tight">
                                            {shuffledQuestions[currentQuestionIdx].question}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <PixelThePython mood={mascotMood} />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <CodeBlock code={shuffledQuestions[currentQuestionIdx].codeSnippet} />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {shuffledQuestions[currentQuestionIdx].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            disabled={gameState === 'feedback'}
                                            onClick={() => handleAnswer(option)}
                                            className={`
                        text-left p-4 rounded-2xl border-2 transition-all font-bold text-sm relative
                        ${selectedOption === option
                                                    ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700')
                                                    : 'border-slate-100 hover:border-emerald-200 hover:bg-slate-50 text-slate-700'
                                                }
                        ${gameState === 'feedback' && option === shuffledQuestions[currentQuestionIdx].correctAnswer && 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'}
                      `}
                                        >
                                            {option}
                                            {gameState === 'feedback' && option === shuffledQuestions[currentQuestionIdx].correctAnswer && (
                                                <CheckCircle2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence>
                                    {gameState === 'feedback' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 pt-6 border-t border-slate-100">
                                            <div className={`p-5 rounded-2xl ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'} border-2`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    {isCorrect ? <Award className="text-emerald-500" size={18} /> : <BookOpen className="text-amber-500" size={18} />}
                                                    <h4 className={`font-black text-sm ${isCorrect ? 'text-emerald-700' : 'text-amber-700'}`}>
                                                        {isCorrect ? "BRILLIANT!" : "KEEP LEARNING!"}
                                                    </h4>
                                                </div>
                                                <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                                                    {shuffledQuestions[currentQuestionIdx].explanation}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    {!isCorrect && (
                                                        <a
                                                            href={shuffledQuestions[currentQuestionIdx].youtubeLink}
                                                            target="_blank"
                                                            className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
                                                        >
                                                            WATCH LESSON <ExternalLink size={12} />
                                                        </a>
                                                    )}
                                                    <button
                                                        onClick={nextAction}
                                                        className={`ml-auto flex items-center gap-1.5 px-6 py-2 rounded-xl font-black text-white text-sm shadow-md transition-all
                              ${isCorrect ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-slate-800 hover:bg-slate-900'}
                            `}
                                                    >
                                                        {currentQuestionIdx < shuffledQuestions.length - 1 ? 'NEXT' : 'FINISH'} <ChevronRight size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}

                        {gameState === 'complete' && (
                            <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                                <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <Award size={40} className="text-amber-500" />
                                </div>
                                <h2 className="text-3xl font-black text-slate-800 mb-2">Quest Complete!</h2>
                                <p className="text-slate-500 mb-8">You've mastered {selectedLesson.title}</p>
                                <div className="bg-slate-50 rounded-2xl p-6 flex justify-around mb-8 border border-slate-100">
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">XP Earned</p>
                                        <p className="text-xl font-black text-emerald-500">+100</p>
                                    </div>
                                    <div className="w-px h-full bg-slate-200"></div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">New Streak</p>
                                        <p className="text-xl font-black text-orange-500">{streak}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setGameState('selection')}
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-10 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-2 mx-auto"
                                >
                                    RETURN TO MAP <Map size={20} />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <footer className="mt-8 text-slate-400 text-xs font-medium flex gap-4 opacity-50">
                <span>Curriculum 1.0</span>
                <span>•</span>
                <span>20 Questions per Lesson</span>
            </footer>
        </div>
    );
}