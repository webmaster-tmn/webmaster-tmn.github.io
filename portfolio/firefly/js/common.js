$(function() {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$(".header").addClass("header_fixed").fadeIn('fast');
		} else {
			$(".header").removeClass("header_fixed").fadeIn('fast');
		};

		if ($(".header").hasClass('header_fixed')) {
			$('.logo').html('<img src="img/logo-fixed.svg" alt="firefly">');
		} else {
			$('.logo').html('<img src="img/logo.svg" alt="firefly">');
		}
		var headerHeight = $('.header_fixed').outerHeight();


		$("section").each(function () {
			if($(window).scrollTop() > $(this).offset().top - $(window).height()) {

				$(this).find('img').each(function() {
					if($(this).attr('data-lazy')){
						$(this).attr('src',$(this).attr('data-lazy'))
					}
				})

			}

		})


	});

	$("a.scrollto").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
		return false;
	});

	$('#burger').click(function(){
		$(this).toggleClass('open');
		$(".nav").toggleClass("open");
	});

	$('.nav__link').click(function(){
		$('#burger').removeClass('open');
		$(".nav").removeClass("open");
	});



$("body").append('<div class="top"><i class="fas fa-arrow-alt-circle-up"></i></div>');

$("body").on("click", ".top", function() {
  $("html, body").animate({scrollTop: 0}, "slow");
})

$('.popup-link').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true
	});


$( ".form__input, .form__textarea" ).focus(function() {
  $( this ).parent().addClass('is-active');
});
$( ".form__input, .form__textarea" ).blur(function() {
  $( this ).parent().removeClass('is-active');
});


$('.tslider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: $('.team__next'),
	  prevArrow: $('.team__prev'),

	  responsive: [
	      {
	        breakpoint: 992,
	        settings: {
	          slidesToShow: 2
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          centerMode: false,
	          slidesToShow: 1
	        }
	      }
	    ]
	});

$('.evSlider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,

	  responsive: [
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 2
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          centerMode: false,
	          slidesToShow: 1
	        }
	      }
	    ]
	});
$('.events__hidden-footer .team__next').click(function() {
		$('.evSlider').slick("slickNext");
	})
	$('.events__hidden-footer .team__prev').click(function() {
		$('.evSlider').slick("slickPrev");
	})


$('.eventsBtn').on('click', function(e) {
	var dropDown = $(this).parent().parent().parent().prev('.events__hidden');
	var dropDownItem = $(this).parent().parent().parent('.events__item');
var parents = $(this).parent().parent().parent().prev();
console.log(parents);
$('.events__hidden').not($(this).parent().parent().parent().prev()).slideUp('slow');
$('.events__item').not($(this).parent().parent().parent()).slideDown('slow');
$(this).parent().parent().parent().prev().slideToggle('slow', function() {
		$(this).parent().parent().parent().find('.evSlider').slick('refresh');
	});
$(this).parent().parent().parent().slideUp('slow');
});

$('.events__hidden-close').on('click', function() {
	$(this).parent().parent('.events__hidden').slideUp('slow', function() {
		$(this).parent().parent('.events__hidden').children('.evSlider').slick('refresh');
	});
	$(this).parent().parent().parent().find('.events__item').slideDown('slow');

});


$('.tabSlider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 4500,
	  pauseOnHover: false

	});

$('.tab__content-item:not(":first-of-type")').hide();

$('.tabLink').each(function(i) {
	$(this).attr('data-tab', 'tab'+i);
});

$('.tab__content-item').each(function(i) {
	$(this).attr('data-tab', 'tab'+i);
});


$('.tabLink').click(function(){
	var tab_id = $(this).data('tab');
	var dataImg = $(this).attr('data-bg');

	$(".services-bg").css('background-image', "url('" + dataImg + "')");
	if (!$(this).is("active")) {

		$('.tabLink').removeClass("is-active");
		$(this).addClass('is-active');
	}

  // $('.tabLink').removeClass("is-active").eq($(this).index()).addClass("is-active");
  $('.tab__content-item').hide();
  $('.tab__content-item[data-tab='+tab_id+']').show();
  $('.tabSlider').slick('setPosition');
  $('.tabSlider').slick('slickGoTo', 0);


})

$(".read-more").click(function() {
    var elem = $(".read-more").html();
    if (elem == "Подробнее<span>&gt;</span>") {
      $(".tab__content-price, .tab__content-decr").slideDown('slow');
      $(".read-more").html("Свернуть<span>&gt;</span>");
      $(this).parent().addClass('is-active');
    } else {
       $(".tab__content-price, .tab__content-decr").slideUp('slow');
      $(".read-more").html("Подробнее<span>&gt;</span>");
      $(this).parent().removeClass('is-active');

    }
  });




$('.popup-link').on('click', function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		var dataBtn = $(this).data("btn");
		// var dataImg = $(this).attr('data-bg');

		$(".popup__title").text(dataText);
		$(".form .formname").val(dataForm);
		$("#submit-form-btn").val(dataBtn);
		// $(".form").css('background-image', "url('" + dataImg + "')");
});






SplitLetters(".js-splitme", "<span class=\"letter\">$</span>", "", "");

let tl = new TimelineMax();

tl
	.staggerFromTo('h1', 0.5, {opacity:0}, {opacity: 1}, 0.05)
	.staggerFromTo('h1.h1 .letter', 0.5, {opacity:0,y: 40}, {opacity: 1,y:0,ease: Back.easeOut.config(3)}, 0.05)
	.staggerFromTo('.hero__title-decor-circle', 0.5, {opacity:0}, {opacity: 1}, 0.05)
	.fromTo('.logo', 0.5, {x:-200,opacity:0}, {x:0,opacity: 1})
	.staggerFromTo('.nav__list a', 0.3, {opacity:0,y: -100}, {opacity: 1,y:0}, 0.1)
	.fromTo('.hero__decr', 0.4, {y:50, opacity:0}, {y:0,opacity: 1})
	.fromTo('.hero__button a', 0.03, {scale:0.1, opacite: 0}, {scale: 1,opacity: 1})
	.fromTo('.hero__title-decor1', 0.5, {y:-20,opacity:0}, {y:0,opacity: 1})
	.fromTo('.hero__title-decor2', 0.5, {y:20,opacity:0}, {y:0,opacity: 1})
	.fromTo('.decor-2', 0.5, {x:200,opacity:0}, {x:0,opacity: 1});

  		 //E-mail Ajax Send
	 $('form.form').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("active")
			setTimeout(function() {
				// Done Functions
				$(".success").removeClass("active")
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

if ($(window).width() >= 991) {
      var $layer_0 = $('.hero__title-decor1'),
      $layer_1 = $('.hero__title-decor2'),
      $layer_2 = $('.decor-2'),
      $container = $('body'),
      container_w = $container.width(),
      container_h = $container.height();

      $(window).on('mousemove.parallax', function(event) {
        var pos_x = event.pageX,
        pos_y = event.pageY,
        left  = 0,
        top   = 0;

        left = container_w / 2 - pos_x;
        top  = container_h / 2 - pos_y;

        TweenMax.to(
          $layer_0,
          0.5,
          {
            css: {
              transform: 'translateX(' + left / 70 + 'px) translateY(' + top / 150 + 'px)',
              opacity: '1'
            },
            ease:Expo.easeOut,
            overwrite: 'all'
          });

        TweenMax.to(
          $layer_1,
          1.5,
          {
            css: {
              transform: 'translateX(' + left / 20 + 'px) translateY(' + top / 85 + 'px)',
              opacity: '1'
            },
            ease:Expo.easeOut,
            overwrite: 'all'
          });

        TweenMax.to(
          $layer_2,
          1,
          {
            css: {
              transform: 'translateX(' + left / 40 + 'px) translateY(' + top / 100 + 'px)',
              opacity: '1'
            },
            ease:Expo.easeOut,
            overwrite: 'all'
          });

      });


    }

});
$(window).resize(function() {
	if ($(window).width() <= 575){
		$('.services__wrap-left').on('click', function(){
			$(this).toggleClass('open');
			$(".tab__content-price, .tab__content-decr").slideUp('slow');
			$(".read-more").html("Подробнее<span>&gt;</span>");

		});
	}
});




