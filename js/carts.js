// function cartFunc() {
const carts = JSON.parse(localStorage.getItem("carts"));
const shopTableTBody = document.querySelector(".shop-table-tbody");

carts.forEach((cart) => {
  const result = `
    <tr class="cart-item">
    <td></td>
    <td class="cart-image">
      <img src=${cart.img.singleImage} alt="" />
      <i class="bi bi-x"></i>
    </td>
    <td>${cart.name}</td>
    <td>$${cart.price.newPrice.toFixed(2)}</td>
    <td class="product-quantity">1</td>
    <td class="product-subtotal" >$${cart.price.newPrice.toFixed(2)}</td>
  </tr>`;

  shopTableTBody.innerHTML += result;
});
// }
