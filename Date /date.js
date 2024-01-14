// const today = new Date(); // ISO string
// const stringConversion = today.toString();
// const split = stringConversion.split("T");
// console.log(split);

// console.log({ today });

// const getMyYear = today.getFullYear();
// console.log("My year is : ", `${getMyYear}`);

// const myMonth = today.getMonth();
// console.log("Current month is : ", `${myMonth}`);

// const myDate = today.getDate();
// console.log("Todays date is :", `${myDate}`);

//practice month set, day set

//Fprmate

//UTC => TZ
//ISO => TZ+00:00
//Unix => Seconds tick

// Write a js function to convert the string into the properCase (Eg: 'the fox is sly' => "The Fox Is Sly")

const myString = "the fox is sly"; // initialising the string

const splitedSentence = myString.split(" "); // spliting the sentence as ['the','fox','is','sky']

const res = splitedSentence.map((element) => {
  // map() function iterate each elements the, fox, is and sly and initilise to element
  const firstElement = element.split("")[0].toUpperCase(); // each element are spited and 0th index letter is converted to uppercase and firstElement variable stores value as ['T,'F','I,'S']
  const [a, ...rest] = element; // using spread operator to skip the first letter of the each item and initialising rest of the letters in res valirable
  return firstElement + rest.join(""); // joining 0th index capital letter to rest of the letter using join and returns an array ['The','Fox','Is,'Sly']
});

// res variable stores the result in an array as ['The','Fox','Is,'Sly'] but we need to make the sentence by joining each elements of the array
// for that join method is used
console.log("The proper case of 'the fox is sly' is : " + res.join(" ")); // printing the final result
