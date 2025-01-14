// 1. Create a WeakSet
const weakSet = new WeakSet();

// 2. Add an object to a WeakSet (add())
const obj3 = {};
weakSet.add(obj3);
console.log("WeakSet after adding obj3:", weakSet);

// 3. Check if an object exists in the WeakSet (has())
console.log("Does WeakSet have obj3?", weakSet.has(obj3)); // true

// 4. Remove an object from the WeakSet (delete())
weakSet.delete(obj3);
console.log("WeakSet after deleting obj3:", weakSet);

// Use case example: Garbage collection behavior
// obj4 will be garbage-collected once the last reference to it is removed
let obj4 = {};
weakSet.add(obj4);
console.log("WeakSet before obj4 is dereferenced:", weakSet);

obj4 = null; // obj4 is dereferenced
console.log("WeakSet after obj4 dereference:", weakSet); // obj4 will be garbage-collected
