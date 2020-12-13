$(function() {
	//tao nut back-to-top
	$('.back-to-top').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop: 0}, 2000);
	});

	//dau back-to-top khi o dau menu
	toggleBackToTop()
	$(window).scroll(function(event) {
		/* Act on the event */
	toggleBackToTop()
	//an hien menu khi scroll xuong va fix-menu
	event.preventDefault();
		if ($(this).scrollTop() > $('#about').offset().top - 1) {
			$('header div.mogo-menu').addClass('fixed-menu');
			$('body').css('padding-top', '104.4px');
		}
		else 
		{
			$('header div.mogo-menu').removeClass('fixed-menu');
			$('body').css('padding-top', '0px');
		}
	});

	//thuc hien smooth scroll tu nav-link toi main section
	$('header nav div.navbar-collapse ul li a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var target = this.hash;
		if (target) {
			var targetObj = $(target);

			$('html, body').stop().animate({
				'scrollTop' : targetObj.offset().top
			}, 1000, 'swing', function(){
				window.location.hash = target;
			})
		}
	});

	//thuc hien counter animation
	$(window).scroll(countAnimation);
	var viewed = false;

	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function countAnimation() {
	  if (isScrolledIntoView($(".fact")) && !viewed) {
	      viewed = true;
	    //   $('.fact .fact-number').each(function () {
	    //   $(this).prop('Counter',0).animate({
	    //       Counter: $(this).text()
	    //   }, {
	    //       duration: 4000,
	    //       easing: 'swing',
	    //       step: function (now) {
	    //           $(this).text(Math.ceil(now));
	    //       }
	    //   });
	    // });
	    $(".fact .fact-number").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo
          },
          {
            duration: 4000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          }
        );
      });
	  }
	}

});

function toggleBackToTop() {
	if ($(window).scrollTop() == 0) {
		$('.back-to-top').hide('slow');		
	}
	else {
		$('.back-to-top').show('slow');	
	}
 }
