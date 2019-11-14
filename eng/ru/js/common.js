$(function () {

	$('.accardion__cont').hide();


	$('.accardion .accardion__btn').click(function () {
		if (!$(this).hasClass('active'))
			$('.accordion .accardion__btn').removeClass('active');
		$(this).toggleClass('active');
		$(this).next(".accardion__cont").slideToggle().siblings(".accardion__cont:visible").slideToggle();
	});

  $('.btn-lang').click(function() {
    $(this).toggleClass('is-active');
    $(".btn-lang__wrap").slideToggle();
  });

const navSlide = function () {
    const burger = $('.burger');
    const nav = $('.nav');

    burger.click(function () {
      nav.toggleClass('nav-active');
      $(this).toggleClass('burger-active');
    });
    $('.menu__link').click(function () {
      nav.removeClass('nav-active');
      burger.removeClass('burger-active');
    });

  };

  navSlide()




  AOS.init({
    duration: 1200,
    once: true
  })

$('.popup-link').magnificPopup({
    type: "inline",
    fixedContentPos: true,
    removalDelay: 300,
    mainClass: 'mfp-zoom-in',
    closeBtnInside: true,
    overflowY: 'scroll',
    callbacks: {
      open: function () {
        $("body").addClass("scroll-hidden");


      },
      close: function () {
        $("body").removeClass("scroll-hidden");
      }
      // e.t.c.
    }

  });

$('.popup-video').magnificPopup({

    type: 'iframe',
    mainClass: 'mfp-zoom-in',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
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
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });




// const bitcoinPath =  [{left:100, top:250}, {left:300, top:0}, {left:500, top:400}]


//    const tlTopSection = new TimelineMax();
//     const tlSecondSection = new TimelineMax();
//     const tlThirdSection = new TimelineMax();
//     const tlFourthSection = new TimelineMax();
//     const tlFifthSection = new TimelineMax();
//     const tlSixSection = new TimelineMax();

//     const tlbit = new TimelineMax();

//     tlbit
//       .to('.bitcoin', 1, {
//         bezier:{curviness: 0.3, values:bitcoinPath}, ease:Power1.easeInOut
//       })

//     tlTopSection


//       .fromTo('.header', 1.5, {
//         opacity: 0
//       }, {
//         opacity: 1
//       }, 0.4)
//       .fromTo('.s-top__head', 1.5, {
//         opacity: 0,
//         y: 50
//       }, {
//         opacity: 1,
//         y: 0
//       }, 0.5)
//       .fromTo('.calc-block', 1.5, {
//         opacity: 0,
//         y: 30,
//         x: -10
//       }, {
//         opacity: 1,
//         y: 0,
//         x: 0
//       }, 1)
//       .fromTo('.video-block__inner', 1.5, {
//         opacity: 0,
//         y: 20
//       }, {
//         opacity: 1,
//         y: 0
//       }, 1)
//       .fromTo('.video-block__content', 1.5, {
//         opacity: 0,
//         y: -80,
//         x: 30
//       }, {
//         opacity: 1,
//         y: -115,
//         x: 0
//       }, 1);


//     tlSecondSection

//       .fromTo('.main-map__text', 0.5, {
//         opacity: 0,
//         y: 50
//       }, {
//         opacity: 1,
//         y: 0
//       }, 0.1)

//       .fromTo('.main-map__pictures', 1, {
//         opacity: 0,
//         scale: 0.6
//       }, {
//         opacity: 1,
//         scale: 0.9
//       }, 0.1)
//       .fromTo('.main-map__pin', 0.5, {
//         opacity: 0
//       }, {
//         opacity: 1,
//         y: 0
//       }, 1);


//     tlThirdSection
//     .fromTo('.road-map__title, .road-map__subtitle', 1.2, {
//         opacity: 0,
//         y: 20
//       }, {
//         opacity: 1,
//         y: 0
//       }, 0.2)
//     .fromTo('.road-map__icon, .road-map__mwt', 1.2, {
//         opacity: 0,
//         y: 20
//       }, {
//         opacity: 1,
//         y: 0
//       }, 0.6)
//     .fromTo('.road-map__text', 1.4, {
//         opacity: 0,
//         y: 10
//       }, {
//         opacity: 1,
//         y: 0
//       }, 0.8)
//       .fromTo('.circle--green', 1, {
//         opacity: 0,
//         scale: 0
//       }, {
//         opacity: 1,
//         scale: 1
//       }, 0.5);
//       if ($(window).width() < 480) {
//          tlThirdSection.fromTo('.line--green', 1, {
//         opacity: 0,
//         height: 0
//       }, {
//         opacity: 1,
//         height: '100%'
//       }, 0.8);
//       }
//       else {
//        tlThirdSection.fromTo('.line--green', 1, {
//         opacity: 0,
//         width: 0
//       }, {
//         opacity: 1,
//         width: '100%'
//       }, 0.8);

//       }



//     tlFourthSection
//       .fromTo('.main-about__title', 1, {
//         opacity: 0,
//         x: -20
//       }, {
//         opacity: 1,
//         x: 0
//       }, 0.1)
//       .fromTo('.main-about__decr', 1, {
//         opacity: 0,
//         x: 20
//       }, {
//         opacity: 1,
//         x: 0
//       }, 0.3)
//       .fromTo('.main-about__item', 1, {
//         opacity: 0,
//         y: 20
//       }, {
//         opacity: 1,
//         y: 0
//       }, 0.8)
//       .fromTo('.main-about-item__top, .main-about-item__bottom', 1, {
//         opacity: 0,
//         y: 20
//       }, {
//         opacity: 1,
//         y: 0
//       }, 1.2);

//     tlFifthSection
//       .fromTo('.advan__title', 1, {
//         opacity: 0,
//         y: -20
//       }, {
//         opacity: 1,
//         y: 0
//       }, 0.8)
//       .fromTo('.advan__item', 1, {
//         opacity: 0,
//         y: 20
//       }, {
//         opacity: 1,
//         y: 0
//       }, 1.2);

//     tlSixSection
//       .fromTo('.question__text', 1, {
//         opacity: 0,
//         x: -20
//       }, {
//         opacity: 1,
//         x: 0
//       }, 0.8)
//       .fromTo('.question__form', 1, {
//         opacity: 0,
//         x: 20
//       }, {
//         opacity: 1,
//         x: 0
//       }, 1.2)




//     const controller = new ScrollMagic.Controller();



//     const secondScene = new ScrollMagic.Scene({
//         triggerElement: '.s-top__trigger',

//         triggerHook: 0.2
//       })
//       .setTween(tlSecondSection)
//       // .addIndicators()
//       //.addIndicators({
//       //  name: "1 (duration: 0)"
//       //  })
//       .addTo(controller);


//     const thirdScene = new ScrollMagic.Scene({
//         triggerElement: '.road-map',
//         triggerHook: 0.4,
//         // offset: '25%'
//       })
//       .setTween(tlThirdSection)
//       //.addIndicators({
//       //    name: "2 (duration: 0)"
//       //})
//       .addTo(controller);

//     const fourthScene = new ScrollMagic.Scene({
//         triggerElement: '.main-about',
//         triggerHook: .5
//       })
//       .setTween(tlFourthSection)
//       //.addIndicators({
//       //  name: "3 (duration: 0)"
//       //})
//       .addTo(controller);

//     const fifthScene = new ScrollMagic.Scene({
//         triggerElement: '.advan',
//         triggerHook: 0.8
//       })
//       .setTween(tlFifthSection)
//       //.addIndicators({
//       //  name: "4 (duration: 0)"
//       //})
//       .addTo(controller);

//     const sixScene = new ScrollMagic.Scene({
//         triggerElement: '.question',
//         triggerHook: 0.8
//       })
//       .setTween(tlSixSection)
//       //.addIndicators({
//       //  name: "5 (duration: 0)"
//       //})
//       .addTo(controller);


});