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

// uses a queue - FIFO
const bfs = (graph, start) => {
  const queue = [];
  const seen = {};
  const result = [];

  queue.push(start);
  seen[start] = true;

  while (queue.length) {
    const current = queue.shift();
    result.push(current);

    // no children
    if (!g.data[current]) continue;

    for (const neighbor of g.data[current]) {
      if (!seen[neighbor]) {
        queue.push(neighbor);
        seen[current] = true;
      }
    }
  }
  console.log(result);
};

bfs(g, "A");
