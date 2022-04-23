// NAV
const toggleMenu = document.querySelector(".ri-menu-line");
const toggleCloseMenu = document.querySelector(".ri-close-line");
const sousMenu = document.querySelector(".sous_menu");

toggleMenu.addEventListener("click", () => {
  sousMenu.style.display = "flex";
  toggleMenu.style.display = "none";
  toggleCloseMenu.style.display = "block";
});

toggleCloseMenu.addEventListener("click", () => {
  sousMenu.style.display = "none";
  toggleMenu.style.display = "block";
  toggleCloseMenu.style.display = "none";
});
