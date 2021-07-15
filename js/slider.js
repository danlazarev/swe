//  // import Swiper JS
//  import Swiper from 'swiper';
//  // import Swiper styles
//  import 'swiper/swiper-bundle.css';


// document.addEventListener('DOMContentLoaded', sliderOn())

// function sliderOn() {
    const swiperImg = new Swiper('.swiper-img', {
        loop: false,
        slidesPerView: 1,
        speed: 2000,
        parallax: true,
        mousewheel: {
            invert: false,
            eventsTarget: 'body',
            sensitivity: 0.5
        },
        pagination: {
            el: '.slider-pagination-count .total',
            type: 'custom',
            renderCustom: function(swiper, current, total) {
                return `0${total}`
            }
        },
    });

    

    const swiperText = new Swiper('.slider-text', {
        speed: 2000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          },
    });


    swiperImg.controller.control = swiperText;
    swiperText.controller.control = swiperImg;

    // slideChange

    let curnum = document.querySelector('.slider-pagination-count .current'),
        pagcur = document.querySelector('.slider-pagination-current__num')

    swiperText.on('slideChange', function() {
        let ind = swiperText.realIndex + 1
        gsap.to(curnum, .2, {
            force3D: true,
            y: -10,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function() {
                gsap.to(curnum, .1, {
                    force3D: true,
                    y: 10,
                })
                curnum.innerHTML = `0${ind}`
                pagcur.innerHTML = `0${ind}`
            }
        })
        gsap.to(curnum, .2, {
            force3D: true,
            y: 0,
            opacity: 1,
            ease: Power2.easeOut,
            delay: .3
        })
    })

    let gear = document.querySelector('.slider-gear')

    swiperImg.on('slideChange', function() {
        let prevIndex = swiperImg.previousIndex + 1,
            activeIndex = swiperImg.activeIndex + 1

        if (prevIndex < activeIndex) {
            gsap.to(gear, 2.5, {
                rotation: "+=40",
                ease: Power2.easeOut
            })
        } else {
            gsap.to(gear, 2.5, {
                rotation: "-=40",
                ease: Power2.easeOut
            })
        }
        
    })
// }