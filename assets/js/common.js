var swiper = new Swiper(".exSwiper", {
    slidesPerView: "auto",
    spaceBetween: 100,
    // freeMode: true,
    navigation: {
        nextEl: ".sc-experience .swiper-button-next",
        prevEl: ".sc-experience .swiper-button-prev",
    },

    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 50,
        },

        768: {
            spaceBetween: 20,
        },
        320: { spaceBetween: 10 },
    },
});

var swiper = new Swiper(".beSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".sc-believing  .swiper-button-next",
        prevEl: ".sc-believing  .swiper-button-prev",
    },
});

var swiper = new Swiper(".bannerSwiper", {
    slidesPerView: "auto",
    paceBetween: 0,
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 2000,
    ease: "none",
    loopAdditionalSlides: 1,
    allowTouchMove: false,
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: "auto",
        },
    },
});

var swiper = new Swiper(".workSwiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".sc-work .swiper-button-next",
        prevEl: ".sc-work .swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: "auto",
        },
        1200: {
            slidesPerView: "auto",
        },
    },
});
var swiper = new Swiper(".progressSwiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".sc-progress .swiper-button-next",
        prevEl: ".sc-progress .swiper-button-prev",
    },
});
var swiper = new Swiper(".clientSwiper", {
    slidesPerView: "auto",

    ease: "none",
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
});

var swiper = new Swiper(".testSwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
    // freeMode: true,
    navigation: {
        nextEl: ".sc-testimonials .swiper-button-next",
        prevEl: ".sc-testimonials .swiper-button-prev",
    },

    loop: true,
    loopAdditionalSlides: 1,
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerView: 1,
        },
        768: {
            spaceBetween: 20,
        },
        1024: {
            // slidesPerView: 4,
        },
        1200: {
            slidesPerView: "auto",
        },
    },
});
