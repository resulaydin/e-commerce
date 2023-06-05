// bu kullanım ile sadece 1 tane slide item gösterilecektir.
// new Glide(".glide").mount();

const productList = document.getElementById("product-list");
const productArrivalList = document.getElementById("product-list-new");

export function productGlide() {
  // Product
  const config_1 = {
    type: "carousel",
    perView: 4,
    gap: 20,
    bound: true,
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

  productList && new Glide(".glide_1", config_1).mount();
}

export function productArrivalGlide() {
  // New Arrivals
  const config_2 = {
    type: "carousel",
    perView: 4,
    gap: 20,
    bound: true,
    autoplay: 2000,
    breakpoints: {
      992: { perView: 3 },
      768: { perView: 2 },
      576: { perView: 1 },
    },
  };

  productArrivalList && new Glide(".glide_2", config_2).mount();
}

export function productDetailGlide() {
  const config_3 = {
    // type: "carousel",
    perView: 5,
    // bound: true,
    // autoplay: 2000,
    breakpoints: {
      992: { perView: 3 },
    },
  };

  new Glide(".glide_3", config_3).mount();
}
