var number1 = "";
var number2 = "";
var number2Start;
var result = "";
var globalAction = "";
var clearBoard;

document.addEventListener("DOMContentLoaded", function (event) {
	// var screenWidth = screen.width;
	// screenWidth += "px";

	// var optionsHeight = screen.availHeight - 120;

	// var optionsHeight = screen.availHeight;
	// optionsHeight += "px";

	// console.log(document.getElementById("options-container").style.width);
	// document.getElementById("options-container").style.width = screenWidth;
	// document.getElementById("options-container").style.height = optionsHeight;

	// document.getElementById("The-container").style.height = optionsHeight;

	// console.log(screen.width);
	// console.log(document.getElementById("options-container").style.width);

	// var internalOptionHeight = document.getElementsByClassName("internal-option").offsetHeight;
	// var internalOptionPadding = parseInt(internalOptionHeight);
	// console.log(internalOptionHeight);
	// internalOptionPadding = internalOptionPadding/4;
	// internalOptionPadding += "px";
	// console.log(internalOptionPadding);
	// document.getElementsByClassName("internal-option").style.paddingTop = internalOptionPadding;

	// var internalOptionHeight = document.getElementById("example").offsetHeight;
	// console.log(internalOptionHeight);
	// var internalOptionPadding = parseInt(internalOptionHeight);
	// internalOptionPadding = internalOptionPadding/4;
	// internalOptionPadding += "px";
	// console.log(internalOptionPadding);
	// for (var i = 0; i < document.getElementsByClassName("internal-option").length; i++) {
	// 	document.getElementsByClassName("internal-option")[i].style.paddingTop = internalOptionPadding;
	// 	// document.getElementsByClassName("internal-option")[i].style.paddingBottom = internalOptionPadding;
	// }
	// document.getElementsByClassName("internal-option")[0].style.paddingTop = internalOptionPadding;
});

function numbersChoice (number) {
	if (clearBoard == "start") {
		ACChoice();
		clearBoard = "";
	}
	if (document.getElementById("numbers-screen").innerHTML == "0") {
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
	number2Start = "";
	console.log(number1 + " " + globalAction+ " " + number2)
	if (globalAction == "+") {
		result = parseInt(number1) + parseInt(number2);
	}
	if (globalAction == "-") {
		result = parseInt(number1) - parseInt(number2);
	}

	console.log(result);
	document.getElementById("numbers-screen").innerHTML += "<br>= " + result;
	clearBoard = "start";
}

function deleteChoice () {
	document.getElementById("numbers-screen").innerHTML -= document.getElementById("numbers-screen").innerHTML.slice(-1);
}

function ACChoice () {
	document.getElementById("numbers-screen").innerHTML = "0";
	number1 = "0";
	number2 = "0";
}