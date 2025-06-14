// https://leetcode.com/problems/lru-cache/description/

// LRU Cache

// Design and implement a data structure for Least Recently Used (LRU) cache.
// It should support get and put operations.

//     get(key): Get the value (which will always be positive) of the key if the
//              key exists in the cache, otherwise return -1.
//     put(key, value): Set or insert the value if the key is not already present.
//              When the cache reached its capacity, it should invalidate the least
//              recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Can you do both operations in O(1) time complexity?
// Input

//     operations: the operations

// Output

// the return values of get operations
// Examples
// Example 1:

// Input:

// operations = [
//   LRUCache 2
//   put 1 1
//   put 2 2
//   get 1
//   put 3 3
//   get 2
//   put 4 4
//   get 1
//   get 3
//   get 4
// ]

// Output: [1, -1, -1, 3, 4]

// Explanation:

// See input.

// Soln
// have a hash map, and each key points to a node on a doubly linked list
// when getting in map, grab that node, move it's prev's next to the current next.
//      And the current next's prev to the current's prev
// then move the accessed node to the head

// when putting. we store the length on the LRU cache. If at capcity. Then release
//      the last node from DLL, remove from hash map. And add the first node to the front.

// LRU cache, needs to store capacity, and head, and tail

class DLLNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.dllLength = 0;
        this.head = new DLLNode(0, 0);
        this.tail = new DLLNode(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.nodeMap = {};
    }

    _addToFront(node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    _removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.next = null;
        node.prev = null;
    }

    get(key) {
        if (!this.nodeMap[key]) {
            return -1;
        }

        const currentNode = this.nodeMap[key];

        this._removeNode(currentNode);
        this._addToFront(currentNode);

        return currentNode.val;
    }

    put(key, val) {
        // if exists already, update it and move to front
        if (this.nodeMap[key]) {
            this.nodeMap[key].val = val;
            this.get(key);
            return true;
        }

        // if at capacity, release last node
        if (this.dllLength >= this.capacity) {
            delete this.nodeMap[this.tail.prev.key];
            console.log("at capacity, deleting key:", this.tail.prev.key);

            this._removeNode(this.tail.prev);

            this.dllLength -= 1;
        }

        // add new node and make it head
        const newNode = new DLLNode(key, val);
        this.nodeMap[key] = newNode;

        this._addToFront(newNode);

        this.dllLength += 1;

        return true;
    }

    getDllListOrder() {
        console.log(`capacity: ${this.capacity}`);
        console.log(`dll length: ${this.dllLength}`);
        console.log(`\ncur order:`);
        let currentNode = this.head;

        // sanity
        let i = 0;
        while (currentNode) {
            console.log(currentNode.key, currentNode.val);
            currentNode = currentNode.next;

            i++;

            if (i > 10) break;
        }

        console.log(`\n\n\n`);
    }
}

const cache = new LRUCache(2);
cache.getDllListOrder();

// cache.put(1, 1);
// cache.getDllListOrder();

// cache.put(2, 2);
// cache.getDllListOrder();

// cache.put(3, 3);
// cache.getDllListOrder();

// cache.get(2);
// cache.getDllListOrder();

// cache.get(1);
// cache.getDllListOrder();

// cache.get(1);
// cache.getDllListOrder();

// cache.put(4, 4);
// cache.getDllListOrder();

// cache.put(5, 5);
// cache.getDllListOrder();

// cache.put(6, 6);
// cache.getDllListOrder();

// console.log(cache.get(3));
// cache.getDllListOrder();

cache.put(1, 1);
cache.put(2, 2);

console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
console.log(cache.put(4, 4));
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));

// Keys
// - add the helper methods for adding node to front (as if a new node adding to chain)
// and removing node (
