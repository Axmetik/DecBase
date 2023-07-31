function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("show");
    } else {
      change.target.classList.remove("show");
    }
  });
}

let options = {
  threshold: [0.5],
};

let observer = new IntersectionObserver(onEntry, options);
let element = document.querySelector(".from-our-blog__content");

observer.observe(element);
