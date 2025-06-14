// https://leetcode.com/problems/course-schedule/description/

// Course Schedule

//     Prereq: DFS on Graph

// There are a total of n courses a student has to take, numbered from 0 to n-1.
// A course may have prerequisites. The "depends on" relationship is expressed as a pair of numbers.
// For example, [0, 1] means you need to take course 1 before taking course 0.
// Given n and the list of prerequisites, decide if it is possible to take all the courses.

// Example 1:

// Input: n = 2, prerequisites = [[0, 1]]

// Output: true

// Explanation: we can take 1 first and then 0.

// Example 2:

// Input: n = 2, prerequisites = [[0, 1], [1, 0]]

// Output: false

// Explanation: the two courses depend on each other, there is no way to take them

// {
//     0: [1],
//     1: [0]
// }

const courseSched = (n, prereqs) => {
    const adjList = {};

    for (const [a, b] of prereqs) {
        if (!adjList[a]) adjList[a] = [];
        adjList[a].push(b);
    }

    const inPath = {};
    const completed = {};

    const dfs = (node) => {
        if (inPath[node]) return false; // cycle detected
        if (completed[node]) return true; // already visited

        inPath[node] = true;

        for (const neighbor of adjList[node] || []) {
            if (!dfs(neighbor)) return false;
        }

        delete inPath[node];
        completed[node] = true;

        return true;
    };

    for (let i = 0; i < n; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};

// console.log(
//     courseSched(2, [
//         [0, 1],
//         [1, 0],
//     ]),
// );

console.log(
    courseSched(4, [
        [2, 3],
        [3, 2],
    ]),
);

// Keys
//  - in cycle detection, we need to update the "visited" or "inpath" set
//   we can't just keep it once we've seen the node. If there's no children, then remove it from the inpath set.

// to optimize, we need another data obj "cleared"/"completed". So that if we've seen a node already and found no cycle, skip.
//  so instead of O(N^2) its O(N)
