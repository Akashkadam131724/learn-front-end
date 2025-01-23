function binarySearch(arr, target) {
  let lowIndx = 0;
  let highIndx = arr.length - 1;

  while (lowIndx <= highIndx) {
    // let midIndex = lowIndx + Math.floor((highIndx- lowIndx) / 2) ;
    let midIndex = Math.floor((lowIndx + highIndx) / 2);

    console.log(midIndex, target);
    if (arr[midIndex] === target) return true;

    if (arr[midIndex] < target) {
      lowIndx = midIndex + 1;
    } else {
      highIndx = midIndex - 1;
    }
  }

  return false;
}

console.log("1--- ", binarySearch(arr, 1));
console.log("50--- ", binarySearch(arr, 50));
console.log("12--- ", binarySearch(arr, 12));
console.log("100--- ", binarySearch(arr, 100));
