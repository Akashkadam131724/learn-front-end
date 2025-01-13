class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// const arr = [2, 3, 46, 100, 5];
const linkedList = new LinkedList();
linkedList.add("This is my head");
linkedList.add("This is my second");

// arr.forEach((value) => linkedList.add(value));

console.log(linkedList.head);

// To print the linked list
// linkedList.printList();
