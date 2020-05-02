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

var galleryAray = [
	{
	"title" : "Vera Skvirsky & Adi Noy (Lab meeting, September 2016)"
	},
	{
	"title" : "Avinoam Solomon & Gal Rozen (Lab meeting, September 2016)"
	},
	{
	"title" : "Meital, Efrat, Miriam, & Ariel (Lab meeting, September 2016)"
	},
	{
	"title" : "Ariel & Avinoam (Lab meeting, September 2016)"
	},
	{
	"title" : "Lab meeting, September 2016"
	},
	{
	"title" : "From left to right: Vered, Noga, Adi, Ginna, & Gal (Lab meeting, September 2016)"
	},
	{
	"title" : "From left to right: Shirley Ben Shlomo, Orit Taubman ג€“ Ben-Ari & Liora Findler (STAR conference, Tel Aviv, June 2015)"
	},
	{
	"title" : "From left to right: Gal, Gabi, Adi, Orit, Ginna, Vera & Adi (STAR conference, Tel Aviv, June 2015)"
	},
	{
	"title" : "From left to right: Noga, Vered, Vera, Orit, Adi, & Ginna (May 2016)"
	},
	{
	"title" : "Orit Taubman - Ben-Ari & Vered Mey-Zahav Oren (May 2016)"
	},
	{
	"title" : "Orit Taubman - Ben-Ari & Noga Guggenheim (May 2016)"
	},
	{
	"title" : "Orit Taubman - Ben-Ari & Vera Skvirsky (May 2016)"
	},
	{
	"title" : "Gal Rozen & Vera Skvirsky (Lab meeting, May 2016)"
	},
	{
	"title" : "Miriam Chasson, Ginna Porat-Zyman, Adi Noy, & Noga Guggenheim (Lab meeting, May 2016)"
	},
	{
	"title" : "Shirley Ben Shlomo & Orit Taubman - Ben-Ari (May 2016)"
	},
	{
	"title" : "Shirley Ben Shlomo & Ofir Ben-Yaakov (May 2016)"       
	},
	{
	"title" : "From left to right: Adi Noy, Noga Guggenheim, & Limor Magen (July 2016)"      
	},
	{
	"title" : "Ariel presenting at the Social Work doctoral students conference (February 2017)"
	},
	{
	"title" : "Vera presenting at the Social Work doctoral students conference (February 2017)"
	},
	{
	"title" : "From left to right: Ofir, Keren, Vera, & Ariel at the Social Work doctoral students conference (February 2017)"
	},
	{              
	"title" : "From left to right: Vera, Keren,& Ofir at the Social Work doctoral students conference (February 2017)"
	},
	{
	"title" : "Miriam presenting at the ESPANET conference (Bar Ilan University, February 2017)"
	},
	{              
	"title" : "Shirely and Vera at the WCWMH conference, Dublin (March 2017)"
	},
	{              
	"title" : "Vera at the WCWMH conference, Dublin (March 2017)"
	},
	{              
	"title" : "Orit presenting at the WCWMH conference, Dublin (March 2017)"
	},
    {              
    "title" : "Our lab is hosting two interns (June-July 2017)"
    },
    {              
    "title" : "With Prof. Henny Bos from Amsterdam University (January 2018)"
    },
    {              
    "title" : "Noga presenting at the Qualitative Research Conference (Ben Gurion University, February 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },     
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {             
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Shulamit Michaeli, VP for Research, at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Michael Steger at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },     
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Brennan Peterson at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Dr. Eran Horowitz at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Dr. Avi Tsafrir at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Dov Feldberg at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Liat Lerner-Geva at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },              
    {              
    "title" : "Vera Skvirsky at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Dr. Floor van Rooij at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Orit Taubman ג€“ Ben-Ari at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Susan Ayers at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Sheldon Solomon at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Mario Mikulincer at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
    },
    {              
    "title" : "Prof. Joseph Deutsch, Dean, Faculty of Social Sciences,  at the conference: There is nothing impossible to him who will try (March 15, 2018)"
    },              
    {              
    "title" : "Prof. Michael Ungar from Dalhousie University (Canada) presenting at the conference: There is nothing impossible to him who will try (March 15, 2018)"
    },
    {              
    "title" : "Prof. Martin Hagger from Curtin University (Australia) presenting at the conference: There is nothing impossible to him who will try (March 15, 2018)"
    }
];

document.addEventListener("DOMContentLoaded", function (event) {

	pageTransformation('home');

	// document.querySelector("#img-container").innerHTML = '<img src="images/gallery/picture' + i + '.jpg" alt="Picture" heghit=100%>';
	// $ajaxUtils.sendGetRequest("../data/pictures-titles/picture" + i + "-title.txt", function (responseText) {
	// 		document.querySelector("#picture-title").innerHTML = responseText;
	// 	},
	// 	false);
	// document.getElementById("picture-number").innerHTML = i;
	// console.log(document.getElementById("gallery-container").width);
	// var galleryHeight = document.getElementById("gallery-container").width;
	// document.getElementById("gallery-container").heghit = "100px";

});

var i = 1;
function pageTransformation (pageName) {
	$ajaxUtils.sendGetRequest("snippets/" + pageName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
	var screenWidth = window.innerWidth;
		if (screenWidth<768) {
			$("#collapsable-nav").collapse('hide');
		}
	document.getElementById("page-on").id = "";
	document.getElementsByClassName(pageName)[0].id = "page-on";

	if (pageName == "Gallery") {}
}

function memberPageTransformation (memberName) {
$ajaxUtils.sendGetRequest("snippets/" + memberName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
}

function replacePicture () {
	document.querySelector("#img-container").innerHTML = '<img src="images/gallery/picture' + i + '.jpg" alt="Picture" heghit=100%>';
	document.querySelector("#picture-title").innerHTML = galleryAray[i-1].title;
	document.getElementById("picture-number").innerHTML = i;
	// $ajaxUtils.sendGetRequest("../data/pictures-titles/picture" + i + "-title.txt", function (responseText) {
	// 		document.querySelector("#picture-title").innerHTML = responseText;
	// 	},
	// 	false);
}

function nextPicture () {
	if (i == 25) {
		i = 0;
	}
	i++;
	replacePicture();
}

function prevPicture () {
	if (i == 1) {
		i = 26;
	}
	i--;
	replacePicture();
}

var playPictureTime;
// var galleryPlay = document.getElementById("gallery-play");

function playPicture () {
	document.getElementById("gallery-play").style.height = "0";
	document.getElementById("gallery-stop").style.height = "auto";
	// console.log(galleryPlay.offsetWidth);
	playPictureTime = setInterval(function () {
		if (i == 25) {
		i = 0;
		}
		// setTimeout(function () {}, 4000);
		i++;
		replacePicture();
		if (i == 25) {
			clearInterval(playPictureTime);
			i = 1;
			setTimeout(function () {
				replacePicture();
				document.getElementById("gallery-stop").style.height = "0";
				document.getElementById("gallery-play").style.height = "auto";
			}, 2500);
		}
	}, 2500);

}

function stopPlayPicture () {
	clearInterval(playPictureTime);
	document.getElementById("gallery-stop").style.height = "0";
	document.getElementById("gallery-play").style.height = "auto";
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