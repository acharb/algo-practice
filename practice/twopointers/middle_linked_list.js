// https://leetcode.com/problems/middle-of-the-linked-list/description/

// Middle of a Linked List

// Find the middle node of a linked list.

// Input: 0 1 2 3 4

// Output: 2

// If the number of nodes is even, then return the second middle node.

// Input: 0 1 2 3 4 5

// Output: 3

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

const findMiddleWrapper = (startArr) => {
  const buildList = (arr) => {
    let first;
    let old;
    for (const v of arr) {
      if (!old) {
        old = new Node(v);
        first = old;
      } else {
        old.next = new Node(v);
        old = old.next;
      }
    }

    return first;
  };

  const startNode = buildList(startArr);

  const findMiddle = (start) => {
    let slowNode = start;
    let fastNode = start;

    while (fastNode && fastNode.next) {
      slowNode = slowNode.next;
      fastNode = fastNode.next?.next;
    }

    return slowNode.val;
  };

  return findMiddle(startNode);
};

console.log(findMiddleWrapper([0, 1, 2, 3, 4]));
console.log(findMiddleWrapper([0, 1, 2, 3, 4, 5]));
