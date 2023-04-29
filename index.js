const header = document.querySelector("#header");
const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");

const slider = document.querySelector("#slider img");
const sliderCaption = document.querySelector("#slider .figure");

const memberList = document.querySelector(".member-list");

const buyBtnList = document.querySelectorAll(".buy-btn.btn");
const modal = document.querySelector(".ticket-modal");
const xBtn = document.querySelector(".x-btn");
const closeBtn = document.querySelector(".close-btn");

const memberPhotos = [
  {
    imgSrc: "./assets/img/thumb.jpg",
  },
  {
    imgSrc: "./assets/img/miyeon.jpg",
    imgCard: "./assets/img/miyeon-card.jpg",
    name: "Miyeon",
  },
  {
    imgSrc: "./assets/img/minnie.jpg",
    imgCard: "./assets/img/minnie-card.jpg",
    name: "Minnie",
  },
  {
    imgSrc: "./assets/img/shuhua.jpg",
    imgCard: "./assets/img/shuhua-card.jpg",
    name: "Shuhua",
  },
  {
    imgSrc: "./assets/img/yuqi.jpg",
    imgCard: "./assets/img/yuqi-card.jpg",
    name: "Yuqi",
  },
  {
    imgSrc: "./assets/img/soyeon.jpg",
    imgCard: "./assets/img/soyeon-card.jpg",
    name: "Soyeon",
  },
  {
    imgCard: "./assets/img/soojin-card.jpg",
    name: "Soojin (left)",
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
  if (memberPhotos[idx].imgSrc) {
    slider.src = memberPhotos[idx].imgSrc;
    slider.alt = memberPhotos[idx].caption;
  }
};

menuBtn.addEventListener("click", () => toggleResponsiveMenu(false));
navBar.addEventListener("click", () => toggleResponsiveMenu(true));

let idx = 0;
setInterval(() => {
  if (idx >= memberPhotos.length) {
    idx = 0;
  }
  slideShow(idx);
  idx++;
}, 4000);

buyBtnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("show", true);
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.toggle("show", false);
});

xBtn.addEventListener("click", () => closeBtn.click());

modal.addEventListener("click", function (e) {
  if (e.target === this) {
    closeBtn.click();
  }
});

const renderMemberCard = () => {
  let html = memberPhotos.map((member, idx) => {
    switch (idx) {
      case 0:
        return "";
      case memberPhotos.length - 1:
        return `<div class="img-card left">
        <p>${member.name}</p>
        <img src="${member.imgCard}" alt="${member.name}" />
      </div>
        `;
      default:
        return `<div class="img-card">
        <p>${member.name}</p>
        <img src="${member.imgCard}" alt="${member.name}" />
      </div>
        `;
    }
  });
  memberList.innerHTML = html.join("");
};

renderMemberCard();
