const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


//Variable
var leftArrow = document.querySelector(".arrow_left");
var rightArrow = document.querySelector(".arrow_right");
var dots = document.querySelector(".dots");
var slide= document.querySelector(".banner-img");




//var dot = document.createElement(".dot");

for(var i = 0; i< slides.length; i++){
	var div= document.createElement("div");

	div.textContent = slides[i];


	div.classList.add('dot');


	dots.appendChild(div);
}







//Listener
leftArrow.addEventListener('click',previous);
rightArrow.addEventListener('click',next);

function next(){
	console.log('right');
};
function previous(){
	console.log('left');
};







	

	





//Compte le nombre d'élement de SLIDES
for (var i = 0; i < slides.length; i++) {
	console.log(slides[i]);
  }
