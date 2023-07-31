const footerCopyright = document.querySelector(".footer__copyright");
let currentDate = new Date().getFullYear();
const span = document.createElement("span");
span.innerHTML = `Copyright @ ${currentDate} Brandoxide.all right reserved.`;
footerCopyright.appendChild(span);
