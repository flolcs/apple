// NAV
const toggleMenu = document.querySelector(".ri-menu-line");
const toggleCloseMenu = document.querySelector(".ri-close-line");
const sousMenu = document.querySelector(".sous_menu");
const nav = document.querySelector("nav");

toggleMenu.addEventListener("click", () => {
  sousMenu.style.display = "flex";
  toggleMenu.style.display = "none";
  toggleCloseMenu.style.display = "block";
  nav.style.transition = "0.5s";
  nav.style.backgroundColor = "#000000";
});

toggleCloseMenu.addEventListener("click", () => {
  sousMenu.style.display = "none";
  toggleMenu.style.display = "block";
  toggleCloseMenu.style.display = "none";
  nav.style.backgroundColor = "#333333";
});
