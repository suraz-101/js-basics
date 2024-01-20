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

//checking validation onkeyup
const validation = () => {
  const error = document.getElementById("error");
  const password = document.getElementById("password").value;
  const char = document.getElementById("char");
  const capital = document.getElementById("capital");
  const number = document.getElementById("number");
  const specialChar = document.getElementById("specialChar");
  const check = document.getElementById("check1");
  const close = document.getElementById("close");
  error.style.display = "block";
  const lengthOfPassword = () => {
    console.log(password);
    const length = password.length;
    console.log(length);
    if (length > 9) {
      char.style.color = "green";
      check.style.display = "block";
      close.style.display = "none";
    } else {
      char.style.color = "red";
      check.style.display = "none";
      close.style.display = "block";
    }
  };

  const capitalLetter = () => {
    if (password.search(/[A-Z]/) == -1) {
      capital.style.color = "red";
    } else {
      capital.style.color = "green";
    }
  };

  const checkNumber = () => {
    if (password.search(/[0-9]/) == -1) {
      number.style.color = "red";
    } else {
      number.style.color = "green";
    }
  };

  const checkSpecial = () => {
    if (password.search(/[`~!@#$%^&*(_+-={[\]|:;"'<,>.?/})]/) == -1) {
      specialChar.style.color = "red";
    } else {
      specialChar.style.color = "green";
    }
  };

  lengthOfPassword();
  capitalLetter();

  checkNumber();
  checkSpecial();

  const charColor = char.style.color;
  const capitalColor = capital.style.color;
  const numberColor = number.style.color;
  const specialColor = specialChar.style.color;

  if (
    charColor == "green" &&
    capitalColor == "green" &&
    numberColor == "green" &&
    specialColor == "green"
  ) {
    error.style.display = "none";
    // error.style.transition = "all 1s ease-in-out";
  }

  // console.log(color);
};
