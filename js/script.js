$(function(){
	// resize
	function heightDetect(){
		$('.fon').css('height', $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
	// burger
	$('.burger').click(doIt);
  function doIt(){
    $('.top-navigation').toggle(500);
	}
	// arrow
	arrowTop();
	function arrowTop(){
	  var offset = 50,
	     $back_to_top = $('.navbar-fixed-top');
	     $(window).scroll(function(){
	      ($(this).scrollTop() > offset) ? $back_to_top.addClass('bg') : $back_to_top.removeClass('bg');
	     });
	}


	 $('.mt').on('click', function() {
        $(this).toggleClass('open');
        $('body').find('.menuOverlay').toggleClass('blackout');
        
        if ($(this).hasClass('open')) {
            $(this).next().css({
                right: '0',
                opacity: '1'
            });
        } else {
            $(this).next().css({
                right: '-320px',
                opacity: '0'
            });
        }
    });
    $('.mc').on('click',function() {
    	$(this).parent().prev().removeClass('open');
    	$(this).parent().css({
                right: '-320px',
                opacity: '0'
            });
    });
})

// $(document).ready(function(){
// 	$('.menu-bottom').on('mouseenter', function(){
//  		$('.menu-bottom i').show(500); 
// 	});
// 	$('.menu-bottom').on('mouseleave', function(){
//  		$('.menu-bottom i').hide(500); 
// 	});
// })
