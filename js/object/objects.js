// Write a Javascript functio to find the first not repeated character
// Sample arguments : 'abacdbec' Expected output : 'e
// const firstNotRepeatedCharacter = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];
//     // console.log(currentChar);

//     // Check if the current character is not repeated in the rest of the string
//     if (
//       str.indexOf(currentChar) === i &&
//       !str.slice(i + 1).includes(currentChar)
//     ) {
//       return currentChar;
//     }
//   }
//   return null; // Return null if no non-repeated character is found
// };

// // Example usage:
// const sampleString = "aabbccee";
// const result = firstNotRepeatedCharacter(sampleString);

// console.log("First not repeated character:", result);

// const nonRepeatedLtters = (word) => {
//   const splitWord = word.split("");

//   for (let i = 0; i <= splitWord.length; i++) {
//     console.log("The split word is: " + splitWord[i]);
//     for (let j = 0; j <= splitWord.length; j++) {
//       splitWord.slice(j, j + 1);

//       console.log("The current letters is: ", `${splitWord[i]}`);
//       // if (!currentLtter.includes(splitWord[i])) {
//       //   console.log("The unique letter is : ", `${splitWord[i]}`);
//       // }

//       //       console.log("The words are : " + remainingLetters);
//     }
//   }
//   return null;
// };
// const word = prompt("Please enter a word ");

// nonRepeatedLtters(word);
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let Time = Time;
console.log("current time is " + Time);
