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

// function areOfTheSquare(length, breadth) {
//   const area = length * breadth;
//   console.log(area);
// }

// areOfTheSquare(5, 5);
//Write a function to get the full name of the person using parameter first name and last name

//function
// function fullName(firstName, lastName) {
//   const fName = `${firstName}` + " " + `${lastName}`;
//   return fName; //returning value
//using inbuilt function
//   const res = firstName.concat("", lastName);
//   return res;
// }
//taking input using prompt
// const first = prompt("Enter your first name");
// const second = prompt("Enter your last name");

//function call
// const result = fullName(first, second); //passing cvalue to the function
// console.log(result); //printing results

//concat, includes, charAt, indexOf, replace,
//replaceAll, toUpperCase, substring, split, slice

//ES6 (Arrow Function)

// const uppeCase = (word) => {
//   return word.toUpperCase();
// };

// const response = upperCase("Suraj");
// console.log(response);

//Anonymus Function

const hellow = function (word) {
  return word;
};

const res = hellow("Helow");

console.log(res);

// Inline Function => similar to anonymous function

const hellowTwo = function (word) {
  return word;
};

console.log(hellowTwo("Hellow2"));

// // default function

const pagination = (page = 1, limit = 20) => {
  console.log(page, limit);
};

pagination(20, 100);

// //parameterised function
const fun = (a, b, c) => {
  return a + b + c;
};

console.log(fun(1, 2, 3));

// //Implicit Function

const sums = (a, b) => a + b;
console.log(sums(1, 2));

// //Explicit Function => every time
const f = (a, b) => {
  if (a > b) return a - b;
  return b - a;
};

console.log(f(5, 10));

// //IIFEs => Immediately Invoked Function Expressions

(function () {
  console.log("Hellow from devOps");
})();

// //closures

const getEnv = () => {
  const password = "supasswordraj";
  return password;
};

console.log(getEnv());

// const password = "password";

//write a default function to print "welcome guest" if usename is not your name
const check = (name, role = "admin") => {
  if (name === "suraj") return " Welcome " + `${role}` + " " + `${name}`;
  return " Welcome " + " Guest " + `${name}`;
};

console.log(check("surajj"));

// //write a default function to create the multiplication table of 5
console.log("----------------------------------------------");
console.log("|---------    Multiplication Table    -----------|");
console.log("----------------------------------------------");

const multiple = (number = 5) => {
  for (let i = 1; i <= 10; i++) {
    let res = number + "X" + i + "=" + number * i;
    console.log(res);
  }
};

multiple();

// //write a function to calculate final amount based on the principal amount
console.log("----------------------------------------------");
console.log("|----------------    Interest     ----------------|");
console.log("----------------------------------------------");
const principal = (p, t, r) => {
  const result = (p * t * r) / 100;
  return result;
};

console.log(principal(10000, 1, 20));

// //write a function to calculate compound interest using Math Function
// //p = 100000 (principal)
// // r= 10% (rate)
// //t = 10 length of time

// // Formula A = p(1+r) por t
console.log("----------------------------------------------");
console.log("|---------    Compound Interest    -----------|");
console.log("----------------------------------------------");
const compound = (p, t, r) => {
  console.log(
    "calculate compound interest using Math Function of Principal: " + `${p}`
  );
  console.log("of time: " + `${t}`);
  console.log("of rate: " + `${r}`);
  return Math.round(p * Math.pow(1 + r / 100, t));
};

console.log("==> " + compound(100000, 10, 10));

const logIn = (username, password, role = "guest") => {
  if ((username == "suraj") & (password == "suraj123")) return (role = "admin");
  return role;
};

const resp = logIn("suraj", "suraj1");
// console.log(resp);
if (resp == "guest") {
  console.log("Wecome to user panel");
} else {
  console.log("Welcome to admin Panel");
}
