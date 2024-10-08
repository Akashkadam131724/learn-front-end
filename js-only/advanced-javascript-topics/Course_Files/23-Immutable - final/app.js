"use strict";
var obj = {
    firstName: "Steven",
    lastName: "Smith",
    startDate: "January 10, 2015",
    type: "admin"
};

Object.freeze(obj);

//obj.newProp = true;

//delete obj.type;

obj.firstName = "Steve";