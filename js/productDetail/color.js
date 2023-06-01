function colorFunc() {
  const colorsWrapperLabel = document.querySelectorAll(
    ".colors-wrapper .color-wrapper"
  );

  colorsWrapperLabel.forEach((color) => {
    color.addEventListener("click", function () {
      colorsWrapperLabel.forEach((item) => item.classList.remove("active"));
      color.classList.add("active");
    });
  });
}

export default colorFunc();
