// Create an object using object literal notation
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello!");
  },
};

// Access properties using dot notation
console.log("Name:", person.name); // 'Alice'
console.log("Age:", person.age); // 30

// Access properties using bracket notation
console.log("Name:", person["name"]); // 'Alice'
console.log("Age:", person["age"]); // 30

// Adding new properties and methods
person.job = "Engineer";
person.sayJob = function () {
  console.log("I am an " + this.job);
};

// Call the newly added method
console.log("Job:", person.job); // 'Engineer'
person.sayJob(); // 'I am an Engineer'

// Deleting a property
delete person.age;
console.log("Age after deletion:", person.age); // undefined

// Iterating over properties
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}

// Using Object.keys(), Object.values(), and Object.entries()
console.log("Keys:", Object.keys(person)); // ['name', 'greet', 'job', 'sayJob']
console.log("Values:", Object.values(person)); // ['Alice', 'Hello!', 'Engineer', function]
console.log("Entries:", Object.entries(person));
// [['name', 'Alice'], ['greet', function], ['job', 'Engineer'], ['sayJob', function]]

// Prototype and inheritance example
const animal = {
  speak() {
    console.log("Animal speaks");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

// Call methods from prototype and own properties
dog.speak(); // 'Animal speaks'
dog.bark(); // 'Woof!'

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
