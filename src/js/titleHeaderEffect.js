const titleHeader = document.querySelector(".title_header");
const titleHeaderSpan = document.querySelector(".title_header span");

setInterval(() => {
    titleHeader.classList.toggle("effect");
    titleHeaderSpan.classList.toggle("effect")
}, 3000)