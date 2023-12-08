 const mySwiper = new Swiper('.card03 .swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    loopAdditionalSlides: 1,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.card03 .swiper-button-next',
      prevEl: '.card03 .swiper-button-prev',
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 32,
      }
    },
  });