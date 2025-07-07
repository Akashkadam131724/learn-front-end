// 1. Sum of numbers
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 10

// 2. Find max number
const max = nums.reduce((a, b) => (a > b ? a : b)); // 4

// 3. Count occurrences
const chars = ["a", "b", "a", "c", "b"];
const count = chars.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {}); // {a: 2, b: 2, c: 1}

// 4. Flatten array
const nested = [
  [1, 2],
  [3, 4],
];
const flat = nested.reduce((acc, val) => acc.concat(val), []); // [1, 2, 3, 4]

// 5. Group by property
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 25 },
];
const grouped = people.reduce((acc, person) => {
  (acc[person.age] = acc[person.age] || []).push(person.name);
  return acc;
}, {});
// {20: ["Alice", "Bob"], 25: ["Charlie"]}
