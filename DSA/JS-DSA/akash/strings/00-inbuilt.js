// JavaScript String Methods Examples - Comprehensive List

// Initial string
let str = "  Hello, JavaScript World!  ";

// Trim whitespace
let trimmed = str.trim();
console.log("Trimmed:", trimmed);

// Convert to uppercase
let upperCase = trimmed.toUpperCase();
console.log("Uppercase:", upperCase);

// Convert to lowercase
let lowerCase = upperCase.toLowerCase();
console.log("Lowercase:", lowerCase);

// Get length of string
console.log("Length:", lowerCase.length);

// Check if string includes a substring
let includesJS = lowerCase.includes("javascript");
console.log("Includes 'javascript':", includesJS);

// Find index of a substring
let index = lowerCase.indexOf("javascript");
console.log("Index of 'javascript':", index);

// Extract a substring
let subStr = lowerCase.substring(index, index + 10);
console.log("Substring (index, index+10):", subStr);

// Replace a substring
let replaced = lowerCase.replace("javascript", "JS");
console.log("Replaced 'javascript' with 'JS':", replaced);

// Replace all occurrences of a substring
let replacedAll = lowerCase.replaceAll("l", "L");
console.log("Replaced all 'l' with 'L':", replacedAll);

// Split string into an array
let words = replaced.split(" ");
console.log("Words:", words);

// Join array back into a string
let joined = words.join("-");
console.log("Joined with '-':", joined);

// Repeat the string
let repeated = joined.repeat(2);
console.log("Repeated twice:", repeated);

// Slice a section of the string
let sliced = joined.slice(0, 10);
console.log("Sliced (0, 10):", sliced);

// Pad the string
let paddedStart = sliced.padStart(15, "*");
console.log("Padded Start:", paddedStart);

let paddedEnd = sliced.padEnd(15, "*");
console.log("Padded End:", paddedEnd);

// Check if string starts with a substring
let startsWith = lowerCase.startsWith("hello");
console.log("Starts with 'hello':", startsWith);

// Check if string ends with a substring
let endsWith = lowerCase.endsWith("world!");
console.log("Ends with 'world!':", endsWith);

// Match a regex pattern
let matches = lowerCase.match(/javascript/);
console.log("Matches 'javascript':", matches);

// Match all occurrences of a regex pattern
let matchAll = Array.from(lowerCase.matchAll(/l/g));
console.log("Match all 'l':", matchAll);

// Search for a regex pattern
let search = lowerCase.search(/world/);
console.log("Search for 'world':", search);

// Replace using regex
let regexReplace = lowerCase.replace(/hello/, "Hi");
console.log("Regex Replace 'hello' with 'Hi':", regexReplace);

// Concatenate strings
let concatenated = lowerCase.concat(" - Welcome to JS!");
console.log("Concatenated:", concatenated);

// Get character at a specific index
let charAt = lowerCase.charAt(0);
console.log("Character at index 0:", charAt);

// Get character code at a specific index
let charCode = lowerCase.charCodeAt(0);
console.log("Character code at index 0:", charCode);

// Convert a string to an array of characters
let charArray = Array.from(lowerCase);
console.log("Array from string:", charArray);

// Normalize the string
let normalized = lowerCase.normalize();
console.log("Normalized string:", normalized);

// Get raw string value
let rawValue = String.raw`This is a raw string`;
console.log("Raw string:", rawValue);

// Repeat a string multiple times
let repeatString = "Repeat".repeat(3);
console.log("Repeated string:", repeatString);

// Split the string by a specific delimiter
let splitByDelimiter = lowerCase.split(" ");
console.log("Split by space:", splitByDelimiter);

// Get substring using substr (deprecated but still works)
let deprecatedSubstr = lowerCase.substr(0, 5);
console.log("Substring using substr:", deprecatedSubstr);

// Convert string to primitive value
let primitiveValue = lowerCase.valueOf();
console.log("Primitive value:", primitiveValue);

// Check if string is empty
let isEmpty = "".length === 0;
console.log("Is empty string:", isEmpty);

// Check if string contains only whitespace
let isWhitespace = "   ".trim().length === 0;
console.log("Is whitespace string:", isWhitespace);
