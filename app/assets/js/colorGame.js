var munSquares = 6;
var colors = generateRandomColors(munSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDispay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	munSquares = 3;
	colors = generateRandomColors(munSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
 	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	munSquares = 6;
	colors = generateRandomColors(munSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
 	}
});

resetButton.addEventListener("click", function(){
 	//generate all new colors
 	colors = generateRandomColors(munSquares);
 	//pick a new random color from array
 	pickedColor = pickColor();

 	messageDispay.textContent = "";
 	// change colorDisplay to match picked Color
 	colorDisplay.textContent = pickedColor;
 	this/*or resetButton*/.textContent = "New color";
 	//chang colors of squares
 	for(var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor = colors[i];
 	}
 	h1.style.backgroundColor = "steelblue"
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
 	//add initial colors to sqares
 	squares[i].style.backgroundColor = colors[i];

 	//add click listeners to squares
 	squares[i].addEventListener("click", function(){
 		//alert("clicked!"); //just to verifi if it works
  		//grab color of clidked square
 		var clidkedColor = this.style.backgroundColor;
 		//compare color to pickedColor
 		if(clidkedColor === pickedColor){
 			messageDispay.textContent = "Correct!";
 			resetButton.textContent = "Play Again?";
 			cangeColors(clidkedColor);
 			h1.style.backgroundColor = pickedColor; //but we can put "clidkedColor" to
 		} else {
 			this.style.backgroundColor = "#232323";
 			messageDispay.textContent = "Try Again";
 		}
 	});
}

function cangeColors(color){
 	//loop through all squares
 	for(var i = 0; i < squares.length; i++){
 		//change each color to match given color	
 		squares[i].style.backgroundColor = color;
 	}
}

function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
}

function generateRandomColors(num){
 	//make an array
 	var arr = []
 	//repeat num times
 	for(var i = 0; i < num; i++){
 		arr.push(randomColor());
 		//get random color and push into arr
 	}
 	//return that array
 	return arr;
}

function randomColor(){
 	//pick a "red" from 0 - 255
 	var r = Math.floor(Math.random() * 256);
 	//pick a "green" from 0 - 255
 	var g = Math.floor(Math.random() * 256);
 	//pick a "blue" from 0 - 255
 	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
}


