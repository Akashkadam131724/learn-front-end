// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
/* 

Code

Testcase
Test Result
Test Result
1614. Maximum Nesting Depth of the Parentheses
Easy
Topics
Companies
Hint
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

 
Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"

Output: 3

Explanation:

Digit 8 is inside of 3 nested parentheses in the string.

Example 2:

Input: s = "(1)+((2))+(((3)))"

Output: 3

Explanation:

Digit 3 is inside of 3 nested parentheses in the string.

Example 3:

Input: s = "()(())((()()))"

Output: 3
*/

var maxDepth = function (s) {
  let count = 0;
  let maxDepthCount = count;
  let sArr = s.split("");
  for (item of sArr) {
    if (item === "(") {
      count = count + 1;
      if (count > maxDepthCount) maxDepthCount = count;
    } else if (item === ")") {
      count = count - 1;
    }
  }
  return maxDepthCount;
};

const res = maxDepth("(1+(2*3)+((8)/4))+1");
const res2 = maxDepth("(1)+((2))+(((3)))");
const res3 = maxDepth("()(())((()()))");

console.log(res, res2, res3);
