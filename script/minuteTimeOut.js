function closePageIfNoResponse() {
  const response = confirm("Are You here?");
  if (!response) {
    window.close();
  } else {
    timeout = setTimeout(closePageIfNoResponse, 60000);
  }
}

let timeout = setTimeout(closePageIfNoResponse, 60000);

function resetTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(closePageIfNoResponse, 60000); //
}

window.addEventListener("mousemove", resetTimeout);
window.addEventListener("keydown", resetTimeout);
window.addEventListener("click", resetTimeout);
