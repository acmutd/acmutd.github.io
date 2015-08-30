$( document ).ready(function() {
   
    

/*THIS IS WHERE THE OFFICERS ARE LISTED. MAKE SURE THE OFFICER IMAGES ARE 172x172px

if you would like to add a social media icon for an officer, follow the example of the president and vice president:

ex: presidentLink1 and presidentIcon1
    
    make new versions of the above but change the 1 to a 2. then add in appropriate icon class names and links
    also, you will have to go into the about.html locate the position of the officer, go to where the current icon is, and copy
    paste that (the entire <li> tag and everything inside it), then change the 1s to 2s for only Link1 and Icon1

*/

/*PRESIDENT*/
//ONLY CHANGE THE NAME AND THE IMAGE URL HERE. DO NOT TOUCH THE "SRC" OR ANYTHING ELSE
$('.presidentName').append('Izuchukwu Elechi');
$(".presidentRole").prepend("President");
$(".presidentImage").attr("src", "png/izu.png");
//ENTER THE TYPE OF LINKS THE OFFICER WILL GET. 
//ONLY ENTER icon_compass (if website), social_linkedin or social_googleplus
$(".presidentIcon1").addClass("icon_compass");
$(".presidentIcon2").addClass("social_linkedin");
//Enter the url's for the links. make sure you have the http://. correspond them with the icons above. 
//for emails, only change the email address don't touch the mailto: part
$(".presidentLink1").attr("href", "http://izuchukwu.co");
$(".presidentLink2").attr("href", "https://www.linkedin.com/in/izuchukwu");


/*VICE PRESIDENT*/
//Name, link to image
$(".vpName").prepend("Tahir Aziz");
$(".vpRole").prepend("Vice President");
$(".vpImage").attr("src", "png/tahir.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".vpIcon1").addClass("icon_compass");
$(".vpIcon2").addClass("social_linkedin");
//URLS of links. 
$(".vpLink1").attr("href", "http://tahir.io");
$(".vpLink2").attr("href", "https://www.linkedin.com/in/tahiraziz4"); 


/*SECRETARY*/
//Name, link to image
$(".secretaryName").prepend("Jaswin Kohli");
$(".secretaryRole").prepend("Secretary");
$(".secretaryImage").attr("src", "png/jaswin.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".secretaryIcon1").addClass("icon_compass");
$(".secretaryIcon2").addClass("social_linkedin");
//Links
$(".secretaryLink1").attr("href", "#");
$(".secretaryLink2").attr("href", "#"); 

/*TREASURER*/
//Name, link to image
$(".treasurerName").prepend("Apply!");
$(".treasurerRole").prepend("Treasurer");
$(".treasurerImage").attr("src", "template/pivot/img/team-small-1.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".treasurerIcon1").addClass("icon_compass");
$(".treasurerIcon2").addClass("social_linkedin");
//Links
$(".treasurerLink1").attr("href", "#"); 
$(".treasurerLink2").attr("href", "#");

/*ECS AFFAIRS*/
//Name, image
$(".ecsName").prepend("Reuben Frank");
$(".ecsRole").prepend("Treasurer");
$(".ecsImage").attr("src", "png/reuben.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".ecsIcon1").addClass("social_linkedin");
//Links
$(".ecsLink1").attr("href", "https://www.linkedin.com/pub/reuben-frank/a3/32b/b2a"); 

/*Student Interests*/
//Name, image
$(".siName").prepend("Connie Clark");
$(".siRole").prepend("Student Interests");
$(".siImage").attr("src", "png/connie.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".siIcon1").addClass("social_linkedin");
//Links
$(".siLink1").attr("href", "https://www.linkedin.com/profile/view?id=364199321&trk=nav_responsive_tab_profile"); 

/*INDUSTRY AFFAIRS*/
//Name,image
$(".industryName").prepend("Apply!");
$(".industryRole").prepend("Industry Affairs");
$(".industryImage").attr("src", "template/pivot/img/team-small-2.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".industryIcon1").addClass("icon_compass");
$(".industryIcon2").addClass("social_linkedin");
//Links
$(".industryLink1").attr("href", "#");
$(".industryLink2").attr("href", "#");

/*Social Affairs*/
//Name, image
$(".socialAffairsName").prepend("Braden Herndon");
$(".socialAffairsRole").prepend("Social Affairs");
$(".socialAffairsImage").attr("src", "png/braden.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".socialAffairsIcon1").addClass("social_linkedin");
//Links
$(".socialAffairsLink1").attr("href", "https://www.linkedin.com/in/bradenherndon");

/*Marketing #1*/
//Name, image
$(".marketing1Name").prepend("Tej Gidvani");
$(".marketing1Role").prepend("Marketing");
$(".marketing1Image").attr("src", "png/tej.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".marketing1Icon1").addClass("social_linkedin");
//Links
$(".marketing1Link1").attr("href", "https://www.linkedin.com/pub/tej-gidvani/6b/266/1b8");

/*Marketing #2*/
//Name, image
$(".marketing2Name").prepend("Grace Chow");
$(".marketing2Role").prepend("Marketing");
$(".marketing2Image").attr("src", "png/grace.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".marketing2Icon1").addClass("social_linkedin");
//Links
$(".marketing2Link1").attr("href", "https://www.linkedin.com/in/gracechow5");

/*HACKATHON AFFAIRS*/
//Name, image
$(".hackathonName").prepend("Apply!");
$(".hackathonRole").prepend("Director of Hack_UTD");
$(".hackathonImage").attr("src", "template/pivot/img/team-small-3.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".hackathonIcon1").addClass("icon_compass");
$(".hackathonIcon2").addClass("social_linkedin");
//Links
$(".hackathonLink1").attr("href", "#"); 
$(".hackathonLink2").attr("href", "#");

/*FACULTY SPONSOR*/
//Name,image
$(".sponsorName").prepend("John Cole");
$(".sponsorRole").prepend("Faculty Sponsor");
$(".sponsorImage").attr("src", "png/johnCole.png");
////ONLY ENTER icon_compass (if website) or social_linkedin
$(".sponsorIcon1").addClass("icon_compass");
//Links
$(".sponsorLink1").attr("href", "http://utd.edu/~john.cole/"); 



});

//make calendar page with google embed