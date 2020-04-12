// // //DOM manipulation
// // console.log(document.getElementById("title"));


// document.addEventListener("DOMContentLoaded",
// 	function (event) {
// 		function sayHello (event) {
// 			this.textContent = "said it!"
// 			var name = document.getElementById("name").value;
// 			var message = "<h2>Hello " + name + "!</h2";
// 			// document.getElementById("content").textContent = message; =
// 			// document.getElementById("content").innerHTML = message; =
// 			document.querySelector("#content").innerHTML = message;
// 			//doesn't work - document.querySelectorAll("div").innerHTML = message;
// 			if (name === "Gael Monfils") {
// 				document.querySelector("#title").textContent = "Gael Monfils is the best player in the world!";
// 			}
// 		}
// 		// unobstrusive event binding
// 		// document.querySelector("button").addEventListener("click", sayHello);
// 		document.querySelector("button").onclick = sayHello;
// 	}
// );


// using other source
document.addEventListener("DOMContentLoaded",
	function(event) {

		//Unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click", function () {

			// Call server to get the name
			$ajaxUtils
				.sendGetRequest("/data/name.txt",
					function (request) {
						var name = request.responseText;

						document.querySelector("#content")
							.innerHTML = "<h2>Hello " + name + "!";
					}); 
			});

	}
);