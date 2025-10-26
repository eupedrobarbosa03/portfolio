import { projects } from "./projects.js";

const buttonDetails = document.querySelectorAll("[data-button_details_project]");
const sectionDetails = document.querySelector(".section_container_details_project")
const contentDetails = document.querySelector(".container_content");
const buttonExit = document.querySelector(".button_exit")

buttonDetails.forEach((button) => {
    button.addEventListener("click", (e) => {
    if (e.target.classList.contains("button_details_project")) {
        sectionDetails.classList.add("show_section_details")
        const indexProject = e.target.closest(".card_project");
        const project = projects.find((proje) => indexProject.id === proje.name);
        if (project) contentDetails.innerHTML = project.html;
    }
})
})

buttonExit.addEventListener("click", () => {
    sectionDetails.classList.remove("show_section_details")
})

window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") sectionDetails.classList.remove("show_section_details")
})