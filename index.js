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
