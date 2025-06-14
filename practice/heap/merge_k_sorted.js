// https://algo.monster/problems/merge_k_sorted_lists

// Merge K Sorted Lists

//     Prereq: Heap Fundamentals

// Given k sorted lists of numbers, merge them into one sorted list.

// Input: [[1, 3, 5], [2, 4, 6], [7, 10]]

// Output: [1, 2, 3, 4, 5, 6, 7, 10]

// brute force: go through each node and add to output which will be n^2

// O(n*logN)
// Create a min heap. For each node, add it to the end and bubble up

// O(n*logN)
// Take off nodes one by one.
//  - take off top one, move the last node to the first, then bubble down.

class MinHeap {
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    peak() {
        return this.data[0];
    }

    // O(logN)
    enqueue(node) {
        this.data.push(node);
        this.bubbleUp(this.data.length - 1);
    }

    // O(logN)
    dequeue() {
        const min = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.bubbleDown(0);
        return min;
    }

    // O(logN)
    bubbleUp(i) {
        if (i === 0) return;
        const parentI = Math.floor((i - 1) / 2);
        if (this.data[i] < this.data[parentI]) {
            const hold = this.data[parentI];
            this.data[parentI] = this.data[i];
            this.data[i] = hold;
            this.bubbleUp(parentI);
        }
    }

    // O(logN)
    bubbleDown(i) {
        const leftI = 2 * i + 1;
        const rightI = 2 * i + 2;

        let minI = i;

        if (leftI < this.data.length && this.data[leftI] < this.data[minI]) {
            minI = leftI;
        }
        if (rightI < this.data.length && this.data[rightI] < this.data[minI]) {
            minI = rightI;
        }

        if (minI !== i) {
            const hold = this.data[i];
            this.data[i] = this.data[minI];
            this.data[minI] = hold;
            this.bubbleDown(minI);
        }
    }
}

// O(n*logn)
const minHeapSortSolution = (lists) => {
    const output = [];
    const h = new MinHeap();
    for (const list of lists) {
        for (const item of list) {
            h.enqueue(item);
        }
    }

    const size = h.size();
    for (let i = 0; i < size; i++) {
        output.push(h.dequeue());
    }

    return output;
};

console.log(
    minHeapSortSolution([
        [1, 3, 5],
        [2, 4, 6],
        [7, 10],
    ]),
);

class MinHeapWithTuple {
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    peak() {
        return this.data[0];
    }

    // O(logN)
    enqueue(node) {
        this.data.push(node);
        this.bubbleUp(this.data.length - 1);
    }

    // O(logN)
    dequeue() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const min = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return min;
    }

    // O(logN)
    bubbleUp(i) {
        if (i === 0) return;
        const parentI = Math.floor((i - 1) / 2);
        if (this.data[i][0] < this.data[parentI][0]) {
            [this.data[i], this.data[parentI]] = [
                this.data[parentI],
                this.data[i],
            ];
            this.bubbleUp(parentI);
        }
    }

    // O(logN)
    bubbleDown(i) {
        const length = this.data.length;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        let smallest = i;

        if (left < length && this.data[left][0] < this.data[smallest][0]) {
            smallest = left;
        }

        if (right < length && this.data[right][0] < this.data[smallest][0]) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.data[i], this.data[smallest]] = [
                this.data[smallest],
                this.data[i],
            ];
            this.bubbleDown(smallest);
        }
    }
}

// O(n*logk)
const minHeapWithKSolution = (lists) => {
    const output = [];
    const h = new MinHeapWithTuple();

    let i = 0;
    for (const list of lists) {
        h.enqueue([list[0], i, 0]);
        i++;
    }

    while (h.peak()) {
        const current = h.dequeue();
        output.push(current[0]);
        const list = lists[current[1]];
        const currentI = current[2];
        if (currentI + 1 >= list.length) continue;

        h.enqueue([list[currentI + 1], current[1], currentI + 1]);
    }

    return output;
};

console.log(
    minHeapWithKSolution([
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
    ]),
);

// Keys
// - one solution is just basically doing a heap sort all the values. Which gives O(n*logn)
//  but we can also do it where we just add the first element of each since each list is sorted,
//  and then when we take it off
//  the queue we add another from its list. Which will be O(n*logk). Both are valid, k is probably < n so is tech faster
