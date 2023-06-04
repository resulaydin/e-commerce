import { productDetailGlide } from "./glide.js";
import { thumbActiveFunc } from "./productDetail/thumbActive.js";
import { tabPanelFunc } from "./productDetail/tab.js";
import zoomFunc from "./productDetail/zoom.js";
import colorFunc from "./productDetail/color.js";
import valueFunc from "./productDetail/value.js";
import commentFunc from "./productDetail/comment.js";

let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

let carts = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];

/* single product */
const productId = JSON.parse(localStorage.getItem("routeId"));
const singleProduct = products.find((item) => item.id === productId);
console.log("singel:");
console.log(singleProduct);

/* product title */
const productTitle = document.querySelector(".details-content .product-title");
productTitle.innerHTML = singleProduct.name;

/* product price */
const productOldPrice = document.querySelector(".product-info .old-price");
const productNewPrice = document.querySelector(".product-info .new-price");

productOldPrice.innerHTML = `$${singleProduct.price.oldPrice.toFixed(2)}`;
productNewPrice.innerHTML = "$" + singleProduct.price.newPrice.toFixed(2);

/* product gallery */
const productSingleImage = document.querySelector(
  ".single-image-wrapper > img"
);
productSingleImage.src = singleProduct.img.singleImage;

const galleryThumb = document.querySelector(".gallery-thumb");
let result = "";
singleProduct.img.thumbs.forEach((thumbItem) => {
  result += `
    <li class="glide__slide">
        <img
        src="${thumbItem}"
        alt=""
        class="img-fluid ${!result && "active"}"
        />
    </li>
    `;
});
galleryThumb.innerHTML = result;
productDetailGlide();
thumbActiveFunc();
tabPanelFunc();

/* add to cart */
const btnAddToCart = document.getElementById("btn-add-to-cart");
const cartCount = document.getElementById("header-cart-count");
const productCount = document.getElementById("product-count");

const findCart = carts.find((cart) => cart.id === singleProduct.id);
findCart
  ? btnAddToCart.setAttribute("disabled", "disabled")
  : (btnAddToCart.disabled = false);

btnAddToCart.addEventListener("click", function (e) {
  // e.preventDefault();
  const cartChangedCount = Number(productCount.value);
  carts.push({ ...singleProduct, quantity: cartChangedCount });
  localStorage.setItem("carts", JSON.stringify(carts));
  !findCart && (cartCount.innerHTML = carts.length);
  btnAddToCart.setAttribute("disabled", "disabled");
});
