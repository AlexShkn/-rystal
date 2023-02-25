// document.addEventListener('DOMContentLoaded', () => {
// 	const onScrollHeader = () => {
// 		const headerBody = document.querySelector('.header__body')
// 		const headerTop = document.querySelector('.header__top')

// 		let prevScroll = window.pageYOffset
// 		let currentScroll

// 		window.addEventListener('scroll', () => {
// 			currentScroll = window.pageYOffset

// 			const headerBodyHidden = () =>
// 				headerBody.classList.contains('header-hidden')
// 			const headerTopHidden = () => headerTop.classList.contains('header-hidden')
// 			// if (currentScroll < 80) {
// 			// 	headerTop.classList.remove('header-hidden')
// 			// }
// 			if (currentScroll > prevScroll && !headerBodyHidden()) {
// 				headerBody.classList.add('header-hidden')
// 				// headerTop.classList.remove('header-hidden')
// 			}
// 			if (currentScroll < prevScroll && headerBodyHidden()) {
// 				headerBody.classList.remove('header-hidden')
// 				// headerTop.classList.add('header-hidden')
// 			}

// 			prevScroll = currentScroll
// 		})
// 	}

// 	onScrollHeader()
// })

document.addEventListener('DOMContentLoaded', () => {
	const onScrollHeader = () => {
		const header = document.querySelector('.header')

		let prevScroll = window.pageYOffset
		let currentScroll

		window.addEventListener('scroll', () => {
			currentScroll = window.pageYOffset

			const headerHidden = () => header.classList.contains('header-hidden')

			if (currentScroll > prevScroll && !headerHidden()) {
				header.classList.add('header-hidden')
			}
			if (currentScroll < prevScroll && headerHidden()) {
				header.classList.remove('header-hidden')
			}

			prevScroll = currentScroll
			console.log(prevScroll, currentScroll)
		})
	}

	onScrollHeader()
})
