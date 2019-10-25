const images = document.getElementsByClassName(`image-slide`);

let current = 0;

function setSlide(i) {
	images[current].classList.remove(`active`);
	images[i].classList.add(`active`);

	current = i;
}

function nextSlide() {
	images[current].classList.remove(`active`);
	images[current + 1 < images.length ? current + 1 : 0].classList.add(`active`);

	current++;
	if (current >= images.length)
		current = 0;
}

function prevSlide() {
	images[current].classList.remove(`active`);
	images[current - 1 >= 0 ? current - 1 : images.length - 1].classList.add(`active`);

	current--;
	if (current < 0)
		current = images.length - 1;
}
