document.addEventListener("DOMContentLoaded", function (event) {
	HomePageTransformation('Home');
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

/////////////Every page function/////////////////
function currentLabMembersPageTransformation (pageName) {
	pageOnChanging(pageName);
	HideButton();
	buildAndShowCurrentLabMembersPage(currentMembersArray);
}

function formerLabMembersPageTransformation (pageName) {
	pageOnChanging(pageName);
	HideButton();
	buildAndShowFormerLabMembersPage(formerMembersArray);
}

function newsPageTransformation (pageName) {
	pageOnChanging(pageName);
	HideButton();
	buildAndShowNewsPage(newsArray, MainNewsNumber);
}

function mediaPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowMediaPage(mediaObj);
}

function publicationsPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowPublicationsPage(PublicationsObj);
}

function FormerPhDStudentsPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowFormerStudentsPage (FormerPhDStudentsObj);
}

function FormerMAStudentsPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowFormerStudentsPage (FormerMAStudentsObj);
}

function AboutPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowAboutPage (AboutObj);
}

function ResearchTransitionToParenthoodPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchTransitionToParenthoodObj);
}

function ResearchMOSTPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchMOSTObj);
}

function ResearchPOWERPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchPOWERObj);
}

function ResearchMDSIPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchMDSIObj);
}

function ResearchRiskyDrivingPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchRiskyDrivingObj);
}

function ResearchUltraOrthodoxPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchUltraOrthodoxObj);
}

function ResearchTMTPageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchTMTObj);
}

function ResearchCovid19PageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowResearchPage (ResearchCovid19Obj);
}

function HomePageTransformation (pageName) {
    pageOnChanging(pageName);
    HideButton();
    buildAndShowHomePage ();
}
/////////////End of every page function/////////////////

function pageOnChanging (pageName) {
	document.getElementById("page-on").id = "";
	document.getElementsByClassName(pageName)[0].id = "page-on";
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

        if (j == (PublicationsObj.PublicationsArray.length - 2) || j == PublicationsObj.PublicationsArray.length - 1) {
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