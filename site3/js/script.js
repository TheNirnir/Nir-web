// //DOM manipulation
// console.log(document.getElementById("title"));
function sayHello () {
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2";
	// document.getElementById("content").textContent = message; =
	// document.getElementById("content").innerHTML = message; =
	document.querySelector("#content").innerHTML = message;
	//doesn't work - document.querySelectorAll("div").innerHTML = message;
}