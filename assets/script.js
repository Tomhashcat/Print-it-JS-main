const slides = [
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
	}
];


//Variable
var leftArrow = document.querySelector(".arrow_left");
var rightArrow = document.querySelector(".arrow_right");
var dots = document.querySelector(".dots");
var slideImage= document.querySelector(".banner-img");
var indexCurrent = 0;



//var dot = document.createElement(".dot");

for (var i = 0; i < slides.length; i++) {

	//CREER UNE DIV POUR CHAQUE ELEMENT DU TABLEAU
	var div = document.createElement("div");

	div.textContent = slides[i];
	//AJOUT LA CLASS ("dot")
	div.classList.add('dot');
	//SI ACTIVE ALORS AJOUTE CLASS("DOT_SELECTED")
	if (i === 0) {
		div.classList.add('dot_selected');
	}

	dots.appendChild(div);
}









//Listener
leftArrow.addEventListener('click', function () {
	indexCurrent = (indexCurrent === 0) ? slides.length - 1 : indexCurrent - 1;
	updateSlide();
	

});

rightArrow.addEventListener('click', function () {
	indexCurrent= (indexCurrent === slides.length - 1) ? 0 : indexCurrent + 1;
	updateSlide();
	
})

function changeSlide(next) {
	if (next) {
	  indexCurrent = (indexCurrent === slides.length - 1) ? 0 : indexCurrent + 1;
	} else {
	  indexCurrent = (indexCurrent === 0) ? slides.length - 1 : indexCurrent - 1;
	}
	updateSlide();
  }
function updateSlide() {
	slideImage.src = "assets/images/slideshow/" + slides[indexCurrent].image;
	var dots= document.querySelectorAll('.dots .dot');

	dots.forEach(function (dot,index){
		dot.classList.toggle('dot_selected', index ===indexCurrent)
	});
	
}

function next() {
	console.log('right');
};
function previous() {
	console.log('left');
};















//Compte le nombre d'élement de SLIDES
for (var i = 0; i < slides.length; i++) {
	console.log(slides[i]);
}
