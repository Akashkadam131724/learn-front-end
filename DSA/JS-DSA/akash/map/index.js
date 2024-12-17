// JavaScript Map Example

// Creating a new Map
let myMap = new Map();

// Adding key-value pairs
myMap.set("firstName", "Alice");
myMap.set(42, "Answer to everything");
myMap.set(true, "Boolean value");

// Getting a value by key
let firstNameValue = myMap.get("firstName");
console.log("First Name:", firstNameValue); // Alice

// Checking if a key exists
let hasAgeKey = myMap.has(42);
console.log("Has key 42:", hasAgeKey); // true

// Deleting a key-value pair
myMap.delete(true);

// Clearing all entries
myMap.clear();

// Checking the size of the Map
let mapSize = myMap.size;
console.log("Map Size:", mapSize); // 0

// Adding entries again for iteration examples
myMap.set("name", "Bob");
myMap.set("age", 30);

// Iterating over keys
console.log("Map Keys:");
for (let key of myMap.keys()) {
  console.log(key);
}

// Iterating over values
console.log("Map Values:");
for (let value of myMap.values()) {
  console.log(value);
}

// Iterating over entries
console.log("Map Entries:");
for (let [key, value] of myMap.entries()) {
  console.log(key, value);
}

// Using forEach
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// JavaScript Object Example

// Creating a new Object
let myObject = {
  name: "Charlie",
  age: 25,
};

// Accessing a value by key
let nameValue = myObject["name"];
console.log("Name:", nameValue); // Charlie

// Setting a value for a key
myObject["country"] = "USA";

// Deleting a key-value pair
delete myObject["age"];

// Getting the number of properties
let objectKeysCount = Object.keys(myObject).length;
console.log("Object Property Count:", objectKeysCount); // 2

// Iterating over keys
console.log("Object Keys:");
for (let key of Object.keys(myObject)) {
  console.log(key);
}

// Iterating over values
console.log("Object Values:");
for (let value of Object.values(myObject)) {
  console.log(value);
}

// Iterating over entries
console.log("Object Entries:");
for (let [key, value] of Object.entries(myObject)) {
  console.log(key, value);
}

// Using Object.assign
let additionalData = { city: "New York" };
Object.assign(myObject, additionalData);
console.log("Object after assign:", myObject); // { name: 'Charlie', country: 'USA', city: 'New York' }

// Checking if an object has a property
let hasCityProperty = myObject.hasOwnProperty("city");
console.log("Has city property:", hasCityProperty); // true
