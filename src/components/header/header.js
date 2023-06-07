const mobileMenuIcon = document.querySelector(".header__mobile-icon");

const mobileMenu = document.querySelector(".header__mobile");

if (mobileMenuIcon) {
	mobileMenuIcon.addEventListener("click", (e) => {
		document.body.classList.toggle("_scroll-lock");
		mobileMenuIcon.classList.toggle("_active");
		mobileMenu.classList.toggle("_active");
	});
}

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
