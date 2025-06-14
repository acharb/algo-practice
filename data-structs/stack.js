// FILO

class Stack {
  constructor(init) {
    this.data = init || [];
  }

  add(val) {
    this.data.push(val);
  }

  pop() {
    if (!this.data.length) return undefined;
    return this.data.splice(this.data.length - 1, 1)[0];
  }
}

const s = new Stack();

s.add("a");
s.add("l");
s.add("e");
s.add("c");

console.log(s.pop());

console.log(s.pop());

console.log(s.pop());

console.log(s.pop());
console.log(s.pop());
