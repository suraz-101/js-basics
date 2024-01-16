const message = () => {
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const college = document.querySelector("#select").value;
  const email = document.querySelector("#email").value;

  document.getElementById("result").innerHTML =
    "Name :" +
    name +
    "<br>" +
    "Password:" +
    password +
    "<br>" +
    "College" +
    college +
    "<br>" +
    "email" +
    email;

  //   console.log(name);
  //   console.log(password);
  //   document.getElementById("result").innerHTML = password;
};
