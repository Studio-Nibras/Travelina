AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2.5,
            }
        }
    });
});






