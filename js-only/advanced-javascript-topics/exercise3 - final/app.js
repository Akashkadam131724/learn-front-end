//Immediately invoke all three functions.
//Create a function that adds two numbers and assign it to a variable
var firstNum = function(num1, num2) {
    return num1 + num2;
}(5, 10);

//Create a function that multiplies the previous number by itself and store it in a second variable.
var secondNum = function() {
    return firstNum * firstNum;
}();

//Create a function that prints to the console the variable that contains the results of the previous function.
(function() {
    console.log(secondNum);
}());