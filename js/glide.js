// bu kullanım ile sadece 1 tane slide item gösterilecektir.
// new Glide(".glide").mount();

export function productGlide() {
  // Product
  const config_1 = {
    type: "carousel",
    perView: 4,
    gap: 20,
    autoplay: 2000,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  new Glide(".glide_1", config_1).mount();
}

export function newProductGlide() {
  // New Arrivals
  const config_2 = {
    type: "carousel",
    perView: 4,
    gap: 20,
    autoplay: 2000,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  new Glide(".glide_2", config_2).mount();
}
