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
$(".officer1Image").attr("src", "png/izu.png");
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
$(".officer2Image").attr("src", "png/tahir.png");
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
$(".officer3Image").attr("src", "png/jaswin.png");
$(".officer3Name").prepend("Jaswin Kohli");
$(".officer3Role").prepend("Treasurer");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer3Link1").attr("href", "#");
// $(".officer3Icon1").addClass("icon_compass");
$(".officer3Link2").attr("href", "https://www.linkedin.com/in/jaswinkohli");
$(".officer3Icon2").addClass("social_linkedin");


/*Officer 4*/
//Name, image
$(".officer4Image").attr("src", "png/connie.png");
$(".officer4Name").prepend("Connie Clark");
$(".officer4Role").prepend("Director of Student Interest");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer4Link1").attr("href", "#");
// $(".officer4Icon1").addClass("icon_compass");
$(".officer4Link2").attr("href", "https://www.linkedin.com/profile/view?id=364199321&trk=nav_responsive_tab_profile"); 
$(".officer4Icon2").addClass("social_linkedin");


/*Officer 5*/
//Name, image
$(".officer5Image").attr("src", "png/braden.png");
$(".officer5Name").prepend("Braden Herndon");
$(".officer5Role").prepend("Director of Student Events");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer5Link1").attr("href", "#");
// $(".officer5Icon1").addClass("icon_compass");
$(".officer5Link2").attr("href", "https://www.linkedin.com/in/bradenherndon"); 
$(".officer5Icon2").addClass("social_linkedin");


/*Officer 6*/
//Name, image
$(".officer6Image").attr("src", "png/grace.png");
$(".officer6Name").prepend("Grace Chow");
$(".officer6Role").prepend("Co-Director of Marketing");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer6Link1").attr("href", "#");
// $(".officer6Icon1").addClass("icon_compass");
$(".officer6Link2").attr("href", "https://www.linkedin.com/in/gracechow5"); 
$(".officer6Icon2").addClass("social_linkedin");


/*Officer 7*/
//Name,image
$(".officer7Image").attr("src", "png/tej.png");
$(".officer7Name").prepend("Tej Gidvani");
$(".officer7Role").prepend("Co-Director of Marketing");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer7Link1").attr("href", "#");
// $(".officer7Icon1").addClass("icon_compass");
$(".officer7Link2").attr("href", "https://www.linkedin.com/pub/tej-gidvani/6b/266/1b8");
$(".officer7Icon2").addClass("social_linkedin");


/*Officer 8*/
//Name,image
$(".officer8Image").attr("src", "png/tej.png");
$(".officer8Name").prepend("TejGidvani");
$(".officer8Role").prepend("CoDirectorofMarketing");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer8Link1").attr("href", "#");
// $(".officer8Icon1").addClass("icon_compass");
$(".officer8Link2").attr("href", "#");
$(".officer8Icon2").addClass("social_linkedin");

/*Officer 9*/
//Name,image
$(".officer9Image").attr("src", "png/tej.png");
$(".officer9Name").prepend("TejGidvani");
$(".officer9Role").prepend("CoDirectorofMarketing");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer9Link1").attr("href", "#");
// $(".officer9Icon1").addClass("icon_compass");
$(".officer9Link2").attr("href", "#");
$(".officer9Icon2").addClass("social_linkedin");

/*Officer 10*/
//Name,image
$(".officer10Image").attr("src", "png/tej.png");
$(".officer10Name").prepend("TejGidvani");
$(".officer10Role").prepend("CoDirectorofMarketing");
//Officer website/linked icons and links. For the icon, use icon_compass if website, social_linkedin if linkedin.
//Enter the url's for the links. make sure you have the http:// and correspond the linkss with the correct icons
//Don't mess with the href thing
/***Uncomment the Icon1 and Link1 here and in the about.html for the correct officer, if you want to add another icon.**/
// $(".officer10Link1").attr("href", "#");
// $(".officer10Icon1").addClass("icon_compass");
$(".officer10Link2").attr("href", "#");
$(".officer10Icon2").addClass("social_linkedin");


/*FACULTY SPONSOR*/
//Name,image
$(".sponsorImage").attr("src", "png/cole.png");
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