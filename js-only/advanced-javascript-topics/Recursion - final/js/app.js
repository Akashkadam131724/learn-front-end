

const factorial = num => (num === 1) ? 1 : num * factorial(num - 1);

let final = factorial(5);
console.log(final);