(function (requirejs) {
    'use strict';

    // -- RequireJS config --
    requirejs.config({
        paths: {
            'jquery': ['/resources/lib/jquery/jquery.min'],
            'react': ['/resources/lib/react/react']
        }
    });
    requirejs.onError = function (err) {
        if (console != undefined && typeof console.log === "function") {
            console.log(err);
        }
    };

    // Load the app. This is kept minimal so it doesn't need much updating.
    require(['jquery', './app'], function ($, app) {
        app.init()
    });
})(requirejs);