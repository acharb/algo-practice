// Directional, Weighted

class Tree {
  constructor() {
    this.adjList = {};
  }

  add(node, neighbor) {
    if (!this.adjList[node]) {
      this.adjList[node] = [];
    }

    this.adjList[node].push(neighbor);
  }
}

const t = new Tree();

t.add("A", "B");
t.add("A", "C");
t.add("C", "D");
t.add("B", "F");
t.add("B", "E");

console.log({ t });
