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
  console.log("tıklandı");
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSlidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});

//! home sidebar start
