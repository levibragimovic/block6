let btnMore = document.querySelector(".read-more--btn");
let brandsContainer = document.querySelector(".brands__block");
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
  } else {
    btnChangeBack();
    isHidden = true;
  }
  brandsContainer.classList.toggle("show");
});
