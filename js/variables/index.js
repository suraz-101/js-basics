console.log("Hellow World");

//This is how you can comment in javascript

/* this is how 
   you can comment multiple ines 
   in javascript 
   
   Read me instruction
   a. Variables - named storage

    => standard ECMASCRIPT (This is the standard in which javascript is done)

    es5

    At the early stage there was only var keywords

    es6

   let and  const were introduced alongside with var
 

*/

// var person = "suraj"; //container = data

// person = "pandey";
// var fullName = "Suraj Pandey"; //camel case This is the right way to give naming convention
// var isAdult = "yes";

// let persons = "pandey";
// persons = "pandey suraj";
//var and let allow their value to be replaced by another value but const doest not allow it

// console.log(person);

/* interactions

 prompt, confirm, alert*/

// const name = prompt("What is your name");
// const isValid = confirm("Are you above 18 years?");
// alert("hellow " + name);

/*Type casting => conversion of data type froj one data to another

String to Number : Number (value)
Number to String : String(value)*/

//Write a program taht store the use inform about their birth year and calculate age

// const birthYear = Number(prompt("Please enter your birth year!!")); //asking birth year from the user using prompt
// const age = 2024 - birthYear;
// alert("Hellow " + name + " Your age is " + age); //printing the age by calculating

//Statements
//if age below 10 child , above 10 and below 20 then tenn, above 19 and below 60 adult ,And  above 60 old
// if (age < 10) {
//   alert("Your are child");
// } else {
//   alert("Your are adult");
// }

//switch case

/*
const expression = age > 18;
switch (expression) {
  case true:
    alert("You are adult");
    break;

  case false:
    alert("you are child");
    break;
  default:
    alert("Invalid date");
}
*/
//ternary Operator

//syntax:  vairable = condition >? true statement : false statement
// const result = age > 18 ? alert("You are adult") : alert("You are child");

//write a program that accepts your name show alert message saying "welcome admin" else say "welcome guest"

// const fName = prompt("What is your name?");

// const identification =
//   fName == "Suraj Pandey" ? alert("Welcome admin") : alert("Welcome guest");

//Wrtie a program that prints the if its weekday or weekend based on day input using switch case

//   Monday - Friday => print weekday
//   Saturday - SUNDAY => print weenend

// const day = Number(prompt("Please enter a day of the week"));
// switch (day) {
//   case 1:
//     alert("weekend");
//     break;
//   case 7:
//     alert("weekend");
//     break;
//   case 2:
//     alert("weekday");
//     break;
//   case 3:
//     alert("weekday");
//     break;
//   case 4:
//     alert("weekday");
//     break;
//   case 5:
//     alert("weekday");
//     break;
//   case 6:
//     alert("weekday");
//     break;
//   default:
//     alert("Invalid day, only enter 1-7 numbers");
//   //  break;
// }

//operators

//Wrtie a program that prints the if its weekday or weekend based on day input using switch case

//   Monday - Friday => print weekday
//   Saturday - SUNDAY => print weenend

const day = Number(prompt("Please enter a day of the week"));

if ((day >= 2) & (day <= 6)) {
  alert("weekday");
} else if (day == 1 || day == 7) {
  alert("weekend");
} else {
  alert("Invalid number, please enter numbers from 1 to 7, Thank you!!");
}
