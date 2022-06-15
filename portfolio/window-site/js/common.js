$(function () {

	// Custom JS

const phoneMask = function() {
	var selector = document.querySelector(".phone_mask");
	var im = new Inputmask("+7(999)999-99-99");
	im.mask(selector);
};

phoneMask();

	const navSlide = function () {
		const burger = $('.burger');
		const nav = $('.nav-header');

		burger.click(function () {
			nav.toggleClass('nav-active');
			$(this).toggleClass('burger-active');
		});
		$('.nav__link').click(function () {
			nav.removeClass('nav-active');
			burger.removeClass('burger-active');
		});

	};

	navSlide();

	//E-mail Ajax Send
	$('form.form').submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".success").addClass("active")
			setTimeout(function () {
				// Done Functions
				$(".success").removeClass("active")
				th.trigger("reset");
				$.magnificPopup.close();
				yaCounter52670836.reachGoal('FormSubmit');
				return true;
			}, 3000);
		});
		return false;
	});




	$("a.link-top").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1100);
		return false;
	});

	$("body").on("click", ".btn-top", function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$(".btn-top").addClass('active');
		} else {
			$(".btn-top").removeClass('active');
		}
	});


	// вкладки с содержанием

	$(".s-tab-content").hide();
	$(".s-tab-content:first").show();
	/* в режиме вкладок */
	$(".services__tabs .s-tab-js").click(function () {
		$(".s-tab-content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
		$(".services__tabs .s-tab").removeClass("active");
		$(this).addClass("active");
		$(".tab_accordion").removeClass("d_active");
		$(".services__tabs-accordion[rel^='" + activeTab + "']").addClass("d_active");
	});
	/* в режиме аккордеона */
	$(".services__tabs-accordion").click(function () {
		$(".s-tab-content").hide();
		var d_activeTab = $(this).attr("rel");
		$("#" + d_activeTab).fadeIn();
		$(".services__tabs-accordion").removeClass("d_active");
		$(this).addClass("d_active");
		$(".s-tab").removeClass("active");
		$(".s-tab[rel^='" + d_activeTab + "']").addClass("active");
	});



	$(".portfolio__tab__content").hide();
	$(".portfolio__tab__content:first").show();
	/* в режиме вкладок */
	$(".portfolio__tab").click(function () {
		$(".portfolio__tab__content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
		$(".portfolio__tab").removeClass("active");
		$(this).addClass("active");
		$('.js-portfolio').each(function () {
			$(this).slick('refresh');
		});
		$('.js-portfolio-nav').each(function () {
			$(this).slick('refresh');
		});
		portfolioPopup();
		showPopup();
		$(".portfolio__tab__content").find(".s-tab-content__item:first").addClass('active');
		$(".s-tab-content__item").removeClass('active');
		// $(".s-tab-content__item:first").addClass('active');

	});

	function portfolioPopup() {
		$('.js-portfolio-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: false,
			image: {
				verticalFit: true
			}
		});
	};
	portfolioPopup();


	$(".s-tab-content__item").click(function (e) {
		e.preventDefault();
		// $(".s-tab-content__item").removeClass('active');
		$(this).siblings().removeClass('active')
		$(this).addClass('active');
	})

	$('.link-popup').on('click', function () {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("title");
		// var dataBtn = $(this).data("btn");
		// var dataImg = $(this).attr('data-bg');

		$(".form-popup .form__title").text(dataText);
		$(".form .formname").val(dataForm);
		// $("#submit-form-btn").val(dataBtn);
		// $(".form").css('background-image', "url('" + dataImg + "')");
	});

	function showPopup() {
		$('.link-popup').magnificPopup({
			type: 'inline',
			removalDelay: 500,
			fixedContentPos: true,
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = this.st.el.attr('data-effect');
				},
				open: function () {
					$("body").addClass("scroll-hidden");
					phoneMask();
				},
				close: function () {
					$("body").removeClass("scroll-hidden");
				}
			},
			midClick: true
		});

	};
	showPopup();

	$('.js-portfolio').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.js-portfolio-nav'
	});
	$('.js-portfolio-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-portfolio',
		dots: false,
		arrows: true,
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		nextArrow: '.portfolio__arrow__right',
		prevArrow: '',
		focusOnSelect: true,
		responsive: [{
				breakpoint: 1200,
				settings: {
					vertical: false,
					verticalSwiping: false,
					dots: true,
					arrows: false

				}
			},
			{
				breakpoint: 700,
				settings: {
					vertical: false,
					verticalSwiping: false,
					dots: true,
					arrows: false,
					slidesToShow: 2

				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.js-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 2000
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					adaptiveHeight: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			}
		]
	});

	var stock = $('.stock');
	var stockTop = stock.offset().top;
	$(window).bind('scroll', function () {
		var windowTop = $(this).scrollTop();
		if (windowTop > stockTop){
			// $('.map__wrap').html('');
			mapInit();
			$(window).unbind('scroll');
		}
	});



function mapInit() {
	var map,
	myIcon;

DG.then(function () {
	map = DG.map('map', {
		center: [61.66965742, 50.83413119],
		zoom: 17,
		geoclicker: true,
		scrollWheelZoom: false
	});
	myIcon = DG.icon({
		iconUrl: 'img/icons/map-icon.svg',
		iconSize: [52, 73]
	});
	DG.marker([61.66976961, 50.83758587], {
		icon: myIcon
	}).addTo(map);
});
};


});