// console.log("nasılsın");
//! home sidebar start

/**
    - Bu şekilde .header-mobile class'ının DOM içerisindeki html kodlarına ulaşıyoruz.
        const btnOpenSlidebar = document.querySelector(".header-mobile");
        console.log(btnOpenSlidebar);
*/

const btnOpenSlidebar = document.querySelector("#btn-menu");
const btnCloseSlidebar = document.querySelector("#btn-menu-close");
const sidebar = document.querySelector("#sidebar");
// console.log(btnOpenSlidebar);
// console.log(sidebar);
// console.log(document);

btnOpenSlidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
});

btnCloseSlidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});

// ilgili elemanın alanın dışına dokunduğumda işlem yapması
document.addEventListener("click", function (event) {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSlidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});

//! home sidebar start

//! open modal search
const btnOpenModalSearch = document.getElementById("search-button"); // AAA1
const btnCloseModalSearch = document.querySelector("#btn-modal-seach-close");

const modalSearch = document.getElementsByClassName("modal-search"); // CCC
const modalWrapper = document.querySelector("#modal-wrapper");

btnOpenModalSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "visible"; // CCC
  modalSearch[0].style.opacity = "1";
});

btnCloseModalSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "hidden"; // CCC
  modalSearch[0].style.opacity = "0";
});

document.addEventListener("click", function (event) {
  // Modalsearch dışındaki alana tıklandığında çalıştır.
  if (
    !event.composedPath().includes(btnOpenModalSearch) &&
    !event.composedPath().includes(modalWrapper)
  ) {
    modalSearch[0].style.visibility = "hidden"; // CCC
  }
});

//! Slider start

let slideIndex = 1;
showSlide(slideIndex);
// const btnSlideRight = document.querySelector("#btn-slider-rigth");
// btnSlideRight.addEventListener("click", plusSlide());

// setInterval(() => {
//   plusSlide(1);
// }, 5000);

function plusSlide(n) {
  showSlide((slideIndex += n));
}
function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(index) {
  const sliders = document.getElementsByClassName("slider-item");
  const dots = document.querySelectorAll(".slider-dot");

  Array.from(sliders).forEach((slider) => {
    slider.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.className = dot.className.replace("active", "");
  });

  if (index > sliders.length) {
    slideIndex = 1;
  }

  if (index < 1) {
    slideIndex = sliders.length;
  }

  sliders[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//! Slider end

//! Add Product to local storeage

async function getData() {
  const response = await fetch("../js/data.json");
  const products = await response.json();
  localStorage.setItem("products", JSON.stringify(products));
}

const productsFormStorage = JSON.parse(localStorage.getItem("products"));
console.log(productsFormStorage);

getData();

import ABC, { header } from "./header.js";
header();
ABC();
