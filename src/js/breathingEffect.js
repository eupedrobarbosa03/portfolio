const titleDevFrontEnd = document.querySelector(".title_dev_front_end");
const titleSectionProjects = document.querySelector(".title_section_projects");

const titles = [titleDevFrontEnd, titleSectionProjects]

function titleEffect(time) {

    for (let i = 0; i < titles.length; i++) {
        setTimeout(() => {
            titles[i].classList.toggle("show")
        }, i * time);
    }

    setTimeout(() => {
        titleEffect(time)
    }, (titles.length * time) + 500)

};

titleEffect(1500)