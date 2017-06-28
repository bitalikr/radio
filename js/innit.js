$(document).ready(function () {

	// slick slider

	$('#banner').slick({
		arrows : false,
		dots: true,
		autoplay : true,
		autoplaySpeed : 5000
	});

	$('.roll__car').slick({
		arrows : true,
		dots : false,
		slidesToShow: 5,
  		slidesToScroll: 1,
  		swipeToSlide:true,
  		infinite:false,
  		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 860,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 660,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    ]
	})

	// catalog
	var html = document.documentElement;

	$(".catalog-ul li").hover(function(){
		$(this).children('.catalog-ul').fadeIn(200);
	},
	function(){
		if(html.clientWidth > 768){
			$(this).children('.catalog-ul').fadeOut(200);
		}else{
			$(this).children('.catalog-ul').fadeOut(0);
		}
	});

	$('#catalog').click(function(){
		$('.catalog').fadeToggle(200);
		$('#fix').fadeIn(200);
	});
	$('#fix').click(function(){
		$('.catalog').fadeOut(200);
		$(this).fadeOut(200);
	});

	$('#menu-btn').click(function(){
		$('.nav__ul').slideToggle(200);
	});

	/*size block*/

	function sizeBlock(){
		if(html.clientWidth < 420){
			$('footer').css({
				'padding-bottom': $('.footer__contact').height() + $('.foot__white-ul').height() + 30
			})
		}else{
			$('footer').removeAttr('style');
		}
		if(html.clientWidth > 768){
			$('.catalog-ul-middle').css('height',$('.catalog').css('height'));		
		}
	};
	sizeBlock();
	$(window).resize(function(){
		sizeBlock()
	});


	// out container click 

	$(document).click(function (e) {
	    var container = $(".nav__ul_wr");
	    if (container.has(e.target).length === 0){
	        $(container).find('.nav__ul').slideUp(300);
	              
	    }
	});
})