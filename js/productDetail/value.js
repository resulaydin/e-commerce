function valueFunc() {
  const valueList = document.querySelectorAll(".value-list .size-value");

  valueList.forEach((valueItem) => {
    valueItem.addEventListener("click", function () {
      valueList.forEach((item) => item.classList.remove("active"));
      valueItem.classList.add("active");
    });
  });
}

export default valueFunc();
