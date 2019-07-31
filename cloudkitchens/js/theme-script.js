jQuery( function ( $ ) {
    'use strict';

    // Allow smooth scroll
    $('.page-scroller').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });

    if($('#page-sub-header').length){

        $(window).on('scroll', function(){
            if($(window).scrollTop() > 100){
                $('#masthead').addClass('active')
            }else{
               $('#masthead').removeClass('active')
           }
       })

    }else{

        $('#masthead').addClass('active')

    }

    AOS.init({
        once: true
    });


// Parallax Plugin
$.fn.parallax = function(options) {
    var windowHeight = $(window).height();
        // Establish default settings
        var settings = $.extend({
            speed        : 0.50
        }, options);
        // Iterate over each object in collection
        return this.each( function() {
        // Save a reference to the element
        var $this = $(this);
        // Set up Scroll Handler
        $(document).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var offset = $this.offset().top;
            var height = $this.outerHeight();
    // Check if above or below viewport
    if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
        return;
    }
    var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
                // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');
            });
    });
    }
    $('.parallax').parallax();
});

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
 (function() {
    var isIe = /(trident|msie)/i.test( navigator.userAgent );

    if ( isIe && document.getElementById && window.addEventListener ) {
        window.addEventListener( 'hashchange', function() {
            var id = location.hash.substring( 1 ),
            element;

            if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
                return;
            }

            element = document.getElementById( id );

            if ( element ) {
                if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
                    element.tabIndex = -1;
                }

                element.focus();
            }
        }, false );
    }
})();
