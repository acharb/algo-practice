// FIFO

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(val) {
    this.data.push(val);
  }

  dequeue() {
    if (!this.data.length) return undefined;
    // return this.data.splice(0, 1)[0];
    return this.data.shift();
  }
}

const q = new Queue();

q.enqueue("a");
q.enqueue("l");
q.enqueue("e");
q.enqueue("c");

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.dequeue());
