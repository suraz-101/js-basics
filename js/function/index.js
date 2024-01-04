console.log("Hello from function chapter");

//ES5

//function define nothing got print yet
// function sayHi(name) {
//   console.log("Hellow " + name);
// }

// function checkEven(number) {
//   const rem = number % 2; //logic
//   if (rem == 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// }

// function add(a, b, c) {
//   console.log(a + b + c);
// }

// function substraction(a, b) {
//   const sub = a - b;
//   return sub;
// }

//To get print we need to call the function

// sayHi("Suraj");

// checkEven(1);

// add(1, 2, 3);

// const subs = substraction(4, 1);
// console.log(subs);

//Write a function to find the area of square

function areOfTheSquare(length, breadth) {
  const area = length * breadth;
  console.log(area);
}

areOfTheSquare(5, 5);
//Write a function to get the full name of the person using parameter first name and last name

function fullName(firstName, lastName) {
  const fName = firstName + " " + lastName;
  return fName;
}
const first = prompt("Enter your first name");
const second = prompt("Enter your last name");
const result = fullName(first, second);
console.log(result);

//ES6
