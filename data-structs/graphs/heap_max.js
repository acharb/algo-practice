// every parent is greater than its child
class MaxHeap {
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  // O(logN)
  bubbleUp(i) {
    if (i < 0) return;

    const parentIdx = Math.floor((i - 1) / 2);

    // At the top
    if (parentIdx < 0) return;

    // if child is greater, switch with parent
    if (this.data[i] > this.data[parentIdx]) {
      const parentHold = this.data[parentIdx];
      this.data[parentIdx] = this.data[i];
      this.data[i] = parentHold;

      this.bubbleUp(parentIdx);
    }
  }
}

const h = new MaxHeap();

h.insert(5);
console.log(h.data);

h.insert(10);
console.log(h.data);

h.insert(1);
console.log(h.data);

h.insert(4);
console.log(h.data);

h.insert(8);
console.log(h.data);

h.insert(1);
console.log(h.data);

h.insert(10);
console.log(h.data);
