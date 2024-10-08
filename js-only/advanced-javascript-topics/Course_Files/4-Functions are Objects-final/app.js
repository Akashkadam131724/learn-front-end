var report1 = function(val) {
    console.log(val);
};

//var report2 = new Function("val", "console.log(val);");

report1("expression");
//report2("constructor");

report1.userName = "Steven";
