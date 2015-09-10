$( document ).ready(function() {

/****HOME PAGE EVENTS*****/

// Event 1
    $(".event1Title").rssfeed("http://acmutd.tumblr.com/tagged/events/rss", 
        {
            limit: 1,
            header: true,
            date: false,
            content: false,
            snippet: false,
            media: false,
            showerror: false
        });
    $(".event1Content").rssfeed("http://acmutd.tumblr.com/tagged/events/rss", 
        {
            limit: 1,
            header: false,
            date: false,
            content: true,
            snippet: false,
            media: false,
            showerror: false,
        });
    // //Event 2  
    $(".event2Title").rssfeed("http://acmutd.tumblr.com/tagged/events/rss", 
        {
            limit: 1,
            offset: 2,
            header: true,
            date: false,
            content: false,
            snippet: false,
            media: false,
            showerror: false
        });
    $(".event2Content").rssfeed("http://acmutd.tumblr.com/tagged/events/rss", 
        {
            limit: 1,
            offset: 2,
            header: false,
            date: false,
            content: true,
            snippet: false,
            media: false,
            showerror: false
        });





    /****PARTNER PAGE EVENTS*****/
    //Partner 1
    $(".partner1Name").rssfeed("http://acmutd.tumblr.com/tagged/partners/rss", 
        {
            limit: 1,
            header: true,
            date: false,
            content: false,
            snippet: false,
            media: false,
            showerror: false
        });
    $(".partner1Content").rssfeed("http://acmutd.tumblr.com/tagged/partners/rss", 
        {
            limit: 1,
            header: false,
            date: false,
            content: true,
            snippet: false,
            media: false,
            showerror: false,
        });
    //Partner 2 
    $(".partner2Name").rssfeed("http://acmutd.tumblr.com/tagged/partners/rss", 
        {
            limit: 1,
            offset: 2,
            header: true,
            date: false,
            content: false,
            snippet: false,
            media: false,
            showerror: false
        });
    $(".partner2Content").rssfeed("http://acmutd.tumblr.com/tagged/partners/rss", 
        {
            limit: 1,
            offset: 2,
            header: false,
            date: false,
            content: true,
            snippet: false,
            media: false,
            showerror: false
        });
    //Partner 3
    $(".partner3Name").rssfeed("http://acmutd.tumblr.com/tagged/partners/rss", 
        {
            limit: 1,
            offset: 3,
            header: true,
            date: false,
            content: false,
            snippet: false,
            media: false,
            showerror: false
        });
    $(".partner3Content").rssfeed("http://acmutd.tumblr.com/tagged/partners/rss", 
        {
            limit: 1,
            offset: 3,
            header: false,
            date: false,
            content: true,
            snippet: false,
            media: false,
            showerror: false
        });
    

});