function Users(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.fullName = function() {
        return (this.firstName + " " + this.lastName);
    };
}

var user1 = new Users("James", "Johnson");

var user2 = new Users("Mary", "Smith");