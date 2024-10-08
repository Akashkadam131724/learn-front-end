var MAINAPP = (function(app) {
    var jsonObj = {};

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                app.jsonObj = JSON.parse(xobj.responseText);
            }
        };
        xobj.send(null);
    };

    app.jsonObj = jsonObj;
    app.loadJSON = loadJSON;
    return app;
})(MAINAPP || {});