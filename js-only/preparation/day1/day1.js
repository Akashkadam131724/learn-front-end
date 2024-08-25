// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// QUESTIONS
// 1. what are all data types inn js?
// Premitive and non premitive data types
// what is Type coercion ?

// async vs deffer
//https://dev.to/fidalmathew/async-vs-defer-in-javascript-which-is-better-26gm

// let targetTitle = document.getElementById("change-title");
// console.log(targetTitle);
// setTimeout(() => {
//   targetTitle.innerHTML =
//     "I have successfully manipulated text after four seconds";
// }, 4000);

// document.addEventListener("DOMContentLoaded", () => {
//   let targetTitle = document.getElementById("change-title");

//   setTimeout(() => {
//     targetTitle.innerText =
//       "I have successfully manipulated text after four seconds";
//     targetTitle.style.color = "green";
//   }, 4000);
// });

// let selectBtn = document.querySelector("#move-button");

// selectBtn.addEventListener("click", () => {
//   let id = null;
//   let selectRedBox = document.querySelector(".box");
//   let pos = 0;
//   id = setInterval(move, 0);
//   function move() {
//     if (pos === 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       selectRedBox.style.top = pos + "px";
//       selectRedBox.style.left = pos + "px";
//     }
//   }
// });

// DOM
// events node and dom manipulation

// BOM
// window, screen location, history, navigator, popup, timers , cookies

// let timer = null;
// let startTimer = document.getElementById("startTimer");

// startTimer.addEventListener("click", () => {
//   console.log(startTimer);
//   timer = setTimeout(() => {
//     alert("It is pop up after 4 seconds");
//   }, 1000);
// });
// let stopTimer = document.getElementById("stopTimer");
// stopTimer.addEventListener("click", () => {
//   clearTimeout(timer);
// });
// //------------------------
// let Timer = setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("timer").innerHTML = d.toLocaleTimeString();
// }

// setTimeout(() => {
//   clearInterval(Timer);
// }, 5000);

// Reduce method js
// sum of all elements in array
// const elements = [10, 20, 30, 40, 50, 60];
// const sum = elements.reduce((acc, curr, indx, array) => {
//   console.log(acc, "accumulator", curr, indx, array);
//   return acc + curr;
// }, 0);
// console.log(sum, "sum");
// product of elements in array
// const product = [1, 2, 3, 4, 5].reduce((acc, curr) => {
//   return acc * curr;
// }, 1);
// console.log(product, "product");
// maximum in array
// let max = [10, 1, 2, 3, 4, 5].reduce((acc, curr) => {
//   console.log(acc, "acc");
//   return acc > curr ? acc : curr;
// }, -Infinity);
// console.log(max, "max");
// minimum in array
// let min = [10, 1, 2, 3, 4, 5].reduce((acc, curr) => {
//   console.log(acc, "acc");
//   return acc < curr ? acc : curr;
// }, Infinity);
// console.log(min, "min");
// const flattened = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ].reduce((acc, curr) => acc.concat(curr), []);
// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// const countOccurrences = ["a", "b", "a", "c", "a", "b"].reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   console.log(acc, "acc");
//   return acc;
// }, {});
// console.log(countOccurrences); // Output: { a: 3, b: 2, c: 1 }
// const people = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 21 },
// ];

// const groupedByAge = people.reduce((acc, curr) => {
//   if (!acc[curr.age]) {
//     acc[curr.age] = [];
//   }
//   acc[curr.age].push(curr);
//   return acc;
// }, {});

// console.log(groupedByAge);
// Output: { 21: [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }], 25: [{ name: 'Bob', age: 25 }] }
// const unique = [1, 2, 3, 4, 5, 5, 3, 2, 1].reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(unique); // Output: [1, 2, 3, 4, 5]
// const firstNonRepeatedChar = str => {
//   const charCount = str.split('').reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});

//   return str.split('').find(char => charCount[char] === 1);
// };

// console.log(firstNonRepeatedChar('swiss')); // Output: 'w'
// const objArray = [
//   { key: 'a', value: 1 },
//   { key: 'b', value: 2 },
//   { key: 'c', value: 3 }
// ];

// const obj = objArray.reduce((acc, curr) => {
//   acc[curr.key] = curr.value;
//   return acc;
// }, {});

// console.log(obj); // Output: { a: 1, b: 2, c: 3 }

// const words = ['apple', 'banana', 'strawberry', 'kiwi', 'pineapple'];
// const longestWord = words.reduce((acc, curr) => acc.length > curr.length ? acc : curr, '');
// console.log(longestWord); // Output: 'strawberry'

// const numbers = [10, 20, 30, 40, 50];
// const average = numbers.reduce((acc, curr, index, array) => {
//   acc += curr;
//   return index === array.length - 1 ? acc / array.length : acc;
// }, 0);
// console.log(average); // Output: 30

// const array = [1, 2, 3, 4, 5];
// const customMap = (arr, callback) => arr.reduce((acc, curr) => {
//   acc.push(callback(curr));
//   return acc;
// }, []);
// const doubled = customMap(array, x => x * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// const strings = ["bella", "label", "roller"];
// const commonCharacters = strings.reduce((acc, curr) => {
//   return acc.split('').filter(char => curr.includes(char)).join('');
// });
// console.log(commonCharacters); // Output: "ell"

// const nestedArray = [1, [2, [3, [4, 5]]]];
// const maxDepth = arr => arr.reduce((acc, curr) => {
//   if (Array.isArray(curr)) {
//     return Math.max(acc, 1 + maxDepth(curr));
//   }
//   return acc;
// }, 1);
// const depth = maxDepth(nestedArray);
// console.log(depth); // Output: 4

// const range = (start, end) =>
//   Array.from({ length: end - start + 1 }, (_, i) => start + i);
// const rangeArray = range(5, 10);
// console.log(rangeArray); // Output: [5, 6, 7, 8, 9, 10]

// second largest element
const arr = [10, 5, 8, 12, 7];
const secondLargest = arr.reduce(
  (acc, curr) => {
    if (curr > acc.largest) {
      acc.secondLargest = acc.largest;
      acc.largest = curr;
    } else if (curr > acc.secondLargest && curr !== acc.largest) {
      acc.secondLargest = curr;
    }
    return acc;
  },
  { largest: -Infinity, secondLargest: -Infinity }
).secondLargest;
console.log(secondLargest); // Output: 10
