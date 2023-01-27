// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika menu di click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
