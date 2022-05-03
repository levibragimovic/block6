let slider = document.querySelector(".brands__block");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 320 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slideClass: "brands__items",
      wrapperClass: "brands__wrapper",
      // wrapperClass: "brands__wrapper-slide",
      slidesPerView: "auto",

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    });
    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 320) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
