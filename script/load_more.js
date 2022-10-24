let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 10;

loadMoreBtn.onclick = () => {
	let boxes = [...document.querySelectorAll('.novelties__gallery, .gallery__items, .gallery__card')];
	for (var i = currentItem; i < currentItem + 8; i++) {
		boxes[i].style.display = 'grid';
	}
	currentItem += 8;

	if(currentItem >= boxes.length){
		loadMoreBtn.style.display = 'none';
	}
}