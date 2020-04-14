// var x = "Hello from global";
// console.log(x);

// var a = function () {
// 	var x = "Hello from a";
// 	console.log(x);
// 	b();
// }

// function b () {
// 	console.log(x);
// }

// a();

// var y;
// // var x=5, y=7;
// if (y == undefined) {
// 	console.log("y is undefined");
// }

// y = 5;
// if (y == undefined) {
// 	console.log("y is undefined");
// }
// else {
// 	console.log("y is defined, y=" + y) //also leagal: console.log("y is defined, y =", y)
// }
// // control + slesh is a comment
// var string = "Hello";
// string += " world"; //equals to: string = string + " world"
// console.log(string);

// var c="4", d=4;
// if (c==d) {
// 	console.log("c is equal to d");
// }
// if (c===d) {
// 	console.log("c is equal to d");
// }
// else {
// 	console.log("c is NOT equal to d");
// }

// if (false || null || undefined || "" || 0 || NaN) {//NaN = Not a Number
// 	console.log("This is true"); //This is NOT
// }
// else {
// 	console.log("All false")
// }
// // we can check it by using the "Boolean()" command in the page
// if (true && "Hello" && 1 && -1 && "false") {
// 	console.log("All true")
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// console.log("sum =", sum);

// function e (number) {
// 	number = number || 1;
// 	console.log("The number is: " + number);
// }
// e(5);
// e();

// // //****objects 
// var nir = new Object();
// nir.first = "Nir";
// nir.last = {};
// nir["last"["start"]] = "Ben";
// nir["last"["middle"]] = "-";
// nir["last"["ending"]] = "Ari";
// console.log(nir);
// console.log("The first name is " + nir["first"]);

// //****Better way to defined Objects
// var nir = {
// 	first: "Nir",
// 	last: {
// 		start: "Ben",
// 		middle: "-",
// 		"The ending": "Ari"
// 	}
// };
// console.log(nir);
// console.log("The last name is " + nir.last);

// console.log("The ending of the last name is " + nir.last["The ending"]);

// // ****functions
// function multiply (x, y) {
// 	return x*y;
// };
// multiply.virsion = "v.2.0";
// console.log(multiply(5, 3));
// console.log(multiply.virsion);

// function makeMultiplier (multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier*x;
// 	};
// 	return myFunc;
// };
// var multiplyBy3 = makeMultiplier(3);
// var doubleAll = makeMultiplier(2);
// console.log(multiplyBy3(10));
// console.log(doubleAll(100));

// function doOperationOn (x, operation) {
// 	return operation(x);
// };
// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);

// // //******Passing Variables by Value vs. by Reference
// // ****Coping by Value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);
// b = 5;
// console.log("After updating b");
// console.log("a: " + a);
// console.log("b: " + b);
// // ****Coping by Reference
// var a = {x: 7};
// var b = a;
// console.log("a: ");
// console.log(a);
// console.log("b: ");
// console.log(b);
// b.x = 5;
// console.log("After updating b.x");
// console.log("a: ");
// console.log(a);
// console.log("b: ");
// console.log(b);
// // ****Passing by value
// function changePrimitive (primValue){
// 	console.log("In changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// };

// var Value = 7;
// changePrimitive(Value); // objValue = value
// console.log("After changePrimitive, Value: " + Value);
// // ****Passing by Reference
// function changeObject (objValue){
// 	console.log("In changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x = 5;
// 	console.log("after:");
// 	console.log(objValue);
// };

// var Value = {x: 7};
// changeObject(Value); // objValue = value
// console.log("After changeObject, Value: ");
// console.log(Value);

// // // ****** the keyword "this"
// // **** "this" in functions
// function Circle (radius) {
// 	this.radius = radius;
// }
// Circle.prototype.getArea =
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	};
// var myCircle = new Circle(10);
// console.log(myCircle);
// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle.getArea());

// // **** "this" in objects
// var objCircle = {
// 	radius: 10,

// 	getArea: function () {
// 		var self = this;		
// 		console.log(this);

// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(objCircle.getArea());

// // ****arrays
// var array = new Array();
// array[0] = "Nir";
// array[1] = 15;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {hour: 2};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].hour);

// var names = ["Nir", "Adi", "Liron"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

// names[100] = "Lea";
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

// // ****special for loop
// var names = ["Nir", "Adi", "Liron"];

// var NirObj = {
// 	Me: "Nir",
// 	"My mother": "orit",
// 	"My fother": "Rami"
// };
// for (var prop in NirObj) {
// 	console.log(prop + ": " + NirObj[prop]);
// }

// for (var name in names) {
// 	console.log("Hello: " + names[name]);
// }

// // ****Immediately Invoked Function Expression (IIFE)
// (function (name) {
// 	console.log("Hello " + name);
// })("Nir");

// // converts from json string to object
// var obj = JSON.parse(jsonString);
// // converts from object to json string
// var str = JSON.stringify(obj)