// https://algo.monster/problems/task_scheduling

// Task Scheduling

//     Prereq: Topological Sort

// For this problem, given a list of tasks and a list of requirements,
// compute a sequence of tasks that can be performed, such that we complete
// every task once while satisfying all the requirements.

// Each requirement will be in the form of a list [a, b], where task a needs
// to be completed first before task b can be completed,

// There is guaranteed to be a solution.
// Examples
// Example 1
// Input:

// tasks = ["a", "b", "c", "d"]
// requirements = [["a", "b"], ["c", "b"], ["b", "d"]]

// Output: ["a", "c", "b", "d"]

// BFS w/ in-deg tracking
// keep track of seen
// go through requirements, and keep track of in-degree in map
// in map, if in-deg is 0, then add to queue
// dequeue, subtract 1 from in-degree if node is pionting to it,
//   add node to output
// go thorugh requrements again and in-degree nodes with 0 to queue, also add to seen
// if output doesnt equal length of tasks, then not possible so return -1

const topologicalSort = (tasks, requirements) => {
    const inDeg = {};
    const queue = [];
    const output = [];

    // create in deg map
    for ([from, to] of requirements) {
        if (!inDeg[to]) {
            inDeg[to] = 0;
        }
        inDeg[to] += 1;
    }

    // make sure all tasks in there
    for (const task of tasks) {
        if (!inDeg[task]) inDeg[task] = 0;
    }

    // find ones with 0
    for (const node of Object.keys(inDeg)) {
        if (inDeg[node] === 0) {
            queue.push(node);
        }
    }

    while (queue.length) {
        const current = queue.shift();

        output.push(current);

        for ([from, to] of requirements) {
            if (from === current) {
                inDeg[to] -= 1;
                if (inDeg[to] === 0) {
                    queue.push(to);
                }
            }
        }
    }

    if (output.length !== tasks.length) return -1;

    return output;
};

console.log(
    topologicalSort(
        ["a", "b", "c", "d", "e"],
        [
            ["a", "b"],
            ["c", "b"],
            ["b", "d"],
        ],
    ),
);

// Keys
// - remember, when updating the key in inDeg map by subtracting 1, if it's 0 you can just
// add to queue then instead of re-looping through inDeg map every time
