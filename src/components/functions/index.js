let basket = JSON.parse(localStorage.getItem("data")) || [];
function decrement(id) {
  let search = basket.find((x) => x.id === id);
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
}

function increment(id) {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
}
function update(id) {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
}
function calculation() {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}
export { increment, decrement, calculation, update, basket };
