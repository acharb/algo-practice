// https://algo.monster/problems/task_scheduling_2

// Task Scheduling 2

//     Prereq: Topological Sort

// This problem is similar to Task Scheduling. The primary difference is now we
// assign times to tasks and we ask for the minimum amount of time to complete all tasks.
// There will be an extra times array such that times[i] indicates the time required
// to complete task[i].

// You have also invited all your friends to help complete your
// tasks so you can work on any amount of tasks at a given time.
// Remember that task a must be completed before completing task b (but the starting
// times don't need to be in order).

// There is guaranteed to be a solution.
// Examples
// Example 1
// Input:

// tasks = ["a", "b", "c", "d"]
// times = [1, 1, 2, 1]
// requirements = [["a", "b"], ["c", "b"], ["b", "d"]]

// Output: 4

// Kahn algorithim - BFS + in-deg map. O(N)
// create in-deg of all tasks
// ! also create earliest finish using times array
// add an earliestFinish map
//  when looking at it as a neighbor (after decrementing in-deg map)
//    check its max finish time. max(self time, current + self time)
// go to the end, and return the max of earliest finish

const taskSchedule2 = (tasks, times, requirements) => {
    const queue = [];
    const inDeg = {};
    const earliestFinish = {};

    // create in deg map
    for (const task of tasks) {
        inDeg[task] = 0;
    }
    for (const [from, to] of requirements) {
        if (inDeg[from]) {
            inDeg[from] += 1;
        }
    }

    // create earliestFinish map
    for (let i = 0; i < tasks.length; i++) {
        earliestFinish[tasks[i]] = times[i];
    }

    for (const node of Object.keys(inDeg)) {
        if (inDeg[node] === 0) {
            queue.push(node);
        }
    }

    let maxLength = 0;

    while (queue.length) {
        const current = queue.shift();

        for (const [from, to] of requirements) {
            if (from === current) {
                inDeg[to] -= 1;
                if (inDeg[to] === 0) {
                    queue.push(to);
                }

                earliestFinish[to] = Math.max(
                    earliestFinish[to],
                    earliestFinish[current] + earliestFinish[to],
                );

                maxLength = Math.max(maxLength, earliestFinish[to]);
            }
        }
    }

    return maxLength;
};

console.log(
    taskSchedule2(
        ["a", "b", "c", "d"],
        [1, 1, 2, 1],
        [
            ["a", "b"],
            ["c", "b"],
            ["b", "d"],
        ],
    ),
);

// Assumptions
// - that req is always jsut 2

// Keys
// - the key here was knowing to keep a new map "earliestFinish",
// which tracks finish times of nodes as we go
