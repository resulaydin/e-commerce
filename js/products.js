import { productGlide, newProductGlide } from "./glide.js";

let products = [];

function productsFunc() {
  const products = JSON.parse(localStorage.getItem("products"));
  //   console.log(products);

  products.forEach((product) => {
    const productList = document.getElementById("product-list");
    const newProductList = document.getElementById("product-list-new");
    // console.log(product);
    let result = `             
<li class="product-item glide__slide">
    <div class="product-image">
      <a href="">
        <img
          class="image-front"
          src=${product.img.singleImage}
          alt=""
        />
        <img
          class="image-back"
          src=${product.img.thumbs[1]}
          alt=""
        />
      </a>
    </div>
    <div class="product-info">
      <a href="#" class="product-title">${product.name}</a>
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
        <strong class="new-price">$${product.price.newPrice.toFixed(2)}</strong>
        <span class="old-price">$${product.price.oldPrice.toFixed(2)}</span>
      </div>
      <span class="product-discount">-${product.discount}%</span>
      <div class="product-links">
        <button>
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

    productList.innerHTML += result;
    newProductList.innerHTML += result;
  });
  productGlide();
  newProductGlide();
}

export default productsFunc();
