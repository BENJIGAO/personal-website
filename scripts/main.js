activateBtns();

function activateBtns() {
  const projectHeaders = document.querySelectorAll(".project-main");
  projectHeaders.forEach((project) => project.addEventListener("click", showContent), {capture: true})
}

function showContent(e) {
  const projectMain = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectMain.nextElementSibling.classList.toggle("visible")
  projectMain.firstElementChild.classList.toggle("rotated-dropdown")
  
}