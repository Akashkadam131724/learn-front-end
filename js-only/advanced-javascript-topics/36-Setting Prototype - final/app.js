var objProto = {
    greet: function() {
        console.log(this.greeting + " World");
    }
};

var Greeting = function(term) {
    this.greeting = term;
};

Greeting.prototype = objProto;

var obj1a = new Greeting("Hi");
var obj1b = new Greeting("hi");

var obj2 = Object.create(objProto);
obj2.greeting = "Hello";

var obj3 = {
    greeting: "Hi"
};

Object.setPrototypeOf(obj3, objProto);
