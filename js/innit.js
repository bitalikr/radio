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
  		infinite:false
	})
})