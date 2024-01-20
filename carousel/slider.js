// const { BufferGeometryLoader } = require("three");

const image = [
  "https://images.assetsdelivery.com/compings_v2/ongkachakon/ongkachakon2011/ongkachakon201100026.jpg",
  "https://www.newzealand.com/assets/Tourism-NZ/Wellington/bcab3eae5b/img-1536146521-3287-14997-p-2BB80D14-E659-C48E-BB5EC5B2906B7758-2544003__aWxvdmVrZWxseQo_FocalPointCropWzM1MiwxMDI0LDUwLDUwLDc1LCJwbmciLDY1LDIuNV0.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRenLnADWbObaYRGhPEW_3PINNJrCVM1_Z-0myxnoRE6flxurMmscysbrRYR21yActE_4U&usqp=CAU",
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
