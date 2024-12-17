// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/

/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

// var longestCommonPrefix = function (strs) {
//   let longestPrefix = "";
//   if (strs.length < 2) return "";

//   let tempPrefix = strs[0];

//   let temp = "";

//   for (let i = 1; i < strs.length; i++) {
//     let res = "";
//     for (let j = 0; j < strs[i].length; j++) {
//       if (!longestPrefix) {
//         // find longest tempPrefix between first two string elements
//         if (strs[i][j] === tempPrefix[j]) {
//           temp = temp + tempPrefix[j];
//         } else {
//           break;
//         }
//       } else {
//         if (strs[i][j] == longestPrefix[j]) {
//           res = res + longestPrefix[j];
//         } else {
//           break;
//         }
//       }
//     }
//     if (i === 1) {
//       // this will be longest prefix
//       longestPrefix = longestPrefix + temp;
//     }
//   }

//   return longestPrefix;
// };

var longestCommonPrefixBrute = function (strs) {
  if (strs.length === 0) return ""; // Handle empty input array case

  let prefix = ""; // Initialize the prefix as an empty string

  // Outer loop to go through each character of the first word
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; // Get the character at index `i` of the first word

    // Inner loop to compare this character with corresponding characters of all other words
    for (let j = 1; j < strs.length; j++) {
      // Check if the character at index `i` in strs[j] matches the character in strs[0]
      // or if `i` exceeds the length of strs[j]
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix; // If a mismatch is found, return the prefix
      }
    }

    prefix += char; // If all strings have the same character at index `i`, add it to the prefix
  }

  return prefix; // Return the computed prefix after checking all characters
};

const res = longestCommonPrefixBrute(["flower", "flow", "flight"]);
console.log("res: " + res);
const res3 = longestCommonPrefixBrute(["flower", "flow", "flight"]);
console.log("res3: " + res3);

// sort the list of strings and compare only first and last strings
var longestCommonPrefixCompareFirstAndLast = function (strs) {
  strs.sort();

  let first = strs[0].split("");

  let last = strs[strs.length - 1].split("");
  let lgPrefix = "";
  for (let i = 0; i < first.length; i++) {
    if (first[i] == last[i]) lgPrefix = lgPrefix + first[i];
    else break;
  }
  return lgPrefix;
};
const res2 = longestCommonPrefixCompareFirstAndLast([""]);
console.log("res2: " + res2);

var longestCommonPrefixGPT = function (strs) {
  if (strs.length === 0) return ""; // If there are no strings, return empty
  if (strs.length === 1) return strs[0]; // If only one string, return it as the prefix

  let prefix = strs[0]; // Start with the first string as the potential prefix

  for (let i = 1; i < strs.length; i++) {
    // Check prefix against each string in the array
    while (strs[i].indexOf(prefix) !== 0) {
      // If the current string doesn't start with the prefix
      prefix = prefix.slice(0, -1); // Shorten the prefix by removing the last character
      if (prefix === "") return ""; // If the prefix is reduced to an empty string, return ""
    }
  }

  return prefix; // Return the longest common prefix found
};

const gptSoln = longestCommonPrefixGPT(["flower", "flow", "flight"]);
console.log("gptSoln: " + gptSoln); // Output: "fl"
