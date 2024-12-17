class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let firstNode = new Node(10);
let secondNode = new Node(20);
let thirdNode = new Node(30);
let fourthNode = new Node(40);

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;

function printLinkedList(head) {
  console.log("head");

  let currentNode = head;

  while (currentNode != null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}
printLinkedList(firstNode);
