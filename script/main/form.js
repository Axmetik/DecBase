const form = document.querySelector(".dont-forget__form");
const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector(".submitButton");
const sigmaBlock = document.querySelector(".sigma-discount");
const page = document.querySelector("body");
const validSymbols = "abcdefghijklmnopqrstuvwxyz";
//console.log(inputs);

function validation(form) {
  let nameValidation = validationText(form[0]);
  let surnameValidation = validationText(form[1]);

  return nameValidation && surnameValidation;
}

function validationText(input) {
  let flag = true;

  for (let word of input.value) {
    if (!validSymbols.includes(word.toLowerCase())) {
      alert(
        `[${input.name}] Should contain only Latin letters. Field shouldn't includes ! @ # $ : ; or empty symbol!`
      );
      input.classList.add("error");
      return !flag;
    } else {
      input.classList.remove("error");
    }
    if (input.value.indexOf(word) === 0) {
      if (!validSymbols.toUpperCase().includes(word)) {
        alert(`The first word in [${input.name}] should be uppercase!`);
        input.classList.add("error");
        return !flag;
      } else {
        input.classList.remove("error");
      }
    } else {
      input.classList.remove("error");
    }
  }

  return flag;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validation(form) === true) {
    alert("Validation completed successfuly!");

    const data = {
      name: inputs[0].value,
      surname: inputs[1].value,
      email: inputs[2].value,
    };
    localStorage.setItem("data", JSON.stringify(data));

    //console.log(data.name);
    if (data.name === "Sigma") {
      const currentDate = new Date();
      const dayOfWeek = currentDate.toLocaleString("en", { weekday: "long" });
      const dayOfMonth = currentDate.getDate();
      const month = currentDate.toLocaleString("en", { month: "2-digit" });
      const year = currentDate.getFullYear();

      const formattedDate = `${dayOfWeek} ${dayOfMonth}.${month}.${year}`;

      sigmaBlock.classList.add("show");
      sigmaBlock.children[0].innerHTML = `Congratulations, you got a 120% discount today (${formattedDate})`;
      page.style.overflow = "hidden";
    }

    inputs[0].classList.remove("error");
    inputs[1].classList.remove("error");
    inputs[2].classList.remove("error");
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";

    const storedData = localStorage.getItem("data");
    const parsedData = JSON.parse(storedData);
    console.log(parsedData);
  }
});

sigmaBlock.children[1].addEventListener("click", () => {
  sigmaBlock.classList.remove("show");
  page.style.overflow = "auto";
});
