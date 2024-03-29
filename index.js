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
  console.log(`clicked ${clicked_Btn}`);

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

const Header = document.querySelector(".header");

const ScrollToTop = () => {
  header.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", ScrollToTop);

// SMooth Scrolling

const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
  e.preventDefault();
  portfolio.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".contact-link").addEventListener("click", (e) => {
  e.preventDefault();
  contact.scrollIntoView({ behavior: "smooth" });
});


const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
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
  } else {
    new Swiper(".mySwiper", {
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
  }
};


const widthSize = window.matchMedia("(max-width:750px)");
// at run time
myJsmedia(widthSize);

widthSize.addEventListener("change", myJsmedia);
