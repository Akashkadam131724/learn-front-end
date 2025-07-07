// 1. Get even numbers
const nums = [1, 2, 3, 4];
const evens = nums.filter((n) => n % 2 === 0); // [2, 4]

// 2. Filter active users
const users = [
  { name: "John", active: true },
  { name: "Doe", active: false },
];
const activeUsers = users.filter((u) => u.active); // [{ name: "John", active: true }]
