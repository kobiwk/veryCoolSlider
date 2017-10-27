/*
var leftArrow = document.getElementById('left-arrow-link');
var rightArrow = document.getElementById('right-arrow-link');
var imagesInSlider = document.getElementsByClassName('active-slider');
var all = document.querySelectorAll('.slider img');
var moveLeft = 0;
var moveRight = all.length;

var percentageMoveToLeft = 0;
var imageInSlider = document.getElementById('active-slider');

//click on left arrow

leftArrow.addEventListener('click', function(e){
	
	e.preventDefault();

	if (!all[moveLeft+3]) {
		return '';
	} else {
		moveRight -= 1;	
	}

	imagesInSlider[0].setAttribute('class','hide-image');
	all[moveLeft+3].setAttribute('class','active-slider');


	
	for (var i = 0; i < imagesInSlider.length; i++) {
		imagesInSlider[i].style.animation = "move-left 0.3s ease-out";
	}

	var clearAnimation = setInterval(clearAnimation, 300);

	function clearAnimation() {
		for (var i = 0; i < all.length; i++) {
		all[i].style.animation = "";
		}
		clearInterval(clearAnimation);
	}
	

	moveLeft++;	

}) 

rightArrow.addEventListener('click', function(e){
	e.preventDefault();

	if (!all[moveRight]) {
		return '';
	} else {
		moveLeft -= 1;
	}

	imagesInSlider[2].setAttribute('class','hide-image');
	all[all.length - moveRight - 1].setAttribute('class','active-slider');

	for (var i = 0; i < imagesInSlider.length; i++) {

			imagesInSlider[i].style.animation = "move-right 0.5s ease-out";
	}

	var clearAnimation = setInterval(clearAnimation, 500);

	function clearAnimation() {
		for (var i = 0; i < all.length; i++) {
		all[i].style.animation = "";
		}
		clearInterval(clearAnimation);
	}

	moveRight++;
})

*/



function Slider(numberOfImagesToDisplay, controlsActiveOrNot, positionOfControlArrows, sizeOfImages) {

	this.controlsActiveOrNot = controlsActiveOrNot;
	this.numberOfImagesToDisplay = numberOfImagesToDisplay;
	this.positionOfControlArrows = positionOfControlArrows;
	this.sizeOfImages = sizeOfImages;
	this.moveLeft = 0;
	this.moveRight = 0;
}

Slider.prototype.imagesInSlider = function(){
	return document.getElementsByClassName('active-slider');
	
}

Slider.prototype.allImages = function() {
	return document.querySelectorAll('.slider img');
}

Slider.prototype.leftArrow = function() {
	return document.getElementById('left-arrow-link');
}

Slider.prototype.rightArrow = function() {
	return document.getElementById('right-arrow-link');
}

//actions
Slider.prototype.controlArrowsPosition = function() {

}

Slider.prototype.allowControls = function() {
	if (this.controlsActiveOrNot === 'activateControls') {

	} else if (this.controlsActiveOrNot === 'removeControls') {
		this.leftArrow().style.display = "none";
		this.rightArrow().style.display = "none";
		setInterval(moveSlider, 3000);
		var that = this;
		function moveSlider() {
	
			if (!that.allImages()[that.moveLeft+that.numberOfImagesToDisplay]) {
			return '';
			} else {
				that.moveRight -= 1;	
			}

			that.imagesInSlider()[0].setAttribute('class','hide-image');
			that.allImages()[that.moveLeft+that.numberOfImagesToDisplay].setAttribute('class','active-slider');
			
			for (var i = 0; i < that.imagesInSlider().length; i++) {
				that.imagesInSlider()[i].style.animation = "move-left 0.5s ease-out";
			}

			var clearAnimation = setInterval(clearAnimation, 2000);

			function clearAnimation() {
				for (var i = 0; i < that.allImages().length; i++) {
				that.allImages()[i].style.animation = "";
				}
				clearInterval(clearAnimation);
			}

			that.moveLeft++;
		}
	}
}

Slider.prototype.pressLeftArrow = function() {
	var that = this;
	
	return this.leftArrow().addEventListener('click', function(e){
	
		e.preventDefault();
	
		if (!that.allImages()[that.moveLeft+that.numberOfImagesToDisplay]) {
			return '';
		} else {
			that.moveRight -= 1;	
		}

		that.imagesInSlider()[0].setAttribute('class','hide-image');
		that.allImages()[that.moveLeft+that.numberOfImagesToDisplay].setAttribute('class','active-slider');
		
		for (var i = 0; i < that.imagesInSlider().length; i++) {
			that.imagesInSlider()[i].style.animation = "move-left 0.3s ease-out";
		}

		var clearAnimation = setInterval(clearAnimation, 300);

		function clearAnimation() {
			for (var i = 0; i < that.allImages().length; i++) {
			that.allImages()[i].style.animation = "";
			}
			clearInterval(clearAnimation);
		}

		that.moveLeft++;
	});
}

Slider.prototype.pressRightArrow = function() {
	var that = this;
	this.moveRight = this.allImages().length;
	return this.rightArrow().addEventListener('click', function(e){
		e.preventDefault();

		if (!that.allImages()[that.moveRight]) {
			return '';
		} else {
			that.moveLeft -= 1;
		}

		that.imagesInSlider()[2].setAttribute('class','hide-image');
		
		that.allImages()[that.allImages().length - that.moveRight - 1].setAttribute('class','active-slider');

		for (var i = 0; i < that.imagesInSlider().length; i++) {

				that.imagesInSlider()[i].style.animation = "move-right 0.5s ease-out";
		}

		var clearAnimation = setInterval(clearAnimation, 500);

		function clearAnimation() {
			for (var i = 0; i < that.allImages().length; i++) {
			that.allImages()[i].style.animation = "";
			}
			clearInterval(clearAnimation);
		}

		that.moveRight++;
	})
}




Slider.prototype.display = function(numberOfImages) {

}

/*
first argument = number of images to display,
second argument = activate/remove Controls
*/

slider = new Slider(3,'activateControls');
slider.pressLeftArrow();
slider.pressRightArrow();
slider.allowControls();