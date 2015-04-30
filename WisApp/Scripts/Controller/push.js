﻿$(function () {
    var connection = $.hubConnection();
    // Reference the proxy for the hub.  
    var articleHubProxy = connection.createHubProxy('articleHub');
    articleHubProxy.on('refresh', function () {
        if (document.location.href == "http://localhost:52454/Content/index.html#/" || document.location.href == "http://localhost:52454/content/#/") {
            window.location.reload();
        }
    })
    
    // Start the connection.
    connection.start()
        .done(function () {
            $('#sendarticle').click(function () {
                // Call the Send method on the hub.
                articleHubProxy.invoke('refresh_server')
            });
    });
});