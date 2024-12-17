// https://leetcode.com/problems/longest-palindromic-substring/description/
/*
 
5. Longest Palindromic Substring
 
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let start = 0,
    maxLength = 1;

  // Helper function to expand around the center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      console.log(
        `Expanding: left = ${left}, right = ${right}, characters: '${s[left]}' and '${s[right]}'`
      );
      left--;
      right++;
    }
    let length = right - left - 1;
    console.log(
      `Palindrome length from indices (${left + 1}, ${right - 1}): ${length}`
    );
    return length; // The length of the palindrome
  }

  for (let i = 0; i < s.length; i++) {
    console.log(`\nChecking center at index ${i}`);

    // Odd length palindromes (centered at one character)
    let len1 = expandAroundCenter(i, i);
    // Even length palindromes (centered between two characters)
    let len2 = expandAroundCenter(i, i + 1);

    let len = Math.max(len1, len2);
    console.log(`Max palindrome length at index ${i}: ${len}`);

    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
      console.log(
        `New max palindrome found: start = ${start}, maxLength = ${maxLength}, substring = '${s.substring(
          start,
          start + maxLength
        )}'`
      );
    }
  }

  return s.substring(start, start + maxLength);
};

// Test cases
let s = "cbbd";
let s2 = "babad";
console.log(`Longest Palindrome in "${s}" is: "${longestPalindrome(s)}"`);
console.log(`Longest Palindrome in "${s2}" is: "${longestPalindrome(s2)}"`);
