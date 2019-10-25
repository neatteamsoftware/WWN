const topNav = document.getElementsByClassName('top-nav')[0];

window.addEventListener(`scroll`, e => {
	if (document.documentElement.scrollTop >= 30) {
		if (topNav.classList.contains(`nav-at-top`))
			topNav.classList.remove(`nav-at-top`);
	} else {
		if (!topNav.classList.contains(`nav-at-top`))
			topNav.classList.add(`nav-at-top`);
	}
});
