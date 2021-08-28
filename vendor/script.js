let navlogo;

function handleResize() {
  const w = window.innerWidth;
  if (w > 1200 || w < 992) {
    navlogo.classList.remove("right");
    navlogo.classList.add("center");
  } else {
    navlogo.classList.remove("center");
    navlogo.classList.add("right");
  }
}

(function () {
  navlogo = document.querySelector(".nav-wrapper > img");
  handleResize();

  window.addEventListener("resize", () => {
    handleResize();
  });

  navlogo.classList.remove("hide");
})();
