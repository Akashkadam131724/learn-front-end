//https://leetcode.com/problems/rotate-string/description/
/*
796. Rotate String
Easy
Topics
Companies
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 
*/

var rotateString = function (s, goal) {
  let rotations = [];
  for (let i = 0; i < s.length; i++) {
    // Rotate the sing by slicing from index i to end and then from start to index i
    let rotation = s.slice(i) + s.slice(0, i);
    rotations.push(rotation);
  }
  if (rotations.includes(goal)) return true;
  return false;
};

const res = rotateString("abcde", "cdeab"); // true
const re2 = rotateString("abcde", "abced"); // false

// return  s.length === goal.length && (s + s).includes(goal);
