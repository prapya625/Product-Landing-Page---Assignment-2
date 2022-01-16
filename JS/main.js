const btn = document.querySelector("#res-nav-btn");
const menu = document.querySelector(".nav-menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
});
