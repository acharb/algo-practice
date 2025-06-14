// https://leetcode.com/problems/reorganize-string/description/

// Reorganize String

// Given a string s, check if the letters can be rearranged so that two
// characters that are adjacent to each other are not the same.

// If possible, output any possible result. If not possible, return the empty string.
// Example 1:
// Input:s = "aab"
// Output: aba
// Example 2:
// Input:s = "aaab"
// Output: ``
// Note:

// s will consist of lowercase letters and have length in the range [1, 500].

// - create a max heap that stores the characrer and number of occurances
// - pull from the max heap, and then bubble down if needed
// - every time you pull it, store it in prev
// - if the top node is prev, then go to second most
// - keep going until the end, if the last node is >= 1 and is prev, then not possible

// - O(nlogn)

class MaxHeap {
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
    if (this.data[i][1] > this.data[parentI][1]) {
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

    let maxI = i;

    if (leftI < this.data.length && this.data[leftI][1] > this.data[maxI][1]) {
      maxI = leftI;
    }
    if (
      rightI < this.data.length &&
      this.data[rightI][1] > this.data[maxI][1]
    ) {
      maxI = rightI;
    }

    if (maxI !== i) {
      const hold = this.data[i];
      this.data[i] = this.data[maxI];
      this.data[maxI] = hold;
      this.bubbleDown(maxI);
    }
  }
}

const movingBest = (str) => {
  const heap = new MaxHeap();
  const output = [];

  // create count map
  const countMap = {};
  for (const char of str) {
    if (!countMap[char]) countMap[char] = 0;
    countMap[char] += 1;
  }

  // create the heap
  for (const char of Object.keys(countMap)) {
    // [a, 3]
    heap.enqueue([char, countMap[char]]);
  }

  let prev = "";

  while (heap.peak()) {
    // one node left, and it's prev
    if (heap.size() === 1 && heap.peak()[0] === prev) {
      return "";
    }

    let current = heap.dequeue();

    // TODO - check edge case
    if (current[0] === prev) {
      const hold = current;
      current = heap.dequeue();
      heap.enqueue(hold);
    }

    output.push(current[0]);
    prev = current[0];
    current[1] -= 1;
    if (current[1] >= 1) {
      heap.enqueue(current);
    }
  }

  return output.join("");
};

console.log(movingBest("aaabc"));

// Keys
// - thinking of the heap as a tuple
