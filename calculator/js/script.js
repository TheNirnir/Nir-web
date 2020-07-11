var number1 = "";
var number2 = "";
var number2Start;
var result = "";
var globalAction = "";
var clearBoard;
var ANS;

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
	if (number == "Pi") {
		number = Math.PI;
		document.getElementById("numbers-screen").innerHTML += "&Pi;";
	}
	else {
		document.getElementById("numbers-screen").innerHTML += number;
	}
	console.log(number);
	if (number2Start == "start") {
		// console.log("start");
		number2 += number;
		if (number == "ANS") {
			number2 = result;
			ANS = "number2";
		}
	}
	else {
		if (number == "ANS") {
			number1 = result;
			ANS = "number1";
		}
	}
}

function actionChoice (action) {
	number1 = document.getElementById("numbers-screen").innerHTML;
	if (clearBoard == "start") {
		ACChoice();
		clearBoard = "";
		document.getElementById("numbers-screen").innerHTML = "ANS";
		number1 = Number(result);
	}
	if (action == "sqrt" || action == "sin" || action == "cos" || action == "tan") {
		document.getElementById("numbers-screen").innerHTML = "";
	}
	if (action == "Sqrt") {
		// console.log("&Sqrt;");
		action = "&Sqrt;";
	}
	globalAction = action;
	number2Start = "start";

	console.log(action);
	document.getElementById("numbers-screen").innerHTML += action;
}

function checkChoice () {
	number2Start = "";
	// if (number1 == "") {
	// 	number1 = parseInt(result);
	// }
	// console.log(number1 + " " + globalAction + " " + number2)
	if (ANS == "number1") {
		number1 = result;
	}
	if (ANS == "number2") {
		number2 = result;
	}
	console.log(Number(number1) + " " + globalAction + " " + Number(number2))

	if (globalAction == "+") {
		result = Number(number1) + Number(number2);
	}
	if (globalAction == "-") {
		result = Number(number1) - Number(number2);
	}
	if (globalAction == "X") {
		result = Number(number1) * Number(number2);
	}
	if (globalAction == "/") {
		result = Number(number1) / Number(number2);
	}
	if (globalAction == "^") {
		result = Math.pow(Number(number1), Number(number2));
	}
	if (globalAction == "&Sqrt;") {
		result = Math.sqrt(Number(number2));
	}
	if (globalAction == "sin") {
		result = Math.sin(Number(number2));
	}
	if (globalAction == "cos") {
		result = Math.cos(Number(number2));
	}
	if (globalAction == "tan") {
		result = (Math.sin(Number(number2)))/(Math.cos(Number(number2)));
	}

	console.log(result);
	var resultToShow = Math.round(result*Math.pow(10, 10))/Math.pow(10, 10);
	document.getElementById("numbers-screen").innerHTML += "<br>= " + resultToShow;
	clearBoard = "start";
}

function deleteChoice () {
	// document.getElementById("numbers-screen").innerHTML -= document.getElementById("numbers-screen").innerHTML.slice(-1);
	document.getElementById("numbers-screen").innerHTML = document.getElementById("numbers-screen").innerHTML.substring(0, document.getElementById("numbers-screen").innerHTML.length - 1);
	if (number2Start == "start") {
		// console.log("start");
		number2 = number2.substring(0, number2.length - 1);
	}
	// document.getElementById("numbers-screen").innerHTML -= "5";
}

function ACChoice () {
	document.getElementById("numbers-screen").innerHTML = "0";
	number1 = "0";
	number2 = "0";
}

function openMoreOptionsBar () {
	document.getElementById("more-options-container").style.left = 0;

	document.getElementById("more-options-open-arrow").style.width = 0;
	document.getElementById("more-options-open-arrow").style.height = 0;

	document.getElementById("more-options-close-arrow").style.width = "6%";
	document.getElementById("more-options-close-arrow").style.height = "100%";
}

function closeMoreOptionsBar () {
	document.getElementById("more-options-container").style.left = "-94%";

	document.getElementById("more-options-open-arrow").style.width = "6%";
	document.getElementById("more-options-open-arrow").style.height = "100%";

	document.getElementById("more-options-close-arrow").style.width = 0;
	document.getElementById("more-options-close-arrow").style.height = 0;
}

function openModeOptions () {
	document.getElementById("mode-options-padding-container").style.opacity = 1;
	document.getElementById("mode-options-padding-container").style.zIndex = 2;
	document.getElementById("mode-blur").style.opacity = 0.4;
	document.getElementById("mode-blur").style.zIndex = 1;
}

function closeModeOptions () {
	console.log("close");
	document.getElementById("mode-options-padding-container").style.opacity = 0;
	document.getElementById("mode-options-padding-container").style.zIndex = -1;
	document.getElementById("mode-blur").style.opacity = 0;
	document.getElementById("mode-blur").style.zIndex = -1;
}

// var str = "Hello World";
// console.log("The original string: " + str);
// // str -= str.slice(-1);
// // str.substring(0, str.length - 1)
// str = str.substring(0, 4);
// console.log("The new string: " + str)