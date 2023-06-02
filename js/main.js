import HeaderFunc from "./header.js";
import ProductMain from "./products.js";
import SearchFunc from "./search.js";
// import Carts from "./carts.js";
//! Add Product to local storeage

(async function () {
  const responseAll = await fetch("../js/data.json");

  const data = await responseAll.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  ProductMain(data);
})();

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts")).length
  : "0";
