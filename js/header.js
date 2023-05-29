function sidebarFunc() {
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
}

function searchModalFunc() {
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
}

// 1. Yöntem
// export default function () {
//   sidebarFunc();
//   searchModalFunc();
// }

// 2. Yöntem
function HeaderFunc() {
  sidebarFunc();
  searchModalFunc();
}

// Bu şekilde yazıldığında çağrıldığı yerde sadece import edilmesi yeterlidir.
export default HeaderFunc();
