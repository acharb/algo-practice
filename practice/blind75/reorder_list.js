// https://leetcode.com/problems/reorder-list/description/

// Reorder List

// Given the head of a singly linked list, reorder it to follow this pattern - the first node,
// then the last node, then the second node, then the second-last node, and so on.
// The reordering must be done in-place without modifying node values.
// Example:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const printNodeOrder = (head) => {
  let current = head;
  while (current) {
    console.log(current);
    current = current.next;
  }
};

const reorder_list = (nodes) => {
  let head;
  let prev;
  for (const val of nodes) {
    const node = new Node(val);
    if (!head) {
      head = node;
      prev = head;
    } else {
      prev.next = node;
      prev = node;
    }
  }

  // Find the middle
  let fast = head;
  let slow = head;

  let prevSlow = null;
  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next?.next;
  }

  prevSlow.next = null;

  const middle = slow;

  // Create second half to be reversed
  prev = null;
  let current = middle;
  while (current) {
    const hold = current.next;
    current.next = prev;
    prev = current;

    current = hold;
  }

  // Merge two lists one after another
  let first = head;
  let second = prev;

  while (second) {
    const temp1 = first?.next || null;
    const temp2 = second.next;

    if (first) {
      first.next = second;
    }

    second.next = temp1 || temp2;

    first = temp1;
    second = temp2;
  }

  // printNodeOrder(head);

  return head;
};

// console.log(reorder_list([1, 2, 3, 4, 5]));
console.log(reorder_list([1, 2, 3, 4]));

// Keys
// - key insight: that reversing the second half, and then re-attaching one after another was the key
// - how to reverse the second half (need a current, and prev, and a hold in a while loop)
// - how to merge two linked lists (need 4 pointers, the two heads, and the two nexts)
// - need to remember to break up the lists after finding middle
