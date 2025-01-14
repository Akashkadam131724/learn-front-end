// JavaScript Object Methods Examples - Comprehensive List

// Initial object
let obj = {
  name: "John",
  age: 30,
  city: "New York",
};

// Object.keys()
let keys = Object.keys(obj);
console.log("Keys:", keys);

// Object.values()
let values = Object.values(obj);
console.log("Values:", values);

// Object.entries()
let entries = Object.entries(obj);
console.log("Entries:", entries);

// Object.assign()
let newObj = Object.assign({}, obj, { country: "USA" });
console.log("New Object with assign:", newObj);

// Object.create()
let proto = { greeting: "Hello" };
let createdObj = Object.create(proto);
createdObj.name = "Alice";
console.log("Created Object:", createdObj);
console.log("Prototype Greeting:", createdObj.greeting);

// Object.freeze()
let frozenObj = Object.freeze({ ...obj });
frozenObj.age = 35; // This won't change
console.log("Frozen Object:", frozenObj);

// Object.seal()
let sealedObj = Object.seal({ ...obj });
sealedObj.age = 35; // Can modify existing properties
console.log("Sealed Object:", sealedObj);

// Object.isFrozen()
console.log("Is Frozen:", Object.isFrozen(frozenObj));

// Object.isSealed()
console.log("Is Sealed:", Object.isSealed(sealedObj));

// Object.defineProperty()
let defPropObj = {};
Object.defineProperty(defPropObj, "name", {
  value: "John",
  writable: false,
});
console.log("Defined Property:", defPropObj);

// Object.defineProperties()
let defPropsObj = {};
Object.defineProperties(defPropsObj, {
  name: { value: "Jane", writable: true },
  age: { value: 25, writable: false },
});
console.log("Defined Properties:", defPropsObj);

// Object.getOwnPropertyDescriptor()
let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log("Property Descriptor:", descriptor);

// Object.getOwnPropertyDescriptors()
let descriptors = Object.getOwnPropertyDescriptors(obj);
console.log("All Property Descriptors:", descriptors);

// Object.getPrototypeOf()
let protoObj = Object.getPrototypeOf(createdObj);
console.log("Prototype Of:", protoObj);

// Object.setPrototypeOf()
Object.setPrototypeOf(createdObj, { farewell: "Goodbye" });
console.log("Updated Prototype:", createdObj.farewell);

// Object.is()
console.log("Object.is (Strict Equality):", Object.is(25, 25));

// Object.fromEntries()
let fromEntriesObj = Object.fromEntries(entries);
console.log("Object from Entries:", fromEntriesObj);

// Object.hasOwn()
console.log("Has Own Property 'name':", Object.hasOwn(obj, "name"));

// Object.preventExtensions()
let nonExtensibleObj = Object.preventExtensions({ ...obj });
nonExtensibleObj.newProp = "Test"; // Won't add new property
console.log("Non-Extensible Object:", nonExtensibleObj);

// Object.isExtensible()
console.log("Is Extensible:", Object.isExtensible(nonExtensibleObj));

// Object.toString()
console.log("Object toString:", obj.toString());

// JSON.stringify()
let jsonString = JSON.stringify(obj);
console.log("JSON Stringify:", jsonString);

// JSON.parse()
let parsedObj = JSON.parse(jsonString);
console.log("Parsed JSON:", parsedObj);

// Object.entries() with iteration
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

// Merge objects with spread operator
let mergedObj = { ...obj, profession: "Developer" };
console.log("Merged Object:", mergedObj);

// Check if property exists (in operator)
console.log("Name exists:", "name" in obj);

// Get all own property names
let allProps = Object.getOwnPropertyNames(obj);
console.log("All Property Names:", allProps);

// Check equality of two objects (shallow comparison)
let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
console.log(
  "Objects equal (shallow):",
  JSON.stringify(obj1) === JSON.stringify(obj2)
);
