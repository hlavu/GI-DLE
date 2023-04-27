const header = document.querySelector("#header");
const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");

const toggleResponsiveMenu = (hide) => {
  if (hide) {
    header.classList.toggle("show-m-menu", true);
  }
  header.classList.toggle("show-m-menu");
};

menuBtn.addEventListener("click", () => toggleResponsiveMenu(false));
navBar.addEventListener("click", () => toggleResponsiveMenu(true));
