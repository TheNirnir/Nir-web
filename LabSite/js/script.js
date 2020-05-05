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

// var galleryAray = [
// 	{
// 	"title" : "Vera Skvirsky & Adi Noy (Lab meeting, September 2016)"
// 	},
// 	{
// 	"title" : "Avinoam Solomon & Gal Rozen (Lab meeting, September 2016)"
// 	},
// 	{
// 	"title" : "Meital, Efrat, Miriam, & Ariel (Lab meeting, September 2016)"
// 	},
// 	{
// 	"title" : "Ariel & Avinoam (Lab meeting, September 2016)"
// 	},
// 	{
// 	"title" : "Lab meeting, September 2016"
// 	},
// 	{
// 	"title" : "From left to right: Vered, Noga, Adi, Ginna, & Gal (Lab meeting, September 2016)"
// 	},
// 	{
// 	"title" : "From left to right: Shirley Ben Shlomo, Orit Taubman ג€“ Ben-Ari & Liora Findler (STAR conference, Tel Aviv, June 2015)"
// 	},
// 	{
// 	"title" : "From left to right: Gal, Gabi, Adi, Orit, Ginna, Vera & Adi (STAR conference, Tel Aviv, June 2015)"
// 	},
// 	{
// 	"title" : "From left to right: Noga, Vered, Vera, Orit, Adi, & Ginna (May 2016)"
// 	},
// 	{
// 	"title" : "Orit Taubman - Ben-Ari & Vered Mey-Zahav Oren (May 2016)"
// 	},
// 	{
// 	"title" : "Orit Taubman - Ben-Ari & Noga Guggenheim (May 2016)"
// 	},
// 	{
// 	"title" : "Orit Taubman - Ben-Ari & Vera Skvirsky (May 2016)"
// 	},
// 	{
// 	"title" : "Gal Rozen & Vera Skvirsky (Lab meeting, May 2016)"
// 	},
// 	{
// 	"title" : "Miriam Chasson, Ginna Porat-Zyman, Adi Noy, & Noga Guggenheim (Lab meeting, May 2016)"
// 	},
// 	{
// 	"title" : "Shirley Ben Shlomo & Orit Taubman - Ben-Ari (May 2016)"
// 	},
// 	{
// 	"title" : "Shirley Ben Shlomo & Ofir Ben-Yaakov (May 2016)"       
// 	},
// 	{
// 	"title" : "From left to right: Adi Noy, Noga Guggenheim, & Limor Magen (July 2016)"      
// 	},
// 	{
// 	"title" : "Ariel presenting at the Social Work doctoral students conference (February 2017)"
// 	},
// 	{
// 	"title" : "Vera presenting at the Social Work doctoral students conference (February 2017)"
// 	},
// 	{
// 	"title" : "From left to right: Ofir, Keren, Vera, & Ariel at the Social Work doctoral students conference (February 2017)"
// 	},
// 	{              
// 	"title" : "From left to right: Vera, Keren,& Ofir at the Social Work doctoral students conference (February 2017)"
// 	},
// 	{
// 	"title" : "Miriam presenting at the ESPANET conference (Bar Ilan University, February 2017)"
// 	},
// 	{              
// 	"title" : "Shirely and Vera at the WCWMH conference, Dublin (March 2017)"
// 	},
// 	{              
// 	"title" : "Vera at the WCWMH conference, Dublin (March 2017)"
// 	},
// 	{              
// 	"title" : "Orit presenting at the WCWMH conference, Dublin (March 2017)"
// 	},
//     {              
//     "title" : "Our lab is hosting two interns (June-July 2017)"
//     },
//     {              
//     "title" : "With Prof. Henny Bos from Amsterdam University (January 2018)"
//     },
//     {              
//     "title" : "Noga presenting at the Qualitative Research Conference (Ben Gurion University, February 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },     
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {             
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Shulamit Michaeli, VP for Research, at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Michael Steger at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },     
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Brennan Peterson at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Dr. Eran Horowitz at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Dr. Avi Tsafrir at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Dov Feldberg at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Liat Lerner-Geva at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },              
//     {              
//     "title" : "Vera Skvirsky at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Dr. Floor van Rooij at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Orit Taubman ג€“ Ben-Ari at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Susan Ayers at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Sheldon Solomon at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Mario Mikulincer at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)"
//     },
//     {              
//     "title" : "Prof. Joseph Deutsch, Dean, Faculty of Social Sciences,  at the conference: There is nothing impossible to him who will try (March 15, 2018)"
//     },              
//     {              
//     "title" : "Prof. Michael Ungar from Dalhousie University (Canada) presenting at the conference: There is nothing impossible to him who will try (March 15, 2018)"
//     },
//     {              
//     "title" : "Prof. Martin Hagger from Curtin University (Australia) presenting at the conference: There is nothing impossible to him who will try (March 15, 2018)"
//     }
// ];

var galleryAray = [
    {//1

    "title" : "Vera Skvirsky & Adi Noy (Lab meeting, September 2016)",

    "url" : "IMG_0164.jpg"

    },

    {//2

    "title" : "Avinoam Solomon & Gal Rozen (Lab meeting, September 2016)",

    "url" : "IMG_0155.jpg"

    },

    {//3

    "title" : "Meital, Efrat, Miriam, & Ariel (Lab meeting, September 2016)",

    "url" : "IMG_0186_part.jpg"

    },

    {//4

    "title" : "Ariel & Avinoam (Lab meeting, September 2016)",

    "url" : "IMG_0199.jpg"

    },

    {//5

    "title" : "Lab meeting, September 2016",

    "url" : "IMG_0206_cor1.jpg"

    },

    {//6

    "title" : "From left to right: Vered, Noga, Adi, Ginna, & Gal (Lab meeting, September 2016)",

    "url" : "IMG_0187.jpg"

    },

    {//7

            "title" : "From left to right: Shirley Ben Shlomo, Orit Taubman ג€“ Ben-Ari & Liora Findler (STAR conference, Tel Aviv, June 2015)",

            "url" : "from_word_doc_04.jpg"

    },

    {//8

    "title" : "From left to right: Gal, Gabi, Adi, Orit, Ginna, Vera & Adi (STAR conference, Tel Aviv, June 2015)",

    "url" : "2015-06-30 12.03.11.jpg"

    },

    {//9

    "title" : "From left to right: Noga, Vered, Vera, Orit, Adi, & Ginna (May 2016)",

    "url" : "IMG-20160519-WA0002.jpg"

    },

    {//10

    "title" : "Orit Taubman ג€“ Ben-Ari & Vered Mey-Zahav Oren (May 2016)",

    "url" : "A07A0107.jpg"

    },

    {//11

    "title" : "Orit Taubman ג€“ Ben-Ari & Noga Guggenheim (May 2016)",

    "url" : "A07A0117.jpg"

    },

    {//12

    "title" : "Orit Taubman ג€“ Ben-Ari & Vera Skvirsky (May 2016)",

    "url" : "A07A0102.jpg"

    },

    {//13

    "title" : "Gal Rozen & Vera Skvirsky (Lab meeting, May 2016)",

    "url" : "June 16, 2016 061.jpg"

    },

    {//14

    "title" : "Miriam Chasson, Ginna Porat-Zyman, Adi Noy, & Noga Guggenheim (Lab meeting, May 2016)",

    "url" : "June 16, 2016 060.jpg"

    },

    {//15

            "title" : "Shirley Ben Shlomo & Orit Taubman ג€“ Ben-Ari (May 2016)",

            "url" : "from_word_doc_01.jpg"

    },

    {//16

            "title" : "Shirley Ben Shlomo & Ofir Ben-Yaakov (May 2016)",

            "url" : "from_word_doc_02.jpg"

    },

    {//17

           "title" : "From left to right: Adi Noy, Noga Guggenheim, & Limor Magen (July 2016)",

            "url" : "IMG-20160707-WA0052.jpg"

    },

    {//18

    "title" : "Ariel presenting at the Social Work doctoral students conference (February 2017)",

    "url" : "IMG-20170207-WA0010.jpg"

    },

    {//19

    "title" : "Vera presenting at the Social Work doctoral students conference (February 2017)",

    "url" : "IMG-20170207-WA0013.jpg"

    },

    {//20

    "title" : "From left to right: Ofir, Keren, Vera, & Ariel at the Social Work doctoral students conference (February 2017)",

    "url" : "kenes doc07022017_1.jpg"

    },

    { //21             

    "title" : "From left to right: Vera, Keren,& Ofir at the Social Work doctoral students conference (February 2017)",

    "url" : "kenes doc07022017_3.jpg"

    },

    {//22

    "title" : "Miriam presenting at the ESPANET conference (Bar Ilan University, February 2017)",

    "url" : "IMG-20170222-WA0001_miriam22022017.jpg"

    },

    {//23             

    "title" : "Shirely and Vera at the WCWMH conference, Dublin (March 2017)",

    "url" : "Dublin2017_06.JPG"

    },

    {//24             

    "title" : "Vera at the WCWMH conference, Dublin (March 2017)",

    "url" : "Dublin2017_07.JPG"

    },

    {//25             

    "title" : "Orit presenting at the WCWMH conference, Dublin (March 2017)",

    "url" : "Dublin2017_04.jpg"

    },

    {//26             

    "title" : "Our lab is hosting two interns (June-July 2017)",

    "url" : "IMG_hosting interns130617.jpg"

    },

    {//27             

    "title" : "With Prof. Henny Bos from Amsterdam University (January 2018)",

    "url" : "Henny150118_1.jpg"

    },

    {//28             

    "title" : "Noga presenting at the Qualitative Research Conference (Ben Gurion University, February 2018)",

    "url" : "Noga06022018.jpg"

    },

    {//29             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_010_resize.JPG"

    },

    {//30             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_063_resize.JPG"

    },

    {//31             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_307_resize.JPG"

    },

    {//32             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_034_resize.JPG"

    },

    {//33              

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_047_resize.JPG"

    },

    {//34             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_111_resize.JPG"

    },

    {//35             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_115_resize.JPG"

    },

    { //36             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_118_resize.JPG"

    },     

    {//37            

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_132_resize.JPG"

    },

    {//38              

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_133_resize.JPG"

    },

    {//39             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_137_resize.JPG"

    },

    {//40             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_067_resize.JPG"

    },

    {//41             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_049_resize.JPG"

    },

    {//42              

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_167_resize.JPG"

    },

    {//43             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_141_resize.JPG"

    },

    {//44             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_155_resize.JPG"

    },

    {//45             

    "title" : "Prof. Shulamit Michaeli, VP for Research, at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_179_resize.JPG"

    },

    {//46             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_386_resize.JPG"

    },

    {//47             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_224_resize.JPG"

    },

    {//48             

    "title" : "Prof. Michael Steger at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_239_resize.JPG"

    },     

    {//49              

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_246_resize.JPG"

    },

    {//50              

    "title" : "Prof. Brennan Peterson at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_261_resize.JPG"

    },

    {//51             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_203_resize.JPG"

    },

    {//52             

    "title" : "Dr. Eran Horowitz at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_311_resize.JPG"

    },



    {//53             

    "title" : "Dr. Avi Tsafrir at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_317_resize.JPG"

    },

    {//54              

    "title" : "Prof. Dov Feldberg at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_338_resize.JPG"

    },

    {//55             

    "title" : "Prof. Liat Lerner-Geva at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_352_resize.JPG"

    },

    {//56             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_336_resize.JPG"

    },

    {//57              

    "title" : "Vera Skvirsky at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_362_resize.JPG"

    },

    {//58             

    "title" : "Dr. Floor van Rooij at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_378_resize.JPG"

    },

    {//59             

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "img_408_resize.JPG"

    },

    {//60              

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "80312-resize.jpg"

    },

    {//61              

    "title" : "The international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "726.jpg"

    },

    {//62              

    "title" : "Prof. Orit Taubman ג€“ Ben-Ari at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "314.jpg"

    },

    {//63             

    "title" : "Prof. Susan Ayers at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "534.jpg"

    },

    {//64             

    "title" : "Prof. Sheldon Solomon at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "743.jpg"

    },

    {//65             

    "title" : "Prof. Mario Mikulincer at the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "904.jpg"

    },

    {//66             

    "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "f6484544.jpg"

    },

    {//67             

    "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "f6434240.jpg"

    },

    {//68             

    "title" : "Evening tour in Old Jaffa during the international symposium: Barriers and pathways in the transition to parenthood (12-14 March, 2018)",

    "url" : "f6430208.jpg"

    },

    {//69             

    "title" : "Prof. Joseph Deutsch, Dean, Faculty of Social Sciences,  at the conference: There is nothing impossible to him who will try (March 15, 2018)",

    "url" : "8914_resize.jpg"

    },
    {//70              

    "title" : "Prof. Michael Ungar from Dalhousie University (Canada) presenting at the conference: There is nothing impossible to him who will try (March 15, 2018)",

    "url" : "9113_resize.jpg"

    },

    {//71              

    "title" : "Prof. Martin Hagger from Curtin University (Australia) presenting at the conference: There is nothing impossible to him who will try (March 15, 2018)",

    "url" : "9400_resize.jpg"

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

	if (pageName == "Gallery") {
		i = 1;
		// document.addEventListener("DOMContentLoaded", function (event) {
		// 	touchswipeStart();
		// });
		setTimeout(function () {
			touchswipeStart();
		}, 1000);
	}
	return pageName;
}

function memberPageTransformation (memberName) {
$ajaxUtils.sendGetRequest("snippets/" + memberName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
}

function replacePicture () {
	// document.querySelector("#img-container").innerHTML = '<img src="images/gallery1/picture' + i + '.jpg" alt="Picture">';
	document.querySelector("#img-container").innerHTML = '<img src="images/gallery/' + galleryAray[i-1].url + '">';
	document.querySelector("#picture-title").innerHTML = galleryAray[i-1].title;
	document.getElementById("picture-number").innerHTML = i;
	// $ajaxUtils.sendGetRequest("../data/pictures-titles/picture" + i + "-title.txt", function (responseText) {
	// 		document.querySelector("#picture-title").innerHTML = responseText;
	// 	},
	// 	false);
}

function nextPicture () {
	if (i == galleryAray.length) {
		i = 0;
	}
	i++;
	replacePicture();
}

function prevPicture () {
	if (i == 1) {
		i = galleryAray.length+1;
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
		i++;
		replacePicture();
		if (i == galleryAray.length) {
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

function touchswipeStart () {
	$(function() {
	  $("#test").swipe( {
	    //Generic swipe handler for all directions
	    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	      $(this).text("You swiped " + direction );  
	      nextPicture();
	    }
	  });
	  // if (pageName != "Gallery") {
	  // 	return;
	  // }
	});
}

// $(function() {
//   $("#test").swipe( {
//     //Generic swipe handler for all directions
//     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//       $(this).text("You swiped " + direction );  
//     }
//   });
 
//   //Set some options later
//   $("#test").swipe( {fingers:2} );
// });

// $("#img-container").touchwipe({
//      wipeLeft: function() { alert("left"); },
//      wipeRight: function() { alert("right"); },
//      wipeUp: function() { alert("up"); },
//      wipeDown: function() { alert("down"); },
//      min_move_x: 20,
//      min_move_y: 20,
//      preventDefaultEvents: true
// });

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