# Python for Kids - Lesson Series

I'll create a comprehensive series of markdown lessons based on your material. Each lesson will be fun, clear, and include references to external resources.

---

## 📚 Lesson 1: Meet Python! 🐍

### What is Python?

Python is a programming language - it's like giving instructions to a computer, but in a way that's easy for humans to read and write!

Think of it like this: You're the boss, and Python is your super-smart assistant who follows your every command!

### Your First Python Program

Let's start with the classic:

```python
print("Hello, world!")
```

When you run this, Python says: "Hello, world!" back to you!

### What is `print()`?

`print()` is like Python's voice. Anything you put inside the parentheses `()` gets said out loud (displayed on screen).

Try these:

```python
print("My name is Katya")
print("I love pizza!")
print(42)
```

### Comments - Notes for Yourself

Comments are notes that Python ignores. They start with `#`:

```python
# This is a comment - Python won't do anything with this line
print("This will print!")  # This comment is next to the code
```

**Why use comments?** They help you remember what your code does!

### 🎮 Your Turn! - Exercises

1. **Print your name:**

```python
# Write code that prints your name
```

2. **Print your age:**

```python
# Write code that prints your age
```

3. **Print your favorite food:**

```python
# Write code that prints your favorite food
```

4. **Print three things you like, each on a new line:**

```python
# Hint: Use three separate print statements!
```

### 🌟 Challenge (Optional)

Try printing a short poem or a joke using multiple print statements!

### 📺 Helpful Videos

- [Python for Beginners - Introduction](https://www.youtube.com/watch?v=kqtD5dpn9C8) - Programming with Mosh
- [What is Python?](https://www.youtube.com/watch?v=_uQrJ0TkZlc) - freeCodeCamp

### 🌐 Websites for Practice

- [Replit](https://replit.com/) - Code in your browser, no installation needed!
- [Code.org](https://code.org/) - Fun coding activities

### ✅ Lesson 1 Checklist

- [ ] I know what `print()` does
- [ ] I can print text and numbers
- [ ] I understand what comments are
- [ ] I completed the exercises

---

## 📚 Lesson 2: Variables and Values 📦

### What are Variables?

Imagine you have a box. You can put things in it, label it, and later look inside to see what's there. That's exactly what a variable is in Python!

![Think of variables as labeled boxes](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EVzVBsqYuCwMtJM-TBifm8AtuhGHDkQwhg&s)

```python
# Creating a variable
my_age = 10
```

Here:

- `my_age` is the **variable name** (the label on the box)
- `=` means "put this in the box" (assignment)
- `10` is the **value** (what's inside the box)

### Variable Names - The Rules

✅ **DO's:**

- Use letters, numbers, and underscores: `my_name`, `age_10`
- Start with a letter or underscore: `name`, `_secret`
- Make them descriptive: `favorite_food` is better than `ff`

❌ **DON'Ts:**

- Don't start with numbers: `1name` ❌
- Don't use spaces: `my name` ❌ (use `my_name` instead ✅)
- Don't use special characters: `my-name` ❌ (`-` is not allowed)

### Practice Creating Variables

```python
# Create some variables
name = "Katya"
age = 10
favorite_color = "purple"

# Print them out
print(name)
print(age)
print(favorite_color)
```

### Changing Variables - The Box Can Change!

The cool thing about variables is that what's inside can change:

```python
score = 0
print(score)  # 0

score = 10
print(score)  # 10

score = 100
print(score)  # 100
```

### Multiple Variables at Once

You can create several variables at once:

```python
x, y, z = 5, 10, 15
print(x)  # 5
print(y)  # 10
print(z)  # 15
```

Or give them all the same value:

```python
a = b = c = 50
print(a)  # 50
print(b)  # 50
print(c)  # 50
```

### 🎮 Your Turn! - Exercises

**Exercise 1: Create Your Profile**

```python
# Create variables for:
# - your name
# - your age
# - your favorite hobby
# - your favorite movie

# Then print them all!
```

**Exercise 2: Fix the Variable Names**

```python
# These variable names have problems - fix them!
1st_name = "Tom"        # What's wrong here?
my age = 10             # What's wrong here?
favorite-movie = "Frozen"  # What's wrong here?
```

**Exercise 3: The Changing Variable**

```python
# Create a variable called 'temperature' with value 20
# Print it
# Change it to 25
# Print it again
# Change it to 30
# Print it one more time
```

**Exercise 4: Swap Two Variables**

```python
# You have two variables:
a = 5
b = 10

# Write code to swap their values so a becomes 10 and b becomes 5
# Hint: You might need a third variable as a temporary box!
```

### 🌟 Challenge: Temperature Tracker

Create variables to track temperature for Monday, Tuesday, and Wednesday. Then print a forecast like:

```
Monday: 22 degrees
Tuesday: 24 degrees
Wednesday: 23 degrees
```

### 📺 Helpful Videos

- [Python Variables - for Kids](https://www.youtube.com/watch?v=zHlJ7B5Wn-s)
- [Variables in Python](https://www.youtube.com/watch?v=cQT33yu9pY8) - Simplified

### 🌐 Websites for Practice

- [W3Schools Python Variables](https://www.w3schools.com/python/python_variables.asp)
- [Codecademy - Learn Python](https://www.codecademy.com/learn/learn-python-3)

### ✅ Lesson 2 Checklist

- [ ] I know what variables are (like labeled boxes!)
- [ ] I know the rules for naming variables
- [ ] I can create and change variables
- [ ] I can create multiple variables at once
- [ ] I completed the exercises

---

## 📚 Lesson 3: Data Types - What Kind of Value? 🔤

### What are Data Types?

Remember our boxes (variables)? The things we put inside them can be different **types** of things. Just like you wouldn't put a book in a lunchbox, Python needs to know what kind of data it's working with!

### The Main Data Types

#### 1. Integers (`int`) - Whole Numbers

```python
age = 10
temperature = -5
year = 2026
students_in_class = 25

print(type(age))  # <class 'int'>
```

**What can you do?** Count things, do math, keep score in games!

#### 2. Floats (`float`) - Decimal Numbers

```python
price = 9.99
pi = 3.14159
half = 0.5
temperature = 23.5

print(type(price))  # <class 'float'>
```

**What can you do?** Money, measurements, anything that needs decimals!

#### 3. Strings (`str`) - Text

```python
name = "Katya"
greeting = 'Hello!'  # You can use single quotes too
sentence = "Python is fun!"
empty_string = ""  # This has nothing inside!

print(type(name))  # <class 'str'>
```

**What can you do?** Write messages, ask questions, create stories!

#### 4. Booleans (`bool`) - True or False

```python
is_sunny = True
is_raining = False
is_python_fun = True

print(type(is_sunny))  # <class 'bool'>
```

**What can you do?** Make decisions, check conditions, control your program!

#### 5. None Type (`NoneType`) - Nothing!

```python
nothing_here = None
print(type(nothing_here))  # <class 'NoneType'>
```

**What can you do?** Represent "nothing" or "unknown" values.

### Checking Types with `type()`

You can always ask Python "What type is this?":

```python
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("Hello"))   # <class 'str'>
print(type(True))      # <class 'bool'>
print(type(None))      # <class 'NoneType'>
```

### Converting Between Types

Sometimes you need to change one type to another:

```python
# String to Integer
age_string = "10"
age_number = int(age_string)
print(age_number + 5)  # 15 (works as a number!)

# Number to String
score = 100
score_message = str(score)
print("Your score is: " + score_message)

# String to Float
price = float("9.99")
print(price + 0.01)  # 10.0

# Anything to Boolean
print(bool(1))    # True
print(bool(0))    # False
print(bool(""))   # False
print(bool("Hi")) # True
```

### 🎮 Your Turn! - Exercises

**Exercise 1: Identify the Type**

```python
# What type is each of these?
a = 25
b = 25.0
c = "25"
d = True
e = None

# Check your answers using type()!
```

**Exercise 2: Create Variables of Each Type**

```python
# Create:
# - an integer for how many pets you have
# - a float for your height
# - a string for your favorite book
# - a boolean for whether you like ice cream
# - a None variable called 'mystery'

# Print each with a description, like: "I have 2 pets"
```

**Exercise 3: Fix the Type Errors**

```python
# These have problems - can you fix them?
age = "10"
print(age + 5)  # This will cause an error!

price = "19.99"
print(price + 0.01)  # This will cause an error!

# Hint: You need to convert types!
```

**Exercise 4: Temperature Converter**

```python
# You get temperature as a string from input
temp_celsius_string = "23"

# Convert it to a number and add 5 degrees
# Print: "The new temperature is 28 degrees"

# Write your code here:
```

### 🌟 Challenge: Create a Business Card

Use variables of different types to create a digital business card:

```
Name: Katya
Age: 10
Height: 1.45 m
Loves Python: True
```

Make sure each variable uses the correct data type!

### 📺 Helpful Videos

- [Python Data Types for Kids](https://www.youtube.com/watch?v=4e8OE9dL3DI)
- [Data Types in Python](https://www.youtube.com/watch?v=gCCVsvgR2KU) - CS Dojo

### 🌐 Websites for Practice

- [W3Schools Python Data Types](https://www.w3schools.com/python/python_datatypes.asp)
- [Real Python - Basic Data Types](https://realpython.com/python-data-types/)

### ✅ Lesson 3 Checklist

- [ ] I know the 5 main data types: int, float, str, bool, None
- [ ] I can check a variable's type with `type()`
- [ ] I can convert between types using `int()`, `str()`, `float()`, `bool()`
- [ ] I understand why data types matter
- [ ] I completed all exercises

---

## 📚 Lesson 4: Numbers and Math ➕➖✖️➗

### Python as a Calculator

Did you know Python is a SUPER powerful calculator? Let's use it!

### Basic Math Operations

```python
# Addition
print(5 + 3)      # 8

# Subtraction
print(10 - 4)     # 6

# Multiplication
print(6 * 7)      # 42

# Division
print(15 / 3)     # 5.0 (always gives a float!)

# Integer Division (floor division)
print(15 // 4)    # 3 (15 ÷ 4 = 3 remainder 3, but we just want the whole number)

# Modulo (remainder)
print(15 % 4)     # 3 (the remainder when 15 ÷ 4)

# Exponents (powers)
print(2 ** 3)     # 8 (2 × 2 × 2)
print(5 ** 2)     # 25 (5 squared)
```

### Math with Variables

```python
# Set up variables
apples = 5
oranges = 3

# Do math with them
total_fruit = apples + oranges
print(total_fruit)  # 8

# You can even do math and save the result
apples = apples + 2  # Add 2 more apples
print(apples)  # 7

# Shortcut way!
apples += 2  # Same as apples = apples + 2
oranges -= 1  # Same as oranges = oranges - 1
```

### Order of Operations (PEMDAS)

Just like in math class, Python follows the order of operations:

- **P**arentheses first
- **E**xponents next
- **M**ultiplication and **D**ivision (left to right)
- **A**ddition and **S**ubtraction (left to right)

```python
# Without parentheses
print(5 + 3 * 2)  # 11 (not 16!) because 3*2 happens first

# With parentheses
print((5 + 3) * 2)  # 16 (parentheses first!)

# More examples
print(2 + 3 * 4 - 1)           # 13
print((2 + 3) * (4 - 1))       # 15
print(2 ** 3 + 4)              # 12 (2**3=8, +4=12)
print(2 ** (3 + 4))            # 128 (3+4=7, 2**7=128)
```

### Handy Math Functions

Python comes with built-in math helpers:

```python
# round() - round to nearest whole number
print(round(3.7))      # 4
print(round(3.2))      # 3
print(round(3.5))      # 4

# abs() - absolute value (distance from zero)
print(abs(-5))         # 5
print(abs(7))          # 7

# max() - biggest number
print(max(3, 8, 2, 10, 5))  # 10

# min() - smallest number
print(min(3, 8, 2, 10, 5))  # 2

# sum() - add up a list of numbers
my_numbers = [5, 10, 15, 20]
print(sum(my_numbers))  # 50
```

### 🎮 Your Turn! - Exercises

**Exercise 1: Calculator Practice**

```python
# Calculate the following:
# 1. Your age in months (age * 12)
# 2. How many days until your next birthday (if it's 45 days away, but you want to know weeks too!)
# 3. The area of a rectangle with width 8 and height 5
# 4. What's left if you divide 37 cookies among 5 friends? (remainder)
```

**Exercise 2: Temperature Converter**

```python
# Convert Celsius to Fahrenheit: (C × 9/5) + 32
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C is {fahrenheit}°F")

# Now try with:
# - Freezing (0°C)
# - Boiling (100°C)
# - A nice summer day (30°C)
```

**Exercise 3: The Doubling Game**

```python
# Start with number = 2
# Double it 5 times (use the *= shortcut!)
# Print the result after each doubling

# Example output:
# 2
# 4
# 8
# 16
# 32
# 64
```

**Exercise 4: Order of Operations Challenge**

```python
# Without running the code, guess what these will print:

print(10 - 2 * 3 + 4)       # Your guess: ___
print((10 - 2) * (3 + 4))   # Your guess: ___
print(2 ** 3 * 2)            # Your guess: ___
print(2 ** (3 * 2))          # Your guess: ___

# Now run the code and check your answers!
```

### 🌟 Challenge: Create a Tip Calculator

Create a program that:

1. Has a variable for the bill amount (use a float)
2. Has a variable for tip percentage (use an integer like 15 for 15%)
3. Calculate the tip amount
4. Calculate the total bill
5. Print: "Bill: $XX.XX, Tip: $YY.YY, Total: $ZZ.ZZ"

Example:

```
Bill: $45.50, Tip: $6.83, Total: $52.33
```

### 📺 Helpful Videos

- [Python Math Tutorial](https://www.youtube.com/watch?v=khKv-8q7YmY)
- [Numbers in Python](https://www.youtube.com/watch?v=awF6jH8VBO8)

### 🌐 Websites for Practice

- [Math is Fun - Order of Operations](https://www.mathsisfun.com/operation-order-pemdas.html)
- [Khan Academy - Arithmetic](https://www.khanacademy.org/math/arithmetic)

### ✅ Lesson 4 Checklist

- [ ] I can do basic math with +, -, \*, /
- [ ] I know what // (floor division) and % (modulo) do
- [ ] I understand order of operations (PEMDAS)
- [ ] I can use math shortcuts like += and -=
- [ ] I know the built-in math functions: round(), abs(), max(), min(), sum()
- [ ] I completed the exercises

---

## 📚 Lesson 5: Strings - Working with Text ✏️

### What Are Strings?

Strings are how Python handles text. Think of them as a "string" of characters - like beads on a necklace!

```python
# Different ways to create strings
name = "Katya"           # Double quotes
greeting = 'Hello!'      # Single quotes (both work!)
sentence = "Python is awesome!"
empty = ""               # An empty string (nothing inside)
```

### String Length - How Long Is It?

Use `len()` to count characters (spaces count too!):

```python
name = "Katya"
print(len(name))  # 5

sentence = "Hello, world!"
print(len(sentence))  # 13 (comma and space count!)
```

### String Index - Finding Characters by Position

Every character in a string has a position number (index). IMPORTANT: **Python starts counting at 0!**

```
String:  K  a  t  y  a
Index:   0  1  2  3  4
```

```python
name = "Katya"
print(name[0])  # K (first character)
print(name[1])  # a (second character)
print(name[2])  # t (third character)
print(name[3])  # y (fourth character)
print(name[4])  # a (fifth character)
```

### Negative Indexing - Counting from the End

You can also count from the end using negative numbers:

```
String:  K    a    t    y    a
Index:  -5   -4   -3   -2   -1
```

```python
name = "Katya"
print(name[-1])  # a (last character)
print(name[-2])  # y (second from last)
print(name[-3])  # t
```

### String Slicing - Getting Pieces of a String

Slicing lets you grab parts of a string: `[start:end]`

IMPORTANT: The `start` is included, but the `end` is NOT included!

```python
fruit = "strawberry"

# Get "straw"
print(fruit[0:5])  # starts at 0, ends at 5 (but 5 is not included)
# s t r a w b e r r y
# 0 1 2 3 4 5 6 7 8 9
#           ^ stop here, so we get 0-4

# Get "berry"
print(fruit[5:10])  # 5 to 10 (but 10 is end of string)
# or simpler:
print(fruit[5:])    # from 5 to the end

# Get "straw" another way
print(fruit[:5])    # from start to 5

# Get every other letter
print(fruit[::2])   # s r w e r y

# Reverse a string!
print(fruit[::-1])  # yrrebwarts
```

### String Methods - Tools for Text

Strings come with many built-in tools (methods):

```python
text = "Python is FUN!"

# Case changing
print(text.upper())           # PYTHON IS FUN!
print(text.lower())           # python is fun!
print(text.capitalize())       # Python is fun! (first letter only)
print(text.title())           # Python Is Fun! (each word's first letter)
print(text.swapcase())        # pYTHON IS fun! (switches case)

# Checking
print(text.startswith("Python"))  # True
print(text.endswith("!"))         # True
print(text.isupper())             # False
print(text.islower())             # False

# Searching and replacing
print(text.find("FUN"))           # 10 (position where "FUN" starts)
print(text.replace("FUN", "awesome"))  # Python is awesome!

# Cleaning up
messy = "   lots of spaces   "
print(messy.strip())           # "lots of spaces" (removes spaces from ends)
print(messy.lstrip())          # removes spaces from left only
print(messy.rstrip())          # removes spaces from right only

# Splitting and joining
words = text.split()           # ['Python', 'is', 'FUN!']
print(words)

new_text = " ".join(words)     # "Python is FUN!" (puts them back together)
```

### String Concatenation - Gluing Strings Together

```python
first = "Hello"
second = "World"

# Using +
greeting = first + " " + second + "!"
print(greeting)  # Hello World!

# f-strings (modern way - EASIER!)
name = "Katya"
age = 10
message = f"My name is {name} and I am {age} years old"
print(message)

# You can even do math inside!
print(f"In 5 years, I'll be {age + 5} years old")
```

### 🎮 Your Turn! - Exercises

**Exercise 1: String Slicing (from your homework)**

```python
fruit = "strawberry"

# Print the first letter
# Your code here:

# Print the last letter using a negative index
# Your code here:

# Print the slice "berry"
# Your code here:

# Print the number of letters in the string
# Your code here:
```

**Exercise 2: Name Explorer**

```python
name = input("What's your name? ")

# Print:
# - Your name in ALL CAPS
# - Your name in all lowercase
# - The first letter of your name
# - The last letter of your name
# - How many letters are in your name
# - Your name backwards!
```

**Exercise 3: Sentence Builder**

```python
# Ask the user for:
# - An adjective (describing word)
# - A noun (thing)
# - A verb (action word)

# Then create a silly sentence using f-strings!
# Example: "The fluffy cat danced happily!"
```

**Exercise 4: Find and Replace**

```python
sentence = "I love dogs. Dogs are my favorite pets!"

# Replace all "dogs" with "cats"
# Your code here:

# Make the whole sentence uppercase
# Your code here:

# Find where "favorite" starts
# Your code here:
```

### 🌟 Challenge: Create a Secret Code Maker

Create a program that:

1. Asks the user for a word
2. Prints the word backwards
3. Makes every other letter uppercase (starting with first)
4. Prints how many vowels are in the word (a, e, i, o, u)

Example:

```
Enter a word: python
Backwards: nohtyp
Funny case: PyThOn
Vowels: 1
```

### 📺 Helpful Videos

- [Python Strings Tutorial](https://www.youtube.com/watch?v=k9TUPpGqYTo)
- [String Methods in Python](https://www.youtube.com/watch?v=9aS-ZugS-cQ)
- [f-strings in Python](https://www.youtube.com/watch?v=nghuHvKLhJA)

### 🌐 Websites for Practice

- [W3Schools Python Strings](https://www.w3schools.com/python/python_strings.asp)
- [Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)

### ✅ Lesson 5 Checklist

- [ ] I can find the length of a string with `len()`
- [ ] I understand indexing (starting at 0!)
- [ ] I can slice strings to get parts
- [ ] I know how to use common string methods
- [ ] I can combine strings with + and f-strings
- [ ] I completed the exercises

---

## 📚 Lesson 6: Getting User Input 🎤

### Making Your Programs Interactive

So far, our programs just showed information. But what if we want the USER to tell US something? That's where `input()` comes in!

### The `input()` Function

`input()` asks the user a question and waits for them to type an answer:

```python
name = input("What's your name? ")
print(f"Hello, {name}!")
```

When this runs:

1. The program shows: "What's your name? "
2. Python waits for you to type something and press Enter
3. Whatever you typed gets stored in the variable `name`
4. Then it prints the greeting!

### Important: Input is ALWAYS a String!

This is SUPER important to remember: **`input()` always gives you a string**, even if the user types a number!

```python
age = input("How old are you? ")
print(age + 5)  # ERROR! Can't add number to string
```

### Converting Input to Numbers

To work with numbers from input, you need to convert:

```python
# Get age as string
age_string = input("How old are you? ")

# Convert to integer
age = int(age_string)

# Now you can do math!
print(f"Next year you'll be {age + 1}")

# Or do it all in one line:
age = int(input("How old are you? "))
```

Same for decimals (floats):

```python
height = float(input("How tall are you? (in meters) "))
print(f"You are {height} meters tall")
```

### Asking Multiple Questions

You can ask as many questions as you want:

```python
print("Let's get to know you!")
name = input("What's your name? ")
age = int(input("How old are you? "))
city = input("Where do you live? ")
hobby = input("What's your favorite hobby? ")

print("\n--- Your Profile ---")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Hobby: {hobby}")
```

### Creating Conversations

You can make your program feel like it's talking to the user:

```python
print("Welcome to the Magic 8-Ball! 🎱")
print("I can answer any yes/no question!")

question = input("What would you like to ask? ")
print("Hmm... let me think...")
print("The answer is: DEFINITELY YES!")

# Later we'll learn how to give random answers!
```

### Handling Different Inputs

Users don't always type what you expect. Let's learn to handle that:

```python
# Getting yes/no answers
answer = input("Do you like pizza? (yes/no) ")

if answer.lower() == "yes":
    print("Me too! Pizza is awesome!")
elif answer.lower() == "no":
    print("That's okay, more pizza for me!")
else:
    print("I didn't understand that, but pizza is still great!")
```

### 🎮 Your Turn! - Exercises

**Exercise 1: Personal Greeting**

```python
# Ask the user for their name
# Then print a personalized greeting
# Example: "Nice to meet you, [name]!"
```

**Exercise 2: Age Calculator**

```python
# Ask the user how old they are
# Convert to integer
# Tell them:
# - How old they will be next year
# - How old they were last year
# - How old they will be in 10 years
```

**Exercise 3: Mad Libs (Fill in the Blanks)**

```python
# Ask for:
# - A person's name
# - A place
# - A funny adjective
# - A type of food

# Then create a silly story using their answers!
# Example: "[Name] went to [place] and saw a [adjective] [food] dancing!"
```

**Exercise 4: Simple Calculator**

```python
# Ask the user for:
# - First number
# - Second number
# - Operation (+, -, *, /)

# Then calculate and print the result!
# Hint: You'll need if statements for different operations
```

**Exercise 5: Guess the Number (with user input)**

```python
# Set a secret number (start simple, like 7)
secret = 7

# Ask the user to guess
guess = int(input("Guess the number (1-10): "))

# Tell them if they got it right or wrong
if guess == secret:
    print("You got it! Amazing!")
else:
    print(f"Not quite. The number was {secret}. Try again!")
```

### 🌟 Challenge: Create a Virtual Pet

Create a program that asks about and takes care of a virtual pet:

```python
print("🐾 Welcome to Virtual Pet Simulator! 🐾")

# Ask for:
# - Pet name
# - Pet type (dog, cat, dragon, etc.)
# - Pet color

# Then ask the user what they want to do:
# - Feed the pet
# - Play with the pet
# - Put the pet to sleep

# Give different responses based on what they choose!
```

Example interaction:

```
🐾 Welcome to Virtual Pet Simulator! 🐾
Name your pet: Sparky
What kind of pet is Sparky? dragon
What color is Sparky? purple

What would you like to do with Sparky?
1. Feed
2. Play
3. Sleep
Choose (1/2/3): 1

You feed Sparky. Sparky breathes a happy little flame! 🔥
```

### 📺 Helpful Videos

- [Python User Input Tutorial](https://www.youtube.com/watch?v=dUpNTLk6aT4)
- [Getting Input from Users](https://www.youtube.com/watch?v=r2KcOsUPTzw)

### 🌐 Websites for Practice

- [W3Schools Python User Input](https://www.w3schools.com/python/python_user_input.asp)
- [Real Python - Input and Output](https://realpython.com/python-input-output/)

### 📝 Remember This!

```python
# input() ALWAYS gives a string
user_input = input("Type something: ")  # always string

# Convert to number if you need math:
number = int(input("Give me a number: "))  # now it's an integer

# Use .lower() or .upper() to handle different capitalizations
if user_input.lower() == "yes":  # Works for YES, Yes, yEs, etc.
    print("User said yes!")
```

### ✅ Lesson 6 Checklist

- [ ] I know how to ask the user questions with `input()`
- [ ] I remember that `input()` always returns a string
- [ ] I can convert input to integers and floats
- [ ] I can create interactive conversations
- [ ] I know how to handle yes/no questions
- [ ] I completed the exercises

---

## 📚 Lesson 7: Making Decisions with if/elif/else 🤔

### What is Control Flow?

So far, our programs run line by line, top to bottom. But what if we want the program to make **decisions**? That's where `if` statements come in!

Think of it like this: "If it's raining, take an umbrella. Otherwise, wear sunglasses."

### The `if` Statement

```python
age = 10

if age >= 13:
    print("You can watch PG-13 movies!")

# This won't print because age is 10, not >= 13
```

### The `if`...`else` Statement

```python
age = 10

if age >= 13:
    print("You can watch PG-13 movies!")
else:
    print("Sorry, you need to be 13 or older.")
```

### The `if`...`elif`...`else` Statement

`elif` means "else if" - it lets you check multiple conditions:

```python
score = 85

if score >= 90:
    print("A - Excellent!")
elif score >= 80:
    print("B - Great job!")
elif score >= 70:
    print("C - Good work!")
elif score >= 60:
    print("D - You passed!")
else:
    print("F - Keep practicing!")
```

### Comparison Operators

To make decisions, we need to compare things:

| Operator | Meaning                  | Example  | Result |
| -------- | ------------------------ | -------- | ------ |
| `==`     | equal to                 | `5 == 5` | True   |
| `!=`     | not equal to             | `5 != 3` | True   |
| `>`      | greater than             | `5 > 3`  | True   |
| `<`      | less than                | `5 < 3`  | False  |
| `>=`     | greater than or equal to | `5 >= 5` | True   |
| `<=`     | less than or equal to    | `5 <= 3` | False  |

```python
# Examples
print(10 > 5)   # True
print(10 < 5)   # False
print(10 == 10) # True
print(10 != 9)  # True
print(8 >= 8)   # True
print(8 <= 7)   # False
```

### Logical Operators - Combining Conditions

Sometimes you need to check multiple things at once:

| Operator | What it does              | Example                                                  |
| -------- | ------------------------- | -------------------------------------------------------- |
| `and`    | Both must be True         | `age >= 13 and age <= 17` (teenager)                     |
| `or`     | At least one must be True | `weather == "rainy" or weather == "snowy"` (bad weather) |
| `not`    | Reverses True/False       | `not is_raining` (it's NOT raining)                      |

```python
# and - BOTH must be true
age = 15
if age >= 13 and age <= 19:
    print("You're a teenager!")

# or - AT LEAST ONE must be true
weather = "rainy"
if weather == "rainy" or weather == "snowy":
    print("Better stay inside!")

# not - REVERSES the condition
is_weekend = False
if not is_weekend:
    print("Time for school!")
```

### Checking What's in a List or String

Use `in` to check if something exists:

```python
# Check in list
friends = ["Alice", "Bob", "Charlie"]
name = "Bob"
if name in friends:
    print(f"{name} is your friend!")

# Check in string
word = "hello"
if "ll" in word:
    print("Found 'll' in hello!")
```

### Nested If Statements

You can put if statements inside if statements:

```python
weather = "sunny"
temperature = 25

if weather == "sunny":
    print("It's sunny!")
    if temperature > 30:
        print("It's hot! Wear sunscreen!")
    elif temperature > 20:
        print("Perfect weather for a walk!")
    else:
        print("A bit cool for sunny weather.")
else:
    print("Not sunny today.")
```

### 🎮 Your Turn! - Exercises

**Exercise 1: Age Checker**

```python
# Ask the user for their age
# If they are 18 or older, tell them they can vote
# If they are 16 or older, tell them they can drive (with parents)
# Otherwise, tell them they're still a kid
```

**Exercise 2: Grade Calculator**

```python
# Ask the user for their test score (0-100)
# Use if/elif/else to give them a letter grade:
# 90-100: A
# 80-89: B
# 70-79: C
# 60-69: D
# Below 60: F
# Also handle if they enter a number outside 0-100
```

**Exercise 3: What to Wear**

```python
# Ask the user:
# - What's the weather? (sunny, rainy, snowy, cloudy)
# - What's the temperature? (in Celsius)

# Recommend what to wear:
# - Sunny and hot (above 25): T-shirt and shorts
# - Sunny but cool (below 25): Light jacket
# - Rainy: Umbrella and raincoat
# - Snowy: Warm coat and boots
# - Cloudy: Whatever they want!
```

**Exercise 4: Restaurant Selector**

```python
# Ask the user:
# - Are they vegetarian? (yes/no)
# - Are they vegan? (yes/no)
# - Are they gluten-free? (yes/no)

# Suggest a restaurant based on their answers:
# - All restrictions: "The Healthy Kitchen"
# - Vegetarian only: "Green Garden Cafe"
# - No restrictions: "Joe's Diner"
# - Any other combo: "We're still looking..."
```

**Exercise 5: Password Checker**

```python
# Set a secret password (e.g., "python123")
# Ask the user for the password
# If correct, say "Access granted! Welcome!"
# If wrong, say "Access denied. Try again."
# Bonus: Give them a hint if they're close (like "starts with p...")
```

### 🌟 Challenge: Create a Magic 8-Ball

Create a program that:

1. Asks the user for a yes/no question
2. Randomly chooses an answer (we'll learn random later, for now just use input)
3. Uses if/elif to give different responses based on the question

Example:

```
Ask the Magic 8-Ball anything: Will I get a pet dragon?
*shakes magic 8-ball*...
Hmm... The answer is: Definitely not, dragons aren't real!
```

### 📺 Helpful Videos

- [Python If Statements for Kids](https://www.youtube.com/watch?v=Jc5TuR2A2lI)
- [If/Else in Python](https://www.youtube.com/watch?v=Zp5MuPOtR4E)
- [Logical Operators](https://www.youtube.com/watch?v=7qHMXu99d88)

### 🌐 Websites for Practice

- [W3Schools Python If...Else](https://www.w3schools.com/python/python_conditions.asp)
- [CodingBat Python Logic](https://codingbat.com/python)

### 📝 Quick Reference

```python
# Basic if
if condition:
    # do something

# if-else
if condition:
    # do something
else:
    # do something else

# if-elif-else
if condition1:
    # do this
elif condition2:
    # do that
else:
    # do something different

# Multiple conditions
if condition1 and condition2:
    # both must be true

if condition1 or condition2:
    # at least one must be true

# Checking membership
if item in list:
    # item is in the list
```

### ✅ Lesson 7 Checklist

- [ ] I understand what `if` statements do
- [ ] I can use `if`...`else` for two choices
- [ ] I can use `if`...`elif`...`else` for multiple choices
- [ ] I know all comparison operators (==, !=, >, <, >=, <=)
- [ ] I can combine conditions with `and`, `or`, `not`
- [ ] I can check if something is in a list with `in`
- [ ] I completed the exercises

---

## 📚 Lesson 8: Lists - Shopping Carts for Data 🛒

### What are Lists?

A list is like a shopping cart - you can put multiple items in it, in a specific order. In Python, lists are perfect for storing collections of related things!

```python
# Creating a list
fruits = ["apple", "banana", "orange", "strawberry"]
print(fruits)  # ['apple', 'banana', 'orange', 'strawberry']
```

### List Syntax - The Square Brackets []

Lists are always surrounded by square brackets `[]`, with commas between items:

```python
# Lists can hold different types of data
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, 3.14, True]
empty_list = []  # A list with nothing in it
```

### Accessing Items - Just Like Strings!

Remember how we accessed characters in strings with indexes? Lists work the SAME way!

```python
colors = ['red', 'blue', 'green', 'yellow', 'purple']

# Access by index (starts at 0!)
print(colors[0])  # 'red' (first item)
print(colors[1])  # 'blue' (second item)
print(colors[2])  # 'green' (third item)
print(colors[3])  # 'yellow'
print(colors[4])  # 'purple'

# Negative indexes count from the end
print(colors[-1])  # 'purple' (last item)
print(colors[-2])  # 'yellow'
print(colors[-3])  # 'green'
```

### List Length - How Many Items?

Use `len()` just like with strings:

```python
colors = ['red', 'blue', 'green', 'yellow', 'purple']
print(len(colors))  # 5

# You can use len() to get the last item
print(colors[len(colors) - 1])  # 'purple' (last item)
```

### List Slicing - Getting Multiple Items

Just like with strings, you can get slices of lists:

```python
colors = ['red', 'blue', 'green', 'yellow', 'purple']

# Get first three
print(colors[0:3])  # ['red', 'blue', 'green']

# Get from index 2 to the end
print(colors[2:])   # ['green', 'yellow', 'purple']

# Get up to index 3
print(colors[:3])   # ['red', 'blue', 'green']

# Get every other item
print(colors[::2])  # ['red', 'green', 'purple']

# Reverse the list
print(colors[::-1]) # ['purple', 'yellow', 'green', 'blue', 'red']
```

### Changing Items

You can change items in a list by assigning to an index:

```python
colors = ['red', 'blue', 'green', 'yellow', 'purple']

# Change the second item
colors[1] = 'pink'
print(colors)  # ['red', 'pink', 'green', 'yellow', 'purple']

# Change multiple items with slicing
colors[2:4] = ['orange', 'brown']
print(colors)  # ['red', 'pink', 'orange', 'brown', 'purple']
```

### Adding Items to Lists

```python
friends = ['Ivan', 'Ivana', 'Dario']

# .append() - add ONE item to the END
friends.append('Zdravko')
print(friends)  # ['Ivan', 'Ivana', 'Dario', 'Zdravko']

# .insert() - add at a specific position
friends.insert(1, 'Mladen')  # Insert at index 1
print(friends)  # ['Ivan', 'Mladen', 'Ivana', 'Dario', 'Zdravko']

# .extend() - add MULTIPLE items to the end
more_friends = ['Petra', 'Marko']
friends.extend(more_friends)
print(friends)  # ['Ivan', 'Mladen', 'Ivana', 'Dario', 'Zdravko', 'Petra', 'Marko']
```

### Removing Items from Lists

```python
friends = ['Ivan', 'Ivana', 'Dario', 'Zdravko', 'Mladen']

# .pop() - remove the LAST item (and return it)
removed_friend = friends.pop()
print(removed_friend)  # 'Mladen'
print(friends)         # ['Ivan', 'Ivana', 'Dario', 'Zdravko']

# .pop(index) - remove item at specific index
removed_friend = friends.pop(1)  # Remove Ivana
print(removed_friend)  # 'Ivana'
print(friends)         # ['Ivan', 'Dario', 'Zdravko']

# .remove() - remove by VALUE (first occurrence)
friends.remove('Dario')
print(friends)  # ['Ivan', 'Zdravko']

# del - delete by index
del friends[0]  # Delete Ivan
print(friends)  # ['Zdravko']
```

### Checking if Something is in a List

Use the `in` operator:

```python
colors = ['red', 'blue', 'green', 'yellow']

if 'blue' in colors:
    print("Blue is in the list!")

if 'purple' not in colors:
    print("Purple is NOT in the list.")
```

### Other Handy List Methods

```python
numbers = [5, 2, 8, 1, 9, 3]

# .sort() - arrange in order
numbers.sort()
print(numbers)  # [1, 2, 3, 5, 8, 9]

# .reverse() - reverse the order
numbers.reverse()
print(numbers)  # [9, 8, 5, 3, 2, 1]

# .count() - count how many times something appears
letters = ['a', 'b', 'a', 'c', 'a', 'b']
print(letters.count('a'))  # 3

# .index() - find the position of an item
print(letters.index('c'))  # 3

# .clear() - remove everything
letters.clear()
print(letters)  # []
```

### Lists Can Hold Different Types

```python
# You can mix types in a list!
mixed_list = [42, "hello", 3.14, True, ["nested", "list"]]
print(mixed_list[0])  # 42
print(mixed_list[1])  # "hello"
print(mixed_list[4][0])  # "nested" (getting from nested list)
```

### 🎮 Your Turn! - Exercises

**Exercise 1: List Basics (from your homework)**

```python
colors = ['red', 'blue', 'green', 'yellow', 'purple']

# Print the second element in the list
# Your code here:

# Print the last element using a negative index
# Your code here:

# Print the slice containing 'blue' and 'green'
# Your code here:

# Print the number of elements in the list
# Your code here:
```

**Exercise 2: Create Your Favorite Things**

```python
# Create a list of your 5 favorite:
# - Movies
# - Foods
# - Games
# - Animals

# Then:
# - Print the first item
# - Print the last item
# - Print the middle item
# - Add a new favorite to the end
# - Remove the second item
```

**Exercise 3: Party Guest List**

```python
# Start with a list of 4 friends
guests = ['Emma', 'Liam', 'Sophia', 'Noah']

# Two more friends want to come - add them
# One friend can't make it - remove them
# Check if 'Emma' is still coming
# Print the final guest list with numbers: 1. Emma, 2. Liam, etc.
```

**Exercise 4: To-Do List Manager**

```python
# Create a to-do list with 3 tasks
todo = ['Homework', 'Clean room', 'Walk dog']

# Print the list
# Ask the user what task they completed
# Remove that task from the list
# Ask them to add a new task
# Add it to the list
# Print the updated list
```

**Exercise 5: List Explorer**

```python
# Create a list of numbers: [45, 23, 67, 12, 89, 34, 56]

# Find and print:
# - The biggest number (use max())
# - The smallest number (use min())
# - The sum of all numbers (use sum())
# - The list sorted from smallest to largest
# - The list sorted from largest to smallest
```

### 🌟 Challenge: Create a Shopping List App

Create a program that:

1. Starts with an empty shopping list
2. Shows a menu:
   - 1: Add item
   - 2: Remove item
   - 3: View list
   - 4: Check if item is on list
   - 5: Quit
3. Lets the user do these actions until they choose quit

Example:

```
Shopping List Manager
1. Add item
2. Remove item
3. View list
4. Check item
5. Quit
Choose: 1
Enter item: apples
Apples added!

Choose: 1
Enter item: bananas
Bananas added!

Choose: 3
Your list: ['apples', 'bananas']
```

### 📺 Helpful Videos

- [Python Lists for Kids](https://www.youtube.com/watch?v=ohCDWZgNIU0)
- [List Methods in Python](https://www.youtube.com/watch?v=W8KRzm-HUcc)
- [Python Lists Tutorial](https://www.youtube.com/watch?v=9OeznAkyQz4)

### 🌐 Websites for Practice

- [W3Schools Python Lists](https://www.w3schools.com/python/python_lists.asp)
- [Programiz Python Lists](https://www.programiz.com/python-programming/list)

### 📝 Quick Reference

```python
# Creating lists
my_list = [1, 2, 3]
empty = []

# Accessing
item = my_list[0]        # first item
last = my_list[-1]        # last item

# Slicing
first_three = my_list[0:3]  # items 0,1,2

# Adding
my_list.append(4)         # add to end
my_list.insert(1, 99)     # insert at position 1
my_list.extend([5,6,7])   # add multiple

# Removing
my_list.pop()             # remove last
my_list.pop(2)            # remove item at index 2
my_list.remove(3)         # remove first 3 found

# Information
length = len(my_list)
if 2 in my_list:          # check if exists
index = my_list.index(5)  # find position
count = my_list.count(2)  # count occurrences
```

### ✅ Lesson 8 Checklist

- [ ] I know how to create lists with []
- [ ] I can access items by index (starting at 0!)
- [ ] I can slice lists to get parts
- [ ] I can add items with .append(), .insert(), .extend()
- [ ] I can remove items with .pop(), .remove(), del
- [ ] I can check if items are in a list with `in`
- [ ] I know useful list methods like .sort(), .reverse()
- [ ] I completed the exercises

---

## 📚 Lesson 9: For Loops - Doing Things Over and Over 🔄

### Why Do We Need Loops?

Imagine you had to print "I love Python" 100 times. Would you write 100 print statements? Of course not! That's where loops come in!

### The `for` Loop - Your New Best Friend

A `for` loop lets you repeat code for each item in a collection:

```python
# Print each fruit in a list
fruits = ["apple", "banana", "orange", "strawberry"]

for fruit in fruits:
    print(fruit)
```

This prints:

```
apple
banana
orange
strawberry
```

### How to Read a For Loop

```python
for fruit in fruits:
    print(fruit)
```

Read it like this: "For each fruit in the fruits list, print that fruit"

- `fruit` is a variable that takes on each value from the list, one at a time
- The code inside the loop (indented) runs once for each item

### Looping with `range()`

What if you want to repeat something a certain number of times? Use `range()`:

```python
# Print numbers 0 to 4
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
```

`range(5)` gives us: 0, 1, 2, 3, 4 (5 numbers, starting at 0)

### Range with Start and End

```python
# Count from 5 to 15 (from your homework!)
for i in range(5, 16):
    print(i)
# 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

# Note: range(5, 16) goes up to BUT NOT INCLUDING 16
```

### Range with Step

```python
# Count by 2s
for i in range(0, 11, 2):
    print(i)  # 0, 2, 4, 6, 8, 10

# Count backwards
for i in range(10, 0, -1):
    print(i)  # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

### Looping Through Lists with Index

Sometimes you need both the item AND its position:

```python
colors = ['red', 'blue', 'green', 'yellow']

# Using range(len(list))
for i in range(len(colors)):
    print(f"Index {i}: {colors[i]}")

# Output:
# Index 0: red
# Index 1: blue
# Index 2: green
# Index 3: yellow
```

### Looping Through Strings

Strings work just like lists in for loops:

```python
word = "Hello"

# Print each character
for letter in word:
    print(letter)
# H e l l o

# With index
for i in range(len(word)):
    print(f"{i} {word[i]}")
# 0 H, 1 e, 2 l, 3 l, 4 o
```

### Common Loop Patterns

```python
# 1. Sum all numbers in a list
numbers = [5, 10, 15, 20]
total = 0
for num in numbers:
    total = total + num  # or total += num
print(f"Sum: {total}")  # 50

# 2. Find the biggest number
numbers = [12, 45, 7, 23, 56, 89, 34]
biggest = numbers[0]  # Start with first number
for num in numbers:
    if num > biggest:
        biggest = num
print(f"Biggest: {biggest}")  # 89

# 3. Count specific items
words = ['cat', 'dog', 'cat', 'bird', 'cat']
cat_count = 0
for word in words:
    if word == 'cat':
        cat_count += 1
print(f"Found {cat_count} cats")  # 3
```

### Nested Loops - Loops Inside Loops

```python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} × {j} = {i * j}")
    print("---")  # separator after each row

# Output:
# 1 × 1 = 1
# 1 × 2 = 2
# 1 × 3 = 3
# ---
# 2 × 1 = 2
# 2 × 2 = 4
# 2 × 3 = 6
# ---
# 3 × 1 = 3
# 3 × 2 = 6
# 3 × 3 = 9
# ---
```

### 🎮 Your Turn! - Exercises

**Exercise 1: Counting Fun (from your homework)**

```python
# Write a program that counts from 10 to 20 and prints the numbers out
for ___ in _____:
    print(___)
```

**Exercise 2: Compliment Generator (from your homework)**

```python
# Write a program that prints "You are amazing!" 7 times
for ___ in range(___):
    print("You are amazing!")
```

**Exercise 3: Number Magic (from your homework)**

```python
# Start with number 3, and multiply it by 2 five times
number = 3
for i in range(5):  # repeat 5 times
    # multiply number by 2
    number = number * 2
print(number)  # Should be 96? Let's check: 3,6,12,24,48,96
```

**Exercise 4: Favorite Foods List (from your homework)**

```python
# Create a list of your 5 favorite foods
favorite_foods = ["pizza", "chocolate", "strawberries", "pancakes", "cookies"]

# Print them with numbers
for i in range(len(favorite_foods)):
    print(f"{i+1}. {favorite_foods[i]}")
```

**Exercise 5: Name Letters (from your homework)**

```python
# Print each letter of your name on a separate line
name = "Katya"  # Replace with your name!
for letter in name:
    print(letter)
```

**Exercise 6: Counting Down (from your homework)**

```python
# Create a countdown from 5 to 1, then print "Blast off!"
for i in range(5, 0, -1):
    print(i)
print("Blast off!")
```

**Exercise 7: String Loop with Index**

```python
word = "Hello"
# Use a for loop with range(len(word)) to print each character and its index
# Your code here:
```

**Exercise 8: Animal Loop**

```python
animals = ['dog', 'cat', 'bird', 'fish']
# Use a for loop to print each animal's name on a new line
# Your code here:
```

### 🌟 Challenge: Create a Loop Drawing

Use loops to create patterns:

```python
# Pattern 1: Triangle
for i in range(1, 6):
    print('*' * i)
# *
# **
# ***
# ****
# *****

# Pattern 2: Square
size = 5
for i in range(size):
    print('*' * size)
# *****
# *****
# *****
# *****
# *****
```

### 📺 Helpful Videos

- [Python For Loops for Kids](https://www.youtube.com/watch?v=zmIdC0_0fgY)
- [For Loops in Python](https://www.youtube.com/watch?v=OnDr4J2UXSA)
- [range() Function Tutorial](https://www.youtube.com/watch?v=Z3tO0xRw-XI)

### 🌐 Websites for Practice

- [W3Schools Python For Loops](https://www.w3schools.com/python/python_for_loops.asp)
- [Programiz Python Loops](https://www.programiz.com/python-programming/for-loop)

### 📝 Quick Reference

```python
# Basic for loop through a list
for item in my_list:
    print(item)

# Loop with range (0 to 4)
for i in range(5):
    print(i)

# Loop with start and end (5 to 9)
for i in range(5, 10):
    print(i)

# Loop with step (0, 2, 4, 6, 8)
for i in range(0, 10, 2):
    print(i)

# Loop backwards (10 down to 1)
for i in range(10, 0, -1):
    print(i)

# Loop with index
for i in range(len(my_list)):
    print(f"{i}: {my_list[i]}")
```

### ✅ Lesson 9 Checklist

- [ ] I understand what for loops do
- [ ] I can loop through lists
- [ ] I can loop through strings
- [ ] I can use `range()` with different parameters
- [ ] I can loop with indexes using `range(len())`
- [ ] I understand nested loops
- [ ] I completed all the exercises

---

## 📚 Lesson 10: Functions - Reusable Magic Spells 🪄

### What Are Functions?

Imagine you have a magic spell that turns broccoli into ice cream. Instead of saying the whole spell every time, you give it a name like "broccoli_to_icecream" and just say THAT when you want ice cream!

Functions are exactly that - reusable blocks of code with a name!

### Why Use Functions?

1. **Don't Repeat Yourself (DRY)** - Write once, use many times
2. **Organize your code** - Break big problems into small pieces
3. **Easier to fix bugs** - Fix in one place, it's fixed everywhere!

### Defining and Calling Functions

```python
# Define a function
def say_hello():
    print("Hello!")
    print("Nice to meet you!")

# Call the function
say_hello()
say_hello()  # You can call it as many times as you want!
```

### Functions with Parameters - Giving Information

Parameters are like empty boxes that get filled when you call the function:

```python
def greet(name):  # name is a parameter
    print(f"Hello, {name}!")
    print(f"How are you today, {name}?")

# Call with different arguments
greet("Katya")   # "Katya" is the argument
greet("Tom")
greet("Alex")
```

### Multiple Parameters

You can have as many parameters as you need:

```python
def introduce(name, age, city):
    print(f"This is {name}.")
    print(f"They are {age} years old.")
    print(f"They live in {city}.")

introduce("Katya", 10, "Zagreb")
introduce("Tom", 12, "Split")
```

### Functions with Return Values

Sometimes you want the function to give you back an answer:

```python
def add_two_numbers(num1, num2):
    result = num1 + num2
    return result  # Send the result back

# Use the returned value
sum = add_two_numbers(5, 3)
print(f"5 + 3 = {sum}")

# You can use it directly too
print(add_two_numbers(10, 20))
```

### Return vs Print - Important Difference!

```python
def just_print(x, y):
    print(x + y)  # Shows on screen, but doesn't give back

def just_return(x, y):
    return x + y  # Gives back, but doesn't show

# just_print shows the result
just_print(5, 3)  # Screen shows: 8

# just_return doesn't show anything
just_return(5, 3)  # Nothing shows!

# But you can save the returned value
result = just_return(5, 3)
print(f"The answer is {result}")  # Now it shows!
```

### Scope - Where Variables Live

Variables have different "neighborhoods" where they exist:

```python
# Global variable - lives everywhere
global_message = "I'm everywhere!"

def my_function():
    # Local variable - lives only inside this function
    local_message = "I'm only inside!"
    print(global_message)  # Can see global
    print(local_message)   # Can see local

my_function()
print(global_message)  # Works!
# print(local_message)  # ERROR! Can't see local outside
```

### Default Parameters

You can give parameters default values:

```python
def greet(name="friend"):
    print(f"Hello, {name}!")

greet("Katya")     # Hello, Katya!
greet()            # Hello, friend! (uses default)
```

### Functions Calling Functions

Functions can call other functions:

```python
def get_square(num):
    return num * num

def print_square(num):
    square = get_square(num)  # Call the other function
    print(f"The square of {num} is {square}")

print_square(5)  # The square of 5 is 25
```

### 🎮 Your Turn! - Exercises

**Exercise 1: Morning Routine (from your homework)**

```python
def my_morning():
    print("Wake up!")
    print("Brush teeth")
    print("Eat breakfast")

# Call your function
my_morning()
```

**Exercise 2: Fix the Buggy Function (from your homework)**

```python
# Find and fix the 2 mistakes:
def pet_my_cat():
print("Pet the cat")
    print("Cat purrs")

pet_my_cat
```

**Exercise 3: Bedtime Function (from your homework)**

```python
def bedtime():
    # Print 3 things you do before bed
    pass  # Replace with your code

bedtime()
```

**Exercise 4: Greeting with Name (from your homework)**

```python
def say_hello(name):
    print(f"Hello, {name}!")
    print("How are you today?")
    # Add one more line: "Nice to see you!"

say_hello("Alex")
say_hello("Sofia")
say_hello("your friend's name")
```

**Exercise 5: Multiply Two Numbers (from your homework)**

```python
def multiply_two_nums(num1, num2):
    # Calculate and print the result
    pass

# Call with 3 different pairs
multiply_two_nums(2, 3)
multiply_two_nums(5, 4)
multiply_two_nums(10, 10)
```

**Exercise 6: Divide Two Numbers (from your homework)**

```python
def divide_two_nums(num1, num2):
    # Calculate and print the result
    pass

# Call 3 times
divide_two_nums(10, 2)
divide_two_nums(15, 3)
divide_two_nums(100, 4)
```

**Exercise 7: Animal Sound (from your homework)**

```python
def animal_sound(animal):
    # If animal is "dog", print "Woof woof!"
    # If animal is "cat", print "Meow!"
    # Otherwise, print "I don't know that animal's sound!"

animal_sound("dog")
animal_sound("cat")
animal_sound("lion")
```

### 🌟 Challenge: Create a Calculator

Create functions for:

- add(a, b)
- subtract(a, b)
- multiply(a, b)
- divide(a, b)
- power(base, exponent)

Then create a menu that lets the user choose which operation to use!

### 📺 Helpful Videos

- [Python Functions for Kids](https://www.youtube.com/watch?v=NSbOtYzIQI0)
- [Functions in Python](https://www.youtube.com/watch?v=9Os0o3wzS_I)
- [Return vs Print](https://www.youtube.com/watch?v=0c9W3IBxYf4)

### 🌐 Websites for Practice

- [W3Schools Python Functions](https://www.w3schools.com/python/python_functions.asp)
- [Programiz Python Functions](https://www.programiz.com/python-programming/function)

### 📝 Quick Reference

```python
# Define a function
def function_name(parameter1, parameter2):
    # Code here
    return something

# Call a function
function_name(value1, value2)

# Function without parameters
def simple_function():
    print("I'm simple!")

# Function with return
def add(a, b):
    return a + b

# Default parameters
def greet(name="World"):
    print(f"Hello, {name}!")

# Global vs Local
global_var = 10
def test():
    local_var = 20
    print(global_var)  # Works
    print(local_var)   # Works
# print(local_var)  # ERROR!
```

### ✅ Lesson 10 Checklist

- [ ] I know how to define a function with `def`
- [ ] I can call functions with `()`
- [ ] I understand parameters and arguments
- [ ] I know the difference between `return` and `print`
- [ ] I understand global vs local scope
- [ ] I can create functions with multiple parameters
- [ ] I completed all the exercises

---

## 🎓 You've Completed Lessons 1-10! 🎉

Congratulations! You now know:

✅ Variables and Values
✅ Operators and Math
✅ Numbers and Calculations
✅ Strings and Text
✅ User Input
✅ Making Decisions with if/elif/else
✅ Lists for Collections
✅ For Loops for Repetition
✅ Functions for Reusable Code

### What's Next?

In the next lessons, you'll learn:

- **Lesson 11:** Dictionaries - Phone Books for Your Data
- **Lesson 12:** While Loops - Keep Going Until...
- **Lesson 13:** Tuples and Sets - More Collection Types
- **Lesson 14:** Working with Files - Save Your Work!
- **Lesson 15:** Modules - Using Other People's Code
- **Lessons 16-20:** Fun Projects!

Keep coding, stay curious, and remember: **Every expert was once a beginner!** 🐍✨
