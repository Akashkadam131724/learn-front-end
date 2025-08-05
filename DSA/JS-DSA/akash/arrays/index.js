const arr = ["sagar", "akash", "sagar", "akash"];
//https://javascript.info/array-methods
// Define priority
const priority = {
  akash: 0,
  sagar: 1,
};

arr.sort((a, b) => (priority[a] ?? Infinity) - (priority[b] ?? Infinity));
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});
console.log(arr);
