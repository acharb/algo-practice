// https://leetcode.com/problems/linked-list-cycle/description/

// Linked List Cycle

// Given a linked list with potentially a loop, determine whether the linked list
// from the first node contains a cycle in it. For bonus points, do this with constant space.

// Parameters

//     nodes: The first node of a linked list with potentially a loop.

// Result

//     Whether there is a loop contained in the linked list.

// O(N) space
const checkLinkedListCycle = (start) => {
    if (!start || !start.next) return false;

    let slow = start;
    let fast = start;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
};

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    }
}

let start;
let old;
let secondHold;
for (const i of [1, 2, 3, 4, 5]) {
    if (!start) {
        start = new Node(i);
        old = start;
    } else {
        old.next = new Node(i);
        old = old.next;
    }

    if (i == 2) {
        secondHold = old;
    }
}

old.next = secondHold;

console.log(checkLinkedListCycle(start));
