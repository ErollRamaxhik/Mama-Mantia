
//$ isareti select demek jquery de
$(document).ready(function () {
    /*STICKY NAVIGATION*/
    $('.js-section').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav')

        }

    }), {
        // nekadar pesin isteysik olsun 
        offset: '25%'
    };

    /*MAIN BUTTONS*/
    $('.js-scroll-menu').click(function () {
        $('html, body').animate({ scrollTop: $('.js-section-menu').offset().top }, 1000);
    });

    $('.js-scroll-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js-section-features').offset().top }, 1000);
    });

    /*NAVIGATION SCROLL*/

    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    /*ANIMATION*/
    $('.js-animation1').waypoint(function (direction) {

        $('.js-animation1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js-animation2').waypoint(function (direction) {

        $('.js-animation2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-animation3').waypoint(function (direction) {

        $('.js-animation3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js-animation4').waypoint(function (direction) {

        $('.js-animation4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /*MOBILE NAVIGATION*/
    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon ion-icon');

        if (icon.attr("name") == "menu-outline") {
            icon.attr("name", "close-outline");
        }
        else {
            icon.attr("name", "menu-outline")
        }
        /* appear and disappear */
        nav.slideToggle(200);




    });

    /* NAVIGATION TO GET BACK AFTER WE RESIZE IT*/

    $(window).resize(function () {

        var nav = $('.js-main-nav');

        var icon = $('.js-nav-icon');

        if ($(window).width() > 790) {

            nav.css("display", "block");

            icon.addClass('ion-close-round');

            icon.removeClass('ion-navicon-round');

        } else {

            nav.css("display", "none");

            icon.addClass('ion-navicon-round');

            icon.removeClass('ion-close-round');

        }

    });


})