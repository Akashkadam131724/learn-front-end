const arr = ["sagar", "akash", "sagar", "akash"];

// Define priority
const priority = {
  akash: 0,
  sagar: 1,
};

arr.sort((a, b) => (priority[a] ?? Infinity) - (priority[b] ?? Infinity));

console.log(arr);
