document.querySelector('head').innerHTML += `<link rel="stylesheet" href="../../assets/css/nav.css">`;
	document.querySelector('head').innerHTML += `<link rel="stylesheet" media="all and (max-width: 850px)" href="../../assets/css/mobile-compat.css">`

window.addEventListener(`load`, e => {
	document.getElementById(`nav-container`).innerHTML = `
	<nav class="top-nav nav-at-top">
	<div class="title-container" onclick="location.reload()">
		<img class="neater-logo" src="../../assets/img/logo.svg" alt="neatteam logo">
		<h1 class="nav-title">NeatTeam</h1>
	</div>

	<ul class="top-nav-items">
		<li>ABOUT US</li>
		<li>........</li>
		<li>........</li>
		<li>........</li>
		<li onclick="location.replace('pages/contact-page/contact.html')">CONTACT</li>
	</ul>

	<i class="toggle-menu fa fa-bars"></i>
	</nav>`;

	const topNav = document.getElementsByClassName(`top-nav`)[0];
	const toggleMenu = document.getElementsByClassName(`toggle-menu`)[0];
	const menu = document.getElementsByClassName(`top-nav-items`)[0];

	let navAtTop = true;
	let menuOpen = false;

	window.addEventListener(`scroll`, e => {
		if (document.documentElement.scrollTop >= 30) {
			if (topNav.classList.contains(`nav-at-top`)) {
				topNav.classList.remove(`nav-at-top`);
				navAtTop = false;
			}
		} else {
			if (!topNav.classList.contains(`nav-at-top`)) {
				if (!menuOpen) topNav.classList.add(`nav-at-top`);
				navAtTop = true;
			}
		}
	});

	toggleMenu.addEventListener(`click`, e => {
		if (menu.style.maxHeight) {
			menu.style.maxHeight = null;
			menu.style.paddingTop = `0px`;

			if (menuOpen) {
				if (navAtTop)
					topNav.classList.add(`nav-at-top`);
			}

			menuOpen = false;
		} else {
			menu.style.maxHeight = `100vh`;
			menu.style.paddingTop = `25%`;

			if (navAtTop)
				topNav.classList.remove(`nav-at-top`);

			menuOpen = true;
		}
	});
});
