/*
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
console.clear();
// 1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  // length should be equal
  let res = "";
  for (let i = 0; i < word1.length; i++) {
    if (word2[i] && word1[i]) {
      res = res + word1[i] + word2[i];
    } else {
      break;
    }
  }

  let checkFirstWord = word1.length - word2.length;
  let checkSecondWord = word2.length - word1.length;

  if (checkFirstWord > 0) {
    res = res + word1.slice(-checkFirstWord);
  }
  if (checkSecondWord > 0) {
    res = res + word2.slice(-checkSecondWord);
  }

  return res;
};

// console.log(mergeAlternately("cf23", " "));

// ------------------------------------------------------------------------------------

// 345. Reverse Vowels of a String
// Input: s = "hello"
// Output: "holle"

let isVowel = function (char) {
  return "aeiouAEIOU".includes(char);
};

const reverseVowels = function (s) {
  let charArray = s.split("");

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (isVowel(charArray[start]) && isVowel(charArray[end])) {
      let temp = charArray[start];
      charArray[start] = charArray[end];
      charArray[end] = temp;
      start++;
      end--;
    } else if (isVowel(charArray[start])) {
      end--;
    } else if (isVowel(charArray[end])) {
      start++;
    } else {
      start++;
      end--;
    }
  }

  return charArray.join("");
};

let reverseVowelsStore = reverseVowels("hello");
// console.log(reverseVowelsStore);

var reverseVowelsOptimized = function (s) {
  const vowels = Array.from(s)
    .filter((char) => "aeiouAEIOU".includes(char))
    .reverse();

  const chars = s.split(""); // Convert string to an array of characters
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if ("aeiouAEIOU".includes(s[i])) {
      chars[i] = vowels[j];
      j++;
    }
  }

  return chars.join(""); // Convert array back to a string
};

let storeOpVow = reverseVowelsOptimized("hello");
// console.log(storeOpVow);
const revVowFn = function (str) {
  let reversedVowels = Array.from(str)
    .filter((vowel) => "aeiouAEIOU".includes(vowel))
    .reverse();

  let resArray = Array.from(str); // Convert the string to an array

  let indexToSwap = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      resArray[i] = reversedVowels[indexToSwap];
      indexToSwap++;
    }
  }

  let result = resArray.join(""); // Convert the array back to a string

  return result;
};

// console.log(revVowFn("hello"));

// -------------------------------------------------------------------------------------
