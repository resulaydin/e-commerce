let carts = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];

function cartFunc() {
  const shopTableTBody = document.querySelector(".shop-table-tbody");
  let result = "";
  let subTotal = 0;
  shopTableTBody.innerHTML = "";
  carts.forEach((cart) => {
    subTotal = cart.quantity * cart.price.newPrice;
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
    <td class="product-subtotal" >$${subTotal.toFixed(2)}</td>
  </tr>`;

    shopTableTBody.innerHTML = result;
  });

  removeCartItem();
}

cartFunc();

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
      cartPriceTotal();
    });
  });
}

function cartPriceTotal() {
  // carts-total-price,fast-cargo-price,total
  const cartsTotalPrice = document.querySelector(".carts-total-price");
  const fastCargoCheck = document.querySelector(".fast-cargo-check");
  const totalPrice = document.querySelector(".total-price");
  const fastCargoPrice = 15;
  let itemsTotal = 0;

  carts.length > 0 &&
    carts.map(
      (cartItem) => (itemsTotal += cartItem.quantity * cartItem.price.newPrice)
    );

  cartsTotalPrice.innerHTML = "$" + itemsTotal.toFixed(2);
  totalPrice.innerHTML = `$${itemsTotal.toFixed(2)}`; //  2. Yöntem.
  // totalPrice.innerHTML = "$" + itemsTotal.toFixed(2);
  fastCargoCheck.checked &&
    cartsTotalPrice.innerHTML === totalPrice.innerHTML &&
    carts.length > 0 &&
    (totalPrice.innerHTML = "$" + (itemsTotal + fastCargoPrice).toFixed(2));

  carts.length === 0 && (fastCargoCheck.checked = false);
  fastCargoCheck.addEventListener("change", function () {
    if (fastCargoCheck.checked) {
      totalPrice.innerHTML = "$" + (itemsTotal + fastCargoPrice).toFixed(2);
    } else {
      totalPrice.innerHTML = "$" + itemsTotal.toFixed(2);
    }
  });
}

cartPriceTotal();
