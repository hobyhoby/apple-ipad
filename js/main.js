const basketStarterEl = document.querySelector("header .basket-starter");
const basketrEl = basketStarterEl.querySelector(".basket");

basketStarterEl.addEventListener("click", (event) => {
  event.stopPropagation();

  if (basketrEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});

basketrEl.addEventListener("click", (event) => {
  event.stopPropagation();
});

window.addEventListener("click", () => {
  hideBasket();
});

function showBasket() {
  basketrEl.classList.add("show");
}

function hideBasket() {
  basketrEl.classList.remove("show");
}
