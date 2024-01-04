// Coding standars

//Dry => Donot repeat yourself

//SOC => separation of concern

//modular

//Function

//Data (Object, Array, Date)

//Loops

//write a program to print from 1 to 100

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

//1. Write a program for multiplication table of 3

// for (let i = 1; i <= 10; i++) {
//   console.log(3 + "X" + i + "=" + 3 * i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(3 + "X" + i + "=" + 3 * i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(3 + "X" + i + "=" + 3 * i);
//   i++;
// } while (i <= 10);

//2. Write a program for printing only even numbers

for (let i = 1; i <= 100; i++) {
  let rem = i % 2;

  if (rem == 0) {
    console.log(i);
  }
}
