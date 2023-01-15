window.onload = function () {

	setTimeout(function () {

		document.body.classList.add('loaded')

		Draggable.create('.gallery', {
			bounds: 'body',
			inertia: true
		})


	}, 200)

}

let galleryItems = document.querySelectorAll('.gallery__item');

galleryItems.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.add('active')
	})
})