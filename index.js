let brandsItems = document.querySelectorAll(".brands__items");
let btnMore = document.querySelector(".read-more--btn");
let isHidden = true;

// btn class add and change content
let btnChange = function () {
  btnMore.classList.remove("show-more");
  btnMore.classList.add("show-more--close");
  btnMore.textContent = "Скрыть";
};
let btnChangeBack = function () {
  btnMore.classList.add("show-more");
  btnMore.classList.remove("show-more--close");
  btnMore.textContent = "Показать все";
};

//btn handler
btnMore.addEventListener("click", () => {
  if (isHidden) {
    btnChange();
    isHidden = false;
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.remove("hidden");
    }
  } else {
    btnChangeBack();
    isHidden = true;

    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      for (let i = 0; i < brandsItems.length; i++) {
        if (!brandsItems[i].classList.contains("mobile")) {
          brandsItems[i].classList.add("hidden");
        }
      }
    }

    if (window.innerWidth >= 1120) {
      for (let i = 0; i < brandsItems.length; i++) {
        if (
          !brandsItems[i].classList.contains("mobile") &&
          !brandsItems[i].classList.contains("tablet")
        ) {
          brandsItems[i].classList.add("hidden");
        }
      }
    }
  }
});

// Hide function
function hideBrands() {
  if (window.innerWidth <= 320) {
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.remove("hidden");
    }
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    for (let i = 0; i < brandsItems.length; i++) {
      if (!brandsItems[i].classList.contains("mobile")) {
        brandsItems[i].classList.add("hidden");
      }
    }
  }
  if (window.innerWidth >= 1120) {
    for (let i = 0; i < brandsItems.length; i++) {
      if (brandsItems[i].classList.contains("tablet")) {
        brandsItems[i].classList.remove("hidden");
      }
      if (
        !brandsItems[i].classList.contains("mobile") &&
        !brandsItems[i].classList.contains("tablet")
      ) {
        brandsItems[i].classList.add("hidden");
      }
    }
  }
}

hideBrands();
window.addEventListener("resize", () => {
  hideBrands();
});
