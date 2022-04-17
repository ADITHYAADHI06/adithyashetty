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

const workSectioon_data = document.querySelector(".section-work-data");

const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    if (entry.isIntersecting == false) return;

    // =========================================
    //  animation Number
    // ========================================

    let countNum = document.querySelectorAll(".counter-numbers");
    let speed = 100;

    countNum.forEach((curElem) => {
      const incrementNumfunc = () => {
        let maxNum = parseInt(curElem.dataset.number);
        let minNum = parseInt(curElem.innerText);
        // console.log(minNum);

        let unicNumspeed = Math.trunc(maxNum / speed);
        // console.log(unixNum);

        if (minNum < maxNum) {
          setTimeout(() => {
            incrementNumfunc();
            curElem.innerText = `${minNum + unicNumspeed}+`;
          }, 10);
        }
      };

      incrementNumfunc();
    });
    observer.unobserve(workSectioon_data);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSectioon_data);

//====================== LAZY Loading IMage replacement

const lazy_img = document.querySelector("img[data-src]");

// console.log(lazy_img);

const lazyFunc = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting == false) return;
  entry.target.src = lazy_img.dataset.src;
};

const lazy_observer = new IntersectionObserver(lazyFunc, {
  root: null,
  threshold: 0,
});

lazy_observer.observe(lazy_img);
