var x = "Hello from global";
console.log(x);

var a = function () {
	var x = "Hello from a";
	console.log(x);
	b();
}

function b () {
	console.log(x);
}

a();

var y;
// var x=5, y=7;
if (y == undefined) {
	console.log("y is undefined");
}

y = 5;
if (y == undefined) {
	console.log("y is undefined");
}
else {
	console.log("y is defined, y=" + y) //also leagal: console.log("y is defined, y =", y)
}
// control + slesh is a comment
var string = "Hello";
string += " world"; //equals to: string = string + " world"
console.log(string);

var c="4", d=4;
if (c==d) {
	console.log("c is equal to d");
}
if (c===d) {
	console.log("c is equal to d");
}
else {
	console.log("c is NOT equal to d");
}

if (false || null || undefined || "" || 0 || NaN) {//NaN = Not a Number
	console.log("This is true"); //This is NOT
}
else {
	console.log("All false")
}
// we can check it by using the "Boolean()" command in the page
if (true && "Hello" && 1 && -1 && "false") {
	console.log("All true")
}