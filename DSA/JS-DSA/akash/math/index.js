// math_overview.js

// Overview of JavaScript Math Object

// The Math object is a built-in object that provides mathematical constants and functions.
console.log("Math Object Overview");

// Properties
console.log("Math Properties:");
console.log("Math.PI:", Math.PI); // Mathematical constant PI
console.log("Math.E:", Math.E); // Base of natural logarithms
console.log("Math.LN2:", Math.LN2); // Natural logarithm of 2
console.log("Math.LN10:", Math.LN10); // Natural logarithm of 10
console.log("Math.LOG2E:", Math.LOG2E); // Base 2 logarithm of E
console.log("Math.LOG10E:", Math.LOG10E); // Base 10 logarithm of E
console.log("Math.SQRT2:", Math.SQRT2); // Square root of 2
console.log("Math.SQRT1_2:", Math.SQRT1_2); // Square root of 1/2

// Functions
console.log("\nMath Functions:");
console.log("Math.abs(-5):", Math.abs(-5)); // Absolute value
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // Rounds up
console.log("Math.floor(4.7):", Math.floor(4.7)); // Rounds down
console.log("Math.round(4.5):", Math.round(4.5)); // Rounds to nearest integer
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3)); // Maximum value
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3)); // Minimum value
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Power
console.log("Math.sqrt(16):", Math.sqrt(16)); // Square root
console.log("Math.random():", Math.random()); // Random number between 0 and 1
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // Sine of an angle
console.log("Math.cos(Math.PI):", Math.cos(Math.PI)); // Cosine of an angle

// Comparison
console.log("\nComparison of Math Properties and Functions:");
console.log("Math.PI vs Math.E:", Math.PI === Math.E); // False - PI and E are different constants
console.log("Math.abs(-5) === 5:", Math.abs(-5) === 5); // True - abs function works correctly
console.log("Math.round(4.5) === 5:", Math.round(4.5) === 5); // True - rounding works as expected

// Common Problems
console.log("\nCommon Problems with Math Object:");
console.log("1. Precision Issues:");
console.log("Math.sin(Math.PI) === 0:", Math.sin(Math.PI)); // Not exactly 0 due to precision issues

console.log("2. Randomness:");
console.log(
  "Math.random() !== Math.random():",
  Math.random() !== Math.random()
); // Random numbers may be the same

console.log("3. No Built-in Function for Combinations:");
console.log(
  "Combinations function (n choose k) is not directly available in Math object. Requires custom implementation."
);

console.log("4. Performance Impact of Multiple Computations:");
console.log(
  "Repeated calls to Math.random() or complex operations might impact performance in tight loops."
);
