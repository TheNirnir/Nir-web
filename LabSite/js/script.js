// $(function () { // same as document.addEventListener("DOMContentLoaded"...)
// 	// same as document.qeurySelector("#navbarToggle").addEventListener("blur",...
// 	$("#navbarToggle").blur(function (event) {
// 		var screenWidth = window.innerWidth;
// 		if (screenWidth<768) {
// 			$("#collapsable-nav").collapse('hide');
// 		}
// 	});
// });

// function memberPagePointing (memberName) {
// 	// document.querySelector("#main-content").innerHTML = "hello";
// 	$ajaxUtils.sendGetRequest("snippets/" + memberName + "-snippet.html", function (responseText) {
// 			document.querySelector("#main-content").innerHTML = responseText;
// 		},
// 		false);
// 	// window.location.href = memberName + ".html";
// }
document.addEventListener("DOMContentLoaded", function (event) {

	pageTransformation('Home');

	document.querySelector("#img-container").innerHTML = '<img src="images/gallery/picture1.jpg" alt="Picture" heghit=100%>';
	$ajaxUtils.sendGetRequest("../data/pictures-titles/picture1-title.txt", function (responseText) {
			document.querySelector("#picture-title").innerHTML = responseText;
		},
		false);
	// console.log(document.getElementById("gallery-container").width);
	// var galleryHeight = document.getElementById("gallery-container").width;
	// document.getElementById("gallery-container").heghit = "100px";

});

function pageTransformation (pageName) {
	$ajaxUtils.sendGetRequest("snippets/" + pageName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
}

var i = 1;

function nextPicture () {
	if (i == 7) {
		i = 0;
	}
	i++;
	document.querySelector("#img-container").innerHTML = '<img src="images/gallery/picture' + i + '.jpg" alt="Picture" heghit=100%>';
	$ajaxUtils.sendGetRequest("../data/pictures-titles/picture" + i + "-title.txt", function (responseText) {
			document.querySelector("#picture-title").innerHTML = responseText;
		},
		false);
	// $ajaxUtils
	// 			.sendGetRequest("data/pictures-title.txt",
	// 				function (res) {
	// 					// var message =
	// 					// 	res.firstName + " " + res.lastName
	// 					// 	if (res.likesChineseFood) {
	// 					// 		message += " likes Chinese food";
	// 					// 	}
	// 					// 	else {
	// 					// 		message += " doesn't likes likes Chinese food";
	// 					// 	}
	// 					// 	message += " and uses ";
	// 					// 	message +=res.numberOfDisplays;
	// 					// 	message += " displays for coding.";

	// 					var pictureTitle = res.picture + "1";

	// 					document.querySelector("#picture-title")
	// 						.innerHTML = pictureTitle;
	// 				}); 
}

function prevPicture () {
	if (i == 1) {
		i = 8;
	}
	i=i-1;
	document.querySelector("#img-container").innerHTML = '<img src="images/gallery/picture' + i + '.jpg" alt="Picture" heghit=100%>';
	$ajaxUtils.sendGetRequest("../data/pictures-titles/picture" + i + "-title.txt", function (responseText) {
			document.querySelector("#picture-title").innerHTML = responseText;
		},
		false);
}

// document.addEventListener("DOMContentLoaded", function (event) {
// 	var i=1;
// for (i<=2; i++;) {
// // 	// document.querySelector("#foward-arrow").addEventListener("click", function () {
// // 		// function nextPicture() {
//  		document.querySelector("#img-container").innerHTML = '<img src="images/gallery/gallery' + i + '.jpg" alt="Picture" heghit=100%>';
// //  		// }		
// // // 	});
// }
// });

// (function (global) {

// 	var ot = {};

// 	var homeHtml = "snippets/home-snippet.html";
// 	var aboutHtml = "snippets/about-snippet.html";

// 	var html = homeHtml;
// 	// convinience function for inserting innerHtml fot 'select'
// 	var insertHtml = function (selector, html) {
// 		var targetElem = document.querySelector(selector);
// 		targetElem.innerHtml = html;
// 	};

// 	// showing loading icon inside element identified by 'selector'
// 	var showLoading = function (selector) {
// 		var html = "<div class='text-center'>";
// 		html += "<img src='images/ajax-loader.gif'></div>";
// 		insertHtml (selector, html);
// 	};

// 	// on page load - before images or css
// 	document.addEventListener("DOMContentLoaded", function (event) {
// 		// on first load, show home view
// 		showLoading("#main-content");
// 		$ajaxUtils.sendGetRequest(html, function (responseText) {
// 			document.querySelector("#main-content").innerHTML = responseText;
// 		},
// 		false);
// 	});
// 	// document.querySelector("#about-bar").addEventListener("click", function (event) {
// 	// 	document.querySelector("#main-content").innerHtml = "<h2>about</h2>"
// 	// });
// 	// function aboutBar (event) {
// 	// 	// on first load, show home view
// 	// 	showLoading("#main-content");
// 	// 	$ajaxUtils.sendGetRequest("snippets/about-snippet.html", function (responseText) {
// 	// 		document.querySelector("#main-content").innerHTML = responseText;
// 	// 	},
// 	// 	false);
// 	// }

// global.$ot = ot;

// })(window);

// 	function aboutLoad (event) {
// 		$ajaxUtils.sendGetRequest("snippets/about-snippet.html", function (responseText) {
// 			document.querySelector("#main-content").innerHTML = responseText;
// 		},
// 		false);
// 	}