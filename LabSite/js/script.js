$(function () { // same as document.addEventListener("DOMContentLoaded"...)
	// same as document.qeurySelector("#navbarToggle").addEventListener("blur",...
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth<768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});

(function (global) {

	var ot = {};

	var homeHtml = "snippets/home-snippet.html";
	var aboutHtml = "snippets/about-snippet.html";

	var html = homeHtml;
	// convinience function for inserting innerHtml fot 'select'
	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHtml = html;
	};

	// showing loading icon inside element identified by 'selector'
	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/ajax-loader.gif'></div>";
		insertHtml (selector, html);
	};
	// var AboutLoad = function () {
	// 	html = aboutHtml;
	// };
	// on page load - before images or css
	document.addEventListener("DOMContentLoaded", function (event) {
		// on first load, show home view
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(html, function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
	});

global.$ot = ot;

})(window);