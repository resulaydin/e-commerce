const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

const searchFunc = () => {
  searchProductsShowFunc(products);
  const searchInputDOM = document.querySelector("#search-input");
  searchInputDOM.addEventListener("input", (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    const filteredProducts = products.filter((item) =>
      item.name.trim().toLowerCase().includes(inputValue)
    );
    searchProductsShowFunc(filteredProducts);
  });
  searchRoute();
};

const searchProductsShowFunc = (productList) => {
  const searchProductsDOM = document.querySelector(".results");
  let result = "";

  {
    productList.length > 0
      ? productList.length < 2
        ? (searchProductsDOM.style.gridTemplateColumns = "1fr")
        : (searchProductsDOM.style.gridTemplateColumns = "1fr 1fr")
      : (result = `
        <a href="#" class="result-item" style="justify-content: center">
        😔Aradığınız Ürün Bulunamadı😔
        </a>
        `);
    productList.length < 1 &&
      (searchProductsDOM.style.gridTemplateColumns = "1fr");
  }

  productList.forEach((item) => {
    result += `
        <a href="#" class="result-item" data-id ="${item.id}">
                <img src="${item.img.singleImage}" class="search-thumb" alt="">
                <div class="search-info">
                  <h4>${item.name}</h4>
                  <span class="search-sku">SKU: PD0016</span>
                  <span class="search-price">$${item.price.newPrice.toFixed(
                    2
                  )}</span>
                </div>
        </a>
      `;
  });
  searchProductsDOM.innerHTML = result;
};

const searchRoute = function () {
  const searchResultItemsDOM = document.querySelectorAll(".result-item");
  searchResultItemsDOM.forEach((item) => {
    item.addEventListener("click", (e) => {
      const productId = parseInt(item.dataset.id);
      localStorage.setItem("routeId", JSON.stringify(productId));
      window.location.href = "product-detail.html";
    });
  });
};
export default searchFunc;
