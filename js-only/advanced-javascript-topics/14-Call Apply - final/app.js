var user1 = {
    firstName: "John",
    lastName: "Anderson",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var user2 = {
    firstName: "Sarah",
    lastName: "West",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var greeting = function(term, punct) {
    console.log(term + " " + this.firstName + punct);
};

//greeting.apply(user1, ["Good Morning", "!"]);

//greeting.apply(user2, ["Good Afternoon", "!"]);

console.log(user1.fullName.call(user2));