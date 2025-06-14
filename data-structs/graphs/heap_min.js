// Every parent node is smaller than a child node
class MinHeap {
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  // O(logN)
  pop() {
    const min = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    // just to remove the last element
    this.data.pop();
    this.bubbleDown(0);
    return min;
  }

  // O(logN)
  bubbleDown(i) {
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;

    if (this.data[leftChild] && this.data[leftChild] < this.data[i]) {
      const hold = this.data[i];
      this.data[i] = this.data[leftChild];
      this.data[leftChild] = hold;
      this.bubbleDown(leftChild);
    } else if (this.data[rightChild] && this.data[rightChild] < this.data[i]) {
      const hold = this.data[i];
      this.data[i] = this.data[rightChild];
      this.data[rightChild] = hold;
      this.bubbleDown(rightChild);
    }
  }

  // O(logN)
  // checks the last value. And checks it against its parent. If smaller, move it up.
  // continue process until the parent is smaller

  //   (using idx to locate which node to bubble up, bc value + indexOf doesn't account for duplicate node values)
  bubbleUp(i) {
    if (i < 0) return;

    const parentIdx = Math.floor((i - 1) / 2);

    // were at the top
    if (parentIdx < 0) return;

    // if smaller than parent, switch em
    if (this.data[i] < this.data[parentIdx]) {
      const parentHold = this.data[parentIdx];
      this.data[parentIdx] = this.data[i];
      this.data[i] = parentHold;

      // continue bubble up
      this.bubbleUp(parentIdx);
    }
  }
}

const h = new MinHeap();

h.insert(5);
console.log(h.data);

h.insert(6);
console.log(h.data);

h.insert(2);
console.log(h.data);

h.insert(3);
console.log(h.data);

h.insert(10);
console.log(h.data);

h.insert(9);
console.log(h.data);

h.insert(1);
console.log(h.data);
