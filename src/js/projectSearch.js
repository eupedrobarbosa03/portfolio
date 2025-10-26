const projects = document.querySelectorAll("[data-project]");
const searchValue = document.querySelector("[data-search_value]");
const buttonSearch = document.querySelector("[data-button_search]");
const searchFailed = document.querySelector(".search_failed")

function search() {
    const search = String(searchValue.value).toLowerCase();
    let found = false;
    if (search.trim() === "") return;

    projects.forEach((project) => project.classList.add("hide"))
    searchFailed.classList.remove("show")
    
    projects.forEach((project) => {
        const index = project.getAttribute("id").toLowerCase().replaceAll("_", " ");
        if (index.includes(search)) {
            project.classList.remove("hide")
            found = true
            return;
        }
    })

    if (!found) searchFailed.classList.add("show");
}

buttonSearch.addEventListener("click", () => search());

window.addEventListener("input", () => {
    if (buttonSearch.value === '') 
        projects.forEach((project) => project.classList.remove("hide"));
        searchFailed.classList.remove("show")
})

window.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") 
        projects.forEach((project) => project.classList.remove("hide"));
        searchFailed.classList.remove("show")
})