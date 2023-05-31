let carts = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];

function removeCartItem() {
  const deleteButtons = document.querySelectorAll(".btn-cart-item-remove");
  const cartCount = document.querySelector(".header-cart-count");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const id = button.dataset.cartId;
      carts = carts.filter((cart) => cart.id !== Number(id));
      console.log(carts.length);
      localStorage.setItem("carts", JSON.stringify(carts));
      cartCount.innerHTML = carts.length;
      cartFunc();
    });
  });
}

function cartFunc() {
  const shopTableTBody = document.querySelector(".shop-table-tbody");
  let result = "";
  shopTableTBody.innerHTML = "";
  carts.forEach((cart) => {
    result += `
    <tr class="cart-item">
    <td></td>
    <td class="cart-image">
      <img src=${cart.img.singleImage} alt="" />
      <i class="bi bi-x btn-cart-item-remove"  data-cart-id=${cart.id}></i>
    </td>
    <td>${cart.name}</td>
    <td>$${cart.price.newPrice.toFixed(2)}</td>
    <td class="product-quantity">${cart.quantity}</td>
    <td class="product-subtotal" >$${cart.price.newPrice.toFixed(2)}</td>
  </tr>`;

    shopTableTBody.innerHTML = result;
  });
  removeCartItem();
}

cartFunc();
