// https://leetcode.com/problems/open-the-lock/description/

// Open the Lock

// You are faced with a 4-wheel lock where each wheel contains the numbers '0' through '9'.
// Turning a wheel can either increase or decrease its number by one, wrapping around from
// '9' to '0' or vice versa.
// A single move involves rotating any one of the wheels by one slot.

// The lock starts with the combination '0000'. However, there are specific combinations
// termed as "deadends". If the lock lands on any of these deadend combinations,
// the wheels jam, making it impossible to proceed.

// Your task is to determine the least number of moves needed to reach a given target
// combination from the starting point without hitting any deadend.
// If reaching the target is impossible due to deadends, return -1.
// Input

//     target_combo: a string representing the four digit combination to open the lock.
//     trapped_combos: a list of strings representing the trapped combinations.

// Output

// An integer representing the number of steps it takes to open the lock,
// or -1 if you can't open it without triggering the trap.
// Examples
// Example 1:

// Input:

// target_combo = "0202"
// trapped_combos = ["0201","0101","0102","1212","2002"]

// Output: 6

// Explanation:

// 0000 -> 1000 -> 1100 -> 1200 -> 1201 -> 1202 -> 0202, a total of 6 steps.
// Constraints

//     The starting combination (0000) and the final combination is not trapped because
//     that defeats the purpose of the lock.

// SOLN
// create a BFS
// for each slot, go up and down, and each to the queue
//   - check not in seen
//   - check not in deadlock
// continue BFS until find the final combination
// - keep track of levels

// seen: create a 9x4 array

// O(N) time, O(N) space
const openLock = (target, trapped) => {
    const queue = ["0000"];
    const seen = {};
    seen["0000"] = true;

    const deadends = new Set(trapped);

    if (deadends.has("0000")) return -1;

    let level = 0;

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const current = queue.shift();

            if (current === target) {
                return level;
            }
            if (deadends.has(current)) continue;

            const deltas = [1, -1];

            for (const delta of deltas) {
                for (let comboI = 0; comboI < 4; comboI++) {
                    const split = current.split("");
                    split[comboI] = parseInt(split[comboI]) + delta;

                    if (split[comboI] == -1) split[comboI] = 9;
                    else if (split[comboI] == 10) split[comboI] = 0;

                    const combined = split.join("");

                    if (seen[combined]) continue;

                    if (deadends.has(combined)) {
                        continue;
                    }

                    queue.push(combined);
                    seen[combined] = true;
                }
            }
        }
        level += 1;
    }

    return -1;
};

// console.log(openLock("0202", ["0201", "0101", "0102", "1212", "2002"]));
// console.log(openLock("1212", ["0201", "0101", "0102", "1212", "2002"]));
console.log(openLock("888", ["0000"]));
