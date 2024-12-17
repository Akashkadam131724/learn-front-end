// function printAllSubarrays(arr) {
//   const n = arr.length;

//   for (let start = 0; start < n; start++) {
//     for (let end = start; end < n; end++) {
//       let subarray = [];
//       for (let j = start; j <= end; j++) {
//         subarray.push(arr[j]);
//       }
//       console.log(subarray);
//     }
//   }
// }

// // Test the function
// let arr = [3, 6, 7, 8, 8, 2, 7, 34, 23];
// printAllSubarrays(arr);

//-------------------------------------------------------------------

// function printAllSubstrings(str) {
//   const n = str.length;

//   for (let start = 0; start < n; start++) {
//     for (let end = start; end < n; end++) {
//       let substring = "";
//       for (let j = start; j <= end; j++) {
//         substring += str[j];
//       }
//       console.log(substring);
//     }
//   }
// }

// // Test the function
// let str = [2, 3, 4, 6, 7, 87, 12];
// printAllSubstrings(str);

// ----------------------------------

function maxSubarraySum(arr, n) {
  // Handle edge cases where arr is empty or n is 0
  if (arr.length === 0) return 0;

  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;

  // let start = 0;
  // let ansStart = -1;
  // let ansEnd = -1;

  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) start = i;
    sum += arr[i];
    if (sum > max) {
      max = sum;
      // ansStart = start;
      // ansEnd = i;
    }
    if (sum < 0) sum = 0;
  }
  // console.log(arr.slice(ansStart, ansEnd + 1));
  // for (let i = ansStart; i <= ansEnd; i++) {
  //   console.log(arr[i] + " ");
  // }

  return max;
}

// const maxSumSubarray = maxSubarraySum([2, 3, 4, 6, 7, -87, 12]);

// console.log(maxSumSubarray);

//----------------------------------------------------------------

// function maxProfit(prices) {
//   if (prices.length === 0) return 0;

//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//     minPrice = Math.min(minPrice, prices[i]);
//   }

//   return maxProfit;
// }

//--------------

var rearrangeArray = function (nums) {
  let n = nums.length;
  let postArr = [];
  let negArr = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) postArr.push(nums[i]);
    else negArr.push(nums[i]);
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    nums[2 * i] = postArr[i];
    nums[2 * i + 1] = negArr[i];
  }
  return nums;
};

function reArrangeArrayn(arr) {
  let posIndex = 0; // To place the next positive number
  let negIndex = 1; // To place the next negative number

  while (posIndex < arr.length && negIndex < arr.length) {
    // Find the next positive number at an odd index
    while (posIndex < arr.length && arr[posIndex] >= 0) {
      posIndex += 2;
    }

    // Find the next negative number at an even index
    while (negIndex < arr.length && arr[negIndex] < 0) {
      negIndex += 2;
    }

    // If both indices are within bounds, swap the elements
    if (posIndex < arr.length && negIndex < arr.length) {
      [arr[posIndex], arr[negIndex]] = [arr[negIndex], arr[posIndex]];
    }
  }

  return arr;
}

// Example usage
// const result = reArrangeArrayn([3, 1, -2, -5, 2, -4]);
// console.log(result); // [3, -2, 1, -5, 2, -4]

function RearrangebySign(A) {
  let pos = [];
  let neg = [];

  // Segregate the array into positives and negatives.
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      pos.push(A[i]);
    } else {
      neg.push(A[i]);
    }
  }

  // Determine the smaller length to interleave elements.
  let minLength = Math.min(pos.length, neg.length);
  let index = 0;

  // Fill array alternatively up to the smaller length.
  for (let i = 0; i < minLength; i++) {
    A[index++] = pos[i];
    A[index++] = neg[i];
  }
  // console.log("Array", A);

  // Append remaining elements from the longer array.
  if (pos.length > neg.length) {
    for (let i = minLength; i < pos.length; i++) {
      A[index++] = pos[i];
    }
  } else {
    for (let i = minLength; i < neg.length; i++) {
      A[index++] = neg[i];
    }
  }

  return A;
}

// Array Initialization.
// let A = [1, 2, -4, -5, -3, -5, 0];
// let ans = RearrangebySign(A);

// Output the rearranged array.
// console.log(ans);

// ------------------------------Binary search ------------------------------

// 7
// 1 3 7 9 11 12 45
// 3
// Sample Output 1:
// 1
let arr = [1, 3, 7, 9, 11, 12, 45];
let target = 7;
function findIndexBinarySearch(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    console.log("i", i, "j", j);
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] == target) return mid;

    if (arr[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return -1;
}
const res = findIndexBinarySearch(arr, target);
