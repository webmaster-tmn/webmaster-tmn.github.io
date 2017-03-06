  jQuery(document).ready(function(){
        jQuery('.scrollbar-inner').scrollbar();
        $('.slider').slick({
				  dots: true,
				  arrows: true,
				  infinite: true,
				  speed: 300,
				  autoplay: true,
  				autoplaySpeed: 5000,
				  nextArrow: '<i class="fa fa-chevron-left sl-arrow sl-next" aria-hidden="true"></i>',
        	prevArrow: '<i class="fa fa-chevron-right sl-arrow sl-prev" aria-hidden="true"></i>',
				  
				  
					});
      });