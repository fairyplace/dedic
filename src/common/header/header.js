const mobileMenuIcon = document.querySelector(".header__mobile-icon");

const mobileMenu = document.querySelector(".header__mobile-menu");

import scrollLock from "scroll-lock";

if (mobileMenuIcon) {
	mobileMenuIcon.addEventListener("click", (e) => {
		if (document.body.classList.contains("_scroll-lock")) {
			scrollLock.enablePageScroll();
		} else {
			scrollLock.disablePageScroll();
		}
		document.body.classList.toggle("_scroll-lock");
		mobileMenuIcon.classList.toggle("_active");
		mobileMenu.classList.toggle("_active");
	});
}

const subMenu = document.querySelector(".menu__item--sub-mobile");
subMenu.addEventListener("click", (e) => {
	console.log("sub");
	if (!e.target.classList.contains("menu__item")) {
		e.target.parentNode.classList.toggle("_active");
	}
});

export const hideNav = () => {

  const hiddenHeaderClassName = "header_hidden";
	const headerHeight = 100;
	let initialValue = window.scrollY;
	let header = document.querySelector("header");

	let isItHidden = false;

	window.addEventListener("scroll", (e) => {
		const scrollY = window.scrollY;
		if (scrollY > headerHeight && scrollY > initialValue) {
			hideHeader();
		} else {
			showHeader();
		}
		initialValue = scrollY;
	});
	function hideHeader() {
		if (!isItHidden) {
			header.classList.add(hiddenHeaderClassName);
			isItHidden = true;
		}
	}
	function showHeader() {
		if (isItHidden) {
			header.classList.remove(hiddenHeaderClassName);
			isItHidden = false;
		}
	}
};
