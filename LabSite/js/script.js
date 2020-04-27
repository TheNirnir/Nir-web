// $(function () { // same as document.addEventListener("DOMContentLoaded"...)
// 	// same as document.qeurySelector("#navbarToggle").addEventListener("blur",...
// 	$("#navbarToggle").blur(function (event) {
// 		var screenWidth = window.innerWidth;
// 		if (screenWidth<768) {
// 			$("#collapsable-nav").collapse('hide');
// 		}
// 	});
// });

function hello () {
	console.log("hello");
	// document.querySelector("#main-content").innerHTML = "hello";
	window.location.href = "OritT.html"
}
// document.addEventListener("DOMContentLoaded", function (event) {
// 	var i=1;
// for (i<=2; i++;) {
	// document.querySelector("#foward-arrow").addEventListener("click", function () {
		// function nextPicture() {
 		// document.querySelector("#img-container").innerHTML = '<img src="images/gallery/gallery' + '1' + '.jpg" alt="Picture" heghit=100%>';
 		// }		
	// });
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