
document.addEventListener('DOMContentLoaded', function() {
	console.log("DOM fully loaded and parsed!");

//--------------------------------------------------------//
//--------------Manage menu-------------------------------//
//--------------------------------------------------------//


//
/**
* Events handler for main navigation menu
* @param {string} moveover - event type
* @param {string} moveout - event type
* @param {string} className - class name of navigation elements (li elements)
*/
function manageMenu(moveover,moveout,className){
	var navigation = document.querySelectorAll(className);
	for(var i=0;i<navigation.length;i++){
		navigation[i].addEventListener(moveover,function(){
			var subActive = this.lastElementChild;
			if(subActive.tagName === 'UL'){
				subActive.style.display = 'block';
			}
		});
		navigation[i].addEventListener(moveout,function(){
			var subDisabled = this.lastElementChild;
			if(subDisabled.tagName === 'UL'){
				subDisabled.style.display = 'none';
			}
		});
	}
}


//--------------------------------------------------------//
//Slider--------------------------------------------------//
//--------------------------------------------------------//
/**
* Infinity Slider manager with two buttons
* @param {string} nextId - button next Id
* @param {string} previousId - button previous Id
* @param {string} slideElements - class name of li elements with slides
* @param {string} show - class name to show elements
* @param {string} hide - class name to hide elements
*/
function manageSlider(nextId,previousId,slideElements,show,hide){
	var nextButton = document.getElementById(nextId);
	var previousButton = document.getElementById(previousId);
	var slideList = document.querySelectorAll(slideElements);
	var index=0;


	//Automatic slide show anonymous function
	var nextSlide = function(){
		slideList[index].classList.remove(show);
		slideList[index].classList.add(hide);
		if(index===slideList.length-1){
			index = 0;
		}
		else{
			index++;
		}
		slideList[index].classList.remove(hide);
		slideList[index].classList.add(show);
	}
	//Start slide show
	slideList[0].classList.add(show);
	var slideShow = setInterval(nextSlide,5000);

	nextButton.addEventListener('click',function(){
		clearInterval(slideShow); //turn off automatic slide show
		nextSlide();
		slideShow = setInterval(nextSlide,5000); //turn on automatic slide show
	});

	previousButton.addEventListener('click',function(){
		clearInterval(slideShow); //turn off automatic slide show
		slideList[index].classList.remove(show);
		slideList[index].classList.add(hide);
		if(index>0){
			index--;
		}
		else{
			index=slideList.length-1;
		}
		slideList[index].classList.remove(hide);
		slideList[index].classList.add(show);
		slideShow = setInterval(nextSlide,5000); //turn on automatic slide show
	});
}


//--------------------------------------------------------//
//-------------Hide Headers-------------------------------//
//--------------------------------------------------------//
/**
* Function responsible for handling events with header disapiring on images in section2
* @param {string} moveover - event type
* @param {string} moveout - event type
* @param {string} imgBoxes - boxes with images and header on it to hide
*/
function hiddenHeader(moveover,moveout,imgBoxes){
	var boxes = document.querySelectorAll(imgBoxes);
	for(var i=0;i<boxes.length;i++){
		boxes[i].addEventListener(moveover,function(){
			this.lastElementChild.style.display = 'none';
			this.style.overflow = 'hidden';
			this.firstElementChild.style.transform = 'scale(1.05,1.05)';
			this.firstElementChild.style.transition = '1s';
		});
		boxes[i].addEventListener(moveout,function(){
			this.lastElementChild.style.display = 'block';
			this.firstElementChild.style.transform = 'scale(1,1)';
			this.firstElementChild.style.transition = '1s';
		});
	}
}


//-----------------BURGER----------------------//
//Navigation for RWD --------------------------//
//---------------------------------------------//
/**
* Set navigation view on main site when changing screen resolution
* @param {variable} breakpoint - breakpoint resolution settings
*/
function burger(breakpoint){
	var lista = document.getElementById('nav');
	var button = document.getElementById('burger');
	var mobile = breakpoint;


	/**
	* Function setups navigation view for start screen resolution
	* @param {string} set
	* @param {string} flex
	*/
	function changeView(set,flex){
		var navListt = document.querySelectorAll('.head__nav__li');
		for(var i=0; i<navListt.length; i++){
			navListt[i].style.display = set;
			var navContainer = document.querySelector('.head__nav');
			navContainer.style.justifyContent = flex;
		}
	}


	//1. Checking start setup for the screen when browser starts
	if(window.innerWidth>=703){
		lista.style.display = 'block';
		button.style.display = "none";
		changeView('inline-block','flex-end');
	}
	else{
		lista.style.display = 'none';
		button.style.display = "inline-block";
		changeView('block','flex-start');
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

	//3.Checking if screen resolution was changed
	mobile.addListener(	function(mobile)	{
		if(mobile.matches){  //screen resolution is smaller than breakpoint
			lista.style.display = 'none';
			button.style.display = "inline-block";
			changeView('block','flex-start');   //new setup
		}
		else { //screen resolution is higher than breakpoint
			lista.style.display = "block";
			button.style.display = "none";
			changeView('inline-block','flex-end');  //new setup
		}
	});
}

//Brakpoint settings for burger display
var	mob = window.matchMedia("screen and (max-width:703px)");

//Start events listening
manageMenu('mouseover','mouseout','.head__nav__li');
manageSlider('next','previous','.sect1__list__item','slide__visible','slide__hidden');
hiddenHeader('mouseover','mouseout','.sect2__img__box');
burger(mob);

//end of file
});
