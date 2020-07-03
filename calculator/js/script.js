var number1 = "";
var number2 = "";
var number2Start;
var result = "";
var globalAction = "";

document.addEventListener("DOMContentLoaded", function (event) {
	// var screenWidth = screen.width;
	// screenWidth += "px";

	var optionsHeight = screen.availHeight - 120;
	optionsHeight += "px";

	// console.log(document.getElementById("options-container").style.width);
	// document.getElementById("options-container").style.width = screenWidth;
	document.getElementById("options-container").style.height = optionsHeight;

	// console.log(screen.width);
	// console.log(document.getElementById("options-container").style.width);
});

function numbersChoice (number) {
	if (document.getElementById("numbers-screen").innerHTML == 0) {
		document.getElementById("numbers-screen").innerHTML = "";
	}
	console.log(number);
	document.getElementById("numbers-screen").innerHTML += number;
	if (number2Start == "start") {
		// console.log("start");
		number2 += number;
	}
}

function actionChoice (action) {
	globalAction = action;
	number1 = document.getElementById("numbers-screen").innerHTML;
	number2Start = "start";

	console.log(action);
	document.getElementById("numbers-screen").innerHTML += action;
}

function checkChoice () {
	console.log(number1 + " " + globalAction+ " " + number2)
	if (globalAction == "+") {
		result = parseInt(number1) + parseInt(number2);
	}
	if (globalAction == "-") {
		result = parseInt(number1) - parseInt(number2);
	}

	console.log(result);
	document.getElementById("numbers-screen").innerHTML += "<br>= " + result;
}

function deleteChoice () {
	document.getElementById("numbers-screen").innerHTML -= document.getElementById("numbers-screen").innerHTML.slice(-1);
}

function ACChoice () {
	document.getElementById("numbers-screen").innerHTML -= document.getElementById("numbers-screen").innerHTML.substring();
}