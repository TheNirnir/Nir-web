// //DOM manipulation
// console.log(document.getElementById("title"));
document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello (event) {
			this.textContent = "said it!"
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2";
			// document.getElementById("content").textContent = message; =
			// document.getElementById("content").innerHTML = message; =
			document.querySelector("#content").innerHTML = message;
			//doesn't work - document.querySelectorAll("div").innerHTML = message;
			if (name === "Gael Monfils") {
				document.querySelector("#title").textContent = "Gael Monfils is the best player in the world!";
			}
		}
		// unobstrusive event binding
		// document.querySelector("button").addEventListener("click", sayHello);
		document.querySelector("button").onclick = sayHello;
	}
);