
document.addEventListener('DOMContentLoaded', function() {
	console.log("DOM fully loaded and parsed!");

/*-------------------------------
--------------Main menu----------*/
var navList = document.querySelectorAll('.head__nav__li');

//
/**
* Events handler for main navigation menu
* @param {string} moveover
* @param {string} moveout
*/
function menu(moveover,moveout){
	for(var i=0;i<navList.length;i++){
		navList[i].addEventListener(moveover,function(){
			var subActive = this.lastElementChild;
			if(subActive.tagName === 'UL'){
				subActive.style.display = 'block';
			}
		});
		navList[i].addEventListener(moveout,function(){
			var subDisabled = this.lastElementChild;
			if(subDisabled.tagName === 'UL'){
				subDisabled.style.display = 'none';
			}
		});
	}
}

menu('mouseover','mouseout');		//desktop
menu('touchenter','touchleave');	//mobile


//--------------------------------------------------------
//Slider--------------------------------------------------//
//--------------------------------------------------------//
var nextButton = document.getElementById('next');
var previousButton = document.getElementById('previous');
var slideList = document.querySelectorAll('.sect1__list__item');
console.log(slideList);
var index=0;

slideList[0].classList.add('slide__visible');
nextButton.addEventListener('click',function(){
	console.log('buton next');
	slideList[index].classList.remove('slide__visible');
	slideList[index].classList.add('slide__hidden');
	if(index===slideList.length-1){
		index = 0;
	}
	else{
		index++;
	}
	slideList[index].classList.remove('slide__hidden');
	slideList[index].classList.add('slide__visible');
});

previousButton.addEventListener('click',function(){
	console.log('button previous');
	slideList[index].classList.remove('slide__visible');
	slideList[index].classList.add('slide__hidden');
	if(index>0){
		index--;
	}
	else{
		index=slideList.length-1;
	}
	slideList[index].classList.remove('slide__hidden');
	slideList[index].classList.add('slide__visible');
});


//-------------znikanie naglowkow ze zdjec-------//
var elements = document.querySelectorAll('.sect2__img__head');
var boxes = document.querySelectorAll('.sect2__img__box');

function hidden(moveover,moveout){
	for(var i=0;i<boxes.length;i++){
		boxes[i].addEventListener(moveover,function(){
				this.lastElementChild.style.display = 'none';
		});
		boxes[i].addEventListener(moveout,function(){
				this.lastElementChild.style.display = 'block';

		});
	}
}
hidden('mouseover','mouseout');
hidden('touchenter','touchleave');




//-----------------BURGER----------------------//
//MINI BUTTON W GŁÓWNYM MENU DLA RWD ----------
//---------------------------------------------
var lista = document.getElementById('nav');
var button = document.getElementById('burger');
var	mobile = window.matchMedia("screen and (max-width:703px)"); //bylo 703


//1. Sprawdzam warunki poczatkowe po otwarciu okna przegladarki
if(window.innerWidth>=703){ //bylo 500
	lista.style.display = 'block';
	button.style.display = "none";
	changeView('inline-block','flex-end');  //new setup
}
else{
	lista.style.display = 'none';
	button.style.display = "inline-block";
	changeView('block','flex-start');   //new setup
}

//2.ustawiam obsługe buttona i event klikania - pokaz liste-schowaj liste
//button caly czas jest w DOM nawet gdy jest schowany-none !
button.addEventListener('click',function(){
	if(lista.style.display==='block'){
		lista.style.display='none';
	}
	else{
		lista.style.display='block';
	}
});


//3.Sprawdzam czy szerokosc okna sie nie zmieniła (event dla mobile)
mobile.addListener(	function(mobile)	{
	if(mobile.matches){  //ekran jest mniejszy niz 420px
		lista.style.display = 'none';
		button.style.display = "inline-block";
		changeView('block','flex-start');   //new setup
	}
	else { //ekran jest wiekszy niz 420px
		lista.style.display = "block";
		button.style.display = "none";
		changeView('inline-block','flex-end');  //new setup
	}
});

/**
*set -- string value (block or inline-block)
*funkcja ustawia sposob wyswietlania glownej nawigacji w zaleznosci od rozdzielczosci
*/
function changeView(set,flex){
	for(var i=0; i<navList.length; i++){
		navList[i].style.display = set;
		var navContainer = document.querySelector('.head__nav');
		navContainer.style.justifyContent = flex;
		//console.log(set + i);
	}
}


});
