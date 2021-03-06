$(document).on('ready', function () {
    
    "use strict";
    
    var win = $(window);
            
    
    win.on('load', function () {
        $('.loading-overlay').fadeOut(100);
    });
    
   
  
    win.on("scroll", function () {
        var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#pageHeader").addClass("shrink");
        } else {
            $("#pageHeader").removeClass("shrink");
        }
    });

     // Bootstrap Scroll Spy //
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });

    //  section skills
    
    var wind = $(window);

    var main_height = $(".main-height").outerHeight();
 
    wind.on('scroll', function () {
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
    
     // Collapse navigation on click on nav anchor in Mobile //
       
    $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });

     // navbar Scroll //
     
    $(".navbar-nav li a, .navbar-brand, .button a, .a-btn").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
    
    var mixerContainer = $('#portfolio #change'),
        // portfolio (MIXITUP)
        mixer = mixitup(mixerContainer, {
            selectors: {
                control: '#portfolio ul > li'
            }
        }),
        
        scrollButton = $('#scroll-top');
    
   
    $('.my-portfolio ul li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
     
    
    // Caching The Scroll Top Element
    
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
	
	// our-faqs section
	
	$('.our-faqs .box p:first').css("display","block");
	
    $('.our-faqs .box h3').on("click", function(){
        $(this).next().slideToggle(500);
        $(".our-faqs .box p").not($(this).next()).slideUp(500); 
    });
	
	 // slider of slider section
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });
    
    
    // slider of clients section
    $('.clients .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });
    
    // slider of team section
    $('.team .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 3
            },
    
            768 : {
                items: 2
            },
            
            0 : {
                items: 1
            }
        }
        
    });
    
     $('.counter').counterUp({
    delay: 50,
    time: 2000
});
	
	$('.element').typed({
        strings: [ " laits corporels", "crèmes visage", " shampoings", "gels douche", "crèmes mains"],
        loop: true,
        showCursor: true,
        startDelay: 1000,
        backDelay: 1200,
        typeSpeed: 50
    });
	
	
	$('.tlt').textillate({
        loop: true,
        // out animation settings.
        in: {
            // set the delay factor applied to each consecutive character         
            delayScale: 0.8,

            // set the delay between each character
            delay: 100,

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
            delayScale: 10,
            delay: 5,
            sync: false,
            shuffle: false,
            reverse: true,
            callback: function () {}
        },

       // callback that executes once textillate has finished
        callback: function () {} ,

    });
	
	
	// contact form
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