const menu = document.querySelector(".menu_navbar");
const navbar = document.querySelector(".navbar_container");
const buttonReturnTop = document.querySelector(".button_return_top");

menu.addEventListener("click", () => navbar.classList.toggle("active"))
window.addEventListener("keyup", (e) => 
    e.key === "Escape" ? navbar.classList.remove("active") : null)
