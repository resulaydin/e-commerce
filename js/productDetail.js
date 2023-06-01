import { productDetailGlide } from "./glide.js";
import { thumbActiveFunc } from "./productDetail/thumbActive.js";
import { tabPanelFunc } from "./productDetail/tab.js";
import zoomFunc from "./productDetail/zoom.js";
import colorFunc from "./productDetail/color.js";

let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

/* single product */
const productId = JSON.parse(localStorage.getItem("routeId"));
const singleProduct = products.find((item) => item.id === productId);

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
        class="img-fluid"
        />
    </li>
    `;
});
galleryThumb.innerHTML = result;
productDetailGlide();
thumbActiveFunc();
tabPanelFunc();
