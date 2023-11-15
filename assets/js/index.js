// jQuery
$(document).ready(function () {
    if ($('.common-slider').length) {
        $('.common-slider').owlCarousel({
            items: 2,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],

            dots: false,
            loop: true,
            autoplay: false,
            margin: 15,
            responsive: {
                768: {
                    items: 3
                },
                992: {
                    margin: 75,
                    items: 4,
                    mouseDrag: false,
                    touchDrag: false,
                    autoplay: false
                }
            }
        });
    }
    if ($('.new-slider').length) {

        $('.new-slider').owlCarousel({
            items: 1,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],

            dots: false,
            loop: true,
            autoplay: false,
            margin: 15,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 3,
                    margin: 75,
                    mouseDrag: false,
                    touchDrag: false,
                    autoplay: false
                }
            }
        });
    }
    // Contact Form
    if ($('.contact-slider').length) {
        $('.contact-slider').owlCarousel({
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            nav: true,
        });
    }

    // Toggle Fixed Menu
    if ($('.header-top > img').length) {
        $('.header-top > img').on('click', function () {
            $('header > div:last-child').addClass('active');
            $('body').addClass('overflow-hidden')
        })
    }
    if ($('header > div > div > i').length) {
        $('header > div > div > i').on('click', function () {
            $('header > div:last-child').removeClass('active');
            $('body').removeClass('overflow-hidden')
        });
    }

    // Sidebar Dropdown
    if ($('.sidebar > ul > li > a').length) {
        $('.sidebar > ul > li > a').on('click', function (e) {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');
            e.preventDefault();
        });
    }

    // Sort By Dropdown
    if ($('.sort-by > a').length) {
        $('.sort-by > a').on('click', function (e) {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');

            e.preventDefault();
        });

    }
    // Close Mobile Filters
    $('.sidebar-wrapper').on('click', function (e) {
        if (e.target.classList.contains('sidebar-wrapper')) {
            e.currentTarget.classList.add('d-none');
            $('body').removeClass('overflow-hidden');
        }
    })
    // Sidebar for mobile
    if ($('.sort-filter > a:first-child').length) {
        $('.sort-filter > a:first-child').on('click', function (e) {
            $('.sidebar-wrapper').removeClass('d-none');
            $('body').addClass('overflow-hidden');
            $('.sidebar').removeClass('d-none');
            $('.sort-by').addClass('d-none');
            e.preventDefault();
        });
    }
    if ($('.sort-filter > a:last-child').length) {
        $('.sort-filter > a:last-child').on('click', function (e) {
            $('.sidebar').addClass('d-none');
            $('.sidebar-wrapper').removeClass('d-none');
            $('body').addClass('overflow-hidden')
            $('.sort-by').removeClass('d-none');
            e.preventDefault();
        });
    }
    if ($('.close-sidebar i').length) {
        $('.close-sidebar i').on('click', function (e) {
            $('.sidebar-wrapper').addClass('d-none');
            $('body').removeClass('overflow-hidden')
        });
    }


    // Magnifiq Popup Gallery
    if ($('.gallery-image').length) {
        $('.gallery-image').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    }

    // Magnifiq Popup Video
    if ($('.video-play-icon').length) {
        $('.video-play-icon').magnificPopup({
            type: 'iframe'
        });
    }



});


// Custom JS
document.addEventListener('DOMContentLoaded', function () {
    // Contact form
    setTimeout(function () {
        var buttons = document.querySelectorAll('.contact-partner .border-bottom-title');
        if (!buttons.length) return;
        var sliderButtons = document.querySelectorAll('.contact-partner .owl-nav button');
        console.log(buttons);
        buttons[0].addEventListener('click', function () {
            sliderButtons[0].click();
            this.classList.add('active');
            buttons[1].classList.remove('active');
        });
        buttons[1].addEventListener('click', function () {
            sliderButtons[1].click();
            this.classList.add('active');
            buttons[0].classList.remove('active');
        });
    }, 150)



    window.addEventListener('scroll', function () {
        !function () {
            // Sticky Sidebar
            var div = document.querySelector("body > section.discipline-content");
            if (!div) return;
            var form = div.querySelector('form');
            console.log(form);
            var offsetTop = div.getClientRects()[0].y;
            if (offsetTop <= 0) {
                console.log('hello');
                form.classList.add('fixed')
            } else {
                form.classList.remove('fixed');
            }
        }();


        !function () {
            // Sticky PRoduct Review Box
            var div = document.querySelector(".feature-story-content .d-md-flex");
            var box = document.querySelector('.product-details');

            if(!div)return;

            var offsetTop = div.getClientRects()[0].y; 


            if (offsetTop <= 0) {
                console.log('Rahad')
                box.classList.add('fixed');
            } else {
                box.classList.remove('fixed');
            }
        }();

    })

})