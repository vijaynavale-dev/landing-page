const menuBar = document.getElementById("menuBar");
const navFlex = document.getElementById("navFlex");

menuBar.addEventListener("click", () => {
  navFlex.classList.toggle("active");
});
navFlex.addEventListener("click", (e) => {
  if (
    e.target.tagName.toLowerCase() == "a" ||
    e.target.tagName.toLowerCase() == "li"
  ) {
    navFlex.classList.remove("active");
  }
});
AOS.init({});
const bannerSwiperContainer = new Swiper(".banner_swiper_container", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  pagination: {
    el: ".homesec1 .swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
});
