// problem 1 Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/description/

/* 
Example 1:
Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
*/

function removeParentheses(inputStr) {
  let res = "";
  let inputStrArr = inputStr.split("");

  // console.log(inputStrArr, "inputStrArr");

  let count = 0;

  for (item of inputStrArr) {
    // console.log("running loop: " + item);
    if (item === "(") {
      // console.log(count, "count");

      if (count > 0) {
        res = res + item; // we are pushing the element which are valid
      }
      count++;
    } else {
      count--;
      if (count > 0) {
        res = res + item; // we are pushing the element which are valid
      }
    }
  }
  return res;
}

const res = removeParentheses("(())");
// console.log(res);

// const res1 = removeParentheses("(())()");
const res2 = removeParentheses("((()))");

console.log(res2);
const res3 = removeParentheses("(()())(())");
// console.log(res3);

var removeOuterParentheses = function (str) {
  let op = "";
  let count = -1;
  for (let s of str) {
    if (s == "(") count++;
    if (count) op += s;
    if (s == ")") count--;
  }
  return op;
};
