// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// Max depth of a binary tree

//     Prerequisite: DFS on Tree

// Max depth of a binary tree is the longest root-to-leaf path.
// Given a binary tree, find its max depth.
// Here, we define the length of the path to be the number of edges on that path, not the number of nodes.

// O(N) time - touches every node
// O(h) space - height of the call stack

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const buildTree = (arr) => {
    const start = new Node(arr[0]);
    start.left = new Node(arr[1]);
    start.right = new Node(arr[2]);
    start.left.left = new Node(arr[3]);
    start.left.right = new Node(arr[4]);
    start.right.left = new Node(arr[5]);
    start.right.right = new Node(arr[6]);
    start.right.right.right = new Node(arr[7]);

    return start;
};

const start = buildTree([5, 4, 3, 2, 1, 6, 8]);

const findDepth = (currentNode, currentDepth) => {
    if (!currentNode) return currentDepth - 1;

    const leftDepth = findDepth(currentNode.left, currentDepth + 1);
    const rightDepth = findDepth(currentNode.right, currentDepth + 1);

    return Math.max(leftDepth, rightDepth);
};

const maxDepth = function (root) {
    const findDepth = (currentNode, currentDepth) => {
        if (!currentNode) return currentDepth - 1;

        const leftDepth = findDepth(currentNode.left, currentDepth + 1);
        const rightDepth = findDepth(currentNode.right, currentDepth + 1);

        return Math.max(leftDepth, rightDepth);
    };

    return findDepth(root, 1);
};

console.log(maxDepth(start));
