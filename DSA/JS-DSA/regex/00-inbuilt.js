// JavaScript RegExp (Regular Expression) Basics and Methods Examples

// Regular Expression Basics

// Creating a RegExp object
let regex1 = /pattern/;
let regex2 = new RegExp("pattern");

// RegExp test method - returns true if pattern matches, otherwise false
console.log("Test 'hello':", /hello/.test("hello world")); // true

// RegExp exec method - returns array of matched text or null
let match = /llo/.exec("hello");
console.log("Exec 'llo':", match); // ["llo", index: 2, input: "hello"]

// RegExp constructor properties
console.log("RegExp properties:", regex1.source, regex1.flags); // "pattern" ""

// String methods with RegExp

let str = "The quick brown fox jumps over the lazy dog";

// String match method - returns array of matches or null
let matches = str.match(/o/g);
console.log("Matches 'o':", matches); // ["o", "o", "o", "o"]

// String search method - returns index of first match or -1
let index = str.search(/brown/);
console.log("Search 'brown':", index); // 10

// String replace method - returns new string with replaced matches
let replaced = str.replace(/fox/, "cat");
console.log("Replace 'fox':", replaced); // "The quick brown cat jumps over the lazy dog"

// String split method - splits string into array by matches
let splitted = str.split(/\s+/);
console.log("Split ' ':", splitted); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// RegExp flags and options

let regexFlags = /pattern/gi; // g - global, i - ignore case

// RegExp patterns and special characters

// Meta characters
let pattern1 = /a.c/; // matches 'abc', 'adc', etc. (dot matches any single character)
let pattern2 = /\d+/; // matches one or more digits
let pattern3 = /\w+/; // matches one or more word characters (alphanumeric + underscore)
let pattern4 = /\s+/; // matches one or more whitespace characters

// Character classes
let pattern5 = /[aeiou]/; // matches any vowel
let pattern6 = /[^aeiou]/; // matches any non-vowel

// Quantifiers
let pattern7 = /a{2,4}/; // matches 'aa', 'aaa', or 'aaaa'
let pattern8 = /\d{3}/; // matches exactly three digits

// Anchors
let pattern9 = /^start/; // matches 'start' at the beginning of a string
let pattern10 = /end$/; // matches 'end' at the end of a string

// Groups and capturing
let pattern11 = /(\d+)-(\d+)/; // captures groups of digits separated by '-'

// Assertions
let pattern12 = /x(?=y)/; // matches 'x' only if followed by 'y'
let pattern13 = /x(?!y)/; // matches 'x' only if not followed by 'y'

// Using RegExp in conditional statements and loops

// Example: Validating an email
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = "example@email.com";
console.log("Valid email:", emailRegex.test(email)); // true

// Example: Extracting numbers from a string
let text = "There are 123 apples and 456 oranges";
let numbers = text.match(/\d+/g);
console.log("Extracted numbers:", numbers); // ["123", "456"]

// Example: Replacing all occurrences of a word
let sentence = "Replace all occurrences of apple with banana in this sentence.";
let replacedSentence = sentence.replace(/apple/g, "banana");
console.log("Replaced sentence:", replacedSentence);

// Example: Splitting a string into words
let sentence2 = "Split this sentence into words";
let words = sentence2.split(/\s+/);
console.log("Split words:", words);

// Example: Iterating over matches in a string
let text2 = "Match all vowels in this sentence.";
let vowelPattern = /[aeiou]/g;
let matchResult;
while ((matchResult = vowelPattern.exec(text2)) !== null) {
  console.log("Found vowel:", matchResult[0], "at index", matchResult.index);
}

// Summary: Regular expressions are powerful tools for pattern matching and manipulation in JavaScript. They are used with various string methods to search, match, replace, and split text based on patterns defined by special characters, quantifiers, anchors, assertions, and more.
