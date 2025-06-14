// https://algo.monster/problems/shortest_path_unweight

// Shortest Path Between A and B

//     Prereq: BFS on Graph

// Given an (unweighted) connected graph, return the length of the
// shortest path between two nodes A and B, in terms of the number of edges.

// Assume there always exists a path between nodes A and B.

// Input:

// graph = [[1, 2], [0, 2, 3], [0, 1], [1]]
// A = 0
// B = 3

// Output: 2

const createAdjList = (nodes) => {
    const adjList = {};

    for (let i = 0; i < nodes.length; i++) {
        adjList[i] = [];
        for (const node of nodes[i]) {
            adjList[i].push(node);
        }
    }
    return adjList;
};

const shortestPathBFS = (adjList, start, end) => {
    const queue = [];

    queue.push(start);

    const seen = { [start]: true };

    let level = 0;

    while (queue.length) {
        const size = queue.length;
        for (i = 0; i < size; i++) {
            // in reality use more efficient dequeue
            const current = queue.shift();

            if (current === end) return level;

            for (const neighbor of adjList[current]) {
                if (seen[neighbor]) continue;
                queue.push(neighbor);
                seen[neighbor] = true;
            }
        }

        level += 1;
    }
};

const adjList2 = {
    1: [2, 3],
    2: [1, 4, 5, 3],
    3: [1, 2, 6],
    4: [2],
    5: [2, 6],
    6: [3, 5, 7],
    7: [6],
};

console.log(shortestPathBFS(adjList2, 1, 7));

// Keys
// - keep a level counter
// - at the start of each level you set a queue size, increment through all of those
// and then increment level
