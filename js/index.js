const nav = document.querySelector("#nav");
const hamburger = document.querySelector(".hamburger");

const line1 = document.querySelector(".hamburger-first");
const line2 = document.querySelector(".hamburger-second");
const line3 = document.querySelector(".hamburger-third");
const functionToggle = () => {
  nav.classList.toggle("active");
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
  hamburger.classList.toggle("active");
};
hamburger.addEventListener("click", functionToggle);
