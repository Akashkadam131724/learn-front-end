// JSON Object Example
const jsonObject = {
  name: "John",
  age: 30,
  city: "New York",
};

// 1. Convert JavaScript Object to JSON String (JSON.stringify)
const jsonString = JSON.stringify(jsonObject);
console.log("JSON String:", jsonString);

// 2. Convert JSON String to JavaScript Object (JSON.parse)
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// 3. Access JSON Object properties
console.log("Name:", jsonObject.name); // Accessing property using dot notation
console.log("Age:", jsonObject["age"]); // Accessing property using bracket notation

// 4. Add new property to JSON Object
jsonObject.country = "USA";
console.log("Updated Object:", jsonObject);

// 5. Check if a property exists in JSON Object (in operator)
console.log("Has 'age' property:", "age" in jsonObject); // true
console.log("Has 'gender' property:", "gender" in jsonObject); // false

// 6. Iterate over JSON Object properties (for...in loop)
console.log("Iterating over Object:");
for (let key in jsonObject) {
  if (jsonObject.hasOwnProperty(key)) {
    console.log(`${key}: ${jsonObject[key]}`);
  }
}

// 7. Remove a property from JSON Object (delete operator)
delete jsonObject.city;
console.log("Object after deleting 'city':", jsonObject);

// 8. Get keys of JSON Object (Object.keys)
const keys = Object.keys(jsonObject);
console.log("Object Keys:", keys);

// 9. Get values of JSON Object (Object.values)
const values = Object.values(jsonObject);
console.log("Object Values:", values);

// 10. Get entries (key-value pairs) of JSON Object (Object.entries)
const entries = Object.entries(jsonObject);
console.log("Object Entries:", entries);

// 11. Merge two JSON Objects (Object.assign)
const additionalInfo = { occupation: "Engineer", married: false };
const mergedObject = Object.assign({}, jsonObject, additionalInfo);
console.log("Merged Object:", mergedObject);

// 12. Deep clone a JSON Object (JSON.parse + JSON.stringify)
const deepCloneObject = JSON.parse(JSON.stringify(jsonObject));
console.log("Deep Clone Object:", deepCloneObject);

// 13. Check if JSON Object is empty (Object.keys length)
const isEmpty = Object.keys(jsonObject).length === 0;
console.log("Is Object Empty?", isEmpty);

// 14. Iterate over JSON Object with forEach (using Object.entries)
Object.entries(jsonObject).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// 15. Using Map with JSON Object (Example: Storing JSON values in a Map)
const jsonMap = new Map(Object.entries(jsonObject));
console.log("Map from JSON Object:", jsonMap);

// 16. Convert a JSON Array to a JSON Object
const jsonArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const jsonObjectFromArray = Object.fromEntries(
  jsonArray.map((item) => [item.id, item])
);
console.log("Object from JSON Array:", jsonObjectFromArray);
