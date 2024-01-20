// const { BufferGeometryLoader } = require("three");

const image = [
  "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVja2xhbmR8ZW58MHx8MHx8fDA%3D",
  "https://image1.masterfile.com/getImage/ODYyLTAzMzYwMDc2ZW4uMDAwMDAwMDA=AL3tBP/862-03360076en_Masterfile.jpg",
  "https://www.skicooper.com/coopwp/wp-content/uploads/2018/11/Slider-Scenery-2.jpg",
  "https://img.veenaworld.com/wp-content/uploads/2022/08/Top-11-Places-to-Visit-in-Pokhara.jpg",
  "https://static2.tripoto.com/media/filter/tst/img/2005586/TripDocument/1606627841_1024px_lake_wakatipu_remarkable_mountains.jpg",
];

// let div = document.getElementById("carousel-item");
setInterval(() => {
  // const color = ["red", "black", "white"];
  // let i = 0;

  let num = Math.floor(Math.random() * image.length);
  console.log(num);
  document.getElementById("carousel-items").style.backgroundImage =
    "url(" + image[num] + ")";
  // document.body.style.animation = "ease-in 2s";
  // console.log(num);
}, 2000);
// console.log(div);
