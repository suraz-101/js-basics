// const submit = document.getElementById("submit");

// const { EqualStencilFunc } = require("three");

const message = () => {
  const fName = document.getElementById("firstName").value;
  alert("Hellow " + fName);

  //radio
  const gender = document.getElementsByName("gender");
  // console.log(gender);
  if (gender[0].checked == true) {
    console.log(gender[0].value);
  } else if (gender[1].checked == true) {
    console.log(gender[1].value);
  } else if (gender[2].checked == true) {
    console.log(gender[2].value);
  } else {
    alert("Please select the valid gender");
  }

  //select

  //file upload

  //date manipulation

  const school = document.getElementById("school").value;
  console.log(school);
  // const selectedItem = school.option[school.selectedIndex].value;
  // console.log(selectedItem);
};

// https://www.w3schools.com/js/exercise_js.asp

// submit.onclick(message());
