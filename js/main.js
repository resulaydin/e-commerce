import HeaderFunc from "./header.js";
import ProductFunc from "./products.js";
//! Add Product to local storeage

async function getData() {
  const response = await fetch("../js/data.json");
  const products = await response.json();
  localStorage.setItem("products", JSON.stringify(products));
}

const productsFormStorage = JSON.parse(localStorage.getItem("products"));
// console.log(productsFormStorage);

getData();
