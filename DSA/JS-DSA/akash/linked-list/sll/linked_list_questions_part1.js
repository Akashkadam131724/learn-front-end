// 1. Reverse a Linked List
// Write a function to reverse a linked list.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// 2. Detect a Cycle in a Linked List
// Write a function to detect a cycle in a linked list.

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// 3. Find the Middle Node of a Linked List
// Write a function to find the middle node of a linked list.

function findMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 4. Merge Two Sorted Linked Lists
// Write a function to merge two sorted linked lists.

function mergeTwoLists(l1, l2) {
  let dummy = new Node(0);
  let current = dummy;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;
  return dummy.next;
}

// 5. Remove N-th Node from End of List
// Write a function to remove the N-th node from the end of the list.

function removeNthFromEnd(head, n) {
  let dummy = new Node(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}

// 6. Add Two Numbers Represented by Linked Lists
// Write a function to add two numbers represented by linked lists.

function addTwoNumbers(l1, l2) {
  let dummy = new Node(0);
  let p = l1;
  let q = l2;
  let current = dummy;
  let carry = 0;
  while (p || q || carry) {
    let x = p ? p.value : 0;
    let y = q ? q.value : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);
    current = current.next;
    if (p) p = p.next;
    if (q) q = q.next;
  }
  return dummy.next;
}

// 7. Find the Starting Point of the Cycle in a Linked List
// Write a function to find the start of the cycle in a linked list.

function detectCycleStart(head) {
  let slow = head;
  let fast = head;
  let cycleExists = false;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycleExists = true;
      break;
    }
  }
  if (!cycleExists) return null;
  let start = head;
  while (start !== slow) {
    start = start.next;
    slow = slow.next;
  }
  return start;
}

// 8. Flatten a Multilevel Doubly Linked List
// Write a function to flatten a multilevel doubly linked list.

function flatten(head) {
  let dummy = new Node(0);
  let current = dummy;
  let stack = [head];
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      current.next = node;
      node.prev = current;
      current = current.next;
      if (node.next) stack.push(node.next);
      if (node.child) stack.push(node.child);
    }
  }
  dummy.next.prev = null;
  return dummy.next;
}

// 9. Remove Duplicates from Sorted Linked List
// Write a function to remove duplicates from a sorted linked list.

function deleteDuplicates(head) {
  let current = head;
  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

// 10. Palindrome Linked List
// Write a function to check if a linked list is a palindrome.

function isPalindrome(head) {
  let values = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values.join("") === values.reverse().join("");
}
