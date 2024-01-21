const button = document.getElementById("button");

// declaring the arrow function to check if the username and password match with the data stored in users array
const checkValid = (userName, passWord) => {
  let users = [
    { name: "suraj", username: "surajpandey", password: "suraj123A@" },
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

// button.addEventListener("click")

//checking validation onkeyup
const validation = () => {
  const error = document.getElementById("error");
  const password = document.getElementById("password").value;
  const char = document.getElementById("char");
  const capital = document.getElementById("capital");
  const number = document.getElementById("number");
  const specialChar = document.getElementById("specialChar");
  // all the elements of fa-check and fa-close are stored in check5 and close5 array respectively
  const check5 = document.getElementsByClassName("fa-check");
  const close5 = document.getElementsByClassName("fa-close");

  // function that show the check  elements and hide close element
  const toHideCloseShowCheck = (j) => {
    check5[j].style.display = "block";
    close5[j].style.display = "none";
    // }
  };
  // function that hide the check  elements and show close element
  const toHideCheckShowClose = (j) => {
    check5[j].style.display = "none";
    close5[j].style.display = "block";
  };
  error.style.display = "block";
  const lengthOfPasswordValidation = () => {
    const length = password.length;
    if (length > 9) {
      char.style.color = "green";
      toHideCloseShowCheck(0);
    } else {
      char.style.color = "red";
      toHideCheckShowClose(0);
    }
  };

  const capitalLetterValidation = () => {
    if (password.search(/[A-Z]/) == -1) {
      capital.style.color = "red";
      toHideCheckShowClose(1);
    } else {
      capital.style.color = "green";
      toHideCloseShowCheck(1);
    }
  };

  const checkNumberValidation = () => {
    if (password.search(/[0-9]/) == -1) {
      number.style.color = "red";
      toHideCheckShowClose(2);
    } else {
      number.style.color = "green";
      toHideCloseShowCheck(2);
    }
  };

  const checkSpecialValidation = () => {
    if (password.search(/[`~!@#$%^&*(_+-={[\]|:;"'<,>.?/})]/) == -1) {
      specialChar.style.color = "red";
      toHideCheckShowClose(3);
    } else {
      specialChar.style.color = "green";
      toHideCloseShowCheck(3);
    }
  };

  lengthOfPasswordValidation();
  capitalLetterValidation();

  checkNumberValidation();
  checkSpecialValidation();

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
  }
};
