//------------------Basics-------------------------
// Step 1: Define a Node class
class Node {
  constructor(value) {
    this.value = value; // The data the node holds
    this.next = null; // The reference to the next node (initially null)
  }
}

// Step 2: Create the first node
let firstNode = new Node(10); // First node with value 10

// Step 3: Create the second node
let secondNode = new Node(20); // Second node with value 20

// Step 4: Point the first node's next to the second node
firstNode.next = secondNode;

// Step 5: Print the nodes
console.log("First Node Value:", firstNode.value); // Output: 10
console.log("First Node's Next Value:", firstNode.next.value); // Output: 20 (points to secondNode)
console.log("Second Node Value:", secondNode.value); // Output: 20
console.log("Second Node's Next:", secondNode.next); // Output: null (no next node)

//------------------------------------------------
console.log(
  "<--------------- First LL possible values ---------------------------->"
);

let node1 = new Node(42); // Storing a number
let node2 = new Node("Hello World!"); // Storing a string
let node3 = new Node(true); // Storing a boolean
let node4 = new Node([1, 2, 3]); // Storing an array
let node5 = new Node({ name: "Alice" }); // Storing an object
let node6 = new Node(() => console.log("Hi!")); // Storing a function

console.log(node1.value); // 42
console.log(node2.value); // "Hello World!"
console.log(node3.value); // true
console.log(node4.value); // [1, 2, 3]
console.log(node5.value); // { name: "Alice" }
node6.value(); // Prints "Hi!"

// <--------------- Second LL ---------------------------->
console.log("<--------------- Second LL ---------------------------->");

// Step 1: Define a new class name with different property names
class ListItem {
  constructor(data, extraInfo) {
    this.data = data; // The data the node holds
    this.nextNode = null; // The reference to the next node
    this.extraInfo = extraInfo; // Additional information
  }
}

// Step 2: Create instances of the new class with new variable names
let firstItem = new ListItem(10, "Info A"); // Data is 10, extraInfo is "Info A"
let secondItem = new ListItem(20, { id: 456 }); // Data is 20, extraInfo is an object
let thirdItem = new ListItem(30, [4, 5, 6]); // Data is 30, extraInfo is an array

// Step 3: Print the data and extraInfo of each item
console.log(firstItem.data); // Output: 10
console.log(firstItem.extraInfo); // Output: "Info A"

console.log(secondItem.data); // Output: 20
console.log(secondItem.extraInfo); // Output: { id: 456 }

console.log(thirdItem.data); // Output: 30
console.log(thirdItem.extraInfo); // Output: [4, 5, 6]

// <--------------- LL By function ---------------------------->

console.log(
  "<--------------- Third LL By Function ---------------------------->"
);

function nodeByFunc(value) {
  this.value = value;
  this.next = null;
}
let head = new nodeByFunc(5);
let nextNode1 = new nodeByFunc(10);
let tail = new nodeByFunc("tail");

nextNode1.next = tail;
head.next = nextNode1;

console.log(head, "Head");

console.log(head.value);
console.log(head.next.value);
console.log(nextNode1);
