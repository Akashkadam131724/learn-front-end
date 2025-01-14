// JavaScript Array Methods Examples - Comprehensive List

// Initial array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get length of the array
console.log("Length:", array.length);

// Access elements by index
console.log("First element:", array[0]);
console.log("Last element:", array[array.length - 1]);

// Add elements to the end
array.push(11);
console.log("After push:", array);

// Remove the last element
array.pop();
console.log("After pop:", array);

// Add elements to the beginning
array.unshift(0);
console.log("After unshift:", array);

// Remove the first element
array.shift();
console.log("After shift:", array);

// Find the index of an element
let indexOfFive = array.indexOf(5);
console.log("Index of 5:", indexOfFive);

// Check if an array includes an element
let includesFive = array.includes(5);
console.log("Includes 5:", includesFive);

// Reverse the array
let reversed = array.slice().reverse();
console.log("Reversed:", reversed);

// Sort the array
let sorted = array.slice().sort((a, b) => b - a);
console.log("Sorted descending:", sorted);

// Concatenate arrays
let concatenated = array.concat([11, 12, 13]);
console.log("Concatenated:", concatenated);

// Join array elements into a string
let joined = array.join("-");
console.log("Joined with '-':", joined);

// Slice part of the array
let sliced = array.slice(2, 5);
console.log("Sliced (2, 5):", sliced);

// Splice the array
let spliced = array.slice();
spliced.splice(2, 2, 99, 100);
console.log("After splice:", spliced);

// Map over the array
let mapped = array.map((x) => x * 2);
console.log("Mapped (x * 2):", mapped);

// Filter the array
let filtered = array.filter((x) => x % 2 === 0);
console.log("Filtered (even numbers):", filtered);

// Reduce the array
let reduced = array.reduce((sum, x) => sum + x, 0);
console.log("Reduced (sum):", reduced);

// Find an element
let found = array.find((x) => x > 5);
console.log("Found (> 5):", found);

// Find index of an element
let foundIndex = array.findIndex((x) => x > 5);
console.log("Found index (> 5):", foundIndex);

// Every element matches a condition
let allEven = array.every((x) => x % 2 === 0);
console.log("All even:", allEven);

// Some elements match a condition
let someEven = array.some((x) => x % 2 === 0);
console.log("Some even:", someEven);

// Flatten an array
let nested = [1, [2, [3, [4]]]];
let flattened = nested.flat(2);
console.log("Flattened:", flattened);

// Flatten and map
let flatMapped = array.flatMap((x) => [x, x * 2]);
console.log("FlatMapped:", flatMapped);

// Copy within the array
let copiedWithin = array.slice();
copiedWithin.copyWithin(0, 3, 5);
console.log("CopyWithin:", copiedWithin);

// Fill the array
let filled = array.slice();
filled.fill(0, 2, 5);
console.log("Filled (0, 2, 5):", filled);

// Convert to string
let toString = array.toString();
console.log("Array toString:", toString);

// Check if variable is an array
console.log("Is array:", Array.isArray(array));

// Keys of the array
let keys = Array.from(array.keys());
console.log("Keys:", keys);

// Values of the array
let values = Array.from(array.values());
console.log("Values:", values);

// Entries of the array
let entries = Array.from(array.entries());
console.log("Entries:", entries);

// Create an array from a string
let fromString = Array.from("JavaScript");
console.log("Array from string:", fromString);

// Create an array of a specific length
let fromLength = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Array from length:", fromLength);

// Find the maximum value
let max = Math.max(...array);
console.log("Max value:", max);

// Find the minimum value
let min = Math.min(...array);
console.log("Min value:", min);
