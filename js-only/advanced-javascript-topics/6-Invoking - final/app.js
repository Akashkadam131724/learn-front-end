var sumIt = function() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    console.log(sum);
};