// 1. Ascending numbers
const nums = [4, 2, 1, 3];
nums.sort((a, b) => a - b); // [1, 2, 3, 4]

// 2. Descending numbers
nums.sort((a, b) => b - a); // [4, 3, 2, 1]

// 3. Sort strings alphabetically
const names = ["John", "Alice", "Bob"];
names.sort(); // ["Alice", "Bob", "John"]

// 4. Sort objects by age
const people = [
  { name: "A", age: 30 },
  { name: "B", age: 20 },
];
people.sort((a, b) => a.age - b.age); // [{B,20}, {A,30}]

// 5. Sort dates (newest first)
const dates = [new Date(2023, 1), new Date(2024, 1)];
dates.sort((a, b) => b - a); // [2024, 2023]

// Absolutely! Understanding how .sort() works behind the scenes will give you powerful control over sorting any data. Let's break it down in a step-by-step, beginner-friendly way.

// 🔧 The Basics of .sort()
// In JavaScript, the Array.prototype.sort() method sorts the elements of an array in place and returns the sorted array.

// By default:
// js
// Copy code
// [3, 1, 2].sort(); // ["1", "2", "3"]
// It converts elements to strings and sorts them lexicographically (dictionary order), not numerically!

// To sort numerically:
// js
// Copy code
// [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
// ⚙️ How sort(compareFn) works internally
// You pass a function (a, b) to sort(). JavaScript will:

// Pick two items from the array, a and b

// Call your compareFn(a, b)

// Use the return value of your function to decide the order.

// 🔁 Repeat this many times for different pairs of items, until the whole array is sorted.
// The sorting algorithm is not guaranteed to be stable or use a specific strategy (like bubble sort, quicksort, etc.). It depends on the browser — for example:

// Chrome uses Timsort

// Others might use a variation of quicksort or mergesort

// But you don’t need to worry about the algorithm — just focus on your comparison logic.

// 📐 Return values and their meanings:
// compareFn(a, b) returns	Meaning	Result
// < 0 (negative number)	Sort a before b	✅ a → b
// 0	Keep a and b in the same order	➡️ a b stays
// > 0 (positive number)	Sort b before a	🔁 b → a

// 🧠 Visual Example:
// js
// Copy code
// const arr = [10, 5, 8];
// arr.sort((a, b) => {
//   console.log(a, b);
//   return a - b;
// });
// What happens internally:
// Step	Pair	a - b	Result
// 1	5 vs 10	-5	✅ 5 before 10
// 2	8 vs 5	3	🔁 5 before 8
// 3	8 vs 10	-2	✅ 8 before 10

// Final sorted array: [5, 8, 10]

// 💡 Custom Example (like your image.type):
// Let's say we want images of type image/jpeg to come first.

// js
// Copy code
// images.sort((a, b) => {
//   if (a.type === 'image/jpeg' && b.type !== 'image/jpeg') return -1; // a first
//   if (a.type !== 'image/jpeg' && b.type === 'image/jpeg') return 1;  // b first
//   return 0; // keep order
// });
// 🧪 Pro Tip: Logging Each Comparison
// You can trace how sorting works by logging:

// js
// Copy code
// arr.sort((a, b) => {
//   console.log("Comparing", a, "and", b);
//   return a - b;
// });
// 🧵 Summary:
// sort() compares items using your function.

// You return:

// < 0 → keep a before b

// > 0 → put b before a

// 0 → don’t change their order

// The actual algorithm (Timsort, etc.) is handled by the browser.
