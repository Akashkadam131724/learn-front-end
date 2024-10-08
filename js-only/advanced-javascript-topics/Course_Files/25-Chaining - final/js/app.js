
let str = "The course starts in October, 2018. ";

let student = {
    fName: "Steven",
    lName: "Hancock",
    score: [],
    total: 0,
    average: 0,
    addScore: function(val) {
        this.score.push(val);
        return this;
    },
    doTotal: function() {
        this.total = this.score.reduce(function(x, y) {
            return x + y;
        }, 0);
        return this;
    },
    doAverage: function() {
        this.average = this.total/this.score.length;
        return this;
    }
};

/*student.addScore(100);
student.addScore(80);
student.addScore(95);
student.doTotal();
student.doAverage();*/

student.addScore(100).addScore(80).addScore(95).doTotal().doAverage();

/*let fruit = ["applie", "pear", "peach"];

let fruitStr = fruit.concat("orange", "kiwi").sort().join(" - ").toUpperCase();*/

/*let str1 = str.replace("2018","2019").toUpperCase().trim();

let str1 = str.replace("2018","2019");

let str2 = str1.toUpperCase();

let str3 = str2.trim();

console.log(str3);*/
