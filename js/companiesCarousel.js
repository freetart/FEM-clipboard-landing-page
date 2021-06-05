const companiesCarousel = () => {
  const companiesCarouselConfig = {
    type: "carousel",
    autoplay: 2000,
    perView: 4,
    breakpoints: {
      980: {
        perView: 3,
      },
      400: {
        perView: 2,
      },
    },
  };
  new Glide(".glide", companiesCarouselConfig).mount();
};

export default companiesCarousel;
