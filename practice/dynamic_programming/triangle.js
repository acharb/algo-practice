// https://leetcode.com/problems/triangle/description/

// Triangle

// The problem is to find the minimum path sum from top to bottom if given a triangle.
// Each step you may move to adjacent numbers on the row below.
// Input

//     triangle: see example

// Output

// the minimum path sum
// Examples
// Example 1:

// Input:

// triangle = [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]

// Output: 11

// Explanation:

// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11.

// O(N) space. O(N) time (or O(n^2); n=height)
const minPath = (triangle) => {
    if (triangle.length == 1) return triangle[0][0];

    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            const left = triangle[i + 1][j];
            const right = triangle[i + 1][j + 1];

            let newWeight = triangle[i][j];

            newWeight = newWeight + (left < right ? left : right);

            triangle[i][j] = newWeight;
        }
    }

    return triangle[0][0];
};

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minPath(triangle));
console.log(minPath([[4]]));
