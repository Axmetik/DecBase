new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,

  navigation: {
    nextEl: ".testimonials-arrow-right",
    prevEl: ".testimonials-arrow-left",
  },
});

// const swiper = document.querySelector(".testimonials__swiper-wrapper");
// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   //.then((json) => console.log(json))
//   .then((json) => {
//     json.map((item) => {
//       let div = document.createElement("div");
//       div.className = "swiper-slide testimonials__slide";
//       div.innerHTML = `
//         <div class="slide-wrapper">
//           <div class="testimonials__paragraph">
//             <span class="testimonials__name">${item.name}</span>
//             <span class="testimonials__position">/${item.username}</span>
//             <p class="testimonials__text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing
//               elit.
//             </p>
//             <i class="fa-solid fa-quote-right quotes"></i>
//           </div>
//           <img
//             src='./img/main/testimonials/photo${randomInteger(1, 2)}.png'
//             alt="photo"
//           />
//         </div>`;
//       swiper.appendChild(div);
//     });
//   });
