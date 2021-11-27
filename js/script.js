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
let mainButton = document.querySelector('.main__button');
let mainVideo = document.querySelector('.main__video');

mainButton.onclick = function () {
	mainButton.classList.toggle('mute');
	mainVideo.muted = false;
	if (!mainButton.classList.contains('mute')) {
		mainVideo.muted = true;
	}
};

let playAnim = document.querySelector('.play-anim');
let texts = document.querySelector('.about__right_texts');
let leftImg = document.querySelector('.about__left_img');
let rightImg = document.querySelector('.about__right_img');

playAnim.onclick = function () {
	texts.classList.add('active');
	leftImg.classList.add('active');
	rightImg.classList.add('active');
}