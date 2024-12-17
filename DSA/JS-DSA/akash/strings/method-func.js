// Sample data: array of strings and objects with string properties
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
const objectArray = [
  { name: "Alice", occupation: "Engineer" },
  { name: "Bob", occupation: "Designer" },
  { name: "Charlie", occupation: "Teacher" },
  { name: "Diana", occupation: "Engineer" },
  { name: "Eve", occupation: "Designer" },
];

// 1. Sort an array of strings alphabetically
function sortStrings(array) {
  return [...array].sort((a, b) => a.localeCompare(b));
}
console.log("Sorted strings:", sortStrings(stringArray));

// 2. Sort an array of strings in reverse alphabetical order
function sortStringsDesc(array) {
  return [...array].sort((a, b) => b.localeCompare(a));
}
console.log("Sorted strings (descending):", sortStringsDesc(stringArray));

// 3. Find a string in an array
function findString(array, value) {
  return array.find((item) => item === value);
}
console.log('Find "cherry":', findString(stringArray, "cherry"));

// 4. Check if a string exists in an array
function stringExists(array, value) {
  return array.includes(value);
}
console.log('Exists "banana":', stringExists(stringArray, "banana"));

// 5. Count occurrences of a string in an array
function countOccurrences(array, value) {
  return array.filter((item) => item === value).length;
}
console.log('Count of "apple":', countOccurrences(stringArray, "apple"));

// 6. Filter strings by a substring
function filterBySubstring(array, substring) {
  return array.filter((item) => item.includes(substring));
}
console.log('Strings containing "er":', filterBySubstring(stringArray, "er"));

// 7. Find the longest string in an array
function findLongestString(array) {
  return array.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}
console.log("Longest string:", findLongestString(stringArray));

// 8. Find the shortest string in an array
function findShortestString(array) {
  return array.reduce(
    (shortest, current) =>
      current.length < shortest.length ? current : shortest,
    array[0]
  );
}
console.log("Shortest string:", findShortestString(stringArray));

// 9. Sort objects by a string property alphabetically
function sortByStringProperty(array, property) {
  return [...array].sort((a, b) => a[property].localeCompare(b[property]));
}
console.log(
  "Objects sorted by name:",
  sortByStringProperty(objectArray, "name")
);

// 10. Sort objects by a string property in reverse alphabetical order
function sortByStringPropertyDesc(array, property) {
  return [...array].sort((a, b) => b[property].localeCompare(a[property]));
}
console.log(
  "Objects sorted by occupation (descending):",
  sortByStringPropertyDesc(objectArray, "occupation")
);

// 11. Check if any object has a string property that matches a value
function anyObjectHasProperty(array, property, value) {
  return array.some((item) => item[property] === value);
}
console.log(
  'Any object with name "Charlie":',
  anyObjectHasProperty(objectArray, "name", "Charlie")
);

// 12. Filter objects by a substring in a string property
function filterObjectsBySubstring(array, property, substring) {
  return array.filter((item) => item[property].includes(substring));
}
console.log(
  'Objects with "Engineer" in occupation:',
  filterObjectsBySubstring(objectArray, "occupation", "Engineer")
);

// 13. Convert all strings in an array to uppercase
function toUpperCaseArray(array) {
  return array.map((item) => item.toUpperCase());
}
console.log("Uppercase strings:", toUpperCaseArray(stringArray));

// 14. Convert all strings in an array to lowercase
function toLowerCaseArray(array) {
  return array.map((item) => item.toLowerCase());
}
console.log("Lowercase strings:", toLowerCaseArray(stringArray));

// 15. Concatenate all strings in an array into a single string
function concatenateStrings(array, separator = "") {
  return array.join(separator);
}
console.log(
  'Concatenated strings (with ", "):',
  concatenateStrings(stringArray, ", ")
);
