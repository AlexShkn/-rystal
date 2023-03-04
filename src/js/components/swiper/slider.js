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

const workBulletStart = document.querySelector('[data-work-bullet-start]')
const workBulletMiddle = document.querySelector('[data-work-bullet-middle]')
const workBulletEnd = document.querySelector('[data-work-bullet-end]')

const worksSlider = new Swiper('.works-slider', {
	observer: true,
	observeParents: true,
	spaceBetween: 28,
	navigation: {
		nextEl: '.works-slider-next',
		prevEl: '.works-slider-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		991: {
			spaceBetween: 15,
			slidesPerView: 3,
		},
	},

	on: {
		//Если слайд последний
		reachEnd: () => {
			workBulletEnd.classList.add('_active')
			workBulletMiddle.classList.remove('_active')
		},
		//Если слайд первый
		reachBeginning: () => {
			workBulletStart.classList.add('_active')
			workBulletMiddle.classList.remove('_active')
		},
		// Если не начальная и не конечная позиция
		fromEdge: () => {
			workBulletStart.classList.remove('_active')
			workBulletEnd.classList.remove('_active')
			workBulletMiddle.classList.add('_active')
		},
	},
})
