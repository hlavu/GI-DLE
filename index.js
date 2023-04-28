const header = document.querySelector("#header");
const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");

const slider = document.querySelector("#slider img");
const sliderCaption = document.querySelector("#slider .figure");

const slidePhotos = [
  {
    imgSrc: "./assets/img/thumb.jpg",
    caption: "Tomboy",
  },
  {
    imgSrc: "./assets/img/miyeon.jpg",
    caption: "Miyeon",
  },
  {
    imgSrc: "./assets/img/minnie.jpg",
    caption: "Minnie",
  },
  {
    imgSrc: "./assets/img/shuhua.jpg",
    caption: "Shuhua",
  },
  {
    imgSrc: "./assets/img/yuqi.jpg",
    caption: "Yuqi",
  },
  {
    imgSrc: "./assets/img/soyeon.jpg",
    caption: "Soyeon",
  },
];

const toggleResponsiveMenu = (hide) => {
  if (hide) {
    header.classList.toggle("show-m-menu", true);
  }
  header.classList.toggle("show-m-menu");
};

let interval;
let char = 0;

const slideShow = (idx) => {
  slider.src = slidePhotos[idx].imgSrc;
  slider.alt = slidePhotos[idx].caption;
};

menuBtn.addEventListener("click", () => toggleResponsiveMenu(false));
navBar.addEventListener("click", () => toggleResponsiveMenu(true));

let idx = 0;
setInterval(() => {
  if (idx >= slidePhotos.length) {
    idx = 0;
  }
  slideShow(idx);
  idx++;
}, 4000);
