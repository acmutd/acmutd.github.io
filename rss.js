$( document ).ready(function() {


// Event 1
    $(".event1Date").rssfeed("http://www.utdacm.com/tagged/events/rss", 
    {
        limit: 1,
        header: false,
        date: true,
        dateformat: 'date',
        content: false,
        snippet: false,
        media: false,
        showerror: false
    });
    $(".event1Title").rssfeed("http://www.utdacm.com/tagged/events/rss", 
        {
            limit: 1,
            header: true,
            date: false,
            content: false,
            snippet: false,
            media: false,
            showerror: false
        });
    $(".event1Content").rssfeed("http://www.utdacm.com/tagged/events/rss", 
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
    $(".event2Date").rssfeed("http://www.utdacm.com/tagged/events/rss", 
    {
        limit: 1,
        offset: 2,
        header: false,
        date: true,
        dateformat: 'date',
        content: false,
        snippet: false,
        media: false,
        showerror: false
    });
    $(".event2Title").rssfeed("http://www.utdacm.com/tagged/events/rss", 
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
    $(".event2Content").rssfeed("http://www.utdacm.com/tagged/events/rss", 
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
    

});