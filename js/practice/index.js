//concat, includes, charAt, indexOf, replace,
//replaceAll, toUpperCase, substring, split, slice

console.log(
  "-------------------------WELCOME TO PRACTICE SET -------------------------=="
);

//concat
console.log("-------------------------concate()-------------------------==");

const firstName = "Suraj"; // initialising first name
const lastName = "Pandey"; // initialising second name

const result = firstName.concat(" ", lastName); //using javascript inbuild concat method to concatinate first name and last name
console.log(result + " =>concat is used to add both the words  "); //printing result

//includes
console.log(
  "-------------------------include(string)-------------------------"
);
const colors = ["Red", "Orange", "Green", "Black"]; // initialising and array
//includes method returns value true of the color is inlcuded in above array else returns false
console.log(colors.includes("white")); // returns false as white is not included in above colors array
console.log(colors.includes("Red")); // returns true as red is inlcluded in above colors array

//chartAt => charAt() method is beig used in order to find out the character of the word of the sepecific index as mentioned on charAt(index);
console.log("-------------------------charAt(index)-------------------------");
let word = prompt("enter the word"); //asking a word from a user
let res = word.charAt(3); // using chartAt method which returns the character of the given word of the specific index as mentioned
console.log(res); // printing result

//indexOf => indexOf() method returns the position of the first letter occurance of the respective word of the given substring
console.log("-------------------------indexOf()-------------------------=");
let sentence = "My name is Suraj Pandey"; //initialising the value of senternce
let r = sentence.indexOf("name"); // indexOf method is used which helps to returns the position of the first letter occurance of the respective word from the sentence
console.log(r); //printing the value of the letter

//replace => replace() method is being used in order to replace the word inside  as specified
console.log("-------------------------replace()-------------------------");
let sent = "I love Nepal. Nepal is very beautiful"; //initialising the value
let re = sent.replace("Nepal", "Pokhara"); // here replace method is used to replace the boy word from the sentc to girl
console.log(re); //printing the result

//replaceAll => replace all the word by the another word as specified from the entier phrase or the string replaceAll(word to be replaced, replace word)
// let sent = "I love Nepal. Nepal is very beautiful.";
console.log("-------------------------replaceAll()-------------------------");
let replaceALL = sent.replaceAll("Nepal", "Pokhara");
console.log(replaceALL);

//toUpperCase() => this method is used to convert all the letters of the word into capital letters
console.log("-------------------------toUpperCase()-------------------------");
let capitalLetter = sent.toUpperCase();
console.log(capitalLetter);

//substring => exptract the value as oassed on substring() method
console.log("-------------------------substring()-------------------------");
let extract = word.substring(2, 4); //extract the letter from 2 and 3 index
let single = word.substring(3); //when one index is given then the letter behind that string is printed
console.log(extract);
console.log(single);

//split => split() method in javascript slpit the given word
console.log("-------------------------split()-------------------------");
let separate = sent.split(" ");
console.log(separate);
console.log("The third word of the sentence is: " + separate[2]);

//slice => slice() method in javascript exptract the part of the string which is similar to substring
console.log("-------------------------slice()-------------------------");
let sliceSentence = sent.slice(0, 6);
console.log(sliceSentence);
