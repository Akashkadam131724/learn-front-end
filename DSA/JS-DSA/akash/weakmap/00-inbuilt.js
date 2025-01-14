// 1. Create a WeakMap
const weakMap = new WeakMap();

// 2. Set a key-value pair in a WeakMap (set())
const obj1 = {};
weakMap.set(obj1, "Value for obj1");
console.log("WeakMap after set:", weakMap);

// 3. Get the value by key (get())
console.log("Value for obj1:", weakMap.get(obj1)); // 'Value for obj1'

// 4. Check if a key exists (has())
console.log("Has obj1 as key?", weakMap.has(obj1)); // true

// 5. Delete a key-value pair (delete())
weakMap.delete(obj1);
console.log("WeakMap after delete:", weakMap);

// 6. Clearing all key-value pairs (clear()) – NOTE: WeakMap does not support clear method
// weakMap.clear();  // This will throw an error because WeakMap doesn't have a clear method.

// Use case example: Garbage collection behavior
// obj2 will be garbage-collected once the last reference to it is removed
let obj2 = {};
weakMap.set(obj2, "Value for obj2");
console.log("WeakMap before obj2 is dereferenced:", weakMap);

obj2 = null; // obj2 is dereferenced
console.log("WeakMap after obj2 dereference:", weakMap); // obj2 will be garbage-collected
