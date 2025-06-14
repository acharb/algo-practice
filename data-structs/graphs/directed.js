// Directional, unweighted

class Graph {
  constructor() {
    this.adjList = {};
  }

  add(node, neighbor) {
    if (this.adjList[node]) {
      this.adjList[node].push(neighbor);
    } else {
      this.adjList[node] = [neighbor];
    }
  }
}

const g = new Graph();

g.add("A", "B");
g.add("B", "C");
g.add("C", "D");
g.add("D", "E");
g.add("E", "B");
g.add("E", "A");

console.log({ g });
