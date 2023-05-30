import { productGlide, productArrivalGlide } from "./glide.js";

let carts = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];

function addToCart(products) {
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartItems = document.querySelector(".header-cart-count");
  buttons.forEach((button) => {
    const id = Number(button.dataset.id);
    const inCart = carts.find((item) => item.id === id);
    if (inCart) {
      button.setAttribute("disabled", "disabled");
    } else {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(id);
        const findProduct = products.find((item) => item.id === id);

        carts.push({ ...findProduct, quantity: 1 });
        localStorage.setItem("carts", JSON.stringify(carts));
        cartItems.innerHTML = carts.length;
        button.setAttribute("disabled", "disabled");
      });
    }
  });
}

function productsArrivalFunc(productArrival) {
  let result = "";
  productArrival.forEach((productItem) => {
    const productArrivalContainer = document.querySelector("#product-list-new");
    result += `             
<li class="product-item glide__slide">
    <div class="product-image">
      <a href="">
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
        <a href="product-detail.html">
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
}

function productsFunc(products) {
  let result = "";
  products.forEach((productItem) => {
    const productsContainer = document.querySelector("#product-list");
    result += `             
<li class="product-item glide__slide">
    <div class="product-image">
      <a href="">
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
        <a href="product-detail.html">
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
  productsArrivalFunc(products);
}

export default productsFunc;
