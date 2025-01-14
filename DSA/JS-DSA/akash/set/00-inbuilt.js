// 1. Create a Set
const mySet = new Set([1, 2, 3, 4, 5]);
console.log("Initial Set:", mySet);

// 2. Add an element to a Set (add())
mySet.add(6);
console.log("Set after adding 6:", mySet);

// 3. Check if a value exists in a Set (has())
console.log("Does the Set have the value 3?", mySet.has(3)); // true
console.log("Does the Set have the value 10?", mySet.has(10)); // false

// 4. Remove an element from a Set (delete())
mySet.delete(4);
console.log("Set after deleting 4:", mySet);

// 5. Get the size of the Set (size)
console.log("Size of Set:", mySet.size); // 5

// 6. Clear all elements from a Set (clear())
mySet.clear();
console.log("Set after clear:", mySet); // Set {}

// Re-initialize Set for further examples
const anotherSet = new Set([10, 20, 30, 40, 50]);

// 7. Iterate over the elements of a Set (forEach())
console.log("Iterating over Set elements:");
anotherSet.forEach((value) => {
  console.log(value); // 10, 20, 30, 40, 50
});

// 8. Convert a Set to an Array (spread operator or Array.from())
const setToArray = [...anotherSet];
console.log("Set converted to Array:", setToArray); // [10, 20, 30, 40, 50]

const setToArray2 = Array.from(anotherSet);
console.log("Set converted to Array using Array.from:", setToArray2); // [10, 20, 30, 40, 50]

// 9. Convert an Array to a Set (Set constructor)
const array = [1, 2, 2, 3, 3, 3];
const arrayToSet = new Set(array);
console.log("Array converted to Set:", arrayToSet); // Set {1, 2, 3}

// 10. Merge two Sets (using Set constructor and spread operator)
const set1 = new Set([1, 2, 3]);
const set2 = new Set([4, 5, 6]);
const mergedSet = new Set([...set1, ...set2]);
console.log("Merged Set:", mergedSet); // Set {1, 2, 3, 4, 5, 6}

// 11. Get the first value of a Set (using Iterator)
const setIterator = anotherSet.values();
console.log("First value in Set:", setIterator.next().value); // 10

// 12. Check if Set is empty (size property)
const isSetEmpty = anotherSet.size === 0;
console.log("Is Set empty?", isSetEmpty); // false

// 13. Set intersection (finding common elements between two Sets)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log("Intersection of Sets A and B:", intersection); // Set {3, 4}

// 14. Set difference (elements in Set A but not in Set B)
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log("Difference of Sets A and B:", difference); // Set {1, 2}

// 15. Set union (all unique elements from both Sets)
const union = new Set([...setA, ...setB]);
console.log("Union of Sets A and B:", union); // Set {1, 2, 3, 4, 5, 6}

// 16. Convert Set to a Map (Set values as Map keys)
const setToMap = new Map([...anotherSet].map((value) => [value, value * 2]));
console.log("Set converted to Map:", setToMap); // Map {10 => 20, 20 => 40, 30 => 60, 40 => 80, 50 => 100}
