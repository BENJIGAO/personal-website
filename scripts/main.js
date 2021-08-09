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
  const projectMain = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectMain.classList.remove("project-main-hover");
  projectMain.firstElementChild.classList.remove("dropdown-hover")



}

function addHover(e) {
  const projectMain = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectMain.classList.add("project-main-hover");
  projectMain.firstElementChild.classList.add("dropdown-hover");
  projectMain.secondElementChild.classList.add("project-header-dropdown")

}

function showContent(e) {
  const projectMain = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectMain.nextElementSibling.classList.toggle("visible")
  projectMain.firstElementChild.classList.toggle("rotated-dropdown")
  
}