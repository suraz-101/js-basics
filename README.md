# js-basics

Learning javascript basics

# Day 2 - learning about git command

1. git status (check files)
2. git add .
3. git commit -m "hellow world"
4. git push origin main

# Day 3 - learning about the javascript variables , hoisting and interaction (prompt, alert and confirm)

1. variables

   - var (ECMA Script 5)
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

# Day 5 - ES6 (Arrow function)

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

# Day 6 - Recap all

# Day 7 - Objects and methods and Array

# Day 7 - Objects and methods and Array

# Object (Real Life Object, Properties and ) => Complex Data type

- Syntax to create Object

- Eg: const person = {
  firstName : "suraj",
  lastName : "Pandey",
  dob : "2000-07-15,
  isMale: true,
  fullName : () =>{return person.firstName + " " + person.lastName},
  age : function(){
  2024 - this.dob;
  },
  };

- console.log(person.age);

- Spread Operator => most important (Exclude)

const { isMale, ...rest } = person;
console.log({ rest });

we can use spread operator if we did not want to show the specific value as we dont want to show isMale in above case but in real world if we don't want to show the password in the front end from the database then we can use spread operator as above.

- Note : In above object we have two types of function that is regular function and arrow function. In arrow function we cannot use this keyword because arrow function does not contain its own this as it remain inside the object while regular function indicates this to the name of the object.

# Array => collections of types of objects or data

- syntax : const array = [item1, item2,....]
- Use of Spread operator

  - Syntax : const [a,....remaining] = array;
    console.log(a) => output ==> item1
    console.log(remaining) => output ==> item2, .......

# Day - 9 : higher order functions and callBack functions

- Some of the higher order functions are:

  - map()

    - The map function is used if we need to transform existing array into completely new array. For instance, if we need to double/ dviide each elements by 2 of an array then we can use map function.

      - Syntax :

                const array = [item1, item2, item3,....];

                const callBackFunction = (item) =>{
                  return logic;

                }

                array.map(callBackFunction);

        - Example :

              const array1 = [2, 4, 6, 8];

              const res = array1.map((individualElement) => {
                return individualElement * 2;
              });

              console.log(res);

    - Note: map function process iteration without loop like for()

  - filter()

    - The filter function is mainly used if we need to filter the values from the array as its name suggest. This method evaluates the return value of the callback function as a boolen. If the return value is true than the item is kept. If the return value is false the array item is removed.

      - Syntax :

                const array = [item1, item2, item3,........];

                const  callBackFunction = (individual item) =>
                  {
                      return true or false according to the logic;
                  }
                  array.filter(callBackFunction);

        - Example :

                const array = [2,4,3,9];

                const res = array.filter((individualElement)=>{ return individualElement > 3;

                })

                 console.log(res);

    - Note: filter function is also an iterative method. It calls a provided callback function once for each element in an array, and construct a new array of all the values for which callback function retruns a true value.

  - reduce()

    - The reduce mthod is maily used if we need to calculate a single value from an array. For instance, if we need to add or mutliply all the elements from an array then we can use reduce function. It is also an iterative method.

      - Syntax:

                 const array = [item1, item2, item3,........];

            without using reduce function

                 function sum(array)
                 {
                   let sum = 0;
                   for(let i = 0; i<=array.length; i++>)
                   {
                     sum+ = array[i];

                   }
                   return sum;
                 }

                console.log(sum(array));


            By useing reduce function

    - Note : Reduce function iterate over all the elements of the array and store the each value in current value in every iteration and accumulator as its name suggest accumulate or stores result.

                    array.reduce(function callBackFunction(accumulator, crrentValue){ accumulator = accumulator + currentVlaue;
                    return accumulator
                    },, initial value);

    - if we look on both the example and compare them, accumulator in reduce function is acting like sum in first example and current value is acking like array[i] and the initial value is the value we put during the initialising the valraible like we have initialised value of sum as 0. If we look over both the examples, both are doing exactly the same work but example two seems to be more concise or in other word brief and to the point which enhance the readability and simplify the overall implementation.

    Write a program with and without using reduce function to find the maximum value of an array.

    - Note => (visit js/array/array-ops.js file)

# Day - 10 : HTML, CSS and Javascript Combination

- Basic of HTML, CSS and Javascript

  - learning about the html formate
  - learnig about the css styling
  - learnig about form
  - learnig about the form submit using javascript

# Day - 11 : HTML, CSS and Javascript part 2

- learning to print the value of selected check box and selected options from select tag in html using javascript

# Day - 12 : Date and HTMl completions

- Recap couple of concepts (array, array method chaining, spread Ops, function)

  - Write a js function to convert the string into the properCase (Eg: 'the fox is sly' => "The Fox Is Sly")

  - Date and Date properties and Manipulation

  - HTML, CSS scratch CSS design (alternative => bootstrap)
