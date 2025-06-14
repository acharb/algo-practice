class Graph {
  constructor() {
    this.data = {};
  }

  add(node, neighbor) {
    if (!this.data[node]) {
      this.data[node] = [];
    }
    this.data[node].push(neighbor);
  }
}

const g = new Graph();

g.add("A", "B");
g.add("A", "F");

g.add("B", "C");
g.add("B", "E");

g.add("C", "B");
g.add("C", "D");

g.add("E", "B");
g.add("E", "C");

g.add("D", "C");

g.add("F", "G");

g.add("G", "F");

// uses a stack - FILO
const dfs = (graph, start) => {
  const stack = [];
  const seen = {};
  const result = [];

  stack.push(start);
  seen[start] = true;

  while (stack.length) {
    const current = stack.pop();
    result.push(current);

    for (const neighbor of graph.data[current]) {
      if (!seen[neighbor]) {
        stack.push(neighbor);
        seen[neighbor] = true;
      }
    }
  }

  console.log(result);
};

dfs(g, "A");
