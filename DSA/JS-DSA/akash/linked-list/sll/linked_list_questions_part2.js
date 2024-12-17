// 11. Swap Nodes in Pairs
// Write a function to swap every two adjacent nodes in a linked list.

function swapPairs(head) {
  let dummy = new Node(0);
  dummy.next = head;
  let prev = dummy;
  while (head && head.next) {
    let first = head;
    let second = head.next;
    prev.next = second;
    first.next = second.next;
    second.next = first;
    prev = first;
    head = first.next;
  }
  return dummy.next;
}

// 12. Rotate a Linked List
// Write a function to rotate a linked list to the right by k places.

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;
  let length = 1;
  let oldTail = head;
  while (oldTail.next) {
    oldTail = oldTail.next;
    length++;
  }
  oldTail.next = head;
  k = k % length;
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  return newHead;
}

// 13. Intersection of Two Linked Lists
// Write a function to find the intersection node of two linked lists.

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
}

// 14. Remove Duplicates from Unsorted Linked List
// Write a function to remove duplicates from an unsorted linked list.

function removeDuplicates(head) {
  let seen = new Set();
  let current = head;
  let prev = null;
  while (current) {
    if (seen.has(current.value)) {
      prev.next = current.next;
    } else {
      seen.add(current.value);
      prev = current;
    }
    current = current.next;
  }
  return head;
}

// 15. Add Two Numbers Represented by Linked Lists II
// Write a function to add two numbers represented by linked lists with digits in reverse order.

function addTwoNumbersII(l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1) {
    stack1.push(l1.value);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.value);
    l2 = l2.next;
  }
  let carry = 0;
  let result = null;
  while (stack1.length || stack2.length || carry) {
    let sum = carry;
    if (stack1.length) sum += stack1.pop();
    if (stack2.length) sum += stack2.pop();
    carry = Math.floor(sum / 10);
    let node = new Node(sum % 10);
    node.next = result;
    result = node;
  }
  return result;
}

// 16. Copy List with Random Pointer
// Write a function to copy a linked list with random pointers.

function copyRandomList(head) {
  let map = new Map();
  let current = head;
  while (current) {
    map.set(current, new Node(current.value));
    current = current.next;
  }
  current = head;
  while (current) {
    let copy = map.get(current);
    copy.next = map.get(current.next) || null;
    copy.random = map.get(current.random) || null;
    current = current.next;
  }
  return map.get(head);
}

// 17. Reorder List
// Write a function to reorder a linked list to be in the order L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

function reorderList(head) {
  if (!head || !head.next || !head.next.next) return;

  // Find the middle of the list
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let second = slow.next;
  slow.next = null;
  let prev = null;
  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }
  second = prev;

  // Merge two halves
  let first = head;
  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}

// 18. Odd Even Linked List
// Write a function to group all odd nodes together followed by the even nodes.

function oddEvenList(head) {
  if (!head) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

// 19. Flatten a Linked List
// Write a function to flatten a linked list with next and child pointers.

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

// 20. LRU Cache
// Implement an LRU (Least Recently Used) Cache using linked list and hash map.

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(0);
    this.tail = new Node(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    let node = this.cache.get(key);
    this._remove(node);
    this._add(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this._remove(this.cache.get(key));
    }
    if (this.cache.size >= this.capacity) {
      this._remove(this.tail.prev);
    }
    let node = new Node(key, value);
    this._add(node);
    this.cache.set(key, node);
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.cache.delete(node.key);
  }

  _add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
}
