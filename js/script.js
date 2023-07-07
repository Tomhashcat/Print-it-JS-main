/**
 * tableau slides
 * @param {Array} slides
 */
const slides = [

	{
		"image": "slide5.png",
		"tagLine": "Super Thomas <span>découpe laser sur toi</span>"
	},
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},


];


/**
 * creation des variables
 * @param {obj} 
 */
var leftArrow = document.querySelector(".arrow_left");
var rightArrow = document.querySelector(".arrow_right");
var dots = document.querySelector(".dots");
var slideImage = document.querySelector(".banner-img");
var indexCurrent = 0;

/** 
 * met un écouteur sur lefttArrow reviens au dernier index si fin du tableau
 * @param {object} fleche de gauche
 */
leftArrow.addEventListener('click', function () {
	indexCurrent = (indexCurrent === 0) ? slides.length - 1 : indexCurrent - 1;
	updateSlide();


});
/**
* met un écouteur sur rightArrow reviens à index 0 si fin du tableau
* @param {object} fleche de droite
*/
rightArrow.addEventListener('click', function () {
	indexCurrent = (indexCurrent === slides.length - 1) ? 0 : indexCurrent + 1;
	updateSlide();

})

/**
 * met à jour l'index , la tagline, et les dots.
 * @param {func} update slide
 */
function updateSlide() {
	slideImage.src = "assets/images/slideshow/" + slides[indexCurrent].image;

	var tagLineElement = document.querySelector('.tagLine');

	tagLineElement.innerHTML = slides[indexCurrent].tagLine;

	var dots = document.querySelectorAll('.dots .dot');

	dots.forEach(function (dot, index) {
		dot.classList.toggle('dot_selected', index === indexCurrent)
	});

}
/**
 * creer une nouvelle div ainsi qu'un nouveau point. change la class dot/dot_selected.initialise l'index dans le tableaux grave à updateSlide 
 * @param {func} init
 */
function init() {
	for (var i = 0; i < slides.length; i++) {

		/**
		 *  CREER UNE DIV POUR CHAQUE ELEMENT DU TABLEAU
		 * @param {obj} div
		 * */
		var div = document.createElement("div");


		/**
		 * AJOUT LA CLASS ("dot")
		 * @param {obj} dot
		 */
		div.classList.add('dot');
		dots.appendChild(div);
	}
	updateSlide();
}
init();











































