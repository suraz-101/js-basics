# js-basics

Learning javascript basics

# Day 2 - learning about git command

1. git status (check files)
2. git add .
3. git commit -m "hellow world"
4. git push origin main

# Day 3 - learning about the javascript variables , hoisting and interaction (prompt, alert and confirm)

1. variables

   - var (ES5)
   - let
   - const

2. All the declaration are shift at the top after the code is run which is mean by hoisting

3. Interaction
   - alert (shows message on popup )
   - prompt (ask questions)
   - confirm (confirm questions)

# Day 4 - datatype, Type Casting, Statements and Operators

# 1. Datatypes

1. String - Text eg. "suraj"
2. Number - eg. weight = 65
3. Bigint - eg. hugeString = BigInt ("434314524322")
4. Boolen - To check the conditions (like yes/no)
5. undefined - If the variable is defined as const and the value is not assigned
6. null -
7. symbol - to create unique we use symbol
8. Object - const person = {fullName = "Suraj Pandey", age = "23"};

# 2. Type Casting

changing string to number and number to string

# 3. Statements

1. if...else
2. switch(conditions)
   {
   case value: message;break;
   default : message
   }

   # ternary Operator

   - syntax: vairable = condition >? true statement : false statement

   - Eg: const result = age > 18 ? alert("You are adult") : alert("You are child");

# 4. Operators

AND (&), OR (||), Not Equal to (!=)

# Day 5 - Loops and Functions

# 1. For Lopp

- syntax :

for(initial;condition;step){}

#while

- syntax:

while(condition){}

# 2. do ... while

- syntax:
  do{

  }while(condition)

# 3. Function

# 4. ES5 - syntax

- function declaration

  function functionName(parameters){return Value}
  eg. function fullName(fName,lName){return fName+ " " +lName};

- function call

  functionName(parameters);
  eg. function fullName("Suraj","Pandey");

  # Day 5 - ES6 (Arrow function

  - Syntax : const functionName = () =>{}
  - Hoisting is case sensitive in ES6
    Eg.:
    we cannot call function before the function is declared.

    # types of functions

    - anonymous Function / nameless function
    - inline Function
    - default Function => used in daily life
    - parameterised Function => used in daily life
    - implicit Function => used in cleanup daily life
    - explicit Function => used in every time
    - IIFEs => used in devOps Daily Life
    - closures => daily life
    - callback Function => framework inbuild
    - pure Function

# Day 6 -
