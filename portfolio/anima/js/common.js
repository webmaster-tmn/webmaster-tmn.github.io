$(function () {

	function updSprite() {
		var $element = $('.animated');
		var position = $element.css('background-position');
		if (position == '0px 100%') {
			position = '0 0'
		} else {
			position = '0px 100%'
		}
		$element.css('background-position', position);
	}


	if ($(window).width() > 768) {
		setInterval(updSprite, 100);
		$(".pictures__list--hide").slideUp();
		$(".btn-more").click(function () {
			var elem = $(".btn-more span").text();
			if (elem == "Посмотреть больше фотографий") {
				$(".btn-more span").text("Скрыть");
				$(".pictures__list--hide").slideDown('fast');
			} else {
				$(".btn-more span").text("Посмотреть больше фотографий");
				$(".pictures__list--hide").slideUp('fast');
			}
			return false;
		});




	} else {

		$(function () {
			$(".pictures__item").slice(0, 2).show();
			$(".btn-more").on('click', function (e) {
				e.preventDefault();
				var elementId = $(".pictures__item:hidden");
				if (elementId.length > 1) {
					$('.pictures__item:hidden').slice(0, 2).slideDown();
				} else {
					$('.pictures__item:hidden').slice(0, 2).slideDown();
					$(".btn-more").fadeOut();
					$(".btn-more-hid").fadeIn();

				}
			});

		});
		$(".btn-more-hid").on('click', function (e) {
			$(".pictures__item").slideUp();
			$(".pictures__item").slice(0, 2).slideDown("slow");
			$(".btn-more-hid").fadeOut();
			$(".btn-more").fadeIn();
			elementClick = $('#pictures');
			destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({
				scrollTop: destination
			});
			return false;

		});

	}
	$('.picture-popup').magnificPopup({
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		}
	});



	$('.js-reviews').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		// variableWidth: true,
		speed: 500,
		arrow: true,
		prevArrow: '.reviews__arrow--left',
		nextArrow: '.reviews__arrow--right',
		responsive: [{
			breakpoint: 1170,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true,
			}
		}]
	});



	function videoPopup() {
		$('.popup-player').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-zoom-in',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: true,
			midClick: true,
			callbacks: {
				beforeOpen: function () {
					startWindowScroll = $(window).scrollTop();

				},
				open: function () {

				},
				close: function () {
					$(window).scrollTop(startWindowScroll);
				}
			}
		});
	};
	videoPopup();


	//Плавный скролл
	$("a.link-scroll").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1100);
		return false;
	});

	const navLinks = $('.nav a');

	$('.js-toggle-menu').click(function (e) {
		e.preventDefault();
		$('.nav').toggleClass('open');
		$('.hamburger-wrap').toggleClass('open');
		$('html,body').toggleClass('open');
		$('.nav__link').addClass('open-link');
		$.each(navLinks, function (link, index) {

			const durAimation = link / 5 + 's';
			if ($(this).css('animation-name') == "navLinkFade") {
				$(this).css('animation', '');

			} else {
				$(this).css('animation', 'navLinkFade 0.5s ease forwards ' + durAimation + '')
			}

		});
		// $('.hero__sheet').toggleClass('open');
	});



	$('.nav__link').click(function () {
		$('.hamburger-wrap').removeClass('open');
		$(".nav").removeClass('open');
		$("html, body").removeClass('open');
		// $(".hero__sheet").removeClass('open');
	});


	var wow = new WOW({
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: false,
	});
	wow.init();


	$('.popup-link').magnificPopup({
		type: "inline",
		fixedContentPos: true,
		preloader: false,
		removalDelay: 300,
		modal: true,
		mainClass: 'mfp-move-from-top',
		overflowY: 'scroll',
		callbacks: {
			open: function () {
				$("body").addClass("scroll-hidden");
				$('body').css('padding-right', 17);
				$('html').css('margin-right', 0);

			},
			close: function () {
				$("body").removeClass("scroll-hidden");
				$('body').css('padding-right', 0);
			}
			// e.t.c.
		}

	});
	$(document).on('click', '.js-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


	$(".form__input").focus(function () {
		$(this).parent().addClass("focus");
	}).blur(function () {
		if ($(this).val() === "") {
			$(this).parent().removeClass("focus");
		}
	});

	$('.popup-link').on('click', function () {
		var dataForm = $(this).data("form-name");
		var datatitle = $(this).data("form-title");

		$(".popup__title h2").text(datatitle);
		$(".popup__form .formname").val(dataForm);
	});


	$('form.form').submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {

			window.location.href = "/thanks.html";
			setTimeout(function () {
				// Done Functions

				th.trigger("reset");
				$('.form__group').removeClass("focus");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});



	ymaps.ready(init);
	var myMap,
		myPlacemark;


	function init() {
		var myMap = new ymaps.Map("map", {
			center: [56.83673646886277, 60.6549966018523],
			zoom: 17
		});
		myMap.controls
			.remove('geolocationControl')
			.remove('trafficControl')
			.remove('typeSelector')
			.remove('fullscreenControl')
			.remove('rulerControl')
			.remove('searchControl');
		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('multiTouch');
		// myMap.behaviors.disable('drag');

		myPin = new ymaps.GeoObjectCollection({}, {
			preset: 'islands#redIcon'
		});

		function setCenter() {
			myMap.setCenter([54.31008432875216, 48.39303658398438]);
		}

		myPlacemark = new ymaps.Placemark([56.83673646886277, 60.6549966018523], {
			hintContent: 'Anima',
			balloonContent: 'Екатеринбург, улица Коминтерна 16, офис 809'
		});

		myPin.add(myPlacemark);
		myMap.geoObjects.add(myPin);
	}

});