// https://leetcode.com/problems/maximal-square/description/

// Maximal Square

// Given a binary matrix, find out the largest size square sub-matrix with all 1's and return its area.
// Input

//     matrix: a binary matrix

// Output

// the area of the largest square in the input matrix
// Examples
// Example 1:

// Input:

// matrix =
// [[1, 0, 1, 0, 0],
//  [1, 0, 1, 1, 1],
//  [1, 1, 1, 1, 0],
//  [1, 0, 0, 1, 0]]

// Output: 4

// Explanation:

// The largest square is of size 2x2 and area 4.

// Soln:
// start from bottom right to top left
// if right, below, and diagonal are all > 0
// then add one to the minimum of the 3

// O(N) time or O(m*n), O(N) or O(m*n) space
const maximalSquare = (matrix) => {
  if (matrix.length <= 1) {
    for (const val of matrix[0]) {
      if (parseInt(val)) return 1;
    }
    return 0;
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      const right = matrix[i][j + 1];
      const below = matrix[i + 1] ? matrix[i + 1][j] : undefined;
      const diag = matrix[i + 1] ? matrix[i + 1][j + 1] : undefined;

      if (
        parseInt(matrix[i][j]) &&
        parseInt(right) &&
        parseInt(below) &&
        parseInt(diag)
      ) {
        matrix[i][j] = parseInt(Math.min(right, below, diag)) + 1;
      }
    }
  }

  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (parseInt(matrix[i][j]) > max) max = matrix[i][j];
    }
  }

  return max * max;
};

// const matrix = [
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 0],
//   [1, 0, 0, 1, 0],
// ];

// console.log(maximalSquare(matrix));

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

// const matrix = [
//   ["0", "0"],
//   ["0", "0"],
// ];

console.log(maximalSquare(matrix));

// Keys
// - to realize that at every upper right corner of a square, it's max length square (if 1 itself)
// is the min of its neighbors plus 1.
