// Select elements
const mobileMenu = document.querySelector(".mobile_menu");
const sideMenu = document.querySelector(".side_menu");
const closeMenu = document.querySelector(".close_menu");
const body = document.querySelector(".main_content");

// Open menu and blur content
mobileMenu.addEventListener("click", () => {
  sideMenu.classList.add("open");
  body.classList.add("body_blur"); // Adds blur to .main_content
});

// Close menu and unblur content
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  body.classList.remove("body_blur"); // Removes blur
});
