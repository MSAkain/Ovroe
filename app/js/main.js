$(function () {


	$('.arrivals__list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-arrow arrow-right">prev</button>',
		nextArrow: '<button type="button" class="slick-arrow arrow-left">next</button>',
	});

	$('.category__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-arrow arrow-right">prev</button>',
		nextArrow: '<button type="button" class="slick-arrow arrow-left">next</button>',
	});


	$('.header__input').click(function () {
		$(this).toggleClass('header__input--active')
		$('.header__search').toggleClass('header__search--active')
	});

});