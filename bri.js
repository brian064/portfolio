/*This is the JavaScript file for Bri Portfolio*/
$(document).ready(parallaxMain);

function parallaxMain() {

  $("body").hide();
  $("body").fadeIn(2000);


  // back to top animation by clicking topButton
  $(".topButton").click(function() {
    $("body").animate({
      scrollTop:0
    }, 1300)
  })

  // Nav redirect animations
  $(".workBtn").click(function() {
    $("body").animate({
      scrollTop: $(".workSec").offset().top
    }, 1300)
  })

  $(".workBtn1").click(function() {
    $("body").animate({
      scrollTop: $(".workSec").offset().top
    }, 1300)
  })

  $(".aboutBtn").click(function() {
    $("body").animate({
      scrollTop: $(".aboutSec").offset().top
    }, 1300)
  })

  $(".aboutBtn1").click(function() {
    $("body").animate({
      scrollTop: $(".aboutSec").offset().top
    }, 1300)
  })

  $(".conBtn").click(function() {
    $("body").animate({
      scrollTop: $(".conSec").offset().top
    }, 1300)
  })

  $(".conBtn1").click(function() {
    $("body").animate({
      scrollTop: $(".conSec").offset().top
    }, 1300)
  })

  //change nav colors for workSec
  $(".workSec").waypoint(function (direction) {
    if (direction == "down") {
      $(".nav li a").css({
        "color" : "white"
      })

      $(".workBtn").css({
        "opacity" : "1.0"
      })

      $(".aboutBtn").css({
        "opacity" : "0.40"
      })

      $(".conBtn").css({
        "opacity" : "0.40"
      })
    }

    else {
      $(".nav li a").css({
        "color" : "#262626"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })
    }

  }, {offset: "10%"});

  //change nav colors for aboutSec
  $(".aboutSec").waypoint(function (direction) {
    if (direction == "down") {
      $(".nav li a").css({
        "color" : "#262626"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })

      $(".aboutBtn").css({
        "opacity" : "1.0"
      })

      $(".conBtn").css({
        "opacity" : "0.40"
      })
    }

    else {
      $(".nav li a").css({
        "color" : "white"
      })

      $(".workBtn").css({
        "opacity" : "1.0"
      })

      $(".aboutBtn").css({
        "opacity" : "0.40"
      })
    }

  }, {offset: "10%"});

  //change nav colors for aboutSec
  $(".conSec").waypoint(function (direction) {
    if (direction == "down") {
      $(".nav li a").css({
        "color" : "white"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })

      $(".aboutBtn").css({
        "opacity" : "0.40"
      })

      $(".conBtn").css({
        "opacity" : "1.0"
      })
    }

    else {
      $(".nav li a").css({
        "color" : "#262626"
      })

      $(".workBtn").css({
        "opacity" : "0.40"
      })

      $(".aboutBtn").css({
        "opacity" : "1.0"
      })

      $(".conBtn").css({
        "opacity" : "0.40"
      })
    }

  }, {offset: "10%"});

  //Work Section Thumbnail Sizing Functions

  /*var imgHeight = $(".imageHolder").width();
  var imgWidth = $(".imageHolder").height();

	$(".imageHolder").css({"height" : imgHeight})*/

	// adjust size of thumbnails
	$(window).resize(function() {
		imgHeight = $(".imageHolder").width();
		$(".imageHolder").css({"height" : imgHeight})
	});

  // FOR CAPTIONS ON IMAGES

    //inover
  $(".inover").mouseover(function () {
    $(".inover .caption").toggleClass("caption-visible");
    $(".inover .dimmer").toggleClass("dimmer-visible");
  });

  $(".inover").mouseout(function () {
    $(".inover .caption").toggleClass("caption-visible");
    $(".inover .dimmer").toggleClass("dimmer-visible");
  });

    //reme
  $(".reme").mouseover(function () {
    $(".reme .caption").toggleClass("caption-visible");
    $(".reme .dimmer").toggleClass("dimmer-visible");
  });

  $(".reme").mouseout(function () {
    $(".reme .caption").toggleClass("caption-visible");
    $(".reme .dimmer").toggleClass("dimmer-visible");
  });

    //byui
  $(".byui").mouseover(function () {
    $(".byui .caption").toggleClass("caption-visible");
    $(".byui .dimmer").toggleClass("dimmer-visible");
  });

  $(".byui").mouseout(function () {
    $(".byui .caption").toggleClass("caption-visible");
    $(".byui .dimmer").toggleClass("dimmer-visible");
  });

    //beachjam
  $(".beachjam").mouseover(function () {
    $(".beachjam .caption").toggleClass("caption-visible");
    $(".beachjam .dimmer").toggleClass("dimmer-visible");
  });

  $(".beachjam").mouseout(function () {
    $(".beachjam .caption").toggleClass("caption-visible");
    $(".beachjam .dimmer").toggleClass("dimmer-visible");
  });

    //coming soon
  $(".mnlcity").mouseover(function () {
    $(".mnlcity .caption").toggleClass("caption-visible");
    $(".mnlcity .dimmer").toggleClass("dimmer-visible");
  });

  $(".mnlcity").mouseout(function () {
    $(".mnlcity .caption").toggleClass("caption-visible");
    $(".mnlcity .dimmer").toggleClass("dimmer-visible");
  });



  //Window Scrolling Functions
	$(window).scroll(function() {



		if ($(window).scrollTop()>300) {
			$(".topButton1").fadeIn();
		}

		else {
			$(".topButton1").fadeOut();
		}






    // PARALLAX EFFECT on welcomeSec Elements
		var wScroll = $(this).scrollTop();

		$(".welcomeSec .mainLogo").css({
			"transform" : "translate(0, -"+ wScroll/2 +"px)"
		});

		$(".welcomeSec h1").css({
			"transform" : "translate(0, -"+ wScroll/5 +"px)"
		});

    $(".welcomeSec h2").css({
			"transform" : "translate(0, -"+ wScroll/4 +"px)"
		});

		console.log(wScroll);


	});






}
