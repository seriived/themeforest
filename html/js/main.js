$(document).ready(function(){
	$('.main-slider').slick();
	$('.gallery-slider .slides').slick({
		adaptiveHeight: true,
		variableWidth: true,
		centerMode: true,
		slidesToShow: 3,
		infinite: false,
		initialSlide: 3,
		prevArrow: '.gallery-prev',
		nextArrow: '.gallery-next',
	});

	$('.news-slider .slides').slick({
		adaptiveHeight: true,
		variableWidth: false,
		centerMode: false,
		slidesToShow: 2,
		infinite: false,
		initialSlide: 0,
		slidesToScroll: 2
	});

	$('.gallery-slider .filter-box a').on('click', function(){
		var selected = $(this).attr('filter');
		$('.gallery-slider .filter-box a').removeClass('active');
		$(this).addClass('active');

		$('.gallery-slider .slides').slick('slickUnfilter');
		if(selected !== 'all'){
			$('.gallery-slider .slides').slick('slickFilter', '.' + selected);
		}
	});

	$('form.floating-label input, form.floating-label textarea').on('focus', function(){
		$(this).parent().addClass('active');
	});

	$('form.floating-label input, form.floating-label textarea').on('blur', function(){
		if($(this).val().trim() == ''){
			$(this).parent().removeClass('active');
		}
	});
});