// https://leetcode.com/problems/minimum-path-sum/description/

// Minimal Path Sum

// Suppose we have a m by n matrix filled with non-negative integers,
// find a path from top left corner to bottom right corner which minimizes
// the sum of all numbers along its path.

//     Note: Movements can only be either down or right at any point in time.

// Example:
// Input:

// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]

// Output: 7
// Explanation:

// Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Soln
// start at the end
// if no above or left, it's corner so keep it's weight
// select right side and below. whichever is least, add that to its current weight
// keep going, top left is the final weight

const min_path_sum = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) continue; // Bottom-right cell, do nothing

      const down = i + 1 < m ? matrix[i + 1][j] : Infinity;
      const right = j + 1 < n ? matrix[i][j + 1] : Infinity;

      matrix[i][j] += Math.min(down, right);
    }
  }

  return matrix[0][0];
};

console.log(
  min_path_sum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);
