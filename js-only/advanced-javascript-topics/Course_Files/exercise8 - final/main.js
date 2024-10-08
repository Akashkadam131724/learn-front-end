//Open the json file and then populate learnjs.html with the data from the json file. 
//document.getElementsByTagName()
//document.getElementById()
//innerHTML();

var MAINAPP = (function(app) {
    var jsonObj = {},
        doc =document;

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                jsonObj = JSON.parse(xobj.responseText);
                populateHtml();
            }
        };
        xobj.send(null);
    };

    var populateHtml = function() {
        var li = doc.getElementsByTagName('li');
        doc.getElementsByTagName('h2')[0].innerHTML = jsonObj.heading;
        for (let i = 0;i < li.length;i++) {
            li[i].innerHTML = jsonObj.bullets['b' + (i + 1)];
        }
    };

    loadJSON('data.json');

    app.populateHtml = populateHtml;
    return app;
})(MAINAPP || {});


