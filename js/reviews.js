new Swiper('.reviews-slider', {
	speed: 300,
	slidesPerView: 3,
	navigation: {
		nextEl: '.diplomas-slider__btn-next',
		prevEl: '.diplomas-slider__btn-prev'
	},
	effect: 'coverflow',
	coverflowEffects: {
		rotate: 20,
		stretch: 50,
		slideShadows: true,
	}
	// spaceBetween: 60,
	// breakpoints: {
	// 	636: {
	// 		spaceBetween: 60,
	// 		slidesPerView: 2,
	// 	},
	// 	926: {
	// 		spaceBetween: 60,
	// 		slidesPerView: 3,
	// 	},
	// },
});