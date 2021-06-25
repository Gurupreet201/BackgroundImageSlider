const pictures = [
  "cars1",
  "cars2",
  "cars3",
  "cars4",
  "cars5",
  "cars6",
  "cars7",
  "cars8",
  "cars9",
  "cars10",
  "cars11",
  "cars12",
  "cars13",
];

const buttonLeft = document.querySelector(".btn-left");
const buttonRight = document.querySelector(".btn-right");
const imgDiv = document.querySelector(".img-container");
let counter = 0;

buttonLeft.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = pictures.length - 1;
  }
  imgDiv.style.backgroundImage = `url(./images/${pictures[counter]}.jpg)`;
});

buttonRight.addEventListener("click", function () {
  counter++;
  if (counter > pictures.length - 1) {
    counter = 0;
  }
  imgDiv.style.backgroundImage = `url(./images/${pictures[counter]}.jpg)`;
});
