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

var person = "suraj"; //container = data

person = "pandey";
var fullName = "Suraj Pandey"; //camel case This is the right way to give naming convention
var isAdult = "yes";

let persons = "pandey";
persons = "pandey suraj";
//var and let allow their value to be replaced by another value but const doest not allow it

console.log(person);

/* interactions

 prompt, confirm, alert*/

// const name = prompt("What is your name");
// const isValid = confirm("Are you above 18 years?");
// alert("hellow " + name);

//Write a program taht store the use inform about their birth year and calculate age

const birthYear = prompt("Please enter your birth year!!"); //asking birth year from the user using prompt
const age = 2024 - birthYear;
alert("Your age is " + age); //printing the age by calculating

//Type casting => conversion of data type froj one data to another

//String to Number : Number (value)
//Number to String : String(value)
