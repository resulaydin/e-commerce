import headerFunc from "./header.js";
import ProductMain from "./products.js";
import Search from "./search.js";
import modalDialog from "./modalDialog.js";

//! Add Product to local storeage

const modalDialogCheckShow = localStorage.getItem("isLoaded")
  ? JSON.parse(localStorage.getItem("isLoaded"))
  : false;

(async function () {
  const responseProducts = await fetch("../js/data.json");
  const data = await responseProducts.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  ProductMain(data);
  !modalDialogCheckShow && modalDialog();
})();

(async function () {
  const responseBlogs = await fetch("../js/blog.json");
  const data = await responseBlogs.json();

  data ? localStorage.setItem("blogs", JSON.stringify(data)) : [];
})();

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts")).length
  : "0";

const currentTime = new Date().getTime();
const lastOpenTime = document.cookie.replace(
  /(?:(?:^|.*;\s*)lastOpenTime\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

if (currentTime - lastOpenTime > 30 * 60 * 1000) {
  document.cookie =
    "lastOpenTime=" + currentTime + "; max-age" + 30 * 1000 + "; path=/";
  modalDialog();
}
