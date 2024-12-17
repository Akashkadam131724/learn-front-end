// Basic Problems

// 1. Find the Minimum Value
function findMinValue(arr) {
  return Math.min(...arr);
}

// 2. Array Length
function getArrayLength(arr) {
  return arr.length;
}

// 3. Find the Index of an Element
function findIndexOfElement(arr, value) {
  return arr.indexOf(value);
}

// 4. Check for Empty Array
function isArrayEmpty(arr) {
  return arr.length === 0;
}

// 5. Find the First Element
function findFirstElement(arr) {
  return arr[0];
}

// 6. Find the Last Element
function findLastElement(arr) {
  return arr[arr.length - 1];
}

// 7. Get Array Slice
function getArraySlice(arr, start, end) {
  return arr.slice(start, end);
}

// 8. Check if Element Exists
function elementExists(arr, value) {
  return arr.includes(value);
}

// 9. Add Element to Array
function addElementToArray(arr, element) {
  arr.push(element);
  return arr;
}

// 10. Remove Last Element
function removeLastElement(arr) {
  arr.pop();
  return arr;
}

// Easy Problems

// 1. Merge Arrays
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// 2. Find the Largest Odd Number
function findLargestOddNumber(arr) {
  const oddNumbers = arr.filter((num) => num % 2 !== 0);
  return Math.max(...oddNumbers);
}

// 3. Double Each Value
function doubleEachValue(arr) {
  return arr.map((num) => num * 2);
}

// 4. Count Positive Numbers
function countPositiveNumbers(arr) {
  return arr.filter((num) => num > 0).length;
}

// 5. Find Duplicate Values
function findDuplicateValues(arr) {
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach((num) => {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  });
  return Array.from(duplicates);
}

// 6. Sum of Even Numbers
function sumOfEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

// 7. Find Common Elements
function findCommonElements(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

// 8. Rotate Array Left
function rotateArrayLeft(arr, steps) {
  const len = arr.length;
  steps = steps % len; // Handle cases where steps > len
  return arr.slice(steps).concat(arr.slice(0, steps));
}

// 9. Array Intersection
function arrayIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

// 10. Sort Array in Ascending Order
function sortArrayAsc(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// Medium Problems

// 1. Find the Longest Subarray with Unique Elements
function longestUniqueSubarray(arr) {
  let maxLength = 0;
  let start = 0;
  const seen = new Map();

  for (let end = 0; end < arr.length; end++) {
    if (seen.has(arr[end])) {
      start = Math.max(seen.get(arr[end]) + 1, start);
    }
    seen.set(arr[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// 2. Find Missing Elements in Array
function findMissingElements(arr, n) {
  const allNumbers = new Set(Array.from({ length: n }, (_, i) => i + 1));
  arr.forEach((num) => allNumbers.delete(num));
  return Array.from(allNumbers);
}

// 3. Array Pair Sum
function findPairsWithSum(arr, target) {
  const pairs = [];
  const seen = new Set();
  arr.forEach((num) => {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  });
  return pairs;
}

// 4. Move Zeroes to End
function moveZeroesToEnd(arr) {
  const nonZeroes = arr.filter((num) => num !== 0);
  const zeroes = arr.length - nonZeroes.length;
  return nonZeroes.concat(Array(zeroes).fill(0));
}

// 5. Find the Kth Largest Element
function findKthLargest(arr, k) {
  return arr.sort((a, b) => b - a)[k - 1];
}

// 6. Product of All Elements Except Self
function productOfAllElementsExceptSelf(arr) {
  const result = [];
  const n = arr.length;
  let leftProduct = 1;

  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= arr[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
}

// 7. Longest Increasing Subsequence
function longestIncreasingSubsequence(arr) {
  const dp = Array(arr.length).fill(1);
  let maxLength = 1;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}

// 8. Find All Pairs with Given Sum
function findAllPairsWithSum(arr, target) {
  const pairs = [];
  const seen = new Set();

  arr.forEach((num) => {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  });

  return pairs;
}

// 9. Find the Median of an Array
function findMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  return sortedArr.length % 2 === 0
    ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
    : sortedArr[mid];
}

// 10. Rearrange Array Elements
function rearrangeArrayElements(arr) {
  const negatives = arr.filter((num) => num < 0);
  const positives = arr.filter((num) => num >= 0);
  return negatives.concat(positives);
}
