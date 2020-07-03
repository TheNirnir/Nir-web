var number1 = "";
var number2 = "";
var number2Start;
var result = "";
var globalAction = "";

function numbersChoice (number) {
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