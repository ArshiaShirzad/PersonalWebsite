//todo mobile menu collapsing==>
// button and menu selector
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
// function
function MenuToggle() {
  menu.classList.toggle("hidden");
}
//offer slider
const swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 8,
    },
  },
});
//todo slide show
const swiper = new Swiper(".swiper1", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//slider effective for momentom offers
const swiper3 = new Swiper(".swiper3", {
  effect: "cards",
  autoplay: {
    delay: 3000,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//digital category slider
const swiper4 = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 8,
    },
  },
});
//back to top button
const back2Top = document.querySelector("#back2Top");
back2Top.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scroll({top:0, left:0, behavior:'smooth'})
})