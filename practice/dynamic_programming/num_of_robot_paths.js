// https://leetcode.com/problems/unique-paths/description/

// Number of Unique Paths to Go from Top Left to Bottom Right

// A robot starts its journey at the top-left corner of a grid that measures m x n (m rows by n columns).

// At each step, the robot has only two possible directions: it can either move to the right or move
// downward. Its destination is the bottom-right corner of the grid.

// Determine the total number of unique paths the robot can take to reach its destination.
// Example 1:

// Input: m = 2, n = 3

// Output: 3
// Explanation:

// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:

//     Right -> Right -> Down

//     Right -> Down -> Right

//     Down -> Right -> Right

// Example 2:

// Input: m = 5, n = 3

// Output: 15

// DP / memoized solution

// - start at the end
// - go up, and add one
// - go left, and add one
// - every square is the sum of the square to it's right and below it

// O(N) time, O(N) space
const memoized_soln = (m, n) => {
    const memo = [];
    // TODO - better way of making
    for (let i = 0; i < m; i++) {
        memo.push([]);
        for (let j = 0; j < n; j++) {
            memo[i].push(0);
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let below,
                right = 0;
            if (memo[i + 1]) {
                below = memo[i + 1][j];
            }
            if (memo[i][j + 1]) {
                right = memo[i][j + 1] || 0;
            }
            memo[i][j] = below + right || 1;
        }
    }

    return memo[0][0];
};

console.log(memoized_soln(5, 3));

// Brute Force - Solution
// just plain DFS, no memoization
// start with i,j = 0. DFS solution, incrementing i and j. If we reach the bottom right,
// then add 1 to possible solutions counter.

const brute_force_solution = (m, n) => {
    let count = 0;
    const dfs = (startI, startJ) => {
        if (startI >= m) {
            return;
        }
        if (startJ >= n) {
            return;
        }

        if (startI === m - 1 && startJ === n - 1) {
            count += 1;
            return;
        }

        dfs(startI + 1, startJ);
        dfs(startI, startJ + 1);
    };

    dfs(0, 0);

    return count;
};

// Keys
// - remember it can only move right and down. not left or up.
