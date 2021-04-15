$(function () {
    
    "use strict";
	 /* smooth scroll
  -------------------------------------------------------*/
	  $.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 900,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70,         // offste (in px) for fixed top navigation
		upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

	  });
	
	 var win = $(window);
           
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });
	
	/* close navbar-collapse when a  clicked */
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').removeClass('show');
		$('.navbar .bars').removeClass('bars-rotate'); 
    });
	
	$('.navbar .bars').click(function () {
        $(this).toggleClass('bars-rotate'); 
    });
	
	$('.sidebar-box .close-menu').on('click', function(){
		$('.sidebar-box').removeClass('show');
	});
	
	$('.bars-2').on('click', function(e){
		e.preventDefault();
		$('.sidebar-box').addClass('show');
	});
									 
	
	 /* scroll-top-btn */
	var  scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {  
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
	
    /* Click On scroll-top-btn */ 
    scrollButton.on('click', function () {
        $('html,body').animate({ scrollTop : 0 }, 1200);
    });
	
	/* wow */
	new WOW().init();

	/* counter */
	$('.count').counterUp({
        delay: 20,
        time: 1500
    });
	
	/* welcome-slider slider */
	$('.welcome-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
		nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
    });
	
	/* team-area slider */
	$('.team-area .owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 650,
		responsiveClass:true,
        responsive : {
            992 : {
                items: 4
            },
    
            768 : {
                items: 3
            },
			
			576 : {
				items: 2
			},
            
            0 : {
                items: 1
            }
        }
    });
	
	/* tabs in features section */
	$('.services-area .tab').on('click', function(){
		var myID = $(this).attr('id');
		$(this).addClass('active');
		$('.tab').not(this).removeClass('active');
		$('#' + myID + '-content').fadeIn(700).siblings().hide();
	});
	
	 
	
	/* testimonials slider */
	$('.testimonials .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
		mouseDrag: true
    });
		 	
	/*  skills-area section  */
    win.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
	
	
	
	/* contact-area section */
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	 
	 
});



$(window).on("load",function (){
	
     $('.load-wrapp').fadeOut(100);
       
   /* isotope */
    $('.grid').isotope({
      // options
      itemSelector: '.items'
    });

    var $grid = $('.grid').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });
	
	$('.element').typed({
        strings: [ " We Are Creative Agency",  "  Grow Your Business With Us", " We Are Kholod"],
        loop: true,
        showCursor: true,
        startDelay: 1500,
        backDelay: 2500,
		typeSpeed: 60
    });
	
	
	// text animated
	$('.tlt').textillate({
        loop: true,
        // out animation settings.
        in: {
            // set the delay factor applied to each consecutive character         
            delayScale: 10,

            // set the delay between each character
            delay: 0,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false,

            // callback that executes once the animation has finished
            callback: function () {}
        },
        // out animation settings.
        out: {
            delayScale: 0.2,
            delay: 5,
            sync: false,
            shuffle: false,
            reverse: true,
            callback: function () {}
        },

       // callback that executes once textillate has finished
        callback: function () {} ,

    });

	 
});