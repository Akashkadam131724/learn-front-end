class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  // Method to insert a new node at the start
  static insertAtStart(head, newNode) {
    newNode.next = head;
    return newNode; // New head of the list
  }

  // Method to insert a new node at the end
  static insertAtEnd(head, newNode) {
    if (head === null) {
      return newNode; // If the list is empty, the new node is the head
    }

    let currentNode = head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return head;
  }

  // Method to insert a new node at a specific index
  static insertAtIndex(head, newNode, index) {
    if (index === 0) {
      return Node.insertAtStart(head, newNode); // Special case for index 0
    }

    let currentNode = head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode === null) {
      throw new Error("Index out of bounds");
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;
  }
}

// Example usage:

// Create nodes
let head = new Node(1);
let secondNode = new Node(2);
let thirdNode = new Node(3);

// Link nodes
head.next = secondNode;
secondNode.next = thirdNode;

// Insert node at the start
let newHead = Node.insertAtStart(head, new Node(0));

// Insert node at the end
newHead = Node.insertAtEnd(newHead, new Node(4));

// Insert node at index 2
newHead = Node.insertAtIndex(newHead, new Node(2.5), 2);

// Print the updated list
let currentNode = newHead;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
// Output: 0 1 2.5 2 3 4
