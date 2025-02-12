const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".main-layout .screen-overlay");
const themeButton = document.querySelector(".navbar .theme-button i");
const searchButton = document.querySelector("#search-button");
const searchBackButton = document.querySelector("#search-back-button");
// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});
// sidebar visibility 
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});
// dark mode based 
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}
// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});
// Show sidebar on large screens 
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}
// Toggle search bar on click on mobile
const toggleSearchBar = () => {
  document.body.classList.toggle("show-mobile-search");
};
searchButton.addEventListener("click", toggleSearchBar);
searchBackButton.addEventListener("click", () => searchButton.click());