// insert at start
// remove at start
// insert at end
// remove at end
// size
// print
// insert at any index from start
// remove at any index from start

// palindrome linked  list
// reverse linked list
// insert at any index from end
// remove nth node from end linked list
// adding two numbers

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendStart(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeTop() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current);

      current = current.next;
    }
  }

  printData() {
    let current = this.head;
    let index = 0;
    while (current) {
      console.log(index, ": ", current.data);

      current = current.next;
      index = index + 1;
    }
  }

  appendLast(data) {
    let newNode = new Node(data);

    if (!this.head) {
      return newNode;
    }
    let currentHead = this.head;
    while (currentHead.next) {
      currentHead = currentHead.next;
    }
    currentHead.next = newNode;
  }

  removeLast() {
    if (!this.head) return;
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  appendAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
      // console.log(current);
    }
    newNode.next = current.next;
    // we update new node next at correct position and the correct next part
    current.next = newNode; // this line is updating the next to new node
    // return current;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
}

const ll = new LinkedList();
ll.appendStart("start4");
ll.appendStart("start3");
ll.appendStart("start2");
ll.appendStart("start");
ll.appendLast("last2");
// ll.print();
// console.log("currentSize", ll.size());
// ll.removeLast();
// ll.printData();
// console.log();
// ll.appendAt(0, "in serted by me");
// ll.addAt(2, "in serted");
ll.printData();

ll.removeAt(4);
console.log("--------------------------------");
ll.printData();
