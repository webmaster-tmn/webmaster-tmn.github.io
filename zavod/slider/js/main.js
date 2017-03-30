var Layout = function() {
    var handleLoad = function() {
       
        
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            console.log($anchor.attr('href'));
            console.log($($anchor.attr('href')).attr('id'));
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'swing');
            event.preventDefault();
        });
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() < 200) {
            $('#totop').fadeOut();
        } else {
            $('#totop').fadeIn();
        }
    });
    $('#totop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'fast');
        return false;
    });
    
    var handleCountNumber = function() {
        $('.counter-01').counterUp({
            delay: 10,
            time: 2500
        });
        $('.counter-02').counterUp({
            delay: 10,
            time: 2500
        });
        $('.counter-03').counterUp({
            delay: 10,
            time: 2500
        });
        $('.counter-04').counterUp({
            delay: 10,
            time: 2500
        });
    }
    var handleOwnCarousel = function() {
        var owl = $(".about-carousel");
        owl.owlCarousel({
            loop:true,
            items: 1,
            navText: "",
            nav:true,
            itemClass: "slide-wrap",
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });
        $('.about-carousel-nav .next').click(function() {
            owl.trigger('next.owl.carousel');
        });
        $('.about-carousel-nav .prev').click(function() {
            owl.trigger('prev.owl.carousel');
        });
        $("#owl-our-clients").owlCarousel({
            loop:true,
            items: 1,
        });
        var project_own = $("#project-carousel");
        var project_detailed_own = $("#project-detailed-carousel");
        project_own.owlCarousel({
            autoPlay: false,
            items: 1,
            pagination: false,
            mouseDrag: false,
            touchDrag: false
        });
        project_detailed_own.owlCarousel({
            autoPlay: false,
            items: 1,
            pagination: false,
            mouseDrag: false,
            touchDrag: false
        });
        $('.project-carousel-nav .next').click(function() {
            project_own.trigger('owl.next');
            project_detailed_own.trigger('owl.next');
        });
        $('.project-carousel-nav .prev').click(function() {
            project_own.trigger('owl.prev');
            project_detailed_own.trigger('owl.prev');
        });
        $("#testimonial-carousel").owlCarousel({
            autoPlay: 10000,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [600, 1],
            autoplay: false
        });
        var team_owl = $("#team-carousel");
        team_owl.owlCarousel({
            autoPlay: 10000,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            pagination: false
        });
        $('.team-carousel-nav .next').click(function() {
            team_owl.trigger('owl.next');
        });
        $('.team-carousel-nav .prev').click(function() {
            team_owl.trigger('owl.prev');
        });
    }
    var handleContactValidate = function() {
        $("#form-contact").validate({
            rules: {
                email: {
                    email: true,
                    required: true
                },
                name: {
                    required: true
                },
                comment: {
                    required: true
                }
            },
            messages: {},
            tooltip_options: {
                email: {
                    trigger: 'focus'
                },
                name: {
                    trigger: 'focus'
                },
                comment: {
                    trigger: 'focus'
                }
            },
        });
    }
    return {
        init: function() {
            handleLoad();
            handleCountNumber();
            handleOwnCarousel();
            handleContactValidate();
        }
    }
}(jQuery);
$(document).ready(function() {
    $(".popup").magnificPopup();
});
$(".popup").click(function() {
        var dataForm = $(this).data("form");
        var dataText = $(this).data("text");
        $(".form_hid h4").text(dataText);
        $(".form_hid [name=admin-data]").val(dataForm);
    });