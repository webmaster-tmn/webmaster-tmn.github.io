$(function() {


$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#overlay').fadeIn(600, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('.success') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1}, 600); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
			$('.success, #overlay') 
					.css('display', 'block');
			$('.success, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('.success')
			.animate({opacity: 1}, 600,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(600); // скрывaем пoдлoжку
					
				}
			);
	});setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();
			}, 1);
		});
		return false;
	});

$("a[href='#callback'], a[href='#callback-prot']").click(function() {
		var dataForm = $(this).data("form");
		$(".form-callback [name=admin-data]").val(dataForm);
	});
	
		$('.comment__link').each(function(e) {

 		var th = $(this);

 			th.attr("href", "#comment-img-" + e)
 					.find(".comment-popup")
 					.attr("id", "comment-img-" + e);
 });
		$(".comment__link a:first").remove();

 $('.our-works-link').each(function(e) {

 		var th = $(this);

 			th.attr("href", "#our-works-img-" + e)
 					.find(".our-works-popup")
 					.attr("id", "our-works-img-" + e);
 });
 $(".comment__link, .our-works-link, a[href='#callback'], a[href='#callback-prot']").magnificPopup({
  mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
		removalDelay: 300,
		mainClass: 'mfp-zoom-in'
  // other options
});


 $('#our-works').owlCarousel({
		items : 3,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
	    mouseDrag: true,
		beforeMove : owlMove,
		afterMove : owlMove,
		afterInit: function() {
			var self = this;
			var el = this.$elem;
			var items = this.$owlItems;
			var len;
			var wrapper = this.$owlWrapper;

			if ($(window).width() > 778) {
				len = items.length - 3;
			}else {
				len = items.length - 2;
			}

			$('#' + el[0].id + 'Slider').slider({
				min: 0,
				max: len * this.itemWidth,
				step: 20,
				value: 0,
				slide: function(event, ui) {
					wrapper[0].attributes.style.value = 'width:' + $(wrapper).width() + 'px; display: block; left: 0px; transform: translate3d( ' + -ui.value + 'px, 0px, 0px); transition: all 50ms ease;' ;
			  	}
			});

		}
	});

	function owlMove(e) {
 		$('#our-works').each(function(){
 			var value = - $(this).find('.owl-wrapper').css('transform').split(',')[4] ;
		 	$(this).parent().find('.owlslider').slider('value', value);
 		}) 	};
 		 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 $(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});


 

});