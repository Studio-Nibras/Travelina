AOS.init();

const counters = document.querySelectorAll('.counter');
const options = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / 50;

            const updateCounter = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
            observer.unobserve(counter);
        }
    });
}, options);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

const teamSwiper = new Swiper('.teamSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});
