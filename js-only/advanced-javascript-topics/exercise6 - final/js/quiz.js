var UTIL = (function(u) {
    //Set up as submodule
    var sub = u.quiz = u.quiz || {};

    //Dependencies
    var strU = u.string;
    var domU = u.dom;
    var $ = u.dom.$;

    var checkAnswer = function(value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = strU.breakOut(domU.data($('#q01'), 'answer'), ",");
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
            domU.addClass(feedback, 'visible');
        },
        hideFeedback = function() {
            var feedback = $('.feedback.visible');
            domU.removeClass(feedback, 'visible');
        };

        //Public Methods
        sub.checkAnswer = checkAnswer;
        sub.initialize = initialize;

        return u;

})(UTIL || {});