//! Slider start

let slideIndex = 1;
showSlide(slideIndex);
const btnSlideRight = document.querySelector("#btn-slider-rigth");
// btnSlideRight.addEventListener("click", plusSlide());

setInterval(() => {
  plusSlide(1);
}, 5000);

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

// index.html içierisine script kodu ile yazdığımıznda dolayı burası kaldırılıd
// export default SliderFunc;
