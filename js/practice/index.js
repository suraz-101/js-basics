//concat, includes, charAt, indexOf, replace,
//replaceAll, toUpperCase, substring, split, slice

// console.log(
//   "-------------------------WELCOME TO PRACTICE SET -------------------------=="
// );

// // //concat
// // console.log("-------------------------concate()-------------------------==");

// // const firstName = "Suraj"; // initialising first name
// // const lastName = "Pandey"; // initialising second name

// // const result = firstName.concat(" ", lastName); //using javascript inbuild concat method to concatinate first name and last name
// // console.log(result + " =>concat is used to add both the words  "); //printing result

// // //includes
// // console.log(
// //   "-------------------------include(string)-------------------------"
// // );
// // const colors = ["Red", "Orange", "Green", "Black"]; // initialising and array
// // //includes method returns value true of the color is inlcuded in above array else returns false
// // console.log(colors.includes("white")); // returns false as white is not included in above colors array
// // console.log(colors.includes("Red")); // returns true as red is inlcluded in above colors array

// // //chartAt => charAt() method is beig used in order to find out the character of the word of the sepecific index as mentioned on charAt(index);
// // console.log("-------------------------charAt(index)-------------------------");
// // let word = prompt("enter the word"); //asking a word from a user
// // let res = word.charAt(3); // using chartAt method which returns the character of the given word of the specific index as mentioned
// // console.log(res); // printing result

// // //indexOf => indexOf() method returns the position of the first letter occurance of the respective word of the given substring
// // console.log("-------------------------indexOf()-------------------------=");
// // let sentence = "My name is Suraj Pandey"; //initialising the value of senternce
// // let r = sentence.indexOf("name"); // indexOf method is used which helps to returns the position of the first letter occurance of the respective word from the sentence
// // console.log(r); //printing the value of the letter

// // //replace => replace() method is being used in order to replace the word inside  as specified
// // console.log("-------------------------replace()-------------------------");
// // let sent = "I love Nepal. Nepal is very beautiful"; //initialising the value
// // let re = sent.replace("Nepal", "Pokhara"); // here replace method is used to replace the boy word from the sentc to girl
// // console.log(re); //printing the result

// // //replaceAll => replace all the word by the another word as specified from the entier phrase or the string replaceAll(word to be replaced, replace word)
// let sent = "I love Nepal. Nepal is very beautiful.";
// // console.log("-------------------------replaceAll()-------------------------");
// // let replaceALL = sent.replaceAll("Nepal", "Pokhara");
// // console.log(replaceALL);

// // //toUpperCase() => this method is used to convert all the letters of the word into capital letters
// // console.log("-------------------------toUpperCase()-------------------------");
// // let capitalLetter = sent.toUpperCase();
// // console.log(capitalLetter);

// // //substring => exptract the value as oassed on substring() method
// // console.log("-------------------------substring()-------------------------");
// // let extract = word.substring(2, 4); //extract the letter from 2 and 3 index
// // let single = word.substring(3); //when one index is given then the letter behind that string is printed
// // console.log(extract);
// // console.log(single);

// // //split => split() method in javascript slpit the given word
// // console.log("-------------------------split()-------------------------");
// // let separate = sent.split(" ");
// // console.log(separate);
// // console.log("The third word of the sentence is: " + separate[2]);

// // //slice => slice() method in javascript exptract the part of the string which is similar to substring
// // console.log("-------------------------slice()-------------------------");
// // let sliceSentence = sent.slice(3, 6);
// // console.log("Slice is " + sliceSentence);

// //write a function that converts word to uppercase words

// function upperCase(word) {
//   let capitalLetter = word.toUpperCase();
//   return capitalLetter;
// }

// let word = prompt("Enter a word ");
// let result = upperCase(word);
// console.log(result);

// //write a program using default function to check whether the user is admin or just a user

// const logIn = (username, password, role = "guest") => {
//   if ((username == "suraj") & (password == "suraj123")) return (role = "admin");
//   return role;
// };

// const resp = logIn("suraj", "suraj1");
// // console.log(resp);
// if (resp == "guest") {
//   console.log("Wecome to user panel");
// } else {
//   console.log("Welcome to admin Panel");
// }

// // Write a js function to convert the string into the properCase (Eg: 'the fox is sly' => "The Fox Is Sly")

// const myString = "the fox is sly"; // initialising the string

// const splitedSentence = myString.split(" "); // spliting the sentence as ['the','fox','is','sky']

// const res = splitedSentence.map((element) => {
//   // map() function iterate each elements the, fox, is and sly and initilise to element
//   const firstElement = element.split("")[0].toUpperCase(); // each element are spited and 0th index letter is converted to uppercase and firstElement variable stores value as ['T,'F','I,'S']
//   const [a, ...rest] = element; // using spread operator to skip the first letter of the each item and initialising rest of the letters in res valirable
//   return firstElement + rest.join(""); // joining 0th index capital letter to rest of the letter using join and returns an array ['The','Fox','Is,'Sly']
// });

// // res variable stores the result in an array as ['The','Fox','Is,'Sly'] but we need to make the sentence by joining each elements of the array
// // for that join method is used
// console.log("The proper case of 'the fox is sly' is : " + res.join(" ")); // printing the final result

// //Write a javascript function that returns boolean based on the role check in the array

// //userRole =["admin", "vendor"]
// //allowRole = ["inventoryManager", "vendor"]
// // ==> true

const userRole = ["admin", "vendor"];
const allowRole = ["inventoryManager", "vendor"];
// console.log(allowRole[1]);
const res = (userRole, allowRole) => {
  return userRole.some((role) => allowRole.includes(role));
};

const result = res(userRole, allowRole);
console.log(result);

// Write a js function to that check username and pasword
//use bootstrap for login page design
//set username and password as your email
// Result alert you have logged in
