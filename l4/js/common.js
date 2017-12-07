$(function() {
	
	
	$('.header__nav-link').click(function() {
	$(this).addClass('is-active');
	$('.header__nav-link').not(this).removeClass('is-active');
})

$('.sport__item').click(function() {
	$(this).addClass('is-active');
	$('.sport__item').not(this).removeClass('is-active');
})
	

$('.search__btn').click(function(event) {
	$(this).css('margin-right', '50px');
	$('.header__search-form').toggleClass('is-active');
	return false;
});

$( "#search" ).focus(function() {
 $('.header__search-form').addClass('bottom');
});

$('.search__btn').click(function(){
	if (!$(this).data('status')) {
		$(this).html('<span class="close-search">&#215;</span>');
		$(this).data('status', true);
	}
	else {
		$(this).html('<img src="img/icons/ic-search-hover.svg" alt="search">');
		$(this).css('margin-right', '15px');
		$(this).data('status', false);
	}
});

$(".hidden__btn").click(function() {
	 // $(".hidden__btn-pic").toggleClass('is-active');
	  $(this).parent('.hidden__btn-wrap').children('.hidden__btn-pic').toggleClass('is-active');
    var elem = $(this).text();
    if (elem == "Еще лиги") {
      $(this).text("Скрыть");
      // $(".aside__left-hidden").slideDown('slow');
      $(this).parent('.hidden__btn-wrap').parent('.aside__left-list').children('.aside__left-hidden').slideDown('slow');
     
    } else {
      $(this).text("Еще лиги");
      // $(".aside__left-hidden").slideUp('slow');
      $(this).parent('.hidden__btn-wrap').parent('.aside__left-list').children('.aside__left-hidden').slideUp('slow');     
    }
  });

	$('.betslip').on('click', '.settings__entry', function() {
		$('.betslip__settings').addClass('is-active');
	});
	$('.betslip').on('click', '.back__betslip, .settings__btn a', function() {
		$('.betslip__settings').removeClass('is-active');
	});

	$('.betslip').on('click', '.box__close', function() {
		$(this).toggleClass('is-active');
		// $('.box__blocked').toggleClass('is-active');
		 $(this).parent(".betslip__item-box").children(".box__blocked").toggleClass('is-active');
	});



$('.betslip__tabs-item').not(':first').hide();
$('.betslip__tab').click(function() {
	$('.betslip__tab').removeClass('is-active').eq($(this).index()).addClass('is-active');
	$('.betslip__tabs-item').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass('is-active');

$('.people__item').not(':first').hide();
$('.people__tab').click(function() {
	$('.people__tab').removeClass('is-active').eq($(this).index()).addClass('is-active');
	$('.people__item').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass('is-active');

	$('.box__visible-content').on('click', function(){
			 $(this).parent(".betslip__item-box").children(".box__hidden-content").slideToggle('show');
	});

	 $('.input__minus').click(function () {
								var $input = $(this).parent().find('input');
								var count = parseInt($input.val()) - 1;
								count = count < 1 ? 1 : count;
								$input.val(count);
								$input.change();
								return false;
						});
		$('.input__plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
	});

$('.inputNumber__wrap').hover(function() {
	$(this).addClass('is-active');
		$('.input__number').focus();
}, function() {
	$('.input__number').blur();
	$(this).removeClass('is-active');
});

$('.btn__bet').click(function() {
    $(this).addClass('loading-btn');
      // $('.loading__bet').addClass('is-active');
      $(this).parents().children('.loading__bet').addClass('is-active');
    setTimeout(function() {
    		$('.loader-circle').addClass('loader-ok');
      // For failed icon just replace ".done" with ".failed"
      $('.loader__text').html('Ставка принята');
    }, 2000);
    setTimeout(function() {
     $('.loading__bet').removeClass('is-active');
      $('.loader-circle').removeClass('loader-ok');
       $('.btn__bet').removeClass('loading-btn');
      $('.loader__text').html('Ставка принимается');
    }, 4000);
  })

$('.box__chect').on('click', function(){
	$(this).toggleClass('is-active');
});
$('.min__betslip').on('click', function(){
	$(this).parents('.betslip, .express__live').toggleClass('is-active');
	// $('.betslip').toggleClass('is-active');
	$(this).toggleClass('plus');
});

$(".betslip").removeClass("default");
	$(window).scroll(function(){
			if ($(this).scrollTop() > 300) {
				$(".betslip").addClass("is-active").fadeIn('fast');
				$('.min__betslip').addClass('plus');
			} else {
				$(".betslip").removeClass("is-active").fadeIn('fast');
				$('.min__betslip').removeClass('plus');
			};
});

$('.topSlider').slick({
	infinite: false,
	prevArrow: '.left__slide.carousel-control',
  nextArrow: '.right__slide.carousel-control',
  dots: true,
  dotsClass: 'slider__dots',
   responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        infinite: true,
        dots: false
      }
    }
  ]
 
});
$('.sport__list').slick({	
	slidesToShow: 8,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: '.sport__list-right',
   responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 8
      }
    }
  ]
});
$('.footer__partners').slick({
	arrows: false,
	slidesToShow: 9,
  slidesToScroll: 1,  
  variableWidth: true,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
        variableWidth: true
      }
    }
  ]
});

$('.bestSlider').slick({
	prevArrow: '.bestSlide-left.carousel-control',
  nextArrow: '.bestSlide-right.carousel-control',
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        variableWidth: true
      }
    },
    {
      breakpoint: 768,
      settings: {
       arrows: false
      }
    }
  ]
});

$('.r-forec__slider').slick({
	prevArrow: '.r-forec-left.carousel-control',
  nextArrow: '.r-forec-right.carousel-control',
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [    
    {
      breakpoint: 768,
      settings: {
       arrows: false
      }
    }
  ]
});

$('.action__slider').slick({
	prevArrow: '.action-left.carousel-control',
  nextArrow: '.action-right.carousel-control',
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        variableWidth: true
      }
    },
     {
      breakpoint: 850,
      settings: {
        arrows: false,
        variableWidth: true
      }
    }
  ]
});

$('.table__star svg').on('click', function(event) {
	$(this).toggleClass('is-active');
	/* Act on the event */
});

$('.table__count').on('click', function(event) {
	$(this).toggleClass('is-active');
	/* Act on the event */
});



$('.table__arrow img').click(function(event) {
	// $('.main__tbody').slideToggle();
	$(this).toggleClass('is-active');
	$(this).parents('.main__table').children('.main__tbody').toggle('500');
});

});
$(window).bind('resize', function(){ 
    if ($(window).width() < 992) {
        $('.footer__nav').slick({
			arrows: false,
			variableWidth: true
		});
} 
else { 
    $('.footer__nav').slick('unslick');
    }
}).trigger('resize');