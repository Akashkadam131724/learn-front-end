// Class representing a single node of a doubly linked list
class Node {
  constructor(value) {
    this.value = value; // Node's data
    this.prev = null; // Pointer to the previous node
    this.next = null; // Pointer to the next node
  }
}

// Class for the doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null; // First node in the list
    this.tail = null; // Last node in the list
  }

  // Method to add nodes from an array
  fromArray(arr) {
    arr.forEach((value) => {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode; // Set first node as head
        this.tail = newNode; // Set first node as tail
      } else {
        this.tail.next = newNode; // Link current tail to the new node
        newNode.prev = this.tail; // Link new node back to the current tail
        this.tail = newNode; // Update the tail to be the new node
      }
    });
  }

  // Method to display the list (optional for visualization)
  display() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }
}

// Example usage
const arr = [2, 3, 46, 100, 5];
const list = new DoublyLinkedList();
list.fromArray(arr);
list.display(); // Output: 2 <-> 3 <-> 46 <-> 100 <-> 5
