// Only used to create a topological sort of a directed acyclic graph
//   (if there's a cycle, can't do this)

const adjList = {
  5: [3],
  3: [4, 2],
  4: [2],
  2: [1],
};

const khanSort = (adjList) => {
  const inCounts = {};
  Object.keys(adjList).map((k) => (inCounts[k] = 0));
  const result = [];
  const queue = [];
  const seen = {};

  for (const key of Object.keys(adjList)) {
    for (const node of adjList[key]) {
      inCounts[node] = (inCounts[node] || 0) + 1;
    }
  }

  for (const node of Object.keys(inCounts)) {
    if (inCounts[node] === 0) {
      queue.push(node);
    }
  }

  while (queue.length) {
    // O(N), ok? In reality I'd use a better queue than this. enqueue and dequeue should be O(1) (use a head pointer on the array)
    const current = queue.shift();
    seen[current] = true;
    result.push(current);

    // won't be in adj list if a node w/ no directed edge
    if (adjList[current]) {
      for (const pointingTo of adjList[current]) {
        inCounts[pointingTo] -= 1;
        if (inCounts[pointingTo] === 0) {
          queue.push(pointingTo);
        }
      }
    }
  }

  // cycle found, bc unproccessed nodes
  if (result.length !== Object.keys(inCounts).length) return -1;

  return result;
};

console.log(khanSort(adjList));

// key remembers
// - there can be a cycle deep in the graph. So make sure to compare results length with inCounts length
//   if results is shorter than there were unprocessed nodes and a cycle

// - you can just enqueue right when you subtract one from the inCounts, instead of looping through again after
