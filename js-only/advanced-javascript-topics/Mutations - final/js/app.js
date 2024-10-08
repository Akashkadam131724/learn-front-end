"use strict";
const arr = [3,4,2,5,1,6];
Object.freeze(arr);

const cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};

const newNums = cloneObj(arr).sort();

console.log(newNums);
console.log(arr);


