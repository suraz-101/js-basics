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
const time = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();
  const amPm = hour < 12 ? "AM" : "PM";
  const sm = date.toLocaleTimeString();
  const year = date.getFullYear();
  const mon = date.getMonth();
  const day = date.getDay();
  const dat = date.getDate();
  document.getElementById("amPm").innerHTML = amPm;

  document.getElementById("Time").innerText = String(hour).concat(
    ":" + minutes
  );

  document.getElementById("second").innerHTML = second;
  document.getElementById("date").innerHTML = year;
  document.getElementById("month").innerHTML = calculateMonth(mon) + "-" + dat;
  document.getElementById("day").innerHTML = calculateDay(day);

  //   document.getElementById("time").innerHTML =
  //     dat +
  //     " " +
  //     calculateMonth(month) +
  //     ", " +
  //     calculateDay(day) +
  //     " " +
  //     String(hour).concat(":" + minutes + ":" + second) +
  //     " " +
  //     amPm;
};

setInterval(time, 1000);

// const date = new Date();
// const day = date.getDay();
// const dat = date.getDate();
// const month = date.getMonth();

const calculateMonth = (month) => {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 6:
      return "Aug";
    case 6:
      return "Sep";
    case 6:
      return "Oct";
    case 6:
      return "Nov";
    case 6:
      return "Dec";
  }
};
// console.log(dat);

const calculateDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

// console.log(amPm);
