class Graph {
  constructor() {
    this.edgeList = [];
  }

  add(node, neighbor) {
    this.edgeList.push([node, neighbor]);
  }
}

const g = new Graph();

g.add("A", "B");
g.add("B", "C");
g.add("C", "D");
g.add("D", "A");

console.log(g.edgeList);
