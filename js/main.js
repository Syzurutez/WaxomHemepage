$(function () {
	$('.header_slider').slick({
		nextArrow: '<button type="button" class="slick_btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick_btn slick-prev"></button>',
		infinite: false,
		dots: true
	});

	$('.tabs').lightTabs();


	const player = new Plyr("#player", {
		ratio: '1920:705',
		displayDuration: false,
		invertTime: false
	});
	player.poster = 'img/play_ph.jpg';
	player.getElementsByClassName('.plyr__control').appendChild(div);
	player.fullscreen.active;


});
