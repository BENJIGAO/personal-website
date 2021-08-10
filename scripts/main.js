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
  const projectDropdown = projectMain.nextElementSibling
  projectDropdown.classList.toggle("visible")
  projectMain.firstElementChild.classList.toggle("rotated-dropdown")
  projectDropdown.classList[0] == "visible" || projectDropdown.classList[1] == "visible" ? staticAddHover(e, projectMain) : dynamicRemoveHover(e, projectMain);
}

function staticAddHover(e, ele) {
  console.log("test")
  ele.removeEventListener("mouseleave", removeHover);
  addHover(e);
}

function dynamicRemoveHover(e, ele) {
  ele.addEventListener("mouseleave", removeHover);
  removeHover(e);
}