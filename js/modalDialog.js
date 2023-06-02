const modalDialogFunc = () => {
  const modalDialogDOM = document.querySelector(".modal-dialog");
  const modalDialogWrapperDOM = document.querySelector(".modal-dialog-wrapper");
  const modalBtnCloseDOM = document.querySelector(".modal-close");
  let isClicked = false;

  window.location.pathname.includes("index.html")
    ? !modalDialogDOM.classList.contains("show") &&
      modalDialogDOM.classList.add("show")
    : "";

  modalDialogWrapperDOM.addEventListener("click", (e) => {
    !modalDialogWrapperDOM.classList.contains(".modal-close") &&
      (isClicked = true);
  });

  modalBtnCloseDOM.addEventListener("click", function () {
    modalDialogDOM.classList.remove("show");
  });

  document.addEventListener("click", (event) => {
    if (
      !event.composedPath().includes(modalDialogWrapperDOM) &&
      !event.composedPath().includes(modalBtnCloseDOM)
    ) {
      // modalDialogDOM.style.visibility = "hidden";
      // modalDialogDOM.style.opacity = "0";
      modalDialogDOM.classList.remove("show");
    }
  });
  setTimeout(() => {
    !isClicked && modalDialogDOM.classList.remove("show");
  }, 20000);
};

export default modalDialogFunc();
