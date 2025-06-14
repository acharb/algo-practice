// Clone Graph

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

const cloneGraph = (node) => {
  if (!node) return null;

  const seen = new Map();

  const queue = [node];
  seen.set(node, new _Node(node.val));

  while (queue.length) {
    const curr = queue.shift();

    for (const neighbor of curr.neighbors) {
      if (!seen.has(neighbor)) {
        seen.set(neighbor, new _Node(neighbor.val));
        queue.push(neighbor);
      }

      seen.get(curr).neighbors.push(seen.get(neighbor));
    }
  }

  return seen.get(node);
};

console.log(
  cloneGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ]),
);
