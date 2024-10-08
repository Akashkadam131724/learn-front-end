
var Greeting = function(term) {
    const date = new Date();
    console.log(date);
    this.getDate = function() {
        return date;
    };
    this.greeting = term;
};

var obj1 = new Greeting("Hello");

setTimeout(function() {
    obj2 = new Greeting("Hi");
}, 3000);