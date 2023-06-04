import headerFunc from "./header.js";
import ProductMain from "./products.js";
import Search from "./search.js";
import modalDialog from "./modalDialog.js";

//! Add Product to local storeage

(async function () {
  const responseProducts = await fetch("../js/data.json");
  const data = await responseProducts.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  ProductMain(data);
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
