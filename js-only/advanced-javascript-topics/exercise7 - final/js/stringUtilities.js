var MAINAPP = (function(app) {
    var sub = app.string = app.string || {};

    var numChar = function(str, char) {
            //return (str.match(new RegExp(char, 'g')) || []).length;
            return (str.split(char).length - 1);
        },

        breakOut = function(str, delim) {
            var arr = str.split(delim);
            return arr.map(function(val) {
                return val.trim();
            });
        };

    //Public
    sub.numChar = numChar;
    sub.breakOut = breakOut;

    return app;
})(MAINAPP || {});