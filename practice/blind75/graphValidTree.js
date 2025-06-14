// https://leetcode.com/problems/graph-valid-tree/description/

// Graph Valid Tree
// Medium

// Given n nodes labeled from 0 to n-1 and a list of undirected edges
// (each edge is a pair of nodes), write a function to check whether
// these edges make up a valid tree. A valid tree must have exactly
// n-1 edges and be fully connected.

// Example:

// Input: n = 5, edges = [[0,1], [0,2], [0,3], [1,4]]
// Output: true
// Explanation: The graph has 5 nodes and 4 edges, is fully connected, and has no cycles.

// Input: n = 5, edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
// Output: false
// Explanation: The graph has a cycle between nodes 1, 2, and 3, so it's not a valid tree.

// Valid tree: no cycles
// all connected
// n-1 edges

// do DFS
// if you see a node you've already seen, then there's a cycle

// {
//   0: [1,2,3],
//   1: [4],
//   2: [],
//   3: [],
//   4: []
// }

const graphValidTree = (n, edges) => {
  if (edges.length !== n - 1) return false;

  const adjList = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u); // Undirected graph
  }

  const visited = new Array(n).fill(false);

  const dfs = (node, parent) => {
    visited[node] = true;

    for (const neighbor of adjList[node]) {
      if (neighbor === parent) continue;

      if (visited[neighbor]) return false;
      if (!dfs(neighbor, node)) return false;
    }

    return true;
  };

  if (!dfs(0, -1)) return false;

  // Make sure all nodes are connected
  return visited.every((v) => v);
};

console.log(
  graphValidTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]),
);

console.log(
  graphValidTree(6, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ]),
);
