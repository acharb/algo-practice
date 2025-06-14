// https://leetcode.com/problems/permutations/description/

// Generate All Permutations

// Given a string of unique letters, find all of its distinct permutations.

// Permutation means arranging things with an order. For example,
// permutations of [1, 2] are [1, 2] and [2, 1]. Permutations are best visualized with trees.

// The number of permutations is given by n! (we looked at factorial in Recursion Review).
// The way to think about permutation is to imagine you have a bag of 3 letters.
// Initially, you have 3 letters to choose from, you pick one out of the bag.
// Now you are left with 2 letters, you pick again now there's only 1 letter.
// The total number of choices is 3*2*1 = 6 (hence we have 6 leaf nodes in the above tree).

// Input

//     letters: a string of unique letters

// Output

// all of its distinct permutations
// Examples
// Example 1:

// Input:

// letters = abc

// Output: abc acb bac bca cab cba

// Explanation:

// All permutations.

// DFS
// end state: leaf where length of substring = length of original. Then add it to result
// do a for loop from start index to end index
// call dfs with existing path, and start index
// for each character in the string, add it to path then call DFS with it
// might need to update orig str array? or pas through available options array

// ALEC note: all permutations is similar to combinatorial. Except we can only use a character once.
// so we have to keep track of which ones we've used

// time: O(n!); n = length of string
// space: O(n) - because changing in place
const gen_all_perms = (letters) => {
    const result = [];

    const used = letters.map((x) => 0);

    const dfs = (path, used) => {
        if (path.length === letters.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < used.length; i++) {
            if (!used[i]) {
                path.push(letters[i]);
                used[i] = 1;
                dfs(path, used);
                used[i] = 0;
                path.pop();
            }
        }
    };

    dfs([], used);

    return result;
};

console.log(gen_all_perms([1, 2, 3]));

// Keys
// - have to keep track of an extra state: "used". Since we can only use each character once.
