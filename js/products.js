import { productGlide, productArrivalGlide } from "./glide.js";

let carts = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];

let routeId = localStorage.getItem("routeId")
  ? JSON.parse(localStorage.getItem("routeId"))
  : 0;

let buttons = [];
function checkForCartInButtons() {
  buttons.forEach((button) => {
    if (carts.find((item) => item.id === Number(button.dataset.id))) {
      button.setAttribute("disabled", "disabled");
    }
  });
}

function addToCart(products) {
  buttons = document.querySelectorAll(".add-to-cart");
  const cartCount = document.querySelector(".header-cart-count");
  checkForCartInButtons();
  buttons.forEach((button) => {
    const id = Number(button.dataset.id);

    button.addEventListener("click", function (e) {
      e.preventDefault();
      const findProduct = products.find((item) => item.id === id);
      carts.push({ ...findProduct, quantity: 1 });
      localStorage.setItem("carts", JSON.stringify(carts));
      cartCount.innerHTML = carts.length;
      checkForCartInButtons();
    });
  });
}

function productRoute() {
  const cartsRoute = document.querySelectorAll(".route-to-cart");
  const cartsRouteImage = document.querySelectorAll(".route-to-cart-image");
  cartsRoute.forEach((route) => {
    route.addEventListener("click", (e) => {
      routeId = Number(e.target.dataset.routeId);
      localStorage.setItem("routeId", JSON.stringify(routeId));
    });
  });
  cartsRouteImage.forEach((route) => {
    route.addEventListener("click", (e) => {
      routeId = Number(route.dataset.routeImageId);
      localStorage.setItem("routeId", JSON.stringify(routeId));
    });
  });
}

function productsArrivalFunc(productArrival) {
  let result = "";
  productArrival.forEach((productItem) => {
    const productArrivalContainer = document.querySelector("#product-list-new");
    result += `             
<li class="product-item glide__slide">
    <div class="product-image">
      <a href="product-detail.html" class="route-to-cart-image" data-route-image-id="${
        productItem.id
      }">
        <img
          class="image-front"
          src=${productItem.img.singleImage}
          alt=""
        />
        <img
          class="image-back"
          src=${productItem.img.thumbs[1]}
          alt=""
        />
      </a>
    </div>
    <div class="product-info">
      <a href="#" class="product-title">${productItem.name}</a>
      <ul class="product-star">
        <li>
          <a href="#">
            <i class="bi bi-star-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-star-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-star-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-star-half"></i>
          </a>
        </li>
      </ul>
      <div class="product-price">
        <strong class="new-price">$${productItem.price.newPrice.toFixed(
          2
        )}</strong>
        <span class="old-price">$${productItem.price.oldPrice.toFixed(2)}</span>
      </div>
      <span class="product-discount">-${productItem.discount}%</span>
      <div class="product-links">
        <button class="add-to-cart" data-id=${productItem.id}>
          <i class="bi bi-basket-fill"></i>
        </button>
        <button>
          <i class="bi bi-heart-fill"></i>
        </button>
        <a href="product-detail.html" class="route-to-cart" data-route-id=${
          productItem.id
        }>
          <i class="bi bi-eye-fill"></i>
        </a>
        <a href="#">
          <i class="bi bi-share-fill"></i>
        </a>
      </div>
    </div>
  </li>
    `;
    productArrivalContainer ? (productArrivalContainer.innerHTML = result) : "";
  });
  addToCart(productArrival);
  productArrivalGlide();
  productRoute();
}

function productsFunc(products) {
  let result = "";
  products.forEach((productItem) => {
    const productsContainer = document.querySelector("#product-list");
    result += `             
<li class="product-item glide__slide">
    <div class="product-image">
    <a href="product-detail.html" class="route-to-cart-image" data-route-image-id="${
      productItem.id
    }">
        <img
          class="image-front"
          src=${productItem.img.singleImage}
          alt=""
        />
        <img
          class="image-back"
          src=${productItem.img.thumbs[1]}
          alt=""
        />
      </a>
    </div>
    <div class="product-info">
      <a href="#" class="product-title">${productItem.name}</a>
      <ul class="product-star">
        <li>
          <a href="#">
            <i class="bi bi-star-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-star-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-star-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-star-half"></i>
          </a>
        </li>
      </ul>
      <div class="product-price">
        <strong class="new-price">$${productItem.price.newPrice.toFixed(
          2
        )}</strong>
        <span class="old-price">$${productItem.price.oldPrice.toFixed(2)}</span>
      </div>
      <span class="product-discount">-${productItem.discount}%</span>
      <div class="product-links">
        <button class="add-to-cart" data-id=${productItem.id}>
          <i class="bi bi-basket-fill"></i>
        </button>
        <button>
          <i class="bi bi-heart-fill"></i>
        </button>
        <a href="product-detail.html" class="route-to-cart" data-route-id=${
          productItem.id
        }>
          <i class="bi bi-eye-fill"></i>
        </a>
        <a href="#">
          <i class="bi bi-share-fill"></i>
        </a>
      </div>
    </div>
  </li>
    `;
    productsContainer ? (productsContainer.innerHTML = result) : "";
  });

  productGlide();
  productRoute();
}

function productMain(products) {
  productsFunc(products);
  productsArrivalFunc(products);
}

export default productMain;

// export productsFunc;
