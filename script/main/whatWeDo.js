fetch("https://jsonplaceholder.typicode.com/posts") //fetching data
  .then((response) => response.json())
  .then((json) => localStorage.setItem("data", JSON.stringify(json)));

const storedData = localStorage.getItem("data"); // save data to work with
let parsedData = JSON.parse(storedData).filter((obj) => obj.id <= 15);
//console.log(parsedData);

const designList = parsedData.filter((elem) => elem.id <= 5); // filtrating data for sections
const architectureList = parsedData.filter(
  (elem) => elem.id > 5 && elem.id <= 10
);
const planningList = parsedData.filter((elem) => elem.id > 10 && elem.id <= 15);

designList.map((item) => (item.title = "Interior Design")); // identifier for every item
architectureList.map((item) => (item.title = "Architecture"));
planningList.map((item) => (item.title = "Planning"));
//console.log(designList, architectureList, planningList);

const data = {
  // creating object for comfortable getting data of separate section
  all: [designList[0], architectureList[0], planningList[0]],
  design: designList,
  architecture: architectureList,
  planning: planningList,
};
//console.log(data["all"]);

const whatWeDoButtons = document.querySelector(".what-we-do__buttons"); // getting block with content that will change
const whatWeDoItems = document.querySelector(".what-we-do__items");
//console.log(whatWeDoButtons.children);

showContent("all"); // rendering initial content

whatWeDoButtons.addEventListener("click", toggleActive); // listener for choosing an button
function toggleActive(event) {
  if (event.target.classList.contains("what-button")) {
    whatWeDoItems.innerHTML = null;
    //console.log(event.target.name);

    if (event.target.name === "all") {
      whatWeDoButtons.children[0].classList.add("active");
      for (let i = 1; i < whatWeDoButtons.children.length; i++) {
        whatWeDoButtons.children[i].classList.remove("active");
      }
      showContent(event.target.name);
    } else {
      if (!event.target.classList.contains("active")) {
        event.target.classList.add("active");
        for (let item of whatWeDoButtons.children) {
          if (item !== event.target) {
            item.classList.remove("active");
          }
        }
        showContent(event.target.name);
      } else {
        event.target.classList.remove("active");
        whatWeDoButtons.children[0].classList.add("active");
        //console.log("go");
        showContent("all");
      }
    }

    //console.log(event.target.name);
  }
}

function showContent(name) {
  // function for rendering desired content
  showData = data[name];
  //console.log(showData);
  let counter = 1;

  showData.map((item) => {
    let string = "";
    let data = item.body.split(" ");
    data = data.filter((word) => data.indexOf(word) < 10);
    string = data.join(" ");
    let clas = "clas";
    let photo = item.title.split(" ").reverse()[0].toLowerCase();
    //console.log(photo);

    if (item.title.toLowerCase() === "architecture") {
      clas = "architecture";
    }

    let content = document.createElement("div");
    content.classList.add("what-we-do__item", clas);
    content.innerHTML = `<div class="what-we-do__content">
    <div class="what-we-do__item-title">${item.title} ${counter}</div>
    <p class="what-we-do__item-text">
      ${string}...
    </p>
    <img src="./img/main/what-do/${photo}.svg" alt="img" />
  </div>`;
    whatWeDoItems.appendChild(content);
    if (name !== "all") {
      counter++;
    }
    //console.log(content);
  });
}
