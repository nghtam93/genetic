(function($) {
	"use strict";
	$(document).ready(function() {
    $('ul.link li.search a').click(function() {
			$(this).toggleClass('active');
			$(this).next().slideToggle('fast');

			return false;
		});

		$( '#main-slide' ).sliderPro({
			width: 1920,
			height: 945,
			arrows: true,
			buttons: false,
			waitForLayers: true,
			fade: true,
			autoplay: false,
			autoScaleLayers: false,
			touchSwipe: false,
			breakpoints: {
				767: {
					aspectRatio: 1.3
				},
				600: {
					aspectRatio: 1
				}
			}
		});

		$('.show-order').click(function() {
			setTimeout(function(){
				$( '.slide-menu-order' ).sliderPro({
					width: 500,
					height: 300,
					arrows: true,
					buttons: false,
					waitForLayers: true,
					fade: true,
					autoScaleLayers: false,
					touchSwipe: false,
					breakpoints: {
						767: {
							// aspectRatio: 1.3
						},
						600: {
							// aspectRatio: 1
						}
					}
				});
			}, 200);

		});



		$('.navbar-nav li').each(function() {
			if( $(this).find("ul").length > 0 )  {
				$(this).addClass('has_under');
			}
 		})

		$('.navbar-nav li.has_under > a').click(function()  {
			$(this).next().slideToggle();
			$(this).parent().toggleClass('li-open');
			return false;
		});

		$('.take-care .title h3').click( function() {
			$('.take-care').toggleClass('open-form');
		});

		$('.play-video').click(function() {
			$(this).fadeOut();
			var $dataVideo = $(this).attr('data-video');
			$(this).next().attr('src',$dataVideo);
		});

		jQuery('.order ul li').each(function() {
	      var spinner = jQuery(this),
	        input = spinner.find('input[type="number"]'),
	        btnUp = spinner.find('.drain'),
	        btnDown = spinner.find('.minus'),
	        min = input.attr('min'),
	        max = input.attr('max');

	      btnUp.click(function() {
	        var oldValue = parseFloat(input.val());
	        if (oldValue >= max) {
	          var newVal = oldValue;
	        } else {
	          var newVal = oldValue + 1;
	        }
	        spinner.find("input").val(newVal);
	        spinner.find("input").trigger("change");
	      });

	      btnDown.click(function() {
	        var oldValue = parseFloat(input.val());
	        if (oldValue <= min) {
	          var newVal = oldValue;
	        } else {
	          var newVal = oldValue - 1;
	        }
	        spinner.find("input").val(newVal);
	        spinner.find("input").trigger("change");
	      });

	    });

	});
})(jQuery);
