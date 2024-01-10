console.log("------You are welcome to array ops ---------");

// const array = [
//   { name: "ram", age: 30 },
//   { name: "hari", age: 10 },
//   { name: "gita", age: 40 },
// ];

//use sort method of aray to sort them data in ascending order

// Write a program to find the maximum and minimum value of an array

// const numbers = [22, 1, 33, 9, 55];
// // console.log(numbers.sort((a, b) => a.numbers - b.numbers));
// // numbers.reduce((a,b)=>
// // {
// //    const temp = a>b;
// // })
// //write a program to exclude password from the array

// const users = [
//   { user: "a", pw: "test" },
//   { user: "b", pw: "test1" },
//   { user: "c", pw: "test2" },
// ];
// for (let i = 0; i <= users.length; i++) {
//   const single = users[i];

//   const { pw, ...rest } = single;
//   console.log({ rest });
// }

// const newUsers = users.map((user) => {
//   const { pw, ...rest } = user;
//   console.log({ newUsers });
// });

//Imutable Js
//JS methods that we use in array to do operations in a copy of the original data
//Array
//map,filter, reduce, some, find, every

//write a function that accepts an array and returns the sum of all the items of array
//[1,2,3,4,5,6,7,8,9,10] => 55

// const addition = (arrayNumbers) => {
//   arrayNumbers.reduce((a, number) => console.log(number));
// };
// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(addition(arrayNumbers));

// const asrra = [5, 2, 8, 1, 9];

// // Sorting as strings (default behavior)
// const sortedArrayStrings = asrra.sort();
// console.log("Sorted as strings:", sortedArrayStrings);

// // Sorting numerically using a comparison function
// const sortedArrayNumbers = asrra.sort((a, b) => a - b);
// console.log("Sorted numerically:", sortedArrayNumbers);

// Write a program to print the maximum value from an array with and without using reduce method.

// without using reduce function

const array = [2, 4, 23, 59, 10];

const maximumValue = (array) => {
  let max = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

const response = maximumValue(array);

console.log("The maximum value is : ", `${response}`);

// By using reduce function

const max = array.reduce((accumulator, currentvalue) => {
  if (currentvalue > accumulator) {
    accumulator = currentvalue;
  }
  return accumulator;
}, 0);
console.log("The maximum value from an array is : ", `${max}`);

const array1 = [2, 4, 6, 8];

const res = array1.map((individualElement) => {
  return individualElement * 2;
});

console.log(res);

// Write a function in javascript that can filter numbers greater than 3 from the given array
const array3 = [2, 4, 3, 9];

const res1 = array3.filter((individualElement) => {
  return individualElement > 3;
});

console.log("The array with numbers greater than 3 are :" + res1);

const sum = array3.reduce((acc, current) => {
  return (acc = acc + current);
}, 0);

console.log("The sum of the each numbers of array is : " + sum);
