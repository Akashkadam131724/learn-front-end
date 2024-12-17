// Array of objects representing people
const individuals = [
  { name: "Alice", age: 30, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 35, occupation: "Teacher" },
  { name: "Diana", age: 28, occupation: "Engineer" },
];

// Problem 1: Filter out people who are Engineers
function getEngineers(personArray) {
  return personArray.filter((person) => person.occupation === "Engineer");
}
console.log("Engineers:", getEngineers(individuals));

// Problem 2: Find the person with the highest age
function findOldest(personArray) {
  return personArray.reduce((oldest, current) =>
    current.age > oldest.age ? current : oldest
  );
}
console.log("Oldest person:", findOldest(individuals));

// Problem 3: Count the number of people in each occupation
function countOccupations(personArray) {
  return personArray.reduce((counts, person) => {
    counts[person.occupation] = (counts[person.occupation] || 0) + 1;
    return counts;
  }, {});
}
console.log("Occupation counts:", countOccupations(individuals));

// Problem 4: Update the age of a person by name
function updateAgeByName(personArray, personName, newAge) {
  return personArray.map((person) => {
    if (person.name === personName) {
      return { ...person, age: newAge };
    }
    return person;
  });
}
console.log("Updated ages:", updateAgeByName(individuals, "Alice", 31));

// Problem 5: Remove a person from the array by name
function removePersonByName(personArray, personName) {
  return personArray.filter((person) => person.name !== personName);
}
console.log("People after removal:", removePersonByName(individuals, "Bob"));

// Problem 6: Get names of all people older than a certain age
function getNamesOlderThan(personArray, ageLimit) {
  return personArray
    .filter((person) => person.age > ageLimit)
    .map((person) => person.name);
}
console.log(
  "Names of people older than 30:",
  getNamesOlderThan(individuals, 30)
);

// Problem 7: Sort people by age in ascending order
function sortByAge(personArray) {
  return [...personArray].sort((a, b) => a.age - b.age);
}
console.log("People sorted by age:", sortByAge(individuals));

// Problem 8: Find the average age of all people
function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  return totalAge / personArray.length;
}
console.log("Average age:", calculateAverageAge(individuals));

// Problem 9: Find the person(s) with a given occupation
function findPersonsByOccupation(personArray, occupationTitle) {
  return personArray.filter((person) => person.occupation === occupationTitle);
}
console.log(
  "People with occupation Engineer:",
  findPersonsByOccupation(individuals, "Engineer")
);

// Problem 10: Group people by their occupation
function groupByOccupation(personArray) {
  return personArray.reduce((groups, person) => {
    (groups[person.occupation] = groups[person.occupation] || []).push(person);
    return groups;
  }, {});
}
console.log("People grouped by occupation:", groupByOccupation(individuals));

//

// Sample data: array of objects
const data = [
  { id: 1, name: "Alice", age: 30, salary: 50000 },
  { id: 2, name: "Bob", age: 25, salary: 45000 },
  { id: 3, name: "Charlie", age: 35, salary: 60000 },
  { id: 4, name: "Diana", age: 28, salary: 55000 },
  { id: 5, name: "Eve", age: 22, salary: 48000 },
];

// 1. Sort objects by a numeric property in ascending order
function sortByNumericProperty(array, property) {
  return [...array].sort((a, b) => a[property] - b[property]);
}
console.log("Sorted by age (ascending):", sortByNumericProperty(data, "age"));

// 2. Sort objects by a numeric property in descending order
function sortByNumericPropertyDesc(array, property) {
  return [...array].sort((a, b) => b[property] - a[property]);
}
console.log(
  "Sorted by salary (descending):",
  sortByNumericPropertyDesc(data, "salary")
);

// 3. Sort objects by a string property alphabetically
function sortByStringProperty(array, property) {
  return [...array].sort((a, b) => a[property].localeCompare(b[property]));
}
console.log(
  "Sorted by name (alphabetically):",
  sortByStringProperty(data, "name")
);

// 4. Find an object by a specific property value
function findByProperty(array, property, value) {
  return array.find((item) => item[property] === value);
}
console.log("Find by id 3:", findByProperty(data, "id", 3));

// 5. Check if an object with a specific property value exists
function existsByProperty(array, property, value) {
  return array.some((item) => item[property] === value);
}
console.log(
  "Exists with salary 55000:",
  existsByProperty(data, "salary", 55000)
);

// 6. Filter objects by a range of values for a numeric property
function filterByRange(array, property, min, max) {
  return array.filter((item) => item[property] >= min && item[property] <= max);
}
console.log(
  "Filter by age between 25 and 30:",
  filterByRange(data, "age", 25, 30)
);

// 7. Get all unique values of a specific property
function uniqueValues(array, property) {
  return [...new Set(array.map((item) => item[property]))];
}
console.log("Unique ages:", uniqueValues(data, "age"));

// 8. Find the highest value for a numeric property
function maxValue(array, property) {
  return Math.max(...array.map((item) => item[property]));
}
console.log("Highest salary:", maxValue(data, "salary"));

// 9. Find the lowest value for a numeric property
function minValue(array, property) {
  return Math.min(...array.map((item) => item[property]));
}
console.log("Lowest salary:", minValue(data, "salary"));

// 10. Find the index of an object by a specific property value
function findIndexByProperty(array, property, value) {
  return array.findIndex((item) => item[property] === value);
}
console.log(
  'Index of name "Diana":',
  findIndexByProperty(data, "name", "Diana")
);

// 11. Count the number of objects with a specific property value
function countByProperty(array, property, value) {
  return array.filter((item) => item[property] === value).length;
}
console.log("Count of age 30:", countByProperty(data, "age", 30));

// 12. Sort objects by a string property in reverse alphabetical order
function sortByStringPropertyDesc(array, property) {
  return [...array].sort((a, b) => b[property].localeCompare(a[property]));
}
console.log(
  "Sorted by name (reverse alphabetically):",
  sortByStringPropertyDesc(data, "name")
);

// 13. Search for objects that match a condition on multiple properties
function searchByMultipleProperties(array, conditions) {
  return array.filter((item) =>
    Object.keys(conditions).every((key) => item[key] === conditions[key])
  );
}
console.log(
  "Search for age 28 and salary 55000:",
  searchByMultipleProperties(data, { age: 28, salary: 55000 })
);

// 14. Sort objects by multiple properties
function sortByMultipleProperties(array, properties) {
  return [...array].sort((a, b) => {
    for (const property of properties) {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
    }
    return 0;
  });
}
console.log(
  "Sorted by age and then salary:",
  sortByMultipleProperties(data, ["age", "salary"])
);

// 15. Group objects by a specific property
function groupByProperty(array, property) {
  return array.reduce((groups, item) => {
    const key = item[property];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}
console.log("Grouped by age:", groupByProperty(data, "age"));
