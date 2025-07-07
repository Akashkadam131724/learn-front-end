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
