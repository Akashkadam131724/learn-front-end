
/*let cnt = 0;

let increment = function() {
    cnt++;
    return cnt;
};*/

var MAINAPP = (function(nsp) {
    var currentUser = 0,
        users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

    var updateScore = function(newAmt) {
        users[currentUser].score += newAmt;
    };

    var returnUsers = function() {
        return users;
    };

    var updateTries = function() {
        users[currentUser].tries++;
    };

    var updateUser = function(newUser) {
        currentUser = newUser;
    };

    nsp.updateUser = updateUser;
    nsp.updateTries = updateTries;
    nsp.updateScore = updateScore;
    nsp.returnUsers = returnUsers;
    return nsp;
})(MAINAPP || {});

setTimeout(function() {MAINAPP.updateUser(2);}, 300);
setTimeout(function() {MAINAPP.updateScore(20);}, 100);
setTimeout(function() {MAINAPP.updateTries();}, 200);