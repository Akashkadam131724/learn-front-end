// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/

/*
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

*/

var reverseWords = function (s) {
  let res = s.split(" ");
  console.log(res);

  return s
    .trim()
    .split(" ")
    .filter((item) => item !== "")
    .map((item) => item.trim())
    .reverse()
    .join(" ");
};

// const res = reverseWords("the sky is blue");
// console.log("res---", res);
// const res2 = reverseWords("a good   example");
// console.log("res2---", res2);

function reverseAllWords(s) {
  let res = "",
    word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = s[i] + word;
    } else if (word) {
      res += !res ? word : ` ${word}`;
      word = "";
    }
  }

  if (word) {
    res += !res ? word : ` ${word}`;
  }

  return res;
}

// const res3 = reverseAllWords("a good   example");
// console.log("res3---", res3);

function myReverseResult(s) {
  let left = 0;
  let right = s.length - 1;

  let temp = "";
  let ans = "";

  // Iterate through the string and keep on adding to form a word
  // If a space is encountered, add the current word to the result
  while (left <= right) {
    let ch = s[left];
    if (ch !== " ") {
      temp += ch;
    } else if (ch === " ") {
      if (ans !== "") {
        ans = temp + " " + ans;
      } else {
        ans = temp;
      }
      temp = "";
    }
    left++;
  }

  // If the temp string is not empty, add the last word to the result
  if (temp !== "") {
    if (ans !== "") {
      ans = temp + " " + ans;
    } else {
      ans = temp;
    }
  }

  return ans;
}

const res4 = myReverseResult("a good   example");
console.log("res4---", res4);
