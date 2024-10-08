document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector("#logo");

    logo.addEventListener("click", function() {
        console.log("Clicked");
    });
});

var firstName = "James",
    lastName = "West";

var user = {
    firstName: "Cory",
    lastName: "Sikahema",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

var theName = user.fullName.bind(user);


setTimeout(theName, 3000);