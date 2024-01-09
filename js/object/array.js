// CRUD

//Arrays

const classes = [
  "Suraj Pandey", // 0
  { firstName: "Suraj", lastName: "Pandey" },
  { age: 23, dob: "2000" }, //1
];

//Read
// console.log(classes);

// //update
// classes[1] = "Suraj Pandey";
// console.log(classes);
classes[1].firstName = "SURAJ";
console.log(classes);

// //Delete => using spread operator

const [a, b, ...remaining] = classes;
console.log(a);
