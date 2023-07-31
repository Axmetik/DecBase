const mask = document.querySelector(".mask");
const body = document.querySelector("body");

function hideLoader() {
  body.style.overflow = "auto";
  mask.classList.add("hide");
  setTimeout(() => {
    mask.remove();
  }, 5000);
}

window.addEventListener("load", setTimeout(hideLoader, 5000));
