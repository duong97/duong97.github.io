jQuery(window).load(function(){
	'use strict';
	// Loader
	jQuery('.loader .inner').fadeOut(500, function(){
		jQuery('.loader').fadeOut(750);
	});

	// Portfolio
	var $container = jQuery('.portfolio-items');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	jQuery('#filters a').click(function(){
		jQuery('#filters .current').removeClass('current');
		jQuery(this).addClass('current');

		var selector = jQuery(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});

	/* Portfolio Feed */
	var $portfolioPage = jQuery('.portfoliopage');
	$portfolioPage.isotope({
		layoutMode: 'fitRows',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});



});

jQuery(document).ready(function($){
	'use strict';

	$('.fill-input, .filljs').css({'display':'none'});

	// Scroll
	$('.scrollto, .scrollmenu .scroll a').click(function(e){
		e.preventDefault();
		var scrollElm = $(this).attr('href').split('#');
		scrollElm = scrollElm[scrollElm.length-1];
		var scrollTo = $('#'+scrollElm).offset().top;
		$('html, body').animate({ scrollTop: scrollTo - 50 }, "slow");
	});

	setTimeout(function(){
		if(location.hash) {
			window.scrollTo(0, 0);
			var scrollElm = window.location.hash.substring(1);
			var scrollTo = $('#'+scrollElm).offset().top;
			$('html, body').animate({ scrollTop: scrollTo - 50 }, "slow");
		}
	}, 1);

	// Slides
	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	});
	if($('.welcomeslide').length < 2)
	{
		$('#slides').superslides('stop');
	}

	// Skills
	var owl = $("#skills-slide");
	owl.owlCarousel({
		autoPlay:true,
		items:4,
		itemsDesktop:[1000,4],
		itemsDesktopSmall:[900,3],
		itemsTablet:[600,2],
		itemsMobile:[480,1]
	});

	// Relateds
	var relateds = $("#relateds");
	relateds.owlCarousel({
		autoPlay:true,
		items:3,
		itemsDesktop:[1000,3],
		itemsDesktopSmall:[900,3],
		itemsTablet:[600,2],
		itemsMobile:[480,1]
	});

	// Portfolio modal
	$('.fullwidth').boxer();

	// Animations
	var windowH = $(window).height();

	$(window).bind('resize', function () {
		windowH = $(window).height();
	});

	$('.hidethis').bind('inview', function (event, visible) {
		if (visible === true) {
			$(this).removeClass('hidethis');
		}
	});

	var servicesTopOffset = 0;
	var timelineTopOffset = 0;
	var skillsTopOffset = 0;
	if($('.services .services-inner').length)
	{
		servicesTopOffset = $('.services .services-inner').offset().top;
	};
	if($('.timeline').length)
	{
		timelineTopOffset = $('.timeline').offset().top;
	};
	if($('.skills').length)
	{
		skillsTopOffset = $('.skills').offset().top;
	};

	$(window).scroll(function(){
		// Fixed Navbar on Home Page
		if($('body').hasClass('home'))
		{
			if(window.pageYOffset > windowH)
			{
				$('.navbar-flat').addClass('navbar-fixed-top');
				$('.firstSec').addClass('fixed');
			}
			else
			{
				if($('#welcome').length)
				{
					$('.navbar-flat').removeClass('navbar-fixed-top');
					$('.firstSec').removeClass('fixed');
				}
			}
		}
		// Timeline animation
		if(window.pageYOffset > timelineTopOffset-windowH+200)
		{
			$('.timeline li').addClass('fadeInUp');
		}
		// Skills Chart animation
		if(window.pageYOffset > skillsTopOffset-windowH+200)
		{
			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#d82c2e',
				trackColor: '#bdbdbd',
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}
	});

	$(".navbar-nav li a").click(function(event) {
		if($('.navbar-collapse').hasClass('in')){
			$(".navbar-collapse").collapse('hide');
		};
	});

	// Fixed Navbar on subpages
	if(!$('body').hasClass('home') || !$('#welcome').length)
	{
		$('.navbar-flat').addClass('navbar-fixed-top');
		$('.section:eq(0)').css({'padding-top':'80px'});
	}

	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function(){
			if($(this).val()=="" && $(this).attr("placeholder")!=""){
				$(this).val($(this).attr("placeholder"));
				$(this).focus(function(){
					if($(this).val()==$(this).attr("placeholder")) $(this).val("");
				});
				$(this).blur(function(){
					if($(this).val()=="") $(this).val($(this).attr("placeholder"));
				});
			}
		});
	}

	/* Fit Videos */
	$(".post-video").fitVids();

	/* Portfolio Gallery */
	//$('.post-gallery').bxSlider({'pager':false});

});