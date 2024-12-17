// 1903. Largest Odd Number in String
// https://leetcode.com/problems/largest-odd-number-in-string/description/

/*

Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

*/

// not works
var largestOddNumber = function (num) {
  let largesOdd = "";

  for (let j = 0; j < num.length; j++) {
    let subArr = num.slice(0, j + 1);

    if (parseInt(subArr) % 2 !== 0) {
      if (parseInt(subArr) > largesOdd) largesOdd = parseInt(subArr);
    }
  }

  return !largesOdd ? "" : largesOdd.toString();
};

// const res = largestOddNumber("52");
const res2 = largestOddNumber("239537672423884969653287101");
console.log(res2);

// not works

var largestOddNumberOpt = function (num) {
  let largestOdd = "";

  for (let j = 0; j < num.length; j++) {
    let subArr = num.slice(0, j + 1);

    if (parseInt(subArr) % 2 !== 0) {
      // Check if this odd number is larger than the current largest odd
      if (subArr > largestOdd) largestOdd = subArr;
    }
  }

  return largestOdd;
};

// Testing with the provided string
const res3 = largestOddNumberOpt("239537672423884969653287101");
console.log(res3); // Expected output: "239537672423884969653287101"

// works

var largestOddNumber3 = function (num) {
  for (let j = num.length - 1; j >= 0; j--) {
    if (parseInt(num[j]) % 2 !== 0) {
      // Return the substring from the start to this odd number's position
      return num.slice(0, j + 1);
    }
  }

  // Return an empty string if no odd number is found
  return "";
};

// Testing with the provided string
const res4 = largestOddNumber3("239537672423884969653287101");
console.log(res4); // Expected output: "239537672423884969653287101"
