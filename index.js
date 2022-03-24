console.log("connected");

let button = document.querySelector(".mobile-btn");
let header = document.querySelector(".header");

const toggleNavbar = () => {
  header.classList.toggle("active");
};

button.addEventListener("click", () => toggleNavbar());
