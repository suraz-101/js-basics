const button = document.getElementById("button");

// declaring the arrow function to check if the username and password match with the data stored in users array
const checkValid = (userName, passWord) => {
  const users = [
    { name: "suraj", username: "surajpandey", password: "suraj123" },
    { name: "nabin", username: "nabin", password: "nabin123" },
    { name: "sandesh", username: "sandesh1", password: "sandesh123" },
  ];

  //using javascript some function to iterate every objects of and array check whether the value passed as parameter matches with the users array obejcts or not
  const res = users.some((element) => {
    return element.username === userName && element.password === passWord; // if matches then it returns true else return false
  });

  // checking the responses
  if (res === true) {
    alert("You are successfully logged in !!");
  } else {
    alert("Please enter correct username and password");
  }
};

button.addEventListener("click", () => {
  const userName = document.getElementById("username").value; //extracting input value
  const passWord = document.getElementById("password").value; //extracting input value
  checkValid(userName, passWord); // calling checkValid function by passing the parameters that stores input value
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

// const checkValid = (userName, passWord) => {
//   if (userName === "suraj123" && passWord === "suraj12") {
//     alert("You are successfully logged in !!");
//   } else {
//     alert("Please enter valid username and password");
//   }
// };

// button.addEventListener("click", () => {
//   const userName = document.getElementById("username").value;
//   const passWord = document.getElementById("password").value;
//   checkValid(userName, passWord);
//   document.getElementById("username").value = "";
//   document.getElementById("password").value = "";
// });
