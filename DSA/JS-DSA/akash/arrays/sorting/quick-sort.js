let arr = [4, 2, 3, 8, 5, 0, 1, 2];
console.log("Original Array:", arr);

function findPartitionIndex(arr, low, high) {
  let pivot = arr[low]; // Use the first element as the pivot
  let i = low + 1;
  let j = high;

  while (i <= j) {
    while (arr[i] <= pivot && i <= j) {
      i++;
    }
    while (arr[j] > pivot && i <= j) {
      j--;
    }

    if (i < j) {
      // Swap arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Swap the pivot element with arr[j]
  arr[low] = arr[j];
  arr[j] = pivot;

  return j; // Return the index of the pivot
}

function quickSort(arr, low, high) {
  if (low < high) {
    // Find the partition index
    let partitionIndex = findPartitionIndex(arr, low, high);

    // Recursively sort elements before and after partition
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

quickSort(arr, 0, arr.length - 1);
console.log("Sorted Array:", arr);
