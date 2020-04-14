document.addEventListener("DOMContentLoaded",
	function(event) {

		//Unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click", function () {
			// Call server to get the name
			$ajaxUtils
				.sendGetRequest("/data/name.txt",
					function (res) {
						var message =
							res.firstName + " " + res.lastName
							if (res.likesChineseFood) {
								message += " likes Chinese food";
							}
							else {
								message += " doesn't likes likes Chinese food";
							}
							message += " and uses ";
							message +=res.numberOfDisplays;
							message += " displays for coding.";

						document.querySelector("#content")
							.innerHTML = "<h2>" + message + "</h2>";
					}); 
			});

	}
);