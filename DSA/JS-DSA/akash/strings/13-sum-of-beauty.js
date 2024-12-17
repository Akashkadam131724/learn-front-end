//https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/
/* 
 1781. Sum of Beauty of All Substrings
Solved
Medium
Topics
Companies
Hint
The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

For example, the beauty of "abaacc" is 3 - 1 = 2.
Given a string s, return the sum of beauty of all of its substrings.

 

Example 1:

Input: s = "aabcb"
Output: 5
Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
Example 2:

Input: s = "aabcbaa"
Output: 17
 
 */

var beautySum = function (s) {
  const n = s.length;
  let totalBeauty = 0;

  // Iterate over all possible starting points of substrings
  for (let start = 0; start < n; start++) {
    const freq = Array(26).fill(0); // Frequency of characters 'a' to 'z'
    let maxFreq = 0;
    let minFreq = Infinity;

    // Iterate over all possible ending points of substrings
    for (let end = start; end < n; end++) {
      const index = s[end].charCodeAt(0) - "a".charCodeAt(0);
      freq[index]++;

      // Update max frequency
      maxFreq = Math.max(maxFreq, freq[index]);

      // Update min frequency among non-zero frequencies
      minFreq = Infinity;
      for (let i = 0; i < 26; i++) {
        if (freq[i] > 0) {
          minFreq = Math.min(minFreq, freq[i]);
        }
      }

      // Calculate the beauty of the current substring
      const beauty = maxFreq - minFreq;
      totalBeauty += beauty;
    }
  }

  return totalBeauty;
};

// Example usage:
console.log(beautySum("aabcb")); // Output: 5
console.log(beautySum("aabcbaa")); // Output: 17
