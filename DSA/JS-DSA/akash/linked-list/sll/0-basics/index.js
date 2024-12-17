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

  // Method to delete the node at the start
  static deleteAtStart(head) {
    if (head === null) {
      return null; // List is empty
    }
    return head.next; // New head of the list
  }

  // Method to delete the node at the end
  static deleteAtEnd(head) {
    if (head === null) {
      return null; // List is empty
    }

    if (head.next === null) {
      return null; // List has only one node
    }

    let currentNode = head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null; // Remove the last node
    return head;
  }

  // Method to delete the node at a specific index
  static deleteAtIndex(head, index) {
    if (head === null) {
      throw new Error("List is empty");
    }

    if (index === 0) {
      return Node.deleteAtStart(head); // Special case for index 0
    }

    let currentNode = head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode === null || currentNode.next === null) {
      throw new Error("Index out of bounds");
    }

    currentNode.next = currentNode.next.next; // Remove the node at index
    return head;
  }

  // Method to update the node at the start
  static updateAtStart(head, newValue) {
    if (head === null) {
      throw new Error("List is empty");
    }
    head.value = newValue;
    return head;
  }

  // Method to update the node at the end
  static updateAtEnd(head, newValue) {
    if (head === null) {
      throw new Error("List is empty");
    }

    let currentNode = head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.value = newValue;
    return head;
  }

  // Method to update the node at a specific index
  static updateAtIndex(head, newValue, index) {
    if (head === null) {
      throw new Error("List is empty");
    }

    let currentNode = head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode === null) {
      throw new Error("Index out of bounds");
    }

    currentNode.value = newValue;
    return head;
  }

  // Method to search for a value in the list
  static search(head, value) {
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true; // Value found
      }
      currentNode = currentNode.next;
    }
    return false; // Value not found
  }

  // Method to find the middle node of the list
  static findMiddle(head) {
    if (head === null) {
      throw new Error("List is empty");
    }

    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    return slowPointer; // Middle node
  }

  // Method to reverse the list
  static reverse(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    return prev; // New head of the reversed list
  }

  // Method to check if the list is a palindrome
  static isPalindrome(head) {
    let values = [];
    let currentNode = head;

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    let left = 0;
    let right = values.length - 1;

    while (left < right) {
      if (values[left] !== values[right]) {
        return false; // Not a palindrome
      }
      left++;
      right--;
    }

    return true; // Is a palindrome
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

// Insert nodes
head = Node.insertAtStart(head, new Node(0));
head = Node.insertAtEnd(head, new Node(4));
head = Node.insertAtIndex(head, new Node(2.5), 2);

// Update nodes
head = Node.updateAtStart(head, 10); // Update the first node
head = Node.updateAtEnd(head, 20); // Update the last node
head = Node.updateAtIndex(head, 15, 2); // Update the node at index 2

// Delete nodes
head = Node.deleteAtStart(head); // Remove the first node
head = Node.deleteAtEnd(head); // Remove the last node
head = Node.deleteAtIndex(head, 1); // Remove the node at index 1

// Search for a value
console.log(Node.search(head, 15)); // Output: true or false

// Find the middle node
let middleNode = Node.findMiddle(head);
console.log(middleNode.value); // Output: value of the middle node

// Reverse the list
head = Node.reverse(head);

// Check if the list is a palindrome
console.log(Node.isPalindrome(head)); // Output: true or false

// Print the updated list
let currentNode = head;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
