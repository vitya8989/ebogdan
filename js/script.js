function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;
let burger = document.querySelector('.nav__burger');
let nav = document.querySelector('.nav');

burger.onclick = function () {
	burger.classList.toggle('burger-open');
	nav.classList.toggle('nav-open');
}
nav.onclick = function (e) {
	if (e.target.closest('.nav__link')) {
		burger.classList.remove('burger-open');
		nav.classList.remove('nav-open');
	}
};
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		let topOffset;
		topOffset = document.querySelector('.header__content').offsetHeight;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});;
let mainButton = document.querySelector('.main__button');
let mainVideo = document.querySelector('.main__video');

mainButton.onclick = function () {
	mainButton.classList.toggle('mute');
	mainVideo.muted = false;
	if (!mainButton.classList.contains('mute')) {
		mainVideo.muted = true;
	}
};
let aboutLeftImg = document.querySelector('.about__left_img');
let aboutRightImg = document.querySelector('.about__right_img');
let aboutRightTexts = document.querySelector('.about__right_texts');
let about = document.querySelector('.about');
let offsetPosition1;

let servicesLeft = document.querySelector('.services__left');
let servicesRight = document.querySelector('.services__right');
let servicesLink = document.querySelector('.services__link');
let services = document.querySelector('.services');
let offsetPosition2;

let workItems = document.querySelectorAll('.work__item');
let workArrow = document.querySelectorAll('.work__arrow');
let workImg = document.querySelector('.work__img');
let work = document.querySelector('.work');
let offsetPosition3;

let benefitsTexts = document.querySelector('.benefits__texts');
let benefitsImage = document.querySelectorAll('.benefits__image');
let benefits = document.querySelector('.benefits');
let offsetPosition4;


window.onload = function () {
	let scrollTarget1 = about;
	offsetPosition1 = scrollTarget1.getBoundingClientRect().top + window.pageYOffset;
	let scrollTarget2 = services;
	offsetPosition2 = scrollTarget2.getBoundingClientRect().top + window.pageYOffset;
	let scrollTarget3 = work;
	offsetPosition3 = scrollTarget3.getBoundingClientRect().top + window.pageYOffset;
	let scrollTarget4 = benefits;
	offsetPosition4 = scrollTarget4.getBoundingClientRect().top + window.pageYOffset;
	return offsetPosition1, offsetPosition2, offsetPosition3, offsetPosition4;;
}
window.onscroll = function () {
	let centerOfWindow = window.pageYOffset + window.innerHeight / 5;
	if (centerOfWindow >= offsetPosition1) {
		aboutLeftImg.classList.add('active');
		aboutRightImg.classList.add('active');
		aboutRightTexts.classList.add('active');
	}
	if (centerOfWindow >= offsetPosition2) {
		servicesLeft.classList.add('active');
		servicesRight.classList.add('active');
		servicesLink.classList.add('active');
	}
	if (centerOfWindow >= offsetPosition3) {
		for (let i = 0; i < workItems.length; i++) {
			workItems[i].classList.add('active');
		}
		for (let i = 0; i < workArrow.length; i++) {
			workArrow[i].classList.add('active');
		}
		workImg.classList.add('active');
	}
	if (centerOfWindow >= offsetPosition4) {
		for (let i = 0; i < benefitsImage.length; i++) {
			benefitsImage[i].classList.add('active');
		}
		benefitsTexts.classList.add('active');
	}
};
new Swiper('.reviews-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.reviews-slider__btn-next',
		prevEl: '.reviews-slider__btn-prev'
	},
	breakpoints: {
		870: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1240: {
			centeredSlides: true,
			slidesPerView: 3,
			initialSlide: 1,
		},
	},
});;
let telMask = document.querySelector('.tel-mask');
let onlyLetter = document.querySelectorAll('.only-letter');

function setCursorPosition(pos, elem) {
	elem.focus();
	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	else if (elem.createTextRange) {
		var range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select()
	}
}
function mask(event) {
	var matrix = this.defaultValue,
		i = 0,
		def = matrix.replace(/\D/g, ""),
		val = this.value.replace(/\D/g, "");
	def.length >= val.length && (val = def);
	matrix = matrix.replace(/[_\d]/g, function (a) {
		return val.charAt(i++) || "_"
	});
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
	setCursorPosition(i, this)
}

telMask.addEventListener("input", mask, false);

for (let i = 0; i < onlyLetter.length; i++) {
	onlyLetter[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[\w]/g, '');
	});
}

let form = document.querySelector('form');
let nameInput = document.querySelector('.order__name');
let surnameInput = document.querySelector('.order__surname');
let telInput = document.querySelector('.order__tel');
let orderMessage = document.querySelector('.order__message');

form.onsubmit = async (e) => {
	e.preventDefault();
	let valid = true;
	if (nameInput.value == '') {
		valid = false;
		nameInput.classList.add('error-input');
	}
	if (surnameInput.value == '') {
		valid = false;
		surnameInput.classList.add('error-input');
	}
	if (telInput.value == '+7(___)_______') {
		valid = false;
		telInput.classList.add('error-input');
	}
	if (valid) {
		// let response = await fetch('form-action.php', {
		// 	method: 'POST',
		// 	body: new FormData(form)
		// });
		// if (response.ok) {
		form.classList.remove('show');
		orderMessage.classList.add('show');
		form.reset();
		// } else {
		// 	alert('Произошла ошибка отправки, попробуйте еще раз!');
		// }
	}
}

nameInput.onfocus = function () {
	nameInput.classList.remove('error-input');
}
surnameInput.onfocus = function () {
	surnameInput.classList.remove('error-input');
}
telInput.onfocus = function () {
	telInput.classList.remove('error-input');
};


