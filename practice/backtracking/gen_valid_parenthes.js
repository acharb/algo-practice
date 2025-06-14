// https://leetcode.com/problems/generate-parentheses/description/

// Generate All Valid Parentheses

// Given an integer n, generate all strings with n matching parentheses. "matching" parentheses mean

//     there is equal number of opening and closing parentheses.
//     each opening parenthesis has matching closing parentheses.

// For example, () is a valid string but )( is not a valid string because ) has no
// matching parenthesis before it and ( has no matching parenthesis after it.
// Input

//     n: number of matching parentheses

// Output

// all valid strings with n matching parentheses
// Examples
// Example 1:

// Input:

// n = 2

// Output: (()) ()()

// Explanation:

// There are two ways to create a string with 2 matching parentheses.
// Example 2:

// Input:

// n = 3

// Output: ((())) (()()) (())() ()(()) ()()()

// Explanation:

// There are 5 ways to create a string with 3 matching parentheses.

// Solution
// creating tree: start with string. Then add two states,
// open paran and closed paren
// if we hit a state where a valid answer isn't possible, we stop that branch of DFS
// how do we know if not valid? if we get more closed than opens. So we can also pass the open and closed count down DFS
// if we hit the right n level, then add to result arr

// O(2^N) - exponential time
// O(N) - space, bc using path in place
const gen_valid_paren = (n) => {
    const result = [];

    const dfs = (path, openCount, closedCount) => {
        // Note: you can add these checks here, or just don't go into this state by adding check before calling dfs

        // if more closed than open, we hit a state not possible to get valid
        if (closedCount > openCount) {
            return;
        }

        // if more open than n (more than half characters), we hit state not possible to get valid
        if (openCount > n) {
            return;
        }

        if (path.length >= n * 2) {
            result.push(path.join(""));
            return;
        }

        path.push("(");
        dfs(path, openCount + 1, closedCount);
        path.pop();

        path.push(")");
        dfs(path, openCount, closedCount + 1);
        path.pop();
    };

    dfs([], 0, 0);

    return result;
};

console.log(gen_valid_paren(3));
