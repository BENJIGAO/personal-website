activateBtns();

function activateBtns() {
  const projectHeaders = document.querySelectorAll(".project-main");
  projectHeaders.forEach((project) => {
    project.addEventListener("click", showContent)
    project.addEventListener("mouseenter", addHover)
    project.addEventListener("mouseleave", removeHover)
  })
}

function removeHover(e) {
  // finds relevant "project-main" div
  // done b/c event target is sometimes nested element
  const projectMain = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectMain.classList.remove("project-main-hover");
  projectMain.firstElementChild.classList.remove("dropdown-hover")
  projectMain.firstElementChild.nextElementSibling.classList.remove("project-header-hover")
  projectMain.firstElementChild.nextElementSibling.nextElementSibling.classList.remove("project-description-hover")
}

function addHover(e) {
  const projectMain = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectMain.classList.add("project-main-hover");
  projectMain.firstElementChild.classList.add("dropdown-hover");
  projectMain.firstElementChild.nextElementSibling.classList.add("project-header-hover")
  projectMain.firstElementChild.nextElementSibling.nextElementSibling.classList.add("project-description-hover")

}

function showContent(e) {
  const projectMain = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectMain.nextElementSibling.classList.toggle("visible")
  projectMain.firstElementChild.classList.toggle("rotated-dropdown")
  projectMain.nextElementSibling.classList
  
}