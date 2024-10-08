

var MAINAPP = (function(app) {
    var sub = app.quiz = app.quiz || {};

    var str = app.string,
        dom = app.dom,
        $ = app.dom.$;

    var checkAnswer = function(value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = str.breakOut(dom.data($('#q01'), 'answer'), ",");
                correct = ans.every(function(val) {
                    return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
                });
                result = (correct) ? 'correct' : 'incorrect';
                displayFeedback(result);
            } else {
                displayFeedback('no-answer');
            }
        },
        initialize = function() {
            hideFeedback();
        },
        displayFeedback = function(result) {
            var feedback = $('.feedback.' + result);
            dom.addClass(feedback, 'visible');
        },
        hideFeedback = function() {
            var feedback = $('.feedback.visible');
            dom.removeClass(feedback, 'visible');
        };
    //Public
    sub.checkAnswer = checkAnswer;
    sub.initialize = initialize;

    return app;
})(MAINAPP || {});