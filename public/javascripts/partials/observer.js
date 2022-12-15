function transitionSequence() {
  const caption = document.querySelectorAll(".caption");
  const division = document.querySelectorAll(".division");
  const notaItem = document.querySelectorAll('.blog-grid-item');
  
  function visualize(entry, observer) {
    entry.forEach((element) => {
      if (element.isIntersecting) {
        element.target.classList.add("visible");
      }
    });
  }
  const observer = new IntersectionObserver(visualize, {
    root: null,
    rootMargin: "0px 0px -30% 0px", // (top, right, bottom, left)
    threshold: 1.0,
  });

  caption.forEach((element) => {
    observer.observe(element);
  });

  division.forEach((element) => {
    observer.observe(element);
  });

  notaItem.forEach((element) => {
    observer.observe(element)
  })


}

function menuFixer() {
  const header = document.getElementById("header");
  const canvasIndex = document.getElementById("canvasIndex");

  function visualize(entry, observer) {
    if (entry[0].isIntersecting) {
      header.classList.remove("fixed");
    } else {
      header.classList.add("fixed");
    }
  }
  const observer = new IntersectionObserver(visualize, {
    root: null,
    rootMargin: "100% 0px 0px 0px", // (top, right, bottom, left)
    threshold: 1.0,
  });

  observer.observe(canvasIndex);
}

export { transitionSequence, menuFixer };
