$( document ).ready(function() {
    /*$("#rss-feeds1").rss("http://www.utdacm.com/tagged/events/rss", {
    	limit: 1,
    	ssl: true,
    	layoutTemplate: "<div class='feed-container1'>{entries}</div>",

    })*/

/*THIS IS WHERE THE OFFICERS ARE LISTED. MAKE SURE THE OFFICER IMAGES ARE 616x616px*/

/*PRESIDENT*/
//ONLY CHANGE THE NAME AND THE IMAGE URL HERE. DO NOT TOUCH THE "SRC" OR ANYTHING ELSE
$(".presidentName").prepend("Izuchukwu Elechi");
$(".presidentRole").prepend("President");
$(".presidentImage").attr("src", "template/pivot/img/izu.png");
//ENTER THE TYPE OF LINKS THE OFFICER WILL GET. 
//ONLY ENTER icon-global (if website), social_linkedin or social_googleplus
$(".presidentIcon1").addClass("icon-global");
$(".presidentIcon2").addClass("social_linkedin");
//Enter the url's for the links. make sure you have the http://. correspond them with the icons above. 
//for emails, only change the email address don't touch the mailto: part
$(".presidentLink1").attr("href", "http://izuchukwu.co");
$(".presidentLink2").attr("href", "https://www.linkedin.com/in/izuchukwu");

//TAHIR:::::::::REMOVE THE ICON CLASSES FROM THE HTML)


/*VICE PRESIDENT*/
//Name, link to image
$(".vpName").prepend("Michael Raibick");
$(".vpRole").prepend("Vice President");
$(".vpImage").attr("src", "template/pivot/img/michael.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".vpIcon1").addClass("social_linkedin");
$(".vpIcon2").addClass("social_googleplus");
//URLS of links. 
$(".vpLink1").attr("href", "https://www.linkedin.com/pub/michael-raibick/64/505/843/en");
$(".vpLink2").attr("href", "mailto:michael.raibick@utdallas.edu?Subject=ACM"); 


/*SECRETARY*/
//Name, link to image
$(".secretaryName").prepend("Connie Clark");
$(".secretaryRole").prepend("Secretary");
$(".secretaryImage").attr("src", "template/pivot/img/connie.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".secretaryIcon1").addClass("social_linkedin");
$(".secretaryIcon2").addClass("social_googleplus");
//Links
$(".secretaryLink1").attr("href", "https://www.linkedin.com/profile/view?id=364199321&trk=nav_responsive_tab_profile");
$(".secretaryLink2").attr("href", "mailto:connie.clark@utdallas.edu?Subject=ACM"); 

/*TREASURER*/
//Name, link to image
$(".treasurerName").prepend("Michael Hankin");
$(".treasurerRole").prepend("Treasurer");
$(".treasurerImage").attr("src", "template/pivot/img/hankin.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".treasurerIcon1").addClass("social_linkedin");
$(".treasurerIcon2").addClass("social_googleplus");
//Links
$(".treasurerLink1").attr("href", "https://www.linkedin.com/in/michaelhankin"); 
$(".treasurerLink2").attr("href", "mailto:michael.hankin@utdallas.edu?Subject=ACM");

/*ECS AFFAIRS*/
//Name, image
$(".ecsName").prepend("Reuben Frank");
$(".ecsRole").prepend("Treasurer");
$(".ecsImage").attr("src", "template/pivot/img/reuben.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".ecsIcon1").addClass("social_linkedin");
$(".ecsIcon2").addClass("social_googleplus");
//Links
$(".ecsLink1").attr("href", "http://www.facebook.com/reuben.a.frank"); 
$(".ecsLink2").attr("href", "mailto:raf140130@utdallas.edu?Subject=ACM");

/*DIRECTOR OF SIGS*/
//Name, image
$(".sigsName").prepend("Tahir Aziz");
$(".sigsRole").prepend("Director of SIGs");
$(".sigsImage").attr("src", "template/pivot/img/tahir.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".sigsIcon1").addClass("icon-global");
$(".sigsIcon2").addClass("social_linkedin");
//Links
$(".sigsLink1").attr("href", "http://tahir.io"); 
$(".sigsLink2").attr("href", "https://www.linkedin.com/in/tahiraziz4");

/*Student Affairs*/
//Name, image
$(".studentAffairsName").prepend("Grace Chow");
$(".studentAffairsRole").prepend("Student Affairs");
$(".studentAffairsImage").attr("src", "template/pivot/img/grace.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".studentAffairsIcon1").addClass("social_linkedin");
$(".studentAffairsIcon2").addClass("social_googleplus");
//Links
$(".studentAffairsLink1").attr("href", "https://www.linkedin.com/in/gracechow5");
$(".studentAffairsLink2").attr("href", "mailto:grace.chow@utdallas.edu?Subject=ACM"); 

/*INDUSTRY AFFAIRS*/
//Name,image
$(".industryName").prepend("Shaurya Arora");
$(".industryRole").prepend("Industry Affairs");
$(".industryImage").attr("src", "template/pivot/img/shaurya.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".industryIcon1").addClass("icon-global");
$(".industryIcon2").addClass("social_linkedin");
//Links
$(".industryLink1").attr("href", "http://shaurya.me");
$(".industryLink2").attr("href", "http://www.linkedin.com/pub/shaurya-arora/68/17/619");

/*PUBLIC RELATIONS #1*/
//Name, image
$(".pr1Name").prepend("Tej Gidvani");
$(".pr1Role").prepend("Public Relations");
$(".pr1Image").attr("src", "template/pivot/img/tej.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".pr1Icon1").addClass("social_linkedin");
$(".pr1Icon2").addClass("social_googleplus");
//Links
$(".pr1Link1").attr("href", "https://www.linkedin.com/pub/tej-gidvani/6b/266/1b8");
$(".pr1Link2").attr("href", "mailto:tej.gidvani@utdallas.edu?Subject=ACM"); 

/*PUBLIC RELATIONS #2*/
//Name, image
$(".pr2Name").prepend("Braden Herndon");
$(".pr2Role").prepend("Public Relations");
$(".pr2Image").attr("src", "template/pivot/img/braden.png");
///ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".pr2Icon1").addClass("social_linkedin");
$(".pr2Icon2").addClass("social_googleplus");
//Links 
$(".pr2Link1").attr("href", "https://www.linkedin.com/in/bradenherndon");
$(".pr2Link2").attr("href", "mailto:braden.herndon@utdallas.edu?Subject=ACM");

/*HACKATHON AFFAIRS*/
//Name, image
$(".hackathonName").prepend("Diem-Nhi Tran");
$(".hackathonRole").prepend("Hackathon Affairs");
$(".hackathonImage").attr("src", "template/pivot/img/diem-nhi.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".hackathonIcon1").addClass("icon-global");
$(".hackathonIcon2").addClass("social_linkedin");
//Links
$(".hackathonLink1").attr("href", "http://diemnhi.com/"); 
$(".hackathonLink2").attr("href", "https://www.linkedin.com/in/diemnhitran");

/*FACULTY SPONSOR*/
//Name,image
$(".sponsorName").prepend("John Cole");
$(".sponsorRole").prepend("Faculty Sponsor");
$(".sponsorImage").attr("src", "template/pivot/img/johnCole.png");
////ONLY ENTER icon-global (if website), social_linkedin or social_googleplu2
$(".sponsorIcon1").addClass("icon-global");
$(".sponsorIcon2").addClass("social_googleplus");
//Links
$(".sponsorLink1").attr("href", "http://utd.edu/~john.cole/"); 
$(".sponsorLink2").attr("href", "mailto:john.cole@utdallas.edu?Subject=ACM");



});

//make calendar page with google embed