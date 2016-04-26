$( document ).ready(function() {
   
    

/*THIS IS WHERE THE OFFICERS ARE LISTED. MAKE SURE THE OFFICER IMAGES ARE 172x172px

if you would like to add a social media icon for an officer, follow the example of the president and vice president:

ex: presidentLink1 and presidentIcon1
    
    make new versions of the above but change the 1 to a 2. then add in appropriate icon class names and links
    also, you will have to go into the about.html locate the position of the officer, go to where the current icon is, and copy
    paste that (the entire <li> tag and everything inside it), then change the 1s to 2s for only Link1 and Icon1

*/

/*Officer 1*/
//ONLY CHANGE THE NAME AND THE IMAGE URL HERE. DO NOT TOUCH THE "SRC" OR ANYTHING ELSE
$(".officer1Image").attr("src", "png/team/izuchukwu.png");
$('.officer1Name').append('Izuchukwu Elechi');
$(".officer1Role").prepend("President");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons 
//Don't mess with the href thing
$(".officer1Link1").attr("href", "http://izuchukwu.co");
$(".officer1Icon1").addClass("icon_compass");
$(".officer1Link2").attr("href", "https://www.linkedin.com/in/izuchukwu");
$(".officer1Icon2").addClass("social_linkedin");


/*Officer 2*/
//ONLY CHANGE THE NAME AND THE IMAGE URL HERE. DO NOT TOUCH THE "SRC" OR ANYTHING ELSE
$(".officer2Image").attr("src", "png/team/tahir.png");
$(".officer2Name").prepend("Tahir Aziz");
$(".officer2Role").prepend("Vice President");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
$(".officer2Link1").attr("href", "http://tahir.io");
$(".officer2Icon1").addClass("icon_compass");
$(".officer2Link2").attr("href", "https://www.linkedin.com/in/tahiraziz4"); 
$(".officer2Icon2").addClass("social_linkedin");


/*Officer 3*/
//Name, image
$(".officer3Image").attr("src", "png/team/cathy.png");
$(".officer3Name").prepend("Cathy Tran");
$(".officer3Role").prepend("Secretary");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer3Link1").attr("href", "#");
// $(".officer3Icon1").addClass("icon_compass");
$(".officer3Link2").attr("href", "http://acmutd.co");
$(".officer3Icon2").addClass("icon_compass");


/*Officer 4*/
//Name, image
$(".officer4Image").attr("src", "png/team/jaswin.png");
$(".officer4Name").prepend("Jaswin Kohli");
$(".officer4Role").prepend("Treasurer");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer4Link1").attr("href", "#");
// $(".officer4Icon1").addClass("icon_compass");
$(".officer4Link2").attr("href", "https://www.linkedin.com/in/jaswinkohli");
$(".officer4Icon2").addClass("social_linkedin");


/*Officer 5*/
//Name, image
$(".officer5Image").attr("src", "png/team/connie.png");
$(".officer5Name").prepend("Connie Clark");
$(".officer5Role").prepend("Director of Student Interest");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer5Link1").attr("href", "#");
// $(".officer5Icon1").addClass("icon_compass");
$(".officer5Link2").attr("href", "https://www.linkedin.com/profile/view?id=364199321&trk=nav_responsive_tab_profile"); 
$(".officer5Icon2").addClass("social_linkedin");

/*Officer 6*/
//Name, image
$(".officer6Image").attr("src", "png/team/shounak.png");
$(".officer6Name").prepend("Shounak Kulkarni");
$(".officer6Role").prepend("Director of Industry");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer6Link1").attr("href", "#");
// $(".officer6Icon1").addClass("icon_compass");
$(".officer6Link2").attr("href", "https://www.linkedin.com/in/shounakkulkarni"); 
$(".officer6Icon2").addClass("social_linkedin");

/*Officer 7*/
//Name, image
$(".officer7Image").attr("src", "png/team/zakariya.png");
$(".officer7Name").prepend("Zakariya Ahmed");
$(".officer7Role").prepend("Director of HackUTD");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer7Link1").attr("href", "#");
// $(".officer7Icon1").addClass("icon_compass");
$(".officer7Link2").attr("href", "https://www.linkedin.com/pub/zakariya-ahmed/86/759/569"); 
$(".officer7Icon2").addClass("social_linkedin");


/*Officer 8*/
//Name, image
$(".officer8Image").attr("src", "png/team/cole.png");
$(".officer8Name").prepend("John Cole");
$(".officer8Role").prepend("Faculty Sponsor");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer8Link1").attr("href", "#");
// $(".officer8Icon1").addClass("icon_compass");
$(".officer8Link2").attr("href", "http://utd.edu/~john.cole/"); 
$(".officer8Icon2").addClass("icon_compass");


/*Officer 9*/
//Name,image
$(".officer9Image").attr("src", "png/team/tej.png");
$(".officer9Name").prepend("Tej Gidvani");
$(".officer9Role").prepend("Co-Director of Marketing");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer9Link1").attr("href", "#");
// $(".officer9Icon1").addClass("icon_compass");
$(".officer9Link2").attr("href", "https://www.linkedin.com/pub/tej-gidvani/6b/266/1b8");
$(".officer9Icon2").addClass("social_linkedin");


/*Officer 10*/
//Name,image
$(".officer10Image").attr("src", "png/team/zakariya.png");
$(".officer10Name").prepend("Zakariya Ahmed");
$(".officer10Role").prepend("Director of Hack_UTD");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer10Link1").attr("href", "#");
// $(".officer10Icon1").addClass("icon_compass");
$(".officer10Link2").attr("href", "https://www.linkedin.com/pub/zakariya-ahmed/86/759/569");
$(".officer10Icon2").addClass("social_linkedin");


/*FACULTY SPONSOR*/
//Name,image
$(".sponsorImage").attr("src", "png/team/cole.png");
$(".sponsorName").prepend("John Cole");
$(".sponsorRole").prepend("Faculty Sponsor");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".sponsorLink1").attr("href", "#");
// $(".sponsorIcon1").addClass("icon_compass");
$(".sponsorLink2").attr("href", "http://utd.edu/~john.cole/"); 
$(".sponsorIcon2").addClass("icon_compass");



});

//make calendar page with google embed