export function thumbActiveFunc() {
  const galleryThumb = document.querySelectorAll(".gallery-thumb .img-fluid");
  const singleImage = document.querySelector(".single-image-wrapper > img");

  galleryThumb.forEach((thumbItem) => {
    thumbItem.addEventListener("click", function () {
      galleryThumb.forEach((item) => item.classList.remove("active"));
      singleImage.src = thumbItem.src;
      thumbItem.classList.add("active");
    });
  });
}
