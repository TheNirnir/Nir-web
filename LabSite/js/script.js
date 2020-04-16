// $(function () { // same as document.addEventListener("DOMContentLoaded"...)
// 	// same as document.qeurySelector("#navbarToggle").addEventListener("blur",...
// 	$("#navbarToggle").blur(function (event) {
// 		var screenWidth = window.innerWidth;
// 		if (screenWidth<768) {
// 			$("#collapsable-nav").collapse('hide');
// 		}
// 	});
// });

document.addEventListener("DOMContentLoaded", function (event) {
	var coll = document.getElementsByClassName("collapsible-a");
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("active-a");
	    var content = this.nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	  });
	}
});

var researchOptionsOpen = function () {
	document.querySelector("#research-options").textContent = "options";
};

var researchOptionsClose = function () {
	document.querySelector("#research-options").textContent = "";
};
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

// global.$ot = ot;

// })(window);

// 	function aboutLoad (event) {
// 		$ajaxUtils.sendGetRequest("snippets/about-snippet.html", function (responseText) {
// 			document.querySelector("#main-content").innerHTML = responseText;
// 		},
// 		false);
// 	}