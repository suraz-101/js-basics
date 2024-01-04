//concat, includes, charAt, indexOf, replace,
//replaceAll, toUpperCase, substring, split, slice

console.log("==========WELCOME TO PRACTICE SET ============");

//concat

const firstName = "Suraj"; // initialising first name
const lastName = "Pandey"; // initialising second name

const result = firstName.concat(" ", lastName); //using javascript inbuild concat method to concatinate first name and last name
console.log(result); //printing result

//includes

const colors = ["Red", "Orange", "Green", "Black"]; // initialising and array
//includes method returns value true of the color is inlcuded in above array else returns false
console.log(colors.includes("white")); // returns false as white is not included in above colors array
console.log(colors.includes("Red")); // returns true as red is inlcluded in above colors array

//chartAt

let word = prompt("enter the word"); //asking a word from a user
let res = word.charAt(3); // using chartAt method which returns the character of the given word of the specific index as mentioned
console.log(res); // printing result
