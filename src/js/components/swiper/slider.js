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

const worksBulletStart = document.querySelector('[data-works-bullet-start]')
const worksBulletMiddle = document.querySelector('[data-works-bullet-middle]')
const worksBulletEnd = document.querySelector('[data-works-bullet-end]')

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
			worksBulletEnd.classList.add('_active')
			worksBulletMiddle.classList.remove('_active')
		},
		//Если слайд первый
		reachBeginning: () => {
			worksBulletStart.classList.add('_active')
			worksBulletMiddle.classList.remove('_active')
		},
		// Если не начальная и не конечная позиция
		fromEdge: () => {
			worksBulletStart.classList.remove('_active')
			worksBulletEnd.classList.remove('_active')
			worksBulletMiddle.classList.add('_active')
		},
	},
})

const reviewsBulletStart = document.querySelector('[data-reviews-bullet-start]')
const reviewsBulletMiddle = document.querySelector(
	'[data-reviews-bullet-middle]',
)
const reviewsBulletEnd = document.querySelector('[data-reviews-bullet-end]')

const reviewsSlider = new Swiper('.reviews-slider', {
	observer: true,
	observeParents: true,
	spaceBetween: 35,
	navigation: {
		nextEl: '.reviews-slider-next',
		prevEl: '.reviews-slider-prev',
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
			spaceBetween: 35,
			slidesPerView: 3,
		},
	},

	on: {
		//Если слайд последний
		reachEnd: () => {
			reviewsBulletEnd.classList.add('_active')
			reviewsBulletMiddle.classList.remove('_active')
		},
		//Если слайд первый
		reachBeginning: () => {
			reviewsBulletStart.classList.add('_active')
			reviewsBulletMiddle.classList.remove('_active')
		},
		// Если не начальная и не конечная позиция
		fromEdge: () => {
			reviewsBulletStart.classList.remove('_active')
			reviewsBulletEnd.classList.remove('_active')
			reviewsBulletMiddle.classList.add('_active')
		},
	},
})
