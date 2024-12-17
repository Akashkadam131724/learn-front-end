class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Solution {
  // Function to construct linked list from given array.
  construct(arr) {
    if (arr.length === 0) return null; // Return null for empty array

    let head = new Node(arr[0]); // Create the head node
    let current = head;

    // Loop through the array and create nodes
    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next; // Move to the next node
    }

    return head; // Return the head of the linked list
  }
}

// Example usage
const arr = [2, 4, 6, 7, 5, 1, 0];
const solution = new Solution();
const linkedListHead = solution.construct(arr);

// Function to print the linked list (for testing)
const printLinkedList = (head) => {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.join("->"));
};

printLinkedList(linkedListHead); // Output: 2->4->6->7->5->1->0
