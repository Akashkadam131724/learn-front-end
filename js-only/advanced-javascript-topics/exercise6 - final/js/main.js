

var MAINAPP = (function(nsp, $, domU, strU) {

    /*
    Quiz Functionality
    */
    var q = UTIL.quiz;

    var initQuiz = function() {
            domU.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
                q.initialize();
                q.checkAnswer($('#q01_ans')[0].value);
            });
        };
        
    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });
    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);