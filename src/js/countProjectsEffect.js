const boxCount = document.querySelectorAll(".box_count");
const countQuantity = document.querySelector("[data-quantity_projects]");

const projectsQuantity = 12;

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