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

	$('.catalog__category').click(function () {
		$($(this)).toggleClass('catalog__category--active')
		$('.filter-color').toggleClass('filter--active')
	});

	$('.catalog__category').click(function () {
		$($(this)).toggleClass('catalog__category--active')
		$('.filter-size').toggleClass('filter--active')
	});

	$('.catalog__category').click(function () {
		$($(this)).toggleClass('catalog__category--active')
		$('.filter-browse').toggleClass('filter--active')
	});

	$('.catalog__select').click(function () {
		$('.sort').toggleClass('sort--active')
		$($(this)).toggleClass('catalog__select--active')
	});


	$('.catalog__category--color').click(function () {
		$('.filter-size').removeClass('filter--active')
		$('.filter-browse').removeClass('filter--active')
		$('.catalog__category--size').removeClass('catalog__category--active')
		$('.catalog__category--browse').removeClass('catalog__category--active')
	});

	$('.catalog__category--size').click(function () {
		$('.filter-color').removeClass('filter--active')
		$('.filter-browse').removeClass('filter--active')
		$('.catalog__category--color').removeClass('catalog__category--active')
		$('.catalog__category--browse').removeClass('catalog__category--active')
	});

	$('.catalog__category--browse').click(function () {
		$('.filter-color').removeClass('filter--active')
		$('.filter-size').removeClass('filter--active')
		$('.catalog__category--color').removeClass('catalog__category--active')
		$('.catalog__category--size').removeClass('catalog__category--active')
	});
});