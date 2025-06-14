// Directional, Weighted

class Graph {
  constructor() {
    this.adjList = {};
  }

  add(node, neighbor, weight) {
    if (!this.adjList[node]) {
      this.adjList[node] = [];
    }

    this.adjList[node].push({ node: neighbor, weight });
  }
}

const g = new Graph();

g.add("A", "B", 1);
g.add("B", "C", 3);
g.add("C", "D", 2);
g.add("D", "E", 10);
g.add("E", "B", 5);
g.add("E", "A", 2);

console.log({ g });
