document.addEventListener("DOMContentLoaded", function (event) {
	HomePageTransformation('Home');
	closeAccess();
});

var i = 1;
var MainNewsNumber = newsArray.length;

var HomeHTML = "snippets/Home-snippet.html";
var AboutHTML = "snippets/About-snippet.html";
var CurrentLabMembersTitleHTML = "snippets/CurrentLabMembers-title-snippet.html";
var CurrentLabMembersHTML = "snippets/CurrentLabMember-snippet.html";
var singleCurrentMemberPageHTML = "snippets/singleCurrentMemberPage-snippet.html";
var FormerLabMembersTitleHTML = "snippets/FormerLabMembers-title-snippet.html";
var FormerLabMembersHTML = "snippets/FormerLabMember-snippet.html";
var singleFormerMemberPageHTML = "snippets/singleFormerMemberPage-snippet.html";
var FormerStudentsTitleHTML = "snippets/FormerStudents-title-snippet.html";
var FormerStudentHTML = "snippets/FormerStudent-snippet.html";
var PublicationsTitleHTML = "snippets/Publications-title-snippet.html";
var PublicationsLinkHTML = "snippets/Publications-link-snippet.html";
var PublicationsContinueHTML = "snippets/Publications-continue-snippet.html";
var PublicationSectionHTML = "snippets/Publication-section-snippet.html";
var PublicationsEndingHTML = "snippets/Publications-ending-snippet.html";
var ResearchTitleHTML = "snippets/Research-title-snippet.html";
var ResearchEndingHTML = "snippets/Research-ending-snippet.html";
var MainNewsHTML = "snippets/MainNews-snippet.html";
var OtherNewsTitleHTML = "snippets/OtherNews-title-snippet.html";
var OtherNewsHTML = "snippets/OtherNews-snippet.html";
var MediaTitleHTML = "snippets/Media-title-snippet.html";
var MediaHTML = "snippets/Media-snippet.html";
var MediaContinueHTML = "snippets/Media-continue-snippet.html";

function pageTransformation (pageName) {
	if (pageName == "Gallery") {
		mainTitleAudio = new Audio("../audio/GalleryTitle-audio.mp3");
	}
	else {
		mainTitleAudio = new Audio("../audio/ContactTitle-audio.mp3");
	}
	i = 1;
	$ajaxUtils.sendGetRequest("snippets/" + pageName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
	HideButton();
	pageOnChanging(pageName);

	if (pageName == "Gallery") {
	 	touchswipeStart();

		waitForGalleryElementToDisplay("#gallery-container", 100);

		function waitForGalleryElementToDisplay(selector, time) {
	        if(document.querySelector(selector)!=null) {
	            replacePicture(i);
	            return;
	        }
	        else {
	            setTimeout(function() {
	                waitForGalleryElementToDisplay(selector, time);
	            }, time);
	        }
	    }
	}
}

/////////////Every page call function/////////////////
function currentLabMembersPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/currentLabMembersTitle-audio.mp3");
	pageOnChanging(pageName);
	HideButton();
	buildAndShowCurrentLabMembersPage(currentMembersArray);
}

function formerLabMembersPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/formerLabMembersTitle-audio.mp3");
	pageOnChanging(pageName);
	HideButton();
	buildAndShowFormerLabMembersPage(formerMembersArray);
}

function newsPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/NewsTitle-audio.mp3");
	pageOnChanging(pageName);
	HideButton();
	buildAndShowNewsPage(newsArray, MainNewsNumber);
}

function mediaPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/MediaTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowMediaPage(mediaObj);
}

function publicationsPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/PublicationsTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowPublicationsPage(PublicationsObj);
}

function FormerPhDStudentsPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/FormerPhDStudentsTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowFormerStudentsPage (FormerPhDStudentsObj);
}

function FormerMAStudentsPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/FormerMAStudentsTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowFormerStudentsPage (FormerMAStudentsObj);
}

function AboutPageTransformation (pageName) {
	// if (linkshighlighted) {
	// 	setTimeout(function() {
	//                 highlightLinks();
	//         }, 1000);
	// }
	mainTitleAudio = new Audio("../audio/aboutTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowAboutPage (AboutObj);
}

function ResearchTransitionToParenthoodPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/transitionToParenthoodTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchTransitionToParenthoodObj);
}

function ResearchMOSTPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/MOSTTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchMOSTObj);
}

function ResearchPOWERPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/POWERTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchPOWERObj);
}

function ResearchMDSIPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/MDSITitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchMDSIObj);
}

function ResearchRiskyDrivingPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/riskyDrivingTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchRiskyDrivingObj);
}

function ResearchUltraOrthodoxPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/ultraOrthodoxTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchUltraOrthodoxObj);
}

function ResearchTMTPageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/TMTTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchTMTObj);
}

function ResearchCovid19PageTransformation (pageName) {
	mainTitleAudio = new Audio("../audio/covid19Title-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchCovid19Obj);
}

function ResearchMeasuresTransformation (pageName) {
	// mainTitleAudio = new Audio("../audio/covid19Title-audio.mp3");
    // pageOnChanging(pageName);
    // HideButton();
    window.open("https://faculty.biu.ac.il/~taubman/quest/index.html");
    // buildAndShowResearchPage (ResearchCovid19Obj);
}

function HomePageTransformation (pageName) {
	document.getElementById("main-content").style.fontSize = "1em";
	document.getElementById("big-text-option").style.backgroundImage = "url('../images/x-sign.png')";
	document.getElementById("small-text-option").style.backgroundImage = "url('../images/x-sign.png')";
	mainTitleAudio = new Audio("../audio/homeTitle-audio.mp3");
    pageOnChanging(pageName);
    HideButton();
    buildAndShowHomePage ();
}
/////////////End of every page call function/////////////////

function pageOnChanging (pageName) {
	document.getElementById("page-on").id = "";
	document.getElementsByClassName(pageName)[0].id = "page-on";
	///accessability
	gPageName = pageName;
	if (gPageName != "Home") {
		document.getElementById("main-content").style.fontSize = fontSize + "em";
		document.getElementById("big-text-option").style.backgroundImage = "none";
		document.getElementById("small-text-option").style.backgroundImage = "none";
	}
	if (linkshighlighted) {
			setTimeout(function() {
						for (var j = 0; j < document.querySelectorAll("a").length; j++) {
						document.querySelectorAll("a")[j].style.textDecoration = "underline";
					}
		        }, 100);
		}
	if (monochromed) {
		monochromed = false;
		monochrome();
		setTimeout(function() {
				for (var j = 0; j < document.querySelectorAll("img").length; j++) {
					monochromed = false;
					monochrome();
				}
	        }, 100);
	}
	setTimeout(function() {
		enableTitleAudio();
	}, 100);
}

function HideButton () {
	var screenWidth = window.innerWidth;
		if (screenWidth<768) {
			$("#collapsable-nav").collapse('hide');
		}
}

function currentLabMemberPageTransformation (memberName) {
	buildAndShowCurrentMemberPage(currentMembersArray, memberName);
}

function formerLabMemberPageTransformation (memberName) {
	buildAndShowFormerMemberPage(formerMembersArray, memberName);
}

function replacePicture (i) {
	document.querySelector("#img-container").innerHTML = '<img id="currentImg" src="images/gallery/' + galleryArray[i-1].url + '">';
	document.querySelector("#picture-title").innerHTML = galleryArray[i-1].title;
	document.getElementById("picture-number").innerHTML = i;
	if (monochromed) {
		document.getElementById("currentImg").style.webkitFilter = "grayscale(100%)";
		document.getElementById("currentImg").style.filter = "grayscale(100%)";
	}
}

function nextPicture () {
	if (i == galleryArray.length) {
		i = 0;
	}
	i++;
	replacePicture(i);
}

function prevPicture () {
	if (i == 1) {
		i = galleryArray.length+1;
	}
	i--;
	replacePicture(i);
}

function playPicture () {
	document.getElementById("gallery-play").style.height = "0";
	document.getElementById("gallery-stop").style.height = "auto";

	waitForPictureToLoad("#currentImg", 100);
}

var wantToStop = "No";

function wantToStopFunction () {
	wantToStop = "Yes";
	stopPlayPicture();
}

function waitForPictureToLoad(selector, time) {

    if(document.querySelector(selector).complete) {
    	if (i == galleryArray.length) {
    		stopPlayPicture();
    		return;
    	}
    	setTimeout(function () {
    		if (wantToStop == "Yes") {
				wantToStop = "No";
	    		return;
			}
    		i++;
    		replacePicture(i);
    		waitForPictureToLoad(selector, time);
    	}, 2500);
    }
    else {
        setTimeout(function() {
            waitForPictureToLoad(selector, time);
        }, time);
    }
}

function stopPlayPicture () {
	document.getElementById("gallery-stop").style.height = "0";
	document.getElementById("gallery-play").style.height = "auto";
}

function insertProperty (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(RegExp(propToReplace, "g"), propValue);
	return string;
}

/////////////Every page function/////////////////
function buildAndShowHomePage () {
    $ajaxUtils.sendGetRequest(HomeHTML, function(HomeHTML) {
        var HomeViewHTML = buildHomeViewHTML(HomeHTML);
        document.querySelector("#main-content").innerHTML = HomeViewHTML;
    }, false);
}

function buildHomeViewHTML(HomeHTML) {
    var finalHtml = HomeHTML;

    var about = AboutObj.shortContent;

    finalHtml = insertProperty(finalHtml, "about", about);

    var news = newsArray[0].shortContent;

    finalHtml = insertProperty(finalHtml, "news", news);

    return finalHtml;
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

	for (var j = 0; j < currentMembersArray.length;) {
		var html = CurrentLabMembersHTML;
		var shortName = currentMembersArray[j].shortName;
		var fullName = currentMembersArray[j].fullName;
		html = insertProperty(html, "shortName", shortName);
		html = insertProperty(html, "fullName", fullName);
		finalHtml += html;

		if (j !== 0 && (j+1) % 2 == 0) {
			finalHtml += "<div class='clearfix visible-pxs-block'></div>";
		}
        if (j !== 0 && (j+1) % 3 == 0) {
            finalHtml += "<div class='clearfix visible-psm-block'></div>";
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

	for (var j = 0; j < formerMembersArray.length;) {
		var html = FormerLabMembersHTML;
		var shortName = formerMembersArray[j].shortName;
		var fullName = formerMembersArray[j].fullName;
		html = insertProperty(html, "shortName", shortName);
		html = insertProperty(html, "fullName", fullName);
		finalHtml += html;

		if (j !== 0 && (j+1) % 2 == 0) {
			finalHtml += "<div class='clearfix visible-pxs-block'></div>";
		}
        if (j !== 0 && (j+1) % 3 == 0) {
            finalHtml += "<div class='clearfix visible-psm-block'></div>";
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
	for (var j = 0; j < currentMembersArray.length;) {
		if (currentMembersArray[j].shortName == memberName) {
			memberNumber = j;
			$ajaxUtils.sendGetRequest(singleCurrentMemberPageHTML, function(singleCurrentMemberPageHTML) {
				var currentMemberPageViewHTML = buildCurrentMemberPageViewHTML(members, singleCurrentMemberPageHTML, memberNumber);
				document.querySelector("#main-content").innerHTML = currentMemberPageViewHTML;
			}, false);
		}
		j++;
	}
	setTimeout(function() {
		document.getElementById("member-content").addEventListener("click", function() {
			if(tts) {
				if (!onPlay) {
					labMemberAudio = new Audio("../audio/" + memberName + "Content-audio.mp3");
					labMemberAudio.play();
					onPlay = true;
					labMemberAudio.addEventListener("ended", function() {
						onPlay = false;
					});
				}
				else {
					labMemberAudio.pause();
					onPlay = false;
				}
			}
		});
	}, 100);
}

function buildCurrentMemberPageViewHTML (members, singleCurrentMemberPageHTML, memberNumber) {
	var html = singleCurrentMemberPageHTML;
	var shortName = currentMembersArray[memberNumber].shortName;
	var fullName = currentMembersArray[memberNumber].fullName;
	var content = currentMembersArray[memberNumber].content;
	html = insertProperty(html, "shortName", shortName);
	html = insertProperty(html, "fullName", fullName);
	html = insertProperty(html, "content", content);

	return html;

}

function buildAndShowFormerMemberPage (members, memberName) {
	for (var j = 0; j < formerMembersArray.length;) {
		if (formerMembersArray[j].shortName == memberName) {
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
	var shortName = formerMembersArray[memberNumber].shortName;
	var fullName = formerMembersArray[memberNumber].fullName;
	var content = formerMembersArray[memberNumber].content;
	html = insertProperty(html, "shortName", shortName);
	html = insertProperty(html, "fullName", fullName);
	html = insertProperty(html, "content", content);

	return html;

}

function buildAndShowNewsPage (newsArray, MainNewsNumber) {
			$ajaxUtils.sendGetRequest(MainNewsHTML, function(MainNewsHTML) {
				$ajaxUtils.sendGetRequest(OtherNewsTitleHTML, function(OtherNewsTitleHTML) {
					$ajaxUtils.sendGetRequest(OtherNewsHTML, function(OtherNewsHTML) {
						var newsPageViewHTML = buildNewsPageViewHTML(newsArray, MainNewsHTML, OtherNewsTitleHTML, OtherNewsHTML, MainNewsNumber);
						document.querySelector("#main-content").innerHTML = newsPageViewHTML;
					}, false);
				}, false);
			}, false);
}

function buildNewsPageViewHTML (newsArray, MainNewsHTML, OtherNewsTitleHTML, OtherNewsHTML, MainNewsNumber) {
	var finalHtml = MainNewsHTML;

	for (var j = 0; j < newsArray.length;) {
		if (newsArray[j].number == MainNewsNumber) {
			MainNewsNumber = j;
			break
		}
		j++;
	}

	var MainNewsContent = newsArray[MainNewsNumber].content;
	var mainImage = newsArray[MainNewsNumber].image;
	finalHtml = insertProperty(finalHtml, "content", MainNewsContent);
	finalHtml = insertProperty(finalHtml, "image", mainImage);

	finalHtml += OtherNewsTitleHTML;
	finalHtml += "<div class='row'>";

	for (var j = 0; j < newsArray.length;) {
		var a = 0;

		if (j == MainNewsNumber) {
			j++;
			if (j == 10) {
				break;
			}
		}
		var html = OtherNewsHTML;
		var content = newsArray[j].content;
		var shortContent = newsArray[j].shortContent;
		var image = newsArray[j].image;
		var number = newsArray[j].number;
		html = insertProperty(html, "content", content);
		html = insertProperty(html, "shortContent", shortContent);
		html = insertProperty(html, "image", image);
		html = insertProperty(html, "number", number);

		finalHtml += html;

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

function buildAndShowMediaPage (mediaObj) {
            $ajaxUtils.sendGetRequest(MediaTitleHTML, function(MediaTitleHTML) {
                $ajaxUtils.sendGetRequest(MediaHTML, function(MediaHTML) {
                    $ajaxUtils.sendGetRequest(MediaContinueHTML, function(MediaContinueHTML) {
                        var mediaPageViewHTML = buildMediaPageViewHTML(mediaObj, MediaTitleHTML, MediaHTML, MediaContinueHTML);
                        document.querySelector("#main-content").innerHTML = mediaPageViewHTML;
                    }, false);
                }, false);
            }, false);
}

function buildMediaPageViewHTML(mediaObj, MediaTitleHTML, MediaHTML, MediaContinueHTML) {
    var finalHtml = MediaTitleHTML;

    for (var j = 0; j < mediaObj.mediaArray.length;) {

        if (j !== 0) {
            finalHtml += "<hr class='main-hr'>";
        }

        var html = MediaHTML;
        var linkTo = mediaObj.mediaArray[j].linkTo;
        var linkName = mediaObj.mediaArray[j].linkName;

        html = insertProperty(html, "linkTo", linkTo);
        html = insertProperty(html, "linkName", linkName);

        finalHtml += html;
        j++;
    }

    finalHtml += MediaContinueHTML;

    var imageSource = mediaObj.imageSource;
    finalHtml = insertProperty(finalHtml, "imageSource", imageSource);

    return finalHtml;

}

function buildAndShowPublicationsPage (PublicationsObj) {
            $ajaxUtils.sendGetRequest(PublicationsTitleHTML, function(PublicationsTitleHTML) {
                $ajaxUtils.sendGetRequest(PublicationsLinkHTML, function(PublicationsLinkHTML) {
                    $ajaxUtils.sendGetRequest(PublicationsContinueHTML, function(PublicationsContinueHTML) {
                        $ajaxUtils.sendGetRequest(PublicationSectionHTML, function(PublicationSectionHTML) {
                            $ajaxUtils.sendGetRequest(PublicationsEndingHTML, function(PublicationsEndingHTML) {
                                var publicationsPageViewHTML = buildPublicationsPageViewHTML(PublicationsObj, PublicationsTitleHTML, PublicationsLinkHTML, PublicationsContinueHTML, PublicationSectionHTML, PublicationsEndingHTML);
                                document.querySelector("#main-content").innerHTML = publicationsPageViewHTML;
                            }, false);
                        }, false);
                    }, false);
                }, false);
            }, false);
}

function buildPublicationsPageViewHTML(PublicationsObj, PublicationsTitleHTML, PublicationsLinkHTML, PublicationsContinueHTML, PublicationSectionHTML, PublicationsEndingHTML) {
    var finalHtml = PublicationsTitleHTML;

     for (var j = 0; j < PublicationsObj.PublicationsArray.length;) {

        var html = PublicationsLinkHTML;

        var title = PublicationsObj.PublicationsArray[j].title;
        html = insertProperty(html, "title", title);

        if (j == 3 || j == (PublicationsObj.PublicationsArray.length - 2) || j == PublicationsObj.PublicationsArray.length - 1) {
            html += '<div class="clearfix visible-xs-block"></div>';
        }
        
        finalHtml += html;
        j++;
    }   

    finalHtml += PublicationsContinueHTML;

    for (var j = 0; j < PublicationsObj.PublicationsArray.length;) {

        var html = PublicationSectionHTML;

        var title = PublicationsObj.PublicationsArray[j].title;

        if (PublicationsObj.PublicationsArray[j].realTitle) {
            var realTitle = PublicationsObj.PublicationsArray[j].realTitle;
        }
        else {
            var realTitle = title;
        }

        html = insertProperty(html, "title", title);
        html = insertProperty(html, "realTitle", realTitle);


        if (j == 0 ) {
            var id = "top-content-title";
        }
        else {
            var id = "";
        }
        html = insertProperty(html, "id", id);

        for (var k = 0; k < PublicationsObj.PublicationsArray[j].publications.length;) {
            var publication = PublicationsObj.PublicationsArray[j].publications[k];
            html += "<p>" + publication + "</p>";

            k++
        }

        html += "</section>"

        finalHtml += html;
        j++;
    }   

    finalHtml += PublicationsEndingHTML;

    var imageSource = PublicationsObj.imageSource;
    finalHtml = insertProperty(finalHtml, "imageSource", imageSource); 

    return finalHtml;

}

function buildAndShowFormerStudentsPage (FormerStudentsObj) {
            $ajaxUtils.sendGetRequest(FormerStudentsTitleHTML, function(FormerStudentsTitleHTML) {
                $ajaxUtils.sendGetRequest(FormerStudentHTML, function(FormerStudentHTML) {
                    var FormerStudentsPageViewHTML = buildFormerStudentsPageViewHTML(FormerStudentsObj, FormerStudentsTitleHTML, FormerStudentHTML);
                    document.querySelector("#main-content").innerHTML = FormerStudentsPageViewHTML;
                }, false);
            }, false);
}

function buildFormerStudentsPageViewHTML(FormerStudentsObj, FormerStudentsTitleHTML, FormerStudentHTML) {
    var finalHtml = FormerStudentsTitleHTML;

    var title = FormerStudentsObj.title;

    finalHtml = insertProperty(finalHtml, "title", title);

    for (var j = 0; j < FormerStudentsObj.Students.length;) {

        var html = FormerStudentHTML;
        var nameAndYear = FormerStudentsObj.Students[j].nameAndYear;
        var content = FormerStudentsObj.Students[j].content;

        html = insertProperty(html, "nameAndYear", nameAndYear);
        html = insertProperty(html, "content", content);

        finalHtml += html;
        j++;
    }

    finalHtml += "</ol>";
    return finalHtml;

}

function buildAndShowAboutPage (AboutObj) {
            $ajaxUtils.sendGetRequest(AboutHTML, function(AboutHTML) {
                var AboutPageViewHTML = buildAboutPageViewHTML(AboutObj, AboutHTML);
                document.querySelector("#main-content").innerHTML = AboutPageViewHTML;
            }, false);
}

function buildAboutPageViewHTML(AboutObj, AboutHTML) {
    var finalHtml = AboutHTML;

    var imageSource = AboutObj.imageSource;
    var boldContent1 = AboutObj.content.boldContent1;
    var regularContent1 = AboutObj.content.regularContent1;
    var boldContent2 = AboutObj.content.boldContent2;
    var regularContent2 = AboutObj.content.regularContent2;

    finalHtml = insertProperty(finalHtml, "imageSource", imageSource);
    finalHtml = insertProperty(finalHtml, "boldContent1", boldContent1);
    finalHtml = insertProperty(finalHtml, "regularContent1", regularContent1);
    finalHtml = insertProperty(finalHtml, "boldContent2", boldContent2);
    finalHtml = insertProperty(finalHtml, "regularContent2", regularContent2);

    return finalHtml;

}

function buildAndShowResearchPage (ResearchObj) {
            $ajaxUtils.sendGetRequest(ResearchTitleHTML, function(ResearchTitleHTML)
                {$ajaxUtils.sendGetRequest(ResearchEndingHTML, function(ResearchEndingHTML) {
                    var ResearchPageViewHTML = buildResearchPageViewHTML(ResearchObj, ResearchTitleHTML, ResearchEndingHTML);
                    document.querySelector("#main-content").innerHTML = ResearchPageViewHTML;
                }, false);
            }, false);
}

function buildResearchPageViewHTML(ResearchObj, ResearchTitleHTML, ResearchEndingHTML) {
    var finalHtml = ResearchTitleHTML;

    var title = ResearchObj.title;
    var researchExplanation = ResearchObj.researchExplanation;

    finalHtml = insertProperty(finalHtml, "title", title);
    finalHtml = insertProperty(finalHtml, "researchExplanation", researchExplanation);

    for (var j = 0; j < ResearchObj.Research.length;) {
        var html = "<p>";
        var content = ResearchObj.Research[j];
        html += content + "</p>";

        finalHtml += html;
        j++;
    }

    finalHtml += ResearchEndingHTML

    var imageSource = ResearchObj.imageSource;
    finalHtml = insertProperty(finalHtml, "imageSource", imageSource);

    return finalHtml;

}
/////////////End of every page function/////////////////

function changeNews (MainNewsNumber) {
	buildAndShowNewsPage(newsArray, MainNewsNumber);
}

function touchswipeStart () {
	$(function() {
	  $("#main-content").swipe( {
	    //Generic swipe handler for all directions
	    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	      if (direction == "left") {
	      	nextPicture();
	      }
	      if (direction == "right") {
	      	prevPicture();
	      }
	    }
	  });
	});
}

function goToFacebookPage() {
	window.open("https://www.facebook.com/Positive-Family-Lab-Bar-Ilan-%D7%94%D7%9E%D7%A2%D7%91%D7%93%D7%94-%D7%9C%D7%97%D7%A7%D7%A8-%D7%94%D7%9E%D7%A9%D7%A4%D7%97%D7%94-%D7%91%D7%92%D7%99%D7%A9%D7%AA-%D7%94%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94-%D7%94%D7%97%D7%99%D7%95%D7%91%D7%99%D7%AA-102172228828888", "_blank");	
}

/////more options bar/////
function openResearchOptions() {
	/////screen size must be biiger than extra small
	/////transition doesn't work
	// document.getElementById("research-bar-options").style.width = "220px";
	// document.getElementById("research-bar-options").style.maxHeight = "500px";
}

function closeResearchOptions() {
	/////screen size must be biiger than extra small
	// document.getElementById("research-bar-options").style.width = "0px";
	// document.getElementById("research-bar-options").style.height = "0";
}
//////////////////////////

//////////////////Accessabilty///////////////////
var fontSize = 1;
var gPageName = "Home";
var linkshighlighted = false;
var brightCon = false;
var darkCon = false;
var monochromed = false;
var isBigWhiteCur = false;
var isBigBlackCur = false;

// function pageTransAcc(pageName) {
// 	gPageName = pageName;
// 	document.getElementById("main-content").style.fontSize = fontSize + "em";
// 	if (linkshighlighted) {
// 		setTimeout(function() {
// 	                highlightLinks();
// 	        }, 100);
// 	}
// }
// function openAccess() {
// 	document.getElementById("access-icon").style.left = document.getElementById("access-options-container").offsetWidth + "px";
// 	document.getElementById("access-options-container").style.left = 0;
// }
// function closeAccess() {
// 	document.getElementById("access-options-container").style.left = "-" + document.getElementById("access-options-container").offsetWidth + "px";
// 	document.getElementById("access-icon").style.left = 0;
// }
function openAccess() {
	document.getElementById("access-icon").style.left = "250px";
	document.getElementById("access-options-container").style.left = 0;
}

function closeAccess() {
	document.getElementById("access-options-container").style.left = "-250px";
	document.getElementById("access-icon").style.left = 0;
	// for (var i = 0; i < document.getElementsByClassName("access-option").length; i++) {
	// 	document.getElementsByClassName("access-option")[i].style.left = "-225px"
	// }
}

function largerText() {
	if (gPageName != "Home") {
		fontSize += 0.1;
		document.getElementById("main-content").style.fontSize = fontSize + "em";
	}
}
function smallerText() {
	if (gPageName != "Home") {
		fontSize -= 0.1;
		document.getElementById("main-content").style.fontSize = fontSize + "em";
	}
}

function highlightLinks() {
	// for (var i = 0; i < document.getElementsByClassName("link").length; i++) {
	// 	document.getElementsByClassName("link")[i].style.setProperty('textDecoration', 'underline', 'important');
	// }
	if (linkshighlighted) {
		for (var j = 0; j < document.querySelectorAll("a").length; j++) {
			document.querySelectorAll("a")[j].style.textDecoration = "";
		}
		linkshighlighted = false;
	}
	else {
		for (var j = 0; j < document.querySelectorAll("a").length; j++) {
			document.querySelectorAll("a")[j].style.textDecoration = "underline";
		}
		linkshighlighted = true;
	}
	// console.log(document.querySelectorAll("a").length);
	// document.querySelectorAll("a").style.setProperty('textDecoration', 'underline', 'important');
	// document.getElementById("home-news").style.textDecoration = "underline";
}

function brightContrast() {
	darkCon = false;
	if (!brightCon) {
		document.querySelectorAll("body")[0].style.background = "#fff";
		document.getElementById("main-content").style.color = "#000";
		document.querySelectorAll("footer")[0].style.backgroundColor = "#fff";
		document.querySelectorAll("footer")[0].style.borderTop = "2px #000 solid";
		document.querySelectorAll("footer")[0].style.color = "#000";
		document.querySelectorAll("nav")[0].style.borderBottom = "2px #000 solid";
		brightCon = true;
	}
	else {
		document.querySelectorAll("body")[0].style.background = "#38e0f2";
		document.getElementById("main-content").style.color = "#000";
		document.querySelectorAll("footer")[0].style.backgroundColor = "#fff";
		document.querySelectorAll("footer")[0].style.borderTop = "0px";
		document.querySelectorAll("footer")[0].style.color = "#000";
		document.querySelectorAll("nav")[0].style.borderBottom = "0px";
		brightCon = false;
	}
}

function darkContrast() {
	brightCon = false;
	if (!darkCon) {
		document.querySelectorAll("body")[0].style.background = "#000";
		document.getElementById("main-content").style.color = "#fff";
		document.querySelectorAll("footer")[0].style.backgroundColor = "#000";
		document.querySelectorAll("footer")[0].style.color = "#fff";
		document.querySelectorAll("footer")[0].style.borderTop = "2px #fff solid";
		darkCon = true;
	}
	else {
		document.querySelectorAll("body")[0].style.background = "#38e0f2";
		document.getElementById("main-content").style.color = "#000";
		document.querySelectorAll("footer")[0].style.backgroundColor = "#fff";
		document.querySelectorAll("footer")[0].style.color = "#000";
		document.querySelectorAll("footer")[0].style.borderTop = "0px";
		document.querySelectorAll("nav")[0].style.borderBottom = "0px";
		darkCon = false;
	}
}

function monochrome() {
	if (!monochromed) {
		document.querySelectorAll("h1")[0].style.color = "#555";
		document.getElementById("nav-list").style.background = "#555";
		document.querySelectorAll("body")[0].style.background = "#555";
		document.getElementById("main-content").style.color = "#fff";
		// document.getElementById("nav-list").querySelectorAll("#page-on")[0].style.color = "#000";
		for (var j = 0; j < document.querySelectorAll(".PurpleBack").length; j++) {
			document.querySelectorAll(".PurpleBack")[j].style.backgroundImage = "none";
			document.querySelectorAll(".PurpleBack")[j].style.backgroundColor = "#555";
		}
		for (var j = 0; j < document.querySelectorAll("img").length; j++) {
			document.querySelectorAll("img")[j].style.webkitFilter = "grayscale(100%)";
			document.querySelectorAll("img")[j].style.filter = "grayscale(100%)";
		}
		for (var j = 0; j < document.getElementById("nav-list").querySelectorAll("li").length; j++) {
			// if (document.getElementById("nav-list").querySelectorAll("li")[j].querySelectorAll("a")[0].id != "page-on") {
				document.getElementById("nav-list").querySelectorAll("li")[j].querySelectorAll("a")[0].style.color = "#fff";				
			// }
		}
		////home////
		if (gPageName == "Home") {
			for (var j = 0; j < document.querySelectorAll(".prom-text").length; j++) {
				document.querySelectorAll(".prom-text")[j].style.background = "#000";
				document.querySelectorAll(".prom-text")[j].querySelectorAll("p")[0].style.color = "#fff";
				for (var k = 0; k < document.querySelectorAll(".prom-text")[j].querySelectorAll("p")[0].querySelectorAll("a").length; k++) {
					document.querySelectorAll(".prom-text")[j].querySelectorAll("p")[0].querySelectorAll("a")[k].style.color = "#fff";
				}
			}
		}
		////end of home////
		////publications////
		if (gPageName == "Publication") {
			for (var j = 0; j < document.querySelectorAll(".year-link-container").length; j++) {
				document.querySelectorAll(".year-link-container")[j].querySelectorAll("a")[0].style.backgroundColor = "#000";
				document.querySelectorAll(".year-link-container")[j].querySelectorAll("a")[0].style.color = "#fff";
			}
		}
		////end of publications////
		////news////
		if (gPageName == "News") {
			for (var j = 0; j < document.querySelectorAll(".other-news-container").length; j++) {
				document.querySelectorAll(".other-news-container")[j].style.backgroundColor = "#000";
				document.querySelectorAll(".other-news-container")[j].querySelectorAll("p")[0].style.color = "#fff";
			}
		}
		////end of news////
		////gallery////
		if (gPageName == "Gallery") {
			setTimeout(function() {
				for (var j = 0; j < document.getElementById("gallery-options-container").querySelectorAll("div").length; j++) {
					document.getElementById("gallery-options-container").querySelectorAll("div")[j].style.backgroundColor = "#000";
					document.getElementById("gallery-options-container").querySelectorAll("div")[j].style.color = "#fff";
				}
	        }, 100);
		}
		////end of gallery////
		monochromed = true;
	}
	else {
		document.querySelectorAll("h1")[0].style.color = "#d580ff";
		document.getElementById("nav-list").style.backgroundImage = "linear-gradient(#663FA9, #2626A8)";
		document.querySelectorAll("body")[0].style.background = "#38e0f2";
		document.getElementById("main-content").style.color = "#000";
		for (var j = 0; j < document.querySelectorAll(".PurpleBack").length; j++) {
			document.querySelectorAll(".PurpleBack")[j].style.backgroundImage = "linear-gradient(#663FA9, #2626A8)";
			document.querySelectorAll(".PurpleBack")[j].style.backgroundColor = "none";
		}
		for (var j = 0; j < document.querySelectorAll("img").length; j++) {
			document.querySelectorAll("img")[j].style.webkitFilter = "none";
			document.querySelectorAll("img")[j].style.filter = "none";
		}
		for (var j = 0; j < document.getElementById("nav-list").querySelectorAll("li").length; j++) {
			document.getElementById("nav-list").querySelectorAll("li")[j].querySelectorAll("a")[0].style.color = "#1bbef5";
		}
		// document.getElementById("nav-list").querySelectorAll("#page-on")[0].style.color = "#444444";
		////home////
		if (gPageName == "Home") {
			for (var j = 0; j < document.querySelectorAll(".prom-text").length; j++) {
				document.querySelectorAll(".prom-text")[j].style.background = "#5c1ce6";
				document.querySelectorAll(".prom-text")[j].querySelectorAll("p")[0].style.color = "#60ffff";
				for (var k = 0; k < document.querySelectorAll(".prom-text")[j].querySelectorAll("p")[0].querySelectorAll("a").length; k++) {
					document.querySelectorAll(".prom-text")[j].querySelectorAll("p")[0].querySelectorAll("a")[k].style.color = "#60ffff";
				}
			}
		}
		////end of home////
		////publications////
		if (gPageName == "Publication") {
			for (var j = 0; j < document.querySelectorAll(".year-link-container").length; j++) {
				document.querySelectorAll(".year-link-container")[j].querySelectorAll("a")[0].style.backgroundColor = "#88e0ff";
				document.querySelectorAll(".year-link-container")[j].querySelectorAll("a")[0].style.color = "#0000b3";
			}
		}
		////end of publications////
		////news////
		if (gPageName == "News") {
			for (var j = 0; j < document.querySelectorAll(".other-news-container").length; j++) {
				document.querySelectorAll(".other-news-container")[j].style.backgroundColor = "#5c1ce6";
				document.querySelectorAll(".other-news-container")[j].querySelectorAll("p")[0].style.color = "#60ffff";
			}
		}
		////end of news////
		////gallery////
		if (gPageName == "Gallery") {
			setTimeout(function() {
				for (var j = 0; j < document.getElementById("gallery-options-container").querySelectorAll("div").length; j++) {
					document.getElementById("gallery-options-container").querySelectorAll("div")[j].style.backgroundColor = "#88e0ff";
					document.getElementById("gallery-options-container").querySelectorAll("div")[j].style.color = "#000";
				}
	        }, 100);
		}
		////end of gallery////
		monochromed = false;
	}
}

function bigWhiteCur() {
	if(!isBigWhiteCur) {
		// document.querySelectorAll("body")[0].style.setProperty("cursor","url(../images/cursor-white.png), default","important");
		document.querySelectorAll("body")[0].style.cursor = "url(../images/cursor-white.png) 25 25, default";
		isBigWhiteCur = true;
	}
	else {
		document.querySelectorAll("body")[0].style.cursor = "default";
		isBigWhiteCur = false;
	}
}

function bigBlackCur() {
	if (!isBigBlackCur) {
		document.querySelectorAll("body")[0].style.cursor = "url(../images/cursor-black.png), default";
		isBigBlackCur = true;
	}
	else {
		document.querySelectorAll("body")[0].style.cursor = "default";
		isBigBlackCur = false;
	}
}

/////audio/////
var tts = false;
function textToSpeach() {
	if (!tts) {
		tts = true;
	}
	else {
		tts = false;
	}
}

var onPlay = false;
var labMemberAudio;
var aboutAudio = new Audio("../audio/about-audio.mp3");
var bigTitleAudio = new Audio("../audio/bigTitle-audio.mp3");
var mainTitleAudio = new Audio();

function enableTitleAudio() {
	waitForMainTitleToDisplay("#main-title", 100);

	function waitForMainTitleToDisplay(selector, time) {
	    if(document.querySelector(selector)!=null) {
	        document.getElementById("main-title").addEventListener("click", function() {
	        	// mainTitleAudio = new Audio("../audio/" + gPageName + "Title-audio.mp3");
	        	if (tts) {
	        		if (!onPlay) {
		        		mainTitleAudio.play();
		        		onPlay = true;
		        		mainTitleAudio.addEventListener("ended", function() {
							onPlay = false;
						});
		        	}
		        	else {
		        		mainTitleAudio.pause();
		        		onPlay = false;
		        	}
					// console.log("clicked");
	        	}
			});
	        return;
	    }
	    else {
	        setTimeout(function() {
	            waitForMainTitleToDisplay(selector, time);
	        }, time);
	    }
	}
}

function bigTitlePlay() {
	if (tts) {
		if (!onPlay) {
			bigTitleAudio.play();
			onPlay = true;
			bigTitleAudio.addEventListener("ended", function() {
				onPlay = false;
			});
		}
		else {
			bigTitleAudio.pause();
			onPlay = false;
		}
	}
}

function playAbout() {
	aboutAudio.play();
}

// setTimeout(function() {
// 	document.querySelectorAll(".border-access-option")[0].addEventListener("onmouseover", function() {
// 		querySelectorAll(".border-access-option")[0].style.cursor = "url(../images/cursor-black.cur)";
// 	});
// }, 100);
/////end of audio/////
//////////////////end of accessabilty///////////////////