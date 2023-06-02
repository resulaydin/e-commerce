const modalDialogFunc = () => {
  const modalDialogDOM = document.querySelector(".modal-dialog");
  const modalDialogWrapperDOM = document.querySelector(".modal-dialog-wrapper");
  const modalBtnCloseDOM = document.querySelector(".modal-close");

  modalBtnCloseDOM.addEventListener("click", function () {
    modalDialogDOM.style.visibility = "hidden";
    modalDialogDOM.style.opacity = "0";
  });

  document.addEventListener("click", (event) => {
    if (
      !event.composedPath().includes(modalDialogWrapperDOM) &&
      !event.composedPath().includes(modalBtnCloseDOM)
    ) {
      modalDialogDOM.style.visibility = "hidden";
      modalDialogDOM.style.opacity = "0";
    }
  });
};

export default modalDialogFunc();
