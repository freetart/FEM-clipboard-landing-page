import preloader from "./preloader.js";
import companiesCarousel from "./companiesCarousel.js";
import mobileMenu from "./mobileMenu.js";

const init = () => {
  preloader();
  mobileMenu();
  companiesCarousel();
};

window.addEventListener("DOMContentLoaded", init);
