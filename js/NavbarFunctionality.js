window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".nav-link .nav-link-content");

  function goToTarget(target) {
    if (window.innerWidth <= 992) {
      document.querySelector(".navbar-toggler").click();
    }

    let targetElement = document.querySelector(target);

    if (targetElement) {
      window.scroll({
        top:
          targetElement.offsetTop -
          document.querySelector("#carouselExample").offsetTop,
        behavior: "smooth",
      });

      targetElement.classList.add("bg-info-subtle");
    }
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((item) => {
        let target = document.querySelector(item.dataset.bsTarget);

        if (target.classList.contains("bg-info-subtle")) {
          target.classList.remove("bg-info-subtle");
        }
      });

      goToTarget(item.dataset.bsTarget);
    });
  });
});
