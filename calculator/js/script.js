var number1 = "";
var number2 = "";
var number3 = "";
var number2Start;
var result = "";
var result2 = "";
var globalAction = "";
var clearBoard;
var ANS;
var globalDegOrRad = "rad";
var globalMode = "";
var quadraticEquationArray = ["","",""];
var abc = 0;
var numbersArray = [];
var actionsArray = [];
var numbersOrderArray = [];
var actionsOrderArray = [];
var numberNumber = 0;
var actionNumber = 0;
var thereWasPower = "";
// var actionsOrder, numbersOrder;

document.addEventListener("DOMContentLoaded", function (event) {
	changeMode("Regular"); //Quadratic-equation

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

function changeMode (mode) {
	$ajaxUtils.sendGetRequest("snippets/" + mode + "-mode-snippet.html", function (responseText) {
			document.querySelector("#output-container").innerHTML = responseText;
		},
		false);
	globalMode = mode;
	closeModeOptions();
}

function numbersChoice (number) {
	if (globalMode == "Quadratic-equation") {
		if (clearBoard == "start") {
			QuadraticEquationACChoice();
			clearBoard = "";
		}
		console.log(number);
		quadraticEquationArray[abc] += number;
		document.getElementById("quadratic-equation"+abc).innerHTML += number;
		// document.getElementById("quadratic-equation"+abc).style.border = "none";
	}
	if (globalMode == "Regular") {
		if (clearBoard == "start") {
			RegularACChoice();
			clearBoard = "";
		}
		// console.log(document.getElementById("numbers-box").innerHTML);
		if (document.getElementById("numbers-box").innerHTML == "0") {
			document.getElementById("numbers-box").innerHTML = "";
		}
		if (number == "Pi" || number == "e" || globalAction == "^" || thereWasPower == "yes") {
			if (number == "Pi") {
				number = Math.PI;
				document.getElementById("numbers-box").innerHTML += "&Pi;";
			}
			if (number == "e") {
				number = Math.E;
				document.getElementById("numbers-box").innerHTML += "e";
			}
			if (thereWasPower == "yes") {
				document.getElementById("numbers-box2").innerHTML += number;
			}
			if (globalAction == "^") {
				document.getElementById("power-numbers-box").innerHTML += number;
				document.getElementById("power-numbers-box").style.border = "none";
				document.getElementById("power-numbers-box").style.marginTop = "-5px";
				thereWasPower = "yes";
			}
		}
		else {
			document.getElementById("numbers-box").innerHTML += number;
		}
		if (numbersArray[numberNumber] == null) {
			console.log("null");
			numbersArray[numberNumber] = "";
		}
		numbersArray[numberNumber] += number;
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
}

function actionChoice (action) {
	numberNumber++;
	if (actionsArray[actionNumber] == null) {
		actionsArray[actionNumber] = "";
	}
	actionsArray[actionNumber] = action;
	actionNumber++;
	number1 = document.getElementById("numbers-box").innerHTML;
	if (clearBoard == "start") {
		RegularACChoice();
		clearBoard = "";
		document.getElementById("numbers-box").innerHTML = "ANS";
		number1 = Number(result);
	}
	if (number1 == "e") {
		number1 = Math.E;
	}
	// if (number1 == "&Pi;") {
	// 	number1 = Math.PI;
	// }
	if (action == "Sqrt" || action == "sin" || action == "cos" || action == "tan") {
		document.getElementById("numbers-box").innerHTML = "";
	}
	if (action == "Sqrt") {
		// console.log("&Sqrt;");
		action = "&Sqrt;";
	}
	globalAction = action;
	number2Start = "start";

	console.log(action);
	if (thereWasPower == "yes" || action == "^") {
		if (thereWasPower == "yes") {
			document.getElementById("numbers-box2").innerHTML += action;
		}
		if (action == "^") {
			document.getElementById("power-numbers-box").style.border = "1px solid black";
			document.getElementById("power-numbers-box").style.marginTop = "0";
		}
	}
	else {
		document.getElementById("numbers-box").innerHTML += action;
	}
}

function checkChoice () {
	// console.log("number 1: ", numbersArray[0], " number 2: ", numbersArray[1], "number 3: ", numbersArray[2]);
	console.log(numbersArray[0] + actionsArray[0] + numbersArray[1] + actionsArray[1] + numbersArray[2]);
	number2Start = "";
	thereWasPower = "";
	// if (number1 == "") {
	// 	number1 = parseInt(result);
	// }
	// console.log(number1 + " " + globalAction + " " + number2)
	if (globalMode == "Quadratic-equation") {
		if (abc == 2) {
			document.getElementById("quadratic-equation"+abc).style.boxShadow = "none";
			number1 = Number(quadraticEquationArray[0]);
			number2 = Number(quadraticEquationArray[1]);
			number3 = Number(quadraticEquationArray[2]);

			// result = number1 + number2 + number3;

			result = (-number2 + (Math.sqrt(Math.pow(number2, 2) - 4*number1*number3)))/(2*number1);
			result2 = (-number2 - (Math.sqrt(Math.pow(number2, 2) - 4*number1*number3)))/(2*number1)

			console.log(result + ", " + result2);
			document.getElementById("quadratic-equation-result-X1").innerHTML = "X";
			document.getElementById("quadratic-equation-result1-numbers").innerHTML = "= " + result;
			if (result !== result2) {
				document.getElementById("quadratic-equation-result-1").innerHTML = "1";
				document.getElementById("quadratic-equation-result-X2").innerHTML = "X";
				document.getElementById("quadratic-equation-result-2").innerHTML = "2";
				document.getElementById("quadratic-equation-result2-numbers").innerHTML = "= " + result2;
			}
			clearBoard = "start";
		}
		else {
			document.getElementById("quadratic-equation"+abc).style.boxShadow = "none";
			abc ++;
			document.getElementById("quadratic-equation"+abc).style.boxShadow = "0 0 10px #000";
		}
	}
	if (globalMode == "Regular") {
		if (ANS == "number1") {
			number1 = result;
		}
		if (ANS == "number2") {
			number2 = result;
		}
		console.log(Number(number1) + " " + globalAction + " " + Number(number2))

		// if (globalAction == "sin" || globalAction == "cos" || globalAction == "tan") {
		// 	if (globalDegOrRad == "deg") {
		// 		number2 = number2*Math.PI/180;
		// 	}
		// }
		// actionsOrder = 0;
		// numbersOrder = 0;
		var iArray = [];
		var iArrayCheck = 0;
		// var plusMinusCheck = 0;
		// var iArrayPlace = 0;

		for (var i = 0; i < actionsArray.length; i++) {
			if (actionsArray[i] == "^" || actionsArray[i] == "Sqrt" || actionsArray[i] == "&sqrt;") {
				actionsOrderArray[actionsOrderArray.length] = actionsArray[i];
				iArrayCheck = 0;
				for (var j = 0; j < iArray.length; j++) {
					if (i !== iArray[j]) {
						iArrayCheck++;
					}
				}
				if (iArrayCheck == iArray.length) {
					numbersOrderArray[numbersOrderArray.length] = numbersArray[i];
					iArray[iArray.length] = i;
				}
				iArrayCheck = 0;
				for (var j = 0; j < iArray.length; j++) {
					if ((i+1) !== iArray[j]) {
						iArrayCheck++;
					}
				}
				if (iArrayCheck == iArray.length) {
					numbersOrderArray[numbersOrderArray.length] = numbersArray[i+1];
					iArray[iArray.length] = i+1;
				}
				// actionsOrder++;
			}
		}
		for (var i = 0; i < actionsArray.length; i++) {
			if (actionsArray[i] == "X" || actionsArray[i] == "/") {
				actionsOrderArray[actionsOrderArray.length] = actionsArray[i];
				iArrayCheck = 0;
				for (var j = 0; j < iArray.length; j++) {
					if (i !== iArray[j]) {
						iArrayCheck++;
					}
				}
				if (iArrayCheck == iArray.length) {
					numbersOrderArray[numbersOrderArray.length] = numbersArray[i];
					iArray[iArray.length] = i;
					console.log("X, i");
					console.log("i: " + i);
					console.log("numbersArray[i]: " + numbersArray[i]);
					// console.log("actionsOrder: " + actionsOrder);
					// console.log("numbersOrderArray[actionsOrder]: " + numbersOrderArray[actionsOrder]);
					console.log("numbersOrderArray: " + numbersOrderArray);
				}
				iArrayCheck = 0;
				for (var j = 0; j < iArray.length; j++) {
					if ((i+1) !== iArray[j]) {
						iArrayCheck++;
					}
				}
				if (iArrayCheck == iArray.length) {
					numbersOrderArray[numbersOrderArray.length] = numbersArray[i+1];
					iArray[iArray.length] = i+1;
					console.log("X, (i+1)");
					console.log("i: " + i);
					console.log("numbersArray[i+1]: " + numbersArray[i+1]);
					// console.log("actionsOrder: " + actionsOrder);
					// console.log("numbersOrderArray[actionsOrder+1]: " + numbersOrderArray[actionsOrder+1]);
					console.log("numbersOrderArray: " + numbersOrderArray);
				}
				// actionsOrder++;
			}
		}
		for (var i = 0; i < actionsArray.length; i++) {
			if (actionsArray[i] == "+" || actionsArray[i] == "-") {
				actionsOrderArray[actionsOrderArray.length] = actionsArray[i];
				iArrayCheck = 0;
				for (var j = 0; j < iArray.length; j++) {
					if (i !== iArray[j]) {
						iArrayCheck++;
					}
				}
				if (iArrayCheck == iArray.length) {
					numbersOrderArray[numbersOrderArray.length] = numbersArray[i];
					iArray[iArray.length] = i;
					// if (actionsArray[i] == "-") {
					// 	plusMinusCheck++;
					// }
					console.log("-, i");
					console.log("iArray: " + iArray);
					console.log("i: " + i);
					console.log("numbersArray[i]: " + numbersArray[i]);
					// console.log("actionsOrder: " + actionsOrder);
					// console.log("numbersOrderArray[actionsOrder]: " + numbersOrderArray[actionsOrder]);
					console.log("numbersOrderArray: " + numbersOrderArray);
				}
				iArrayCheck = 0;
				for (var j = 0; j < iArray.length; j++) {
					if ((i+1) !== iArray[j]) {
						iArrayCheck++;
					}
				}
				if (iArrayCheck == iArray.length) {
					numbersOrderArray[numbersOrderArray.length] = numbersArray[i+1];
					iArray[iArray.length] = i+1;
					console.log("-, (i+1)");
					console.log("i: " + i);
					console.log("numbersArray[i+1]: " + numbersArray[i+1]);
					// console.log("actionsOrder: " + actionsOrder);
					// console.log("numbersOrderArray[actionsOrder+1]: " + numbersOrderArray[actionsOrder+1]);
					console.log("numbersOrderArray: " + numbersOrderArray);
				}
				// actionsOrder++;
			}
		}

		actionsArray = actionsOrderArray;
		numbersArray = numbersOrderArray;
		console.log(numbersArray);
		console.log(actionsArray);

		var temporalResult = Number(numbersArray[0]);

		for (var i = 0; i < actionsArray.length; i++) {

			if (actionsArray[i] == "sin" || actionsArray[i] == "cos" || actionsArray[i] == "tan") {
				if (globalDegOrRad == "deg") {
					number2 = number2*Math.PI/180;
				}
			}

			// if ((plusMinusCheck % 2) == 1) {
			// 	if (actionsArray[i] == "+") {
			// 		actionsArray[i] = "-";
			// 	}
			// 	if (actionsArray[i] =="-") {
			// 		actionsArray[i] = "+";
			// 	}
			// }

			if (actionsArray[i] == "+") {
				result = temporalResult + Number(numbersArray[i+1]);
			}
			if (actionsArray[i] == "-") {
				result = temporalResult - Number(numbersArray[i+1]);
			}
			if (actionsArray[i] == "X") {
				result = temporalResult * Number(numbersArray[i+1]);
			}
			if (actionsArray[i] == "/") {
				result = temporalResult / Number(numbersArray[i+1]);
			}
			if (actionsArray[i] == "^") {
				result = Math.pow(temporalResult, Number(numbersArray[i+1]));
			}
			if (actionsArray[i] == "Sqrt") {
				result = Math.sqrt(Number(numbersArray[i+1]));
			}
			if (actionsArray[i] == "sin") {
				result = Math.sin(Number(numbersArray[i+1]));
			}
			if (actionsArray[i] == "cos") {
				result = Math.cos(Number(numbersArray[i+1]));
			}
			if (actionsArray[i] == "tan") {
				result = (Math.sin(Number(numbersArray[i+1])))/(Math.cos(Number(numbersArray[i+1])));
			}

			temporalResult = result;

		}

		// if (globalAction == "+") {
		// 	result = Number(number1) + Number(number2);
		// }
		// if (globalAction == "-") {
		// 	result = Number(number1) - Number(number2);
		// }
		// if (globalAction == "X") {
		// 	result = Number(number1) * Number(number2);
		// }
		// if (globalAction == "/") {
		// 	result = Number(number1) / Number(number2);
		// }
		// if (globalAction == "^") {
		// 	result = Math.pow(Number(number1), Number(number2));
		// }
		// if (globalAction == "&Sqrt;") {
		// 	result = Math.sqrt(Number(number2));
		// }
		// if (globalAction == "sin") {
		// 	result = Math.sin(Number(number2));
		// }
		// if (globalAction == "cos") {
		// 	result = Math.cos(Number(number2));
		// }
		// if (globalAction == "tan") {
		// 	result = (Math.sin(Number(number2)))/(Math.cos(Number(number2)));
		// }
		console.log(result);

		// if ((plusMinusCheck % 2) == 1) {
		// 		result = -result;
		// }

		// console.log(result);
		// var resultToShow = Math.round(result*Math.pow(10, 10))/Math.pow(10, 10);
		// document.getElementById("numbers-box").innerHTML += "<br>= " + resultToShow;
		result = Math.round(result*Math.pow(10, 10))/Math.pow(10, 10);
		document.getElementById("result-box").innerHTML += "= " + result;
		clearBoard = "start";
	}
}

function deleteChoice () {
	// document.getElementById("numbers-box").innerHTML -= document.getElementById("numbers-box").innerHTML.slice(-1);
	document.getElementById("numbers-box").innerHTML = document.getElementById("numbers-box").innerHTML.substring(0, document.getElementById("numbers-box").innerHTML.length - 1);
	if (number2Start == "start") {
		// console.log("start");
		number2 = number2.substring(0, number2.length - 1);
	}
	// document.getElementById("numbers-box").innerHTML -= "5";
}

function ACChoice () {
	if (globalMode == "Regular") {
		RegularACChoice();
	}
	if (globalMode == "Quadratic-equation") {
		QuadraticEquationACChoice();
	}
}

function RegularACChoice () {
	document.getElementById("numbers-box").innerHTML = "0";
	document.getElementById("power-numbers-box").innerHTML = "";
	document.getElementById("numbers-box2").innerHTML = "";
	document.getElementById("result-box").innerHTML = "";
	// number1 = "0";
	// number2 = "0";
	// globalAction = "";
	numbersArray = [];
	actionsArray = [];
	globalAction = "";
	numbersOrderArray = [];
	actionsOrderArray = [];
	numberNumber = 0;
	actionNumber = 0;
	thereWasPower = "";
}

function QuadraticEquationACChoice () {
	for (var i = 0; i < quadraticEquationArray.length;) {
		quadraticEquationArray[i] = "";
		i++;
	}
	abc = 0;
	//clear numbers
	document.getElementById("quadratic-equation0").innerHTML = "";
	document.getElementById("quadratic-equation1").innerHTML = "";
	document.getElementById("quadratic-equation2").innerHTML = "";

	//clear results
	document.getElementById("quadratic-equation-result-X1").innerHTML = "";
	document.getElementById("quadratic-equation-result-1").innerHTML = "";
	document.getElementById("quadratic-equation-result1-numbers").innerHTML = "";
	document.getElementById("quadratic-equation-result-X2").innerHTML = "";
	document.getElementById("quadratic-equation-result-2").innerHTML = "";
	document.getElementById("quadratic-equation-result2-numbers").innerHTML = "";

	//clear shadows
	document.getElementById("quadratic-equation0").style.boxShadow = "0 0 10px #000";
	document.getElementById("quadratic-equation1").style.boxShadow = "none";
	document.getElementById("quadratic-equation2").style.boxShadow = "none";
}

function DegOrRadFunction (DegOrRad) {
	globalDegOrRad = DegOrRad;
	if (DegOrRad == "rad") {
		var notDegOrRad = "deg";
	}
	if (DegOrRad == "deg") {
		var notDegOrRad = "rad";
	}

	document.getElementById(DegOrRad).style.color = "#fff";
	document.getElementById(DegOrRad).style.textShadow = "0 0 7px #fff";
	document.getElementById(notDegOrRad).style.color = "#555";
	document.getElementById(notDegOrRad).style.textShadow = "none";

	closeModeOptions();
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
	// console.log("close");
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