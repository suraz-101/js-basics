console.log("------You are welcome to array ops ---------");

// const array = [
//   { name: "ram", age: 30 },
//   { name: "hari", age: 10 },
//   { name: "gita", age: 40 },
// ];

//use sort method of aray to sort them data in ascending order

// Write a program to find the maximum and minimum value of an array

const numbers = [22, 1, 33, 9, 55];
// console.log(numbers.sort((a, b) => a.numbers - b.numbers));
// numbers.reduce((a,b)=>
// {
//    const temp = a>b;
// })
//write a program to exclude password from the array

const users = [
  { user: "a", pw: "test" },
  { user: "b", pw: "test1" },
  { user: "c", pw: "test2" },
];
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

const addition = (arrayNumbers) => {
  return arrayNumbers.reduce((sum, currentValue) => sum + currentValue, 0);
};
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(addition(arrayNumbers));
