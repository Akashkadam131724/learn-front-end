var middleNode = function (head) {
  // let current = head;
  // let total = 0;
  // while(current) {
  //     total++;
  //     current = current.next;
  // }

  // let middleNodeIndx = Math.floor(total / 2) + 1;
  // current = head;

  // while(current !==null){

  //     middleNodeIndx = middleNodeIndx - 1
  //     if(middleNodeIndx === 0) {
  //         return current;
  //         break;
  //     }
  //     current = current.next

  // }

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
