console.log("connected");

let button = document.querySelector(".mobile-btn");
let header = document.querySelector(".header");

const toggleNavbar = () => {
  header.classList.toggle("active");
};

button.addEventListener("click", () => toggleNavbar());

let p_btns = document.querySelector(".p-btns");
let p_btn = document.querySelectorAll(".p-btn");
let img_overlay = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  let clicked_Btn = e.target;
  console.log(clicked_Btn);

  p_btn.forEach((curElem) => {
    curElem.classList.remove("p-btn-active");
  });
  clicked_Btn.classList.add("p-btn-active");

  let btn_num = clicked_Btn.dataset.btnNum;
  console.log(btn_num);

  let active_img = document.querySelectorAll(`.p-btn--${btn_num}`);

  img_overlay.forEach((curElem) => {
    curElem.classList.add("p-img-not-active");
  });

  active_img.forEach((curElem) => {
    curElem.classList.remove("p-img-not-active");
  });
});

// Swiper JS code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  autoplay: {
    Delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll to TOP Button
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-up"></ion-icon>`;

footerElem.after(scrollElement);

const sectionBio = document.querySelector(".section-bioData");

const ScrollToTop = () => {
  sectionBio.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", ScrollToTop);
