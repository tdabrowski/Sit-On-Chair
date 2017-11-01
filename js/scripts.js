
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

menu('mouseover','mouseout');


//--------------------------------------------------------
//Slider--------------------------------------------------//
//--------------------------------------------------------//
var nextButton = document.getElementById('next');
var previousButton = document.getElementById('previous');
var slideList = document.querySelectorAll('.sect1__list__item');
var index=0;

slideList[0].classList.add('slide__visible');
nextButton.addEventListener('click',function(){
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


//-------------Disapiring headers on images in section2-------//
var elements = document.querySelectorAll('.sect2__img__head');
var boxes = document.querySelectorAll('.sect2__img__box');
/**
* Function responsible for handling events with header disapiring on images in section2
* @param {string} moveover
* @param {string} moveout
*/
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




//-----------------BURGER----------------------//
//Navigation for RWD --------------------------
//---------------------------------------------
var lista = document.getElementById('nav');
var button = document.getElementById('burger');
var	mobile = window.matchMedia("screen and (max-width:703px)");
/**
* Function setups navigation view for start screen resolution
* @param {string} set
* @param {string} flex
*/
function changeView(set,flex){
	for(var i=0; i<navList.length; i++){
		navList[i].style.display = set;
		var navContainer = document.querySelector('.head__nav');
		navContainer.style.justifyContent = flex;
		//console.log(set + i);
	}
}

//1. Checking start setup for the screen when browser starts
if(window.innerWidth>=703){
	lista.style.display = 'block';
	button.style.display = "none";
	changeView('inline-block','flex-end');  //new setup
}
else{
	lista.style.display = 'none';
	button.style.display = "inline-block";
	changeView('block','flex-start');   //new setup
}


//2.Set button event handler when click on it - show/hide list
button.addEventListener('click',function(){
	if(lista.style.display==='block'){
		lista.style.display='none';
	}
	else{
		lista.style.display='block';
	}
});


//3.Checkin if screen resolution was changed
mobile.addListener(	function(mobile)	{
	if(mobile.matches){  //screen resolution is smaller than 703px
		lista.style.display = 'none';
		button.style.display = "inline-block";
		changeView('block','flex-start');   //new setup
	}
	else { //screen resolution is higher than 703px
		lista.style.display = "block";
		button.style.display = "none";
		changeView('inline-block','flex-end');  //new setup
	}
});




//end of file
});
