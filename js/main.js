// 장바구니
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

// 검색
const headerEl = document.querySelector("header");
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");

  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });

  searchDelayEls.forEach((el, index) => {
    el.style.transitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });

  setTimeout(() => {
    searchInputEl.focus();
  }, 600);
}

function hideSearch() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");

  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });

  searchDelayEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });

  searchDelayEls.reverse();

  searchInputEl.value = "";
}
