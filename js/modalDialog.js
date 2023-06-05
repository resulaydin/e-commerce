const modalDialogFunc = () => {
  const modalDialogDOM = document.querySelector(".modal-dialog");
  const modalDialogWrapperDOM = document.querySelector(".modal-dialog-wrapper");
  const modalBtnCloseDOM = document.querySelector(".modal-close");
  let isClicked = false;

  if (window.location.pathname.includes("index.html")) {
    if (!modalDialogDOM.classList.contains("show")) {
      modalDialogDOM.classList.add("show");
      localStorage.setItem("isLoaded", true);
    }
  }

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
  }, 5000);
};

export default modalDialogFunc;
