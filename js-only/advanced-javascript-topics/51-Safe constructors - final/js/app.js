
var Users = function(fName, lName) {
    if (this instanceof Users) {
        this.firstName = fName;
        this.lastName = lName;
    } else {
        return new Users(fName, lName);
    }
};

var user1 = Users("Sam", "Smith");

var user2 = new Users("Tom", "Smith");