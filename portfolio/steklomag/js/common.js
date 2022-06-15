var processSlider = function () {
	var sliderElement = $('.advan__list');

	if ($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {


		sliderElement.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}, ]
		})
	} else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {

		sliderElement.slick('unslick');
	}
};


$(function () {

	AOS.init({
		duration: 1200,
		once: true,
		disable: 'phone',
	})

	var userFeed = new Instafeed({
		get: 'user',
		userId: '11553697060',
		limit: '4',
		resolution: 'standard_resolution',
		template: '<div class="inst-img__wrap"><img src="{{image}}" alt="isnt"></img></div>',
		accessToken: '11553697060.1677ed0.2b4116cae7b843038fbe4fc303651fff'
	});

	userFeed.run();

	var processSlider = function () {
		if ($(window).width() < 768) {
			$('.advan__list').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: false,
				responsive: [{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}, ]
			});

		} else {}
	};
	processSlider();

	var phoneMask = document.querySelectorAll(".phone_mask");

	Inputmask({
		"mask": "+7(999)-999-99-99",
		showMaskOnHover: false,
	}).mask(phoneMask);

	$('.popup-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 500
		}
	});

	$(".btn-more").click(function () {
		var elem = $(".btn-more").text();
		if (elem == "Показать проекты еще ...") {
			//Stuff to do when btn is in the read more state
			$(".btn-more").text("Скрыть");
			$(".portfolio-hide").addClass('is-active');
		} else {
			//Stuff to do when btn is in the read less state
			$(".btn-more").text("Показать проекты еще ...");
			$(".portfolio-hide").removeClass('is-active');
		}
		return false;
	});

	var popupModal = function () {
		$.magnificPopup.open({
			items: {
				src: '#popup-modal'
			},

			type: 'inline',
			modal: true,
			mainClass: 'mfp-zoom-in',
			closeOnContentClick: true,
			fixedContentPos: true,
			removalDelay: 300,
			overflowY: 'scroll',
			callbacks: {
				open: function () {

				},
				afterClose: function () {

				}

			}

		})
	}

	$('.popup-modal').on('click', function () {
		popupModal();
	});




	$('.product__item').click(function () {

		var productBtn = $(this).parent().parent('.model-selection').find('a.btn');
		var dataProduct = $(this).data("product");

		$(".product__item").removeClass("is-active").eq($(this).index()).addClass("is-active");


		productBtn.attr('class', 'popup-modal btn');
		productBtn.attr("href", "#popup-modal");
		productBtn.attr("data-form", dataProduct);
		$(".form-popup .formname").val(dataProduct);

		console.log($(this).parent().parent());
		productBtn.click(function () {
			popupModal();
		})
	});

	$('form.form').submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {

			$.magnificPopup.open({
				items: {
					src: '#popup-success'
				},
				type: 'inline',
				modal: true,
				mainClass: 'mfp-zoom-in',
				closeOnContentClick: true,
				fixedContentPos: true,
				removalDelay: 2000,

			});
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				$('.form__group').removeClass("focus");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});


	//Плавный скролл
	$("a.link-scroll").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1100);
		return false;
	});


	$('.popup-modal, .link-popup-info').on('click', function () {
		var dataForm = $(this).data("form");
		var datatitle = $(this).data("title");
		var dataSubTitle = $(this).data("subtitle");
		var dataSucText = $(this).data("suctext");
		var dataSpecName = $(this).data("specname");
		var dataSpecPic = $(this).data('specpic');
		var dataBntValue = $(this).data('btnvalue');

		$(".popup__title").text(datatitle);
		$(".popup__subtitle").text(dataSubTitle);
		$(".form-popup .formname").val(dataForm);
		$(".success__text").text(dataSucText);
		$(".form__btn").text(dataBntValue);
		$(".success__personal .personal__name").text(dataSpecName);
		$('.success__img img').attr('src', '' + dataSpecPic + '');
	});

	$(".form__input").focus(function () {
		$(this).parent().addClass("focus");
	}).blur(function () {
		if ($(this).val() === "") {
			$(this).parent().removeClass("focus");
		}
	});

	$(".js-tab__item").not(":first").hide();
	$(".js-tab").click(function () {

		$(".js-tab").removeClass("js-tab--active").eq($(this).index()).addClass("js-tab--active");

		var active = $(this).parent().find(".js-tab--active");
		var tabWidht = $(this).outerWidth();

		var tabPosition = $(this).position().left;

		var tabSlide = $(this).parent().find('.slider--tab');
		tabSlide.css({
			"width": tabWidht + "px",
			"left": tabPosition + "px"
		});

		$(".js-tab__item").hide().eq($(this).index()).fadeIn().addClass("js-tab__item--active");


	}).eq(0).addClass("tab--active");

	$('.accardion__cont').hide();


	$('.accardion .accardion__btn').click(function () {
		if (!$(this).hasClass('active'))
			$('.accordion .accardion__btn').removeClass('active');
		$(this).toggleClass('active');
		$(this).next(".accardion__cont").slideToggle().siblings(".accardion__cont:visible").slideToggle();
	})


	var phoneMask = document.querySelectorAll(".phone_mask");

	Inputmask({
		"mask": "+7(999)-999-99-99",
		showMaskOnHover: false,
	}).mask(phoneMask);





	$(document).on('click', '.close__btn', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


	//Плавный скролл
	$("a.link-scroll").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1100);
		return false;
	});



});

$(window).on('resize', function () {
	processSlider();
	if ($(window).width() < 768) {


	} else {
		// $('.process__list .show-desktop').append();
		// $('#slick-slide07').append();
	}
})