let student = {
  fName: "Steven",
  lName: "Hancock",
  score: [],
  total: 0,
  average: 0,
  addScore: function (val) {
    this.score.push(val);
    return this;
  },
  doTotal: function () {
    this.total = this.score.reduce(function (x, y) {
      return x + y;
    }, 0);
    return this;
  },
  doAverage: function () {
    this.average = this.total / this.score.length;
    return this;
  },
};
