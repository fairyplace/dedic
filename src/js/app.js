<<<<<<< HEAD
import header from "../components/header/header.js";
import gotoLinks from "../components/service-hero/service-hero.js";
import gallery from "../components/gallery/gallery.js";

import { hideNav } from "../components/header/header.js";
hideNav()

const subMenu = document.querySelector(".menu__item--sub");
subMenu.addEventListener("click", (e) => {
	if (!e.target.classList.contains("menu__item")) {
		e.target.parentNode.classList.toggle("_active");
	}
});
=======
import {header} from "../common/header/header.js";
import gotoLinks from "../components/service-hero/service-hero.js";
import gallery from "../components/gallery/gallery.js";
import {hideNav} from "../common/header/header.js";
hideNav();

import { formHandler } from '../components/form/form.js' 
>>>>>>> 05ace0d (initial commit)

new Swiper(".hero-slider", {
	direction: "horizontal",
	loop: true,

	pagination: {
		type: "bullets",
		el: ".slider__pagination",
		bulletClass: "pagination__bullet",
		bulletActiveClass: "pagination__bullet_active",
		clickable: true,
	},
	navigation: {
		nextEl: ".navigation-button-next",
		prevEl: ".navigation-button-prev",
	},
	simulateTouch: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	autoplay: {
<<<<<<< HEAD
		delay: 4000,
=======
		delay: 6000,
>>>>>>> 05ace0d (initial commit)
		disableOnInteraction: true,
	},
});

new Swiper(".gallery-slider", {
	// Optional parameters
	direction: "horizontal",
	loop: false,
	navigation: {
		nextEl: ".navigation-button-next",
		prevEl: ".navigation-button-prev",
	},
<<<<<<< HEAD
	// mousewheel: {
	//   sensitivity: 1
	// },
	// freeMode: true,
	slidesPerGroup: 2,
	// effect: 'coverflow',
	// coverflowEffect: {
	//   rotate: 10,
	//   stretch: 50,
	//   slideShadows: true
	// }
	breakpoints: {
		// when window width is >= 320px

		0: {
			slidesPerView: 2.1,
			spaceBetween: 10,

=======
	slidesPerGroup: 2,
	breakpoints: {
		// when window width is > 0
		0: {
			slidesPerView: 2.1,
			spaceBetween: 10,
>>>>>>> 05ace0d (initial commit)
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3.2,
			spaceBetween: 10,
<<<<<<< HEAD
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4.3,
=======
    	freeMode: true,
		},
		// when window width is >= 640px
		640: {
    	slidesPerView: 5.3,
>>>>>>> 05ace0d (initial commit)
			spaceBetween: 20,
		},
	},
});
