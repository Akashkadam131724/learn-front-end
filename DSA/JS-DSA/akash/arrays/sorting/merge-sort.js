let array1 = [1, 6, 8];
let array2 = [0, 1, 2];

function mergeSortedArrays(array1, array2) {
  let mergeArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergeArray.push(array1[i]);
      i++;
    } else {
      mergeArray.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    mergeArray.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    mergeArray.push(array2[j]);
    j++;
  }

  return mergeArray;
}

function mergeSort(array) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  // Recursively sort the left and right halves
  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  // Merge the sorted halves
  return mergeSortedArrays(sortedLeftArray, sortedRightArray);
}

// Example usage:
const array = [3, 5, 1, 6, 2, 4];
const sortedArray = mergeSort(array);
console.log("sortedArray", sortedArray); // Output: [1, 2, 3, 4, 5, 6]

function mergeSortAlgo(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSortAlgo(arr.slice(0, mid));
  const right = mergeSortAlgo(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concat remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const arrayForSort = [34, 7, 23, 32, 5, 62];
const sortedArrayAfterMerge = mergeSortAlgo(arrayForSort);
console.log(sortedArrayAfterMerge);

//////////////////////////------------------

function descSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = descSort(arr.slice(0, mid));
  const right = descSort(arr.slice(mid));

  return mergeDesc(left, right);
}

function mergeDesc(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concat remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const arrayDesc = [34, 7, 23, 32, 5, 62];
const sortedArrayDesc = descSort(arrayDesc);
console.log(sortedArrayDesc);
