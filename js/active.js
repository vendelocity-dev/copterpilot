(function ($) {
	"use strict";

    $(document).ready(function($) {
        
        /* Paralax JS */ 
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
        
        /*Responsive Nav*/
        $('ul.nav.navbar-nav li a').on('click', function(){
    		$('.navbar-collapse').removeClass('in');
    	});
        
        /* 
        * Owl Carousel Active js 
        */         
        
        /*Slider Owl Carousel Fade JS*/
         $('#midland-slide-wrapper').owlCarousel({
            items:1,
            nav:true,
            dots:false,
            autoplay:true,
            loop:true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
        
        
        /* estimonial Owl Carousel JS*/
         $('.testimonial-wraper').owlCarousel({
            items:3,
            nav:true,
            dots:false,
            autoplay:false,
            loop:true,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
             responsive:{
	            0:{
	                items: 1,
	            },
	            600:{
	                items: 2,
	            },
	            1000:{
	                items: 3,
	            }
        	}
        }); 
        
        
        /* Team Owl Carousel JS*/
         $('.team-wrap').owlCarousel({
            items:4,
            nav:false,
            dots:false,
            autoplay:false,
            loop:true,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
             responsive:{
                0:{
                    items: 1,
                },
                600:{
                    items: 2,
                },
                1000:{
                    items: 4,
                }
            }
        });
        
        
        /* About Owl Carousel JS*/
         $('.about-left').owlCarousel({
            items:1,
            dots:true,
            nav:false,
            autoplay:true,
            loop:true,
        });
        
        /* Twitter Owl Carousel JS*/
         $('.twitter-content-wrapper').owlCarousel({
            items:1,
            dots:true,
            nav:false,
            autoplay:false,
            loop:true,
        });
        
        /*Slider Animation JS*/
        $("#midland-slide-wrapper").on("translate.owl.carousel", function(){
            $("#midland-slide-wrapper h1").removeClass("animated fadeInUp").css("opacity", "0");
            $("#midland-slide-wrapper p").removeClass("animated fadeInUp").css("opacity", "0");
            $("#midland-slide-wrapper .hero-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
		
		$("#midland-slide-wrapper").on("translated.owl.carousel", function(){
            $("#midland-slide-wrapper h1").addClass("animated fadeInUp").css("opacity", "1");
            $("#midland-slide-wrapper p").addClass("animated fadeInUp").css("opacity", "1");
            $("#midland-slide-wrapper .hero-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
        /* Counter JS */
    	$('.count').counterUp({
            delay: 10,
            time: 1000
        });
        
        
        /* Sticky JS */
        $(".header-area").sticky({topSpacing:0});
        
        /* Smooth Menu JS */
        $('li.smooth-menu a').bind('click', function(event) {
	        var $anchor = $(this);
	        var headerH = '50';
	        $('html, body').stop().animate({
	            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
	        }, 1200, 'easeInOutQuart');

	        event.preventDefault();
	    }); 
        
        /* Scrool Animation JS */
        $('body').scrollspy({ 
			target: '.navbar-collapse',
			offset: 95
		}); 
        
        /* Magnific Popup JS */
        $('.protfolio-btn a').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }          
        }); 
        
        /* MixItUp JS*/
        $('#protfolio-wrapper').mixItUp();
        
        /* Accordian JS */
        $('.accordion-toggle').on('click', function(){
            $(this).closest('.panel-group').children().each(function(){
            $(this).find('>.panel-heading').removeClass('active');
             });

            $(this).closest('.panel-heading').toggleClass('active');
        });
        
        
        /* Scroll Up JS*/
        $('.scroll-up').fadeOut();
        $(window).scroll(function () {

            if ($(this).scrollTop() > 200) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
        $('.scroll-up').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        
        /* Google Map JS */
        $.gmap3({
            key: 'AIzaSyCic-Bvts1kevIx7_5fY6jIS7Zpa1I0-N0'
        });


         $(function () {
            $('.map')
              .gmap3({
                center: [34.2098802,-118.4919825],
                zoom: 12,
                scrollwheel: false,
              })
              .cluster({
                markers: [
                  {position: [34.2098802, -118.4919825]},
                ],
                cb: function (markers) {
                  if (markers.length > 1) { // 1 marker stay unchanged (because cb returns nothing)
                    if (markers.length < 20) {
                      return {
                        content: "<div class='cluster cluster-1'>" + markers.length + "</div>",
                        x: -26,
                        y: -26
                      };
                    }
                  }
                }
              });
          });

    });	

    
	


    jQuery(window).load(function(){
        /* Site Preloader JS */
        $(".midland-preloader-wrapper").fadeOut("500")        
    });


}(jQuery));	