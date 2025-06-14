// can only use for binary tree (eg. heaps)
class Tree {
  constructor() {
    this.tree = [];
  }

  add(val) {
    this.tree.push(val);
  }

  // 2i+1
  leftChildOf(val) {
    const i = this.tree.indexOf(val);
    if (i < 0) return undefined;

    return this.tree[2 * i + 1];
  }

  // 2i+2
  rightChildOf(val) {
    const i = this.tree.indexOf(val);
    if (i < 0) return undefined;

    return this.tree[2 * i + 2];
  }

  // Floor( (i - 1) / 2)
  parentOf(val) {
    const i = this.tree.indexOf(val);
    if (i < 0) return undefined;

    return Math.floor((i - 1) / 2);
  }
}

const t = new Tree();

t.add("A");
t.add("B");
t.add("C");
t.add("D");
t.add("E");
t.add("F");

console.log(t.tree);

console.log(t.leftChildOf("A"));
console.log(t.rightChildOf("A"));

console.log(t.leftChildOf("B"));
console.log(t.rightChildOf("B"));

console.log(t.leftChildOf("C"));
console.log(t.rightChildOf("C"));

console.log(t.parentOf("A"));
console.log(t.parentOf("B"));
console.log(t.parentOf("C"));
console.log(t.parentOf("F"));
