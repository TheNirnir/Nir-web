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

// var galleryArray = [
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

var galleryArray = [
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

var currentMembersObj = {
	currentMembersArray: [
	{//1
		fullName: "Prof. Orit Taubman - Ben&nbsp;-&nbsp;Ari",
		shortName: "OritT",
		content: "is a psychologist and professor at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University in Israel. Her research focuses on two main interests. The first is intergenerational relationships and personal growth following life transitions, such as the transitions to parenthood and grandparenthood. In the wake of her ground-breaking research, her scholarly publications were among the first to introduce the construct of personal growth into the discourse of life transitions. Her studies examine both deleterious and positive or constructive predispositions and outcomes within families coping with various stress-related events, such as the birth of a pre-term infant, parenthood following fertility treatment, and parenting twins. The second focus of her research is the psychology of risk taking, especially reckless driving, with an emphasis on risk taking among adolescents and young adults. Over the years, she has studied youngsters during the stages of learning to drive and the early phases of driving, examining various issues, including the motivations for driving, gender differences, relevant personality traits, and the contribution of the family and peers. Within this framework, she has developed and confirmed the validity and reliability of instruments for assessing driving style (Multidimensional Driving Style Inventory; MDSI), as well as for assessing the attitudes of young drivers and their parents to the accompanied driving period (Attitudes Towards Accompanied Driving; ATAD). She has also developed a new theoretical concept, Family Climate for Road Safety, along with an instrument for its assessment (Family Climate for Road Safety Scale; FCRSS)."
	},
	{//2
		fullName: "Dr. Shirley Ben Shlomo",
		shortName: "ShirleyB",
		content: "is a clinical social worker and psychotherapist specializing in parents, children, and youth. A lecturer and former head of the Bachelor's degree program at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, she received her PhD at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. Over the last decade, her research has focused on positive outcomes following life transitions, the representation of social work in the media, and developmental implications of intergenerational transmission of abuse and neglect. Her papers have been published in scientific journals and presented at international conferences."
	},
	{//3
		fullName: "Dr. Noga Guggenheim",
		shortName: "NogaG",
		content: "is a clinical social worker and a relational psychotherapist. She received her MA in Special Education from the Hebrew University in Jerusalem and her MSW and PhD in Social Work from the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. With over 30 years of experience in clinical work and as a clinical supervisor, she works with adults in her private practice in Tel Aviv, specializing in coping with various changes during the life cycle (including loss, bereavement, PTSD, disability, and rehabilitation). Her PhD dealt with the multidimensional assessment of friendship relations among young drivers and their contribution to road safety. Based mainly on the methodology of qualitative phenomenology, her research deals with questions of driving behavior and involves culture, gender, and special population groups. Her work has been published in scientific journals."
	},
	{//4
		fullName: "Dr. Ariel Ezra",
		shortName: "ArielE",
		content: "is a clinical social worker. He has a BA in Philosophy and Education from Ben-Gurion University, and a BA, MSW and PhD from the Louis and Gabi Weisfeld school of Social Work at Bar-Ilan University. His PhD dissertation tapped on the contribution of resilience factors to mental health and personal growth in the transition to military service. He served as a mental health officer in the IDF. Today, He teaches at Ashkelon Academic College and manages an academic mentoring service for higher-education students coping with severe mental illness."
	},
	{//5
		fullName: "Vera Skvirsky",
		shortName: "VeraS",
		content: "is a clinical social worker and a PhD student at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. She has a BA in History and Sociology from Tel Aviv University and an MA from Bar-Ilan University. Her studies focus on the mental health of women with fertility problems, and she is the research manager for the longitudinal fertility study (POWER) being conducted by the lab."
	},
	{//6
		fullName: "Salam Abu-Sharkia",
		shortName: "SalamA",
		content: "is a PhD student at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. She has a BA in Social work and Criminology from Max Stern Academic College of Emek Yezreel, and a Master’s degree in Social Work from Bar-Ilan University. She is currently working as a social worker at Yoseftal hospital in Eilat. The series of studies she is conducting for her doctorate focuses on personal growth and cultural factors among Arab women in different stages of infertility treatment."
	},
	{//7
		fullName: "Ofir Ben Yaakov",
		shortName: "OfirB",
		content: "is an PhD student at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. He has a BA in Social Work from Haifa University and an MA from the School of Social Work at Bar-Ilan University. A clinical social worker with extensive experience in the field of mental health, he currently works as a clinician in mental health clinics, specializing in individual and group work with children and adolescents with emotional and behavioral problems and adults with mental health disorders. His MA thesis, under the supervision of Dr. Shirley Ben Shlomo, dealt with the experience of parenthood of young children in light of personality characteristics of the parent and child and the parent’s couple relationship. His studies focus on the transition to parenthood, parenthood of young children, and the parent-child relationship."
	},
	{//8
		fullName: "Keren Yuzuk",
		shortName: "KerenY",
		content: "is a doctoral student and a clinical social worker with a BA and MA in Social Work from the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. Her MA thesis, under the supervision of Dr. Shirley Ben Shlomo, investigated life satisfaction and meaning in life during the transition of both men and women to parenthood. The series of studies she is conducting for her doctorate, under the supervision of Prof. Orit Taubman – Ben-Ari, focuses on TMT and infertility issues."
	},
	{//9
		fullName: "Miriam Chasson",
		shortName: "MiriamC",
		content: "is a social worker and and a PhD student at the Louis and Gabi Weisfeld School of Social work at Bar-Ilan University. She has a BA and an MA from the School of Social work at Bar-Ilan University. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, investigated the transition to motherhood of single mothers by choice, focusing on the contribution of the mother's personal resources to her mental health and personal growth."
	},
	{//10
		fullName: "Gal Rozen",
		shortName: "GalR",
		content: "is a clinical social worker and a PhD candidate under the supervision of Prof. Orit Taubman – Ben-Ari. He has a BA in Philosophy and a BA and Master’s degree in Social Work from Bar-Ilan university, and he specializes in working with children and their parents and team training. He currently serves as the coordinator of clinical work at the Neve Hanna Children’s Home for youngsters from troubled families in Kiryat Gat. His Master’s thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, dealt with personal growth among mothers of pre-term babies, examining the contribution of the health risk to the infants, the perceived stress of the mothers, and the emotional support of the grandmother."
	},
	{//11
		fullName: "Anna Zelkin",
		shortName: "AnnaZ",
		content: "is a PhD candidate at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. Anna is a social worker and psychotherapist specializing in adults with physical disease. She is currently working as a social worker at Kaplan hospital in Rehovot. She has a BA from the School of Social Work at Tel-Aviv University and an MA from the School of Social Work at Bar-Ilan University. Her MA thesis, under the supervision of Prof. Varda Soskolni, investigated the association of illness perception, personal control and social support with psychological distress in GI cancer patients."
	},
	{//12
		fullName: "Meital Navon",
		shortName: "MeitalN",
		content: "is a PhD candidate at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. Meital is a clinical social worker and graduated her MA at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She has a BA in Social Work from the Hebrew University in Jerusalem, and has studied animal-assisted therapy. She currently works with adolescents and youth at risk in Jerusalem. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, focused on affect regulation processes and their association with risky driving."
	},
	{//13
		fullName: "Maram Yassin",
		shortName: "MaramY",
		content: "is a PhD candidate at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University, under the supervision of Prof. Orit Taubman – Ben-Ari. Maram is a community social worker, within the Community Security Program sponsored by the Ministry of Public Security, in the city of Tamra. As part of her work, she leads projects and initiates processes aimed at developing mechanisms that promote dialogue and cooperation within society and the community. For the past two years she has also served as an instructor at Sakhnin Academic College. Maram received an MA with Honors, after completing the Research Track with a specialization in Organization and Management, as well as a Certificate in Group Facilitation, from the University of Haifa. In addition, she has an instructor’s certificate in the field of education at Gordon Academic College. Maram’s current area of research, under the supervision of Prof. Orit Taubman – Ben-Ari, is parental involvement and its impact on teenage driving in the Arab society."
	},
	{//14
		fullName: "Sigalit Offer",
		shortName: "SigalitO",
		content: "is a clinical social worker and a PhD candidate. She is a lecturer at the Louis and Gabi Weisfeld School of Social Work of Bar-Ilan University. She is also a certified couple and family therapist. For more than 23 years, she worked at Schneider Children’s Medical Center of Israel in the Department of Premature and Newborns and at the Psychiatric Department of Eating Disorders. Today she works at the unit for Child Development. Her research, under the supervision of Prof. Orit Taubman – Ben-Ari, focuses on the meaning of giving birth to a premature baby on the motherhood experience in retrospect."
	},
	{//15
		fullName: "Shachar Taichner Katz",
		shortName: "ShacharT",
		content: "is a first-year MA student in the Clinical Social Work program at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She has a BA in Behavioral Sciences from the Netanya Academic College. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, examines the connection between internal and external resources and personal growth among first-time parents."
	},
	{//16
		fullName: "Efrat Amitay",
		shortName: "EfratA",
		content: "is an MA student in the Clinical Social Work program at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She has a BA in Social Work from the Academic College of Judea and Samaria in Ariel, and is currently working as a juvenile probation officer in Jerusalem, working with youngsters who have committed criminal offenses. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, deals with the contribution of personal, social, and family characteristics on youngsters’ driving before they actually receive their license."
	},
	{//17
		fullName: "Efrat Weiss",
		shortName: "EfratW",
		content: "is a clinical social worker, who graduated her MA at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She has a BA in social work from Bar Ilan University, and is currently working at a boarding school for religious girls. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, dealt with the transition to parenthood of new fathers to twins or a single baby."
	},
	{//18
		fullName: "Meital Mialy",
		shortName: "MeitalM",
		content: "is an MA student in the Rehabilitation and Health Social Work program at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She has a BA in social work from the Hebrew University in Jerusalem, and is working for more than a decade in the Israeli health system. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, deals with fertility physicians’ coping with their role and the associations between cognitive aspects and personal growth among them."
	},
	{//19
		fullName: "Reut Ben-Kimhy",
		shortName: "ReutB",
		content: "is an MA student in the Gender studies program at the School of Interdisciplinary studies at Bar-Ilan University. Reut is a medical psychologist specializing in women reproduction. She is currently working as a psychologist at the obstetrics and gynecology department at Meir Medical Center in Kfar saba. She has a BA and an MA from the academic college of Tel Aviv-Yaffo. Her current MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, deals with motherhood identity as perceived by both women using egg donation and fertility physicians."
	},
	{//20
		fullName: "Shir-ly Moryosef",
		shortName: "Shir-lyM",
		content: "Shir-ly Moryosef is an  MA student in the Clinical Social Work program at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She has a BA in Social Work from Bar-Ilan University. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, examines the relationship between secondary traumatization and personal growth among mental health officers who treat patients with non-suicidal self-injury and suicidal actions."
	},
	{//21
		fullName: "Avia Schreier",
		shortName: "AviaS",
		content: "is an MA student in the Clinical Social Work program at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She has a BA in Education from Tel-Hai College. Her MA thesis, under the supervision of Prof. Orit Taubman – Ben-Ari, examines motherhood perception among mothers of two-year-old twins, and the contribution of internal and external resources to their personal growth."
	},
	{//22
		fullName: "Esther Joffe",
		shortName: "EstherJ",
		content: "is a social worker. She has a BA in Social Work from the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. She is currently working as a social worker for teenage girls in the Ethiopian community in Bet Shemesh. She is the research manager for the longitudinal mothers' of twins and single babies study (MOST) being conducted by the lab."
	},
	{//23
		fullName: "Michal Wolman",
		shortName: "MichalW",
		content: "is a 3rd year BA student at the Louis and Gabi Weisfeld School of Social work at Bar-Ilan University. She is a research assistant for the longitudinal fertility study (POWER), being conducted by the lab."
	}
]};

var formerMembersObj = {
	formerMembersArray: [
	{//1
		fullName: "Dr. Adi Noy",
		shortName: "AdiN",
		content: "is a clinical social worker and lecturer at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University specializing in children and adolescents with psychological and behavioral difficulties, and is currently working at the child and youth clinic in Shalvata Psychiatric Hospital. Her PhD, under the supervision of Prof. Orit Taubman – Ben-Ari, focused on the transition to motherhood, taking into account intergenerational relationships with grandparents. Her research has been published in scientific journals and presented at international conferences."
	},
	{//2
		fullName: "Dr. Vered Mei-Zahav - Oren",
		shortName: "VeredM",
		content: "is a clinical social worker and lecturer at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University. Specializing in health care social work, crisis intervention, psycho-oncology, and palliative care, she is currently working at Maccabi Health Care Services. Her PhD, under the supervision of Prof. Orit Taubman – Ben-Ari, dealt with death anxiety during the transition to parenthood."
	},
	{//3
		fullName: "Dr. Ahinoam Eherenfreund-Hager",
		shortName: "AhinoamE",
		content: "is a clinical social worker and lecturer at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University and the Haredi campus in Jerusalem. The series of studies she conducted for her PhD, under the supervision of Prof. Orit Taubman – Ben-Ari, focused on the effect of positive and negative affect on young drivers’ risky driving."
	},
	{//4
		fullName: "Dr. Limor Magen",
		shortName: "LimorM",
		content: "is a clinical social worker specializing in loss, trauma, and crisis situations. She received her PhD in Social Work at the Louis and Gabi Weisfeld School of Social Work at Bar-Ilan University , under the supervision of Prof. Orit Taubman – Ben-Ari. Her dissertation investigated the consequences of the loss of a sibling during military service on brothers and sisters who are now soldiers themselves, and included a quantitative study accompanied by in-depth interviews with the siblings. She is currently working in the Gynecology and Obstetrics Department of Meir hospital in Kfar Saba and teaches courses on loss and trauma."
	},
	{//5
		fullName: "Dr. Ginna Porat-Zyman",
		shortName: "GinnaP",
		content: "is a clinical social worker and lecturer at the Louis Gabi Weisfeld School of Social Work at Bar-Ilan University. She specializes in high-risk children and adolescents with psychological and behavioral difficulties. She is currently working at Gesher Crisis Intervention Center for Children and Adolescents affiliated to Shalvata Mental Health Center. Her doctoral dissertation, under the supervision of Prof. Orit Taubman – Ben-Ari, investigated mental health and personal growth among parents of pre- and full-term babies. Her research has been published in scientific journals and presented at international conferences."
	},
	{//6
		fullName: "Avinoam Solomon",
		shortName: "AvinoamS",
		content: "is a clinical social worker at the Social Services, working with youth at risk. His Master’s thesis under the supervision of Prof. Orit Taubman – Ben-Ari, examined adolescents’ separation thoughts from their parents and their association to risk-taking behavior."
	},
	{//7
		fullName: "Dr. Shira Sobol Goldberg",
		shortName: "ShiraS",
		content: "is a clinical social worker and a lecturer at the Louis and Gabi Weisfeld School of Social Work of Bar-Ilan University and the Academic College, Ashkelon. Her doctoral dissertation under the supervision of Prof. Jonathan Rabinowitz focused on obesity. For more than 16 years she has been treating youth and adults with a wide range of emotional problems, specializing in trauma, addiction, obesity, and anxiety. She is currently the director of the addiction treatment unit in the Welfare Department of the municipality of Ono Valley, and works as a psychotherapist and supervisor in a private clinic. In addition, for many years she has served as the leading moderator of a gender relations workshop, dealing with dating violence and sexual, physical, and emotional abuse. The author of two books on the subject of anxiety and parental guidance, her research papers focus on prevention interventions for obesity, meta- analysis, and the link between school performance and obesity in adulthood. Her papers have been published in prestigious scientific journals and presented at conferences."
	},
	{//8
		fullName: "Anne Matsliach",
		shortName: "AnneM",
		content: "is an intern - summer 2017."
	},
	{//9
		fullName: "Alix Golub",
		shortName: "AlixG",
		content: "is an intern - summer 2017."
	},
	{//10
		fullName: "Oneg Kabizon",
		shortName: "OnegK",
		content: "is an MA student in the Clinical Social Work program at the Louis and Gabi Weisfeld School of Social Work at the Bar-Ilan University. She is a Bachelor of Social Work from the Sapir Academic College. She is currently working at Reuth medical center with young men and women with physical disabilities, who deal with sexual and romantic challenges. In addition, she works with young men and women (18-25) at Tel Aviv's Municipal Social Services. Her MA thesis, under the supervision of Dr. Shirley Ben Shlomo, deals with the formation of personal identity, and with the quality of life satisfaction among young national religious Israeli women."
	}
]};

var newsObj = {
	newsArray: [
	{//1
		content: "We are very excited to announce that a new book: Pathways and barriers to parenthood – Existential concerns regarding fertility, pregnancy, and early parenthood, edited by Prof. Orit Taubman – Ben-Ari, has recently been published by Springer. The book explores the transition to parenthood from a holistic developmental approach, relating to barriers such as fertility problems and traumatic childbirth, as well as pathways such as positive experiences of pregnancy and childbirth. It presents an extended process, beginning with infertility issues, continuing with subjects pertaining to decisions regarding parenthood, pregnancy and birth, and ending with the early stages of parenthood from a positive psychology perspective. The volume draws on theories of resilience, meaning, terror management, and attachment, and considers psychological, sociological, legal, policy, medical, and therapy issues. It relates to the developmental needs of individuals and couples, as well as to the role played by family, society, and the media, offering a comprehensive in-depth evaluation of the latest topics.",
		shortContent: "We are very excited to announce that a new book: Pathways and barriers to parenthood – Existential concerns regarding fertility, pregnancy, and early parenthood, edited by Prof. Orit Taubman – Ben-Ari, has recently been published by Springer.",
		image: "Pathways_book cover.jpg",
		number: 10
	},
	{//2
		content: "A new paper entitled Driven by Emotions: The Association between Emotion Regulation, Forgiveness and Driving Styles by Meital Navon and Orit Taubman – Ben-Ari, has recently been published in Transportation Research Part F: Traffic Psychology and Behaviour. The paper shows that drivers adopting the three maladaptive driving styles (reckless and careless, angry and hostile, anxious) were characterized by a higher level of general difficulties in emotion regulation and by low trait forgivingness. In contrast, drivers adopting the patient and careful driving style had fewer difficulties in all aspects of emotion regulation, as well as higher trait forgivingness. The theoretical contribution of the study lays in showing that difficulties in emotion regulation and forgivingness are closely associated with maladaptive driving styles- an issue crucial for promoting the substantial efforts being invested in the attempts to reduce road crashes.",
		shortContent: "A new paper entitled Driven by Emotions: The Association between Emotion Regulation, Forgiveness and Driving Styles by Meital Navon and Orit Taubman – Ben-Ari, has recently been published in Transportation Research Part F: Traffic Psychology and Behaviour.",
		image: "IMG_0048.jpg",
		number: 9
	},
	{//3
		content: "A new paper entitled What Potential Role Do Siblings Play in Young Drivers ’ Driving Styles? by Orit Taubman – Ben-Ari, has recently been published in Transportation Research Part F: Traffic Psychology and Behaviour. The paper claims that siblings ’ contribution to young drivers ’ driving styles has received little attention. The study described in the paper examined the unique and combined contributions of sibling relations and perceived sibling ’s driving style to the self-reported driving styles of young drivers. The findings revealed significant associations between the driving style of the young driver and their sibling, and significant contributions of both sibling relations and perceived sibling driving style to the self-reported driving style of the young driver. The results indicate the potentially overlooked importance of siblings in determining how young drivers choose to drive, strengthening previous evidence regarding the strong influence of the family ’s global climate on the dynamics surrounding youngsters ’ driving.",
		shortContent: "A new paper entitled What Potential Role Do Siblings Play in Young Drivers ’ Driving Styles? by Orit Taubman – Ben-Ari, has recently been published in Transportation Research Part F: Traffic Psychology and Behaviour.",
		image: "IMG_0048.jpg",
		number: 8
	},
	{//4
		content: "On 12-14 March, 2018, we hosted an international symposium, entitled: Barriers and pathways in the transition to parenthood. The symposium, funded by the Israeli Science Foundation (ISF), dealt with concerns and experiences of individuals in respect to fertility/infertility, pregnancy, birth, and early parenthood, with an emphasis on positive psychology aspects such as well-being, resilience, personal growth, and meaning in life. Several leading experts from Israel and abroad participated in this stimulating and inspiring event. All talks are available on: https://www.youtube.com/playlist?list=PLXF_IJaFk-9Ch99gKwXFd42LLeGmLkpcx",
		shortContent: "On 12-14 March, 2018, we hosted an international symposium, entitled: Barriers and pathways in the transition to parenthood. The symposium was funded by the Israeli Science Foundation (ISF).",
		image: "img_001_resize.JPG",
		number: 7
	},
	{//5
		content: "A new paper entitled “Maternal mental health over four years following childbirth: The contribution of birth circumstances and psycho-social factors, by Ginna Porat-Zyman, Orit Taubman – Ben-Ari, Iris Morag and Jacob Kuint has recently been published in Women and Health. The paper describes a study which aimed to identify mothers at risk for poorer maternal mental health (MMH) one month post-partum and to determine changes in MMH over four years, in relation to birth circumstances (singleton/twins, full-term/pre-term infant/s, first/ non-first child), internal resources (adult attachment styles), and external resources (marital quality and support from the maternal grandmother) at one month post-partum. Shortly after birth, mothers at risk for poorer MMH were those who gave birth prematurely or were characterized by insecure attachment styles, lower marital quality, younger age, or a higher level of education. The mothers with a good prognosis for improvement in MMH were those who had given birth prematurely or were younger, more highly educated, or multiparous. Women with insecure attachment or lower marital quality reported lower MMH one month after delivery that did not improve over time, and the MMH of older or less educated mothers deteriorated over time. Marital quality mitigated or exacerbated the effects of birth circumstances and insecure attachment style on MMH shortly after giving birth.",
		shortContent: "A new paper entitled “Maternal mental health over four years following childbirth: The contribution of birth circumstances and psycho-social factors, by Ginna Porat-Zyman, Orit Taubman – Ben-Ari, Iris Morag and Jacob Kuint has recently been published in Women and Health.",
		image: "IMG_0048.jpg",
		number: 6
	},
	{//6
		content: "A new paper entitled “Mental Health of Women Entering Fertility Treatment: What Role do Age and Internal Resources Play?“ by Shirley Ben Shlomo, Vera Skvirsky, Orit Taubman – Ben-Ari, Yoseph Azuri, and Eran Horowitz has recently been published in Stress and Health. The paper describes a study which aimed at examining the associations between the mental health of women entering fertility treatment and their internal resources, and indicating whether mental health is associated with age (above or below 35). The sample consisted of 137 women (76 aged 20-34, 61 aged 35-44) at the start of fertility treatment. Results indicated that younger women reported higher distress and rumination than older women. Higher hope was associated with greater well-being, while higher rumination was associated with greater distress. Furthermore, hope and rumination were found to mediate the association between age and mental health. These findings highlight the importance of developing age-based interventions for women entering fertility treatment, aimed at strengthening their resilience to effectively cope with the demanding process ahead.",
		shortContent: "A new paper entitled “Mental Health of Women Entering Fertility Treatment: What Role do Age and Internal Resources Play?“ by Shirley Ben Shlomo, Vera Skvirsky, Orit Taubman – Ben-Ari, Yoseph Azuri, and Eran Horowitz has recently been published in Stress and Health.",
		image: "IMG_0048.jpg",
		number: 5
	},
	{//7
		content: "Miriam Chasson presented a poster on: The contribution of personal resources and social support to the mental health and personal growth of women in the transition to motherhood: Comparing single mothers by choice to mothers with partners. The poster was presented in the 8th ESPAnet conference at Bar Ilan University on February 22, 2017.",
		shortContent: "Miriam Chasson presented a poster on: The contribution of personal resources and social support to the mental health and personal growth of women in the transition to motherhood: Comparing single mothers by choice to mothers with partners.",
		image: "IMG-20170222-WA0001_miriam22022017.jpg",
		number: 4
	},
	{//8
		content: "Noga Guggenheim came back from Kampala, Uganda, with some personal and professional impressions: In October 2016, I travelled to Uganda where my son and my daughter-in-law have been living and working in recent months. Uganda is an interesting country with wonderful nature experiences where I had the opportunity to witness many significant areas of interest, among them some professional ones. In this regard, for several years I have been involved in studying driving behavior and culture. Immediately after landing in Entebbe, the sights of transportation and driving habits during the ride from the airport to Kampala, put the visitor into a sudden shock. The eye finds it difficult and overwhelming to get used to the sight of the enormous crowding of cars and the fast-moving, overloaded motorcycles, huge masses of pedestrians crossing chaotically between vehicles, unmaintained roads, the conspicuous absence of sidewalks and countless vendors jumping on every car whenever it stops. In addition, although by law a driver's license is issued from the age of 18 - in practice it turns out that this is only a recommendation. Many drive without having a driving license. Traffic crashes are a great problem in the capital, and as a result, there are many casualties with loss of lives. Kampala itself has very limited public transportation, most trips are carried out in large taxis or using the Uber app. Another significant shuttle service are “Boda Boda”, motorcycles which are often extremely overloaded. It is common, for example, to see three or four people carrying baskets on a motorcycle. The sense of danger is lurking on the streets of Kampala in every turn, but it does not necessarily disturb the ones walking about the streets.",
		shortContent: "Noga Guggenheim came back from Kampala, Uganda, with some personal and professional impressions",
		image: "noga_uganda1.jpg",
		number: 3
	},
	{//9
		content: "A new book on grandparents of children with disabilities, by Prof. Liora Findler and Prof. Orit Taubman – Ben-Ari, has recently been published by Springer. The book sheds light on the complex issues with which the extended family of a child with special needs must contend, relating in particular to the positive aspects of personal growth and development.",
		shortContent: "A new book on grandparents of children with disabilities, by Prof. Liora Findler and Prof. Orit Taubman – Ben-Ari, has recently been published by Springer",
		image: "grandparents_book_cover.png",
		number: 2
	},
	{//10
		content: "A new paper entitled “The Multidimensional Driving Style Inventory a Decade Later: Review of the Literature and Re-evaluation of the Scale” by Orit Taubman – Ben-Ari and Vera Skvirsky, has recently been published in Accident Analysis and Prevention. The paper employs two large data sets to summarize the accumulated knowledge, examining MDSI factors in samples of young drivers aged 17-21 (Study 1, n=1436) and older drivers aged 22-84 (Study 2, n=3409). Findings indicate that driving-related indicators are coherently and systematically related to the four driving styles in the expected directions, revalidating the structure of the MDSI. The results also help clarify the relationships between the driving styles and variables such as gender, ethnicity, car ownership, age, and experience, and suggest that driving styles are largely unaffected by sociodemographic characteristics, except for gender and ethnicity, and appear to represent a relatively stable and universal trait. The two studies highlight the validity and reliability of the MDSI, attesting to its practical value as a tool for purposes of research, evaluation, and intervention.",
		shortContent: "A new paper entitled “The Multidimensional Driving Style Inventory a Decade Later: Review of the Literature and Re-evaluation of the Scale” by Orit Taubman – Ben-Ari and Vera Skvirsky, has recently been published in Accident Analysis and Prevention.",
		image: "IMG_0048.jpg",
		number: 1
	}
]};
// $ajaxUtils.sendGetRequest("../data/currentLabMembersData.json", function (responseText) {
// 			currentMembersObj.currentMembersArray = responseText;
// 		});
// currentMembersObj.currentMembersArray = JSON.parse(currentMembersObj.currentMembersArray);

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
var MainNewsNumber = newsObj.newsArray.length;

var CurrentLabMembersTitleHTML = "snippets/CurrentLabMembers-title-snippet.html";
var CurrentLabMembersHTML = "snippets/CurrentLabMember-snippet.html";
var FormerLabMembersHTML = "snippets/FormerLabMember-snippet.html";
var FormerLabMembersTitleHTML = "snippets/FormerLabMembers-title-snippet.html";
var singleCurrentMemberPageHTML = "snippets/singleCurrentMemberPage-snippet.html";
var singleFormerMemberPageHTML = "snippets/singleFormerMemberPage-snippet.html";
var MainNewsHTML = "snippets/MainNews-snippet.html"
var OtherNewsTitleHTML = "snippets/OtherNews-title-snippet.html"
var OtherNewsHTML = "snippets/OtherNews-snippet.html"

function pageTransformation (pageName) {
	i = 1;
	$ajaxUtils.sendGetRequest("snippets/" + pageName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
	var screenWidth = window.innerWidth;
		if (screenWidth<768) {
			$("#collapsable-nav").collapse('hide');
		}
	pageOnChanging(pageName);

	if (pageName == "Gallery") {
		// i = 1;
		// document.addEventListener("DOMContentLoaded", function (event) {
		// 	touchswipeStart();
		// });
		// setTimeout(function () {
		// 	touchswipeStart();
		// }, 1000);
	}
}

function currentLabMembersPageTransformation (pageName) {
	pageOnChanging(pageName);
	buildAndShowCurrentLabMembersPage(currentMembersObj);
}

function formerLabMembersPageTransformation (pageName) {
	pageOnChanging(pageName);
	buildAndShowFormerLabMembersPage(formerMembersObj);
}

function newsPageTransformation (pageName) {
	pageOnChanging(pageName);
	buildAndShowNewsPage(newsObj, MainNewsNumber);
}
// // showing loading icon inside element identified by 'selector'
// var showLoading = function (selector) {
// 	var html = "<div class='text-center'>";
// 	html += "<img src='images/ajax-loader.gif'></div>";
// 	document.querySelector("#main-content").innerHTML = html;
// };

function pageOnChanging (pageName) {
	document.getElementById("page-on").id = "";
	document.getElementsByClassName(pageName)[0].id = "page-on";
}

function currentLabMemberPageTransformation (memberName) {
// $ajaxUtils.sendGetRequest("snippets/" + memberName + "-snippet.html", function (responseText) {
// 			document.querySelector("#main-content").innerHTML = responseText;
// 		},
// 		false);
	buildAndShowCurrentMemberPage(currentMembersObj, memberName);
}

function formerLabMemberPageTransformation (memberName) {
	buildAndShowFormerMemberPage(formerMembersObj, memberName);
}

function replacePicture () {
	// document.querySelector("#img-container").innerHTML = '<img src="images/gallery1/picture' + i + '.jpg" alt="Picture">';
	document.querySelector("#img-container").innerHTML = '<img src="images/gallery/' + galleryArray[i-1].url + '">';
	document.querySelector("#picture-title").innerHTML = galleryArray[i-1].title;
	document.getElementById("picture-number").innerHTML = i;
	// $ajaxUtils.sendGetRequest("../data/pictures-titles/picture" + i + "-title.txt", function (responseText) {
	// 		document.querySelector("#picture-title").innerHTML = responseText;
	// 	},
	// 	false);
}

function nextPicture () {
	if (i == galleryArray.length) {
		i = 0;
	}
	i++;
	replacePicture();
}

function prevPicture () {
	if (i == 1) {
		i = galleryArray.length+1;
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
		if (i == galleryArray.length) {
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

function insertProperty (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(RegExp(propToReplace, "g"), propValue);
	return string;
}

function buildAndShowCurrentLabMembersPage (members) {
	$ajaxUtils.sendGetRequest(CurrentLabMembersTitleHTML, function(CurrentLabMembersTitleHTML) {
		$ajaxUtils.sendGetRequest(CurrentLabMembersHTML, function(CurrentLabMembersHTML) {
			var CurrentLabMembersViewHTML = buildCurrentLabMembersViewHTML(members, CurrentLabMembersTitleHTML, CurrentLabMembersHTML);
			document.querySelector("#main-content").innerHTML = CurrentLabMembersViewHTML;
		}, false);
	}, false);
}

function buildCurrentLabMembersViewHTML(members, CurrentLabMembersTitleHTML, CurrentLabMembersHTML) {
	var finalHtml = CurrentLabMembersTitleHTML;
	finalHtml += "<div class='row'>";

	for (var j = 0; j < members.currentMembersArray.length;) {
		var html = CurrentLabMembersHTML;
		var shortName = members.currentMembersArray[j].shortName;
		var fullName = members.currentMembersArray[j].fullName;
		html = insertProperty(html, "shortName", shortName);
		html = insertProperty(html, "fullName", fullName);
		finalHtml += html;

		if (j !== 0 && (j+1) % 2 == 0) {
			finalHtml += "<div class='clearfix visible-xs-block'></div>";
		}
		if (j !== 0 && (j+1) % 4 == 0) {
			finalHtml += "<div class='clearfix visible-sm-block'></div>";
		}
		if (j !== 0 && (j+1) % 6 == 0) {
			finalHtml += "<div class='clearfix visible-lg-block visible-md-block'></div>";
		}

		j++;
	}

	finalHtml += "</div>";
	return finalHtml;
}

function buildAndShowFormerLabMembersPage (members) {
	$ajaxUtils.sendGetRequest(FormerLabMembersTitleHTML, function(FormerLabMembersTitleHTML) {
		$ajaxUtils.sendGetRequest(FormerLabMembersHTML, function(FormerLabMembersHTML) {
			var FormerLabMembersViewHTML = buildFormerLabMembersViewHTML(members, FormerLabMembersTitleHTML, FormerLabMembersHTML);
			document.querySelector("#main-content").innerHTML = FormerLabMembersViewHTML;
		}, false);
	}, false);
}

function buildFormerLabMembersViewHTML(members, FormerLabMembersTitleHTML, FormerLabMembersHTML) {
	var finalHtml = FormerLabMembersTitleHTML;
	finalHtml += "<div class='row'>";

	for (var j = 0; j < members.formerMembersArray.length;) {
		var html = FormerLabMembersHTML;
		var shortName = members.formerMembersArray[j].shortName;
		var fullName = members.formerMembersArray[j].fullName;
		html = insertProperty(html, "shortName", shortName);
		html = insertProperty(html, "fullName", fullName);
		finalHtml += html;

		if (j !== 0 && (j+1) % 2 == 0) {
			finalHtml += "<div class='clearfix visible-xs-block'></div>";
		}
		if (j !== 0 && (j+1) % 4 == 0) {
			finalHtml += "<div class='clearfix visible-sm-block'></div>";
		}
		if (j !== 0 && (j+1) % 6 == 0) {
			finalHtml += "<div class='clearfix visible-lg-block visible-md-block'></div>";
		}

		j++;
	}

	finalHtml += "</div>";
	return finalHtml;
}

function buildAndShowCurrentMemberPage (members, memberName) {
	for (var j = 0; j < members.currentMembersArray.length;) {
		if (members.currentMembersArray[j].shortName == memberName) {
			memberNumber = j;
			$ajaxUtils.sendGetRequest(singleCurrentMemberPageHTML, function(singleCurrentMemberPageHTML) {
				var currentMemberPageViewHTML = buildCurrentMemberPageViewHTML(members, singleCurrentMemberPageHTML, memberNumber);
				document.querySelector("#main-content").innerHTML = currentMemberPageViewHTML;
			}, false);
		}
		j++;
	}
}

function buildCurrentMemberPageViewHTML (members, singleCurrentMemberPageHTML, memberNumber) {
	var html = singleCurrentMemberPageHTML;
	var shortName = members.currentMembersArray[memberNumber].shortName;
	var fullName = members.currentMembersArray[memberNumber].fullName;
	var content = members.currentMembersArray[memberNumber].content;
	html = insertProperty(html, "shortName", shortName);
	html = insertProperty(html, "fullName", fullName);
	html = insertProperty(html, "content", content);

	return html;

}

function buildAndShowFormerMemberPage (members, memberName) {
	for (var j = 0; j < members.formerMembersArray.length;) {
		if (members.formerMembersArray[j].shortName == memberName) {
			memberNumber = j;
			$ajaxUtils.sendGetRequest(singleFormerMemberPageHTML, function(singleFormerMemberPageHTML) {
				var formerMemberPageViewHTML = buildFormerMemberPageViewHTML(members, singleFormerMemberPageHTML, memberNumber);
				document.querySelector("#main-content").innerHTML = formerMemberPageViewHTML;
			}, false);
		}
		j++;
	}
}

function buildFormerMemberPageViewHTML (members, singleFormerMemberPageHTML, memberNumber) {
	var html = singleFormerMemberPageHTML;
	var shortName = members.formerMembersArray[memberNumber].shortName;
	var fullName = members.formerMembersArray[memberNumber].fullName;
	var content = members.formerMembersArray[memberNumber].content;
	html = insertProperty(html, "shortName", shortName);
	html = insertProperty(html, "fullName", fullName);
	html = insertProperty(html, "content", content);

	return html;

}

function buildAndShowNewsPage (news, MainNewsNumber) {
			$ajaxUtils.sendGetRequest(MainNewsHTML, function(MainNewsHTML) {
				$ajaxUtils.sendGetRequest(OtherNewsTitleHTML, function(OtherNewsTitleHTML) {
					$ajaxUtils.sendGetRequest(OtherNewsHTML, function(OtherNewsHTML) {
						var newsPageViewHTML = buildNewsPageViewHTML(news, MainNewsHTML, OtherNewsTitleHTML, OtherNewsHTML, MainNewsNumber);
						document.querySelector("#main-content").innerHTML = newsPageViewHTML;
					}, false);
				}, false);
			}, false);
}

function buildNewsPageViewHTML (news, MainNewsHTML, OtherNewsTitleHTML, OtherNewsHTML, MainNewsNumber) {
	var finalHtml = MainNewsHTML;

	// MainNewsNumber = parseInt(MainNewsNumber);

	// console.log("Before the for loop, MainNewsNumber is: " + MainNewsNumber);

	for (var j = 0; j < news.newsArray.length;) {
		// console.log("j is: " + j);
		if (news.newsArray[j].number == MainNewsNumber) {
			// console.log("The j we are lokking for is: " + j);
			MainNewsNumber = j;
			// console.log("Inside the for loop, MainNewsNumber is: " + MainNewsNumber);
			break
		}
		j++;
	}

	// console.log("After the for loop, MainNewsNumber is: " + MainNewsNumber);

	var MainNewsContent = news.newsArray[MainNewsNumber].content;
	var mainImage = news.newsArray[MainNewsNumber].image;
	finalHtml = insertProperty(finalHtml, "content", MainNewsContent);
	finalHtml = insertProperty(finalHtml, "image", mainImage);

	finalHtml += OtherNewsTitleHTML;
	finalHtml += "<div class='row'>";

	for (var j = 0; j < news.newsArray.length;) {
		var a = 0;
		// var specificNewsNumber = j;
		// var html = OtherNewsHTML;
		if (j == MainNewsNumber) {
			// html = insertProperty(html, "number", specificNewsNumber);
			j++;
			if (j == 10) {
				break;
			}
		}
		var html = OtherNewsHTML;
		var content = news.newsArray[j].content;
		var shortContent = news.newsArray[j].shortContent;
		var image = news.newsArray[j].image;
		var number = news.newsArray[j].number;
		html = insertProperty(html, "content", content);
		html = insertProperty(html, "shortContent", shortContent);
		html = insertProperty(html, "image", image);
		html = insertProperty(html, "number", number);

		finalHtml += html;

		// specificNewsNumber = j;
		// html = insertProperty(html, "number", specificNewsNumber);

		if (a !== 0 && (a+1) % 2 == 0) {
			finalHtml += "<div class='clearfix visible-sm-block'></div>";
		}
		if (a !== 0 && (a+1) % 3 == 0) {
			finalHtml += "<div class='clearfix visible-lg-block visible-md-block'></div>";
		}

		a++;
		j++;
	}

	finalHtml += "</div>";
	return finalHtml;

}

function changeNews (MainNewsNumber) {
	buildAndShowNewsPage(newsObj, MainNewsNumber);
}

// function touchswipeStart () {
// 	$(function() {
// 	  $("#test").swipe( {
// 	    //Generic swipe handler for all directions
// 	    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
// 	      $(this).text("You swiped " + direction );
// 	      nextPicture();
// 	    }
// 	  });
// 	  // if (pageName != "Gallery") {
// 	  // 	return;
// 	  // }
// 	});
// }

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