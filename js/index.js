// console.log("nasılsın");
//! home sidebar start

/**
    - Bu şekilde .header-mobile class'ının DOM içerisindeki html kodlarına ulaşıyoruz.
        const btnOpenSlidebar = document.querySelector(".header-mobile");
        console.log(btnOpenSlidebar);
*/

const btnOpenSlidebar = document.querySelector("#btn-menu");
console.log(btnOpenSlidebar);

btnOpenSlidebar.addEventListener("click", function () {
  console.log("tıklandı");
});

//! home sidebar start
