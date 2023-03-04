const clientsSlider = new Swiper('.clients-slider', {
	observer: true,
	observeParents: true,
	spaceBetween: 70,
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.clients-slider-next',
		prevEl: '.clients-slider-prev',
	},
	pagination: {
		el: '.clients__pagination',
		clickable: true,
	},
	breakpoints: {
		320: {
			spaceBetween: 10,
		},
		600: {
			spaceBetween: 20,
		},
		768: {
			spaceBetween: 30,
		},
	},
})
