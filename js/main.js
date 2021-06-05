import preloader from "./preloader.js";
import companiesCarousel from "./companiesCarousel.js";

const init = () => {
  preloader();
  companiesCarousel();
};

window.addEventListener("DOMContentLoaded", init);
