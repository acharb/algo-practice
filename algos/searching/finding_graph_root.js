// Assuming no cycle guaranteed

// Basically create a set of all nodes pointing to a node
// - loop through all nodes again, if the node is being pointed to, delete from the set
// - only the nodes with none pointing to are left

// (can also do the in-degree map, it's basically the same thing)

function findRoot(nodes) {
  const idMap = {};
  for (const node of nodes) {
    idMap[node.id] = node;
  }

  for (const node of nodes) {
    if (node.parent !== null) {
      delete idMap[node.parent];
    }
  }

  // At this point, the remaining ID(s) are roots
  return Object.keys(idMap).map((x) => idMap[x]);
}

const nodes = [
  { id: 1, parent: 2 },
  { id: 2, parent: 3 },
  { id: 3, parent: null },
  { id: 4, parent: 1 },
  { id: 5, parent: 2 },
];

console.log(findRoot(nodes));

// 4 -> 1 -> 2 -> 3
//      5 ---^
