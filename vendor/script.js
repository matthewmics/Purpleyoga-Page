let navlogo;
let container;

function handleResize() {
  const w = window.innerWidth;
  if (window.scrollY > 200) {    
    navlogo.classList.remove("logo-tablet", "logo-desktop");
    navlogo.classList.add("logo-nav");
    container.style.paddingTop = "0px";
  } else if (w > 1200) {
    navlogo.classList.remove("logo-nav", "logo-tablet");
    navlogo.classList.add("logo-desktop");
    container.style.paddingTop = "0px";
  } else {
    navlogo.classList.remove("logo-nav", "logo-desktop");
    navlogo.classList.add("logo-tablet");
    container.style.paddingTop = "25px";
  }
}

(function () {
  navlogo = document.getElementById("logo");
  container = document.querySelector("main > *:first-child");
  handleResize();

  window.addEventListener("scroll", () => {
    handleResize();
  });
  window.addEventListener("resize", () => {
    handleResize();
  });

  navlogo.classList.remove("hide");
})();
