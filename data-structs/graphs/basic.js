// {
//   A: [B,E],
//   B: [A,C,E],
//   C: [B,D],
//   D: [E,C],
//   E: [B,D,A]
// }

// unweighted, undirected
// adjacency list

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
g.add("A", "E");

g.add("C", "B");
g.add("C", "D");

g.add("B", "E");
g.add("B", "A");
g.add("B", "C");

g.add("D", "C");
g.add("D", "E");

g.add("E", "B");
g.add("E", "D");
g.add("E", "A");
