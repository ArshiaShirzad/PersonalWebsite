// button and menu selector
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
// function
function MenuToggle() {
  menu.classList.toggle("hidden");
}
function decrement(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  if (value <= 1) {
  } else {
    value--;
    target.value = value;
  }
}

function increment(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  if (value >= 10) {
  } else {
    value++;
    target.value = value;
  }
}
const decrementButtons = document.querySelectorAll(
  `button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
  `button[data-action="increment"]`
);

decrementButtons.forEach((btn) => {
  btn.addEventListener("click", decrement);
});

incrementButtons.forEach((btn) => {
  btn.addEventListener("click", increment);
});
//mofid

const Mofid = document.querySelector(".mofid");
let MofidFlag = false;
var MofidBood = 56;
Mofid.innerHTML = MofidBood;
function Yes() {
  if (MofidFlag == false) {
    MofidBood++;
    MofidFlag = true;
  } else {
    MofidBood--;
    MofidFlag = false;
  }
  Mofid.innerHTML = MofidBood;
}
//mozer
const Mozer = document.querySelector(".mozer");
let MozerFlag = false;
var MozerBood = 23;
Mozer.innerHTML = MozerBood;
function No() {
  if (MozerFlag == false) {
    MozerBood++;
    MozerFlag = true;
  } else {
    MozerBood--;
    MozerFlag = false;
  }
  Mozer.innerHTML = MozerBood;
}
//اسلایدر کالای مشابه
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
  // },
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