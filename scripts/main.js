activateBtns();

function activateBtns() {
  const projectHeaders = document.querySelectorAll(".project-main");
  projectHeaders.forEach((project) => project.addEventListener("click", showContent), {capture: true})
}

function showContent(e) {
  const projectHeader = e.path[0].classList[0] == "project-main" ? e.path[0] : e.path[1];
  projectHeader.nextElementSibling.classList.toggle("visible")
}