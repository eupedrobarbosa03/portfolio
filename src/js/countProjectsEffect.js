import { projects } from "./projects.js";

const countQuantity = document.querySelector("[data-quantity_projects]");
const containerBoxCount = document.querySelector(".container_box_count")

const projectsQuantity = projects.length;

function createBoxCount() {
    for (let i = 0; i < projectsQuantity; i++) {
        const div = document.createElement("div");
        div.classList.add("box_count");
        containerBoxCount.appendChild(div);
    }
};

createBoxCount();

const boxCount = document.querySelectorAll(".box_count");

function countQuantityEffect(time) {
    for (let i = 0; i < projectsQuantity; i++) {
        setTimeout(() => {
            countQuantity.classList.toggle("effect")
            boxCount[i].classList.toggle("effect");
            countQuantity.textContent = Number(countQuantity.textContent) + 1;
        }, i * time)
    }

    setTimeout(() => {
        countQuantity.textContent = 0;
        boxCount.forEach((box) => box.classList.remove("effect"));
        countQuantity.classList.remove("effect");
        countQuantityEffect(time)
    }, (projectsQuantity * time) + 1000);
};

countQuantityEffect(750)