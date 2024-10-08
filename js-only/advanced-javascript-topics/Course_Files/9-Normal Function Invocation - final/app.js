var name = "global";

var runIt = function(fn) {
    var name = "runIt";
    console.log("From runIt ---");
    console.log(this);
    console.log(this.name);
    fn();
};


runIt(function fun2() {
    var name = "fun2";
    console.log("From fun2 --");
    console.log(this);
    console.log(this.name);
});
