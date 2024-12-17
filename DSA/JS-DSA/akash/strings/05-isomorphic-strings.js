//https://leetcode.com/problems/isomorphic-strings/description/

/*
205. Isomorphic Strings
Easy
Topics
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
*/

// var isIsomorphic = function (s, t) {
//   let obj = {};
//   for (var i = 0; i < s.length; i++) {
//     if (!obj[s[i]]) {
//       obj[s[i]] = t[i];
//     }
//   }
//   console.log(obj);

//   for (var i = 0; i < t.length; i++) {
//     if (obj[s[i]] !== t[i]) return false;
//   }

//   return true;
// };

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false; // If lengths differ, they can't be isomorphic

  let mapST = {}; // Map for characters from s to t
  let mapTS = {}; // Map for characters from t to s

  for (var i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // Check if there's a mapping already and if it matches
    if (
      (mapST[charS] && mapST[charS] !== charT) ||
      (mapTS[charT] && mapTS[charT] !== charS)
    ) {
      return false;
    }

    // Create mappings
    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  return true;
};

const res = isIsomorphic("egg", "add");
console.log(res, "res");
const res2 = isIsomorphic("foo", "bar");
console.log(res2, "res2");
// const res3 = isIsomorphic("paper", "title");
// console.log(res3, "res3");
const res4 = isIsomorphic("badc", "baba");
console.log(res4, "res4");

var isIsomorphicMap = function (s, t) {
  if (s.length !== t.length) return false;

  let sToT = new Map();
  let tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // Check if there is already a mapping from s to t
    if (sToT.has(charS) && sToT.get(charS) !== charT) {
      return false;
    }

    // Check if there is already a mapping from t to s
    if (tToS.has(charT) && tToS.get(charT) !== charS) {
      return false;
    }

    // Create the mappings
    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }

  return true;
};
