function chunk(arr, chunkSize) {
  let res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    let chunk = [];
    for (let j = i; j < i + chunkSize && j < arr.length; j++) {
      chunk.push(arr[j]);
    }
    res.push(chunk);
  }

  return res;
}

function chunk2(arr, chunkSize) {
  let res = [];
  let start = 0;
  while (start < arr.length) {
    let end = start + chunkSize;
    res.push(arr.slice(start, end));
    start = end;
  }

  return res;
}

console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
