// my own practice

// Non-directional, detecting cycles

let adjList1 = {
  0: [1, 2],
  1: [3],
  2: [0],
  3: [1, 4],
  4: [3],
};

const visited = {};
const detectCycleDFS = (start, parent) => {
  visited[start] = true;

  if (!adjList1[start]) return "ok";

  for (const neighbor of adjList1[start]) {
    if (visited[neighbor]) {
      if (neighbor !== parent) {
        return -1;
      }
    } else if (detectCycleDFS(neighbor, start) === -1) {
      return -1;
    }
  }
  return "ok";
};

console.log(detectCycleDFS(0));

// keys
// - passing in "parent"

// Directional, detecting cycles

const adjList2 = {
  0: [1, 2],
  1: [3],
  2: [3],
  3: [0],
};

const inPath = {};
const detectCycles = (start) => {
  if (inPath[start]) return -1;

  inPath[start] = true;

  if (adjList2[start]) {
    for (const child of adjList2[start]) {
      if (detectCycles(child) === -1) {
        return -1;
      }
    }
  }

  delete inPath[start];
  return 1;
};

console.log(detectCycles(0));

// keys
// - keeping track of nodes in path, and then removing when backtracking / done with that path
// - also note, it would be smart to add a "completed" set as well, so you don't re-do same path if already cleared
// - also if the graph could possibly be disconnected, then run on every node in adjacency list
