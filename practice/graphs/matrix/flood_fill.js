// https://leetcode.com/problems/flood-fill/description/

// Flood Fill

// In computer graphics, an uncompressed raster image is presented as a matrix of numbers.
// Each entry of the matrix represents the color of a pixel. A flood fill algorithm takes
// a coordinate r, c and a replacement color, and replaces all pixels connected to r, c
// that have the same color (i.e., the pixels connected to the given coordinate with same
// color and all the other pixels connected to the those pixels of the same color) with the
// replacement color. (e.g. MS-Paint's paint bucket tool).

// Input

//     r: row
//     c: column
//     replacement: replacement color
//     image: an 2D array of integers representing the image

// Output

// the replaced image
// Examples
// Example 1:

// Input:

// r = 2
// c = 2
// replacement = 9
// arr = [
//     [0,1,3,4,1],
//     [3,8,8,3,3],
//     [6,7,8,8,3],
//     [12,2,8,9,1],
//     [12,3,1,3,2]
// ]

// Output: [
//     [0,1,3,4,1],
//     [3,9,9,3,3],
//     [6,7,9,9,3],
//     [12,2,9,9,1],
//     [12,3,1,3,2]
// ]

// Explanation:

// From

// 0 1 3 4 1
// 3 8 8 3 3
// 6 7 8 8 3
// 12 2 8 9 1
// 12 3 1 3 2

// to

// 0 1 3 4 1
// 3 9 9 3 3
// 6 7 9 9 3
// 12 2 9 9 1
// 12 3 1 3 2

// bfs
// start at r,c
// add each of the neighbors to queue
// dequeue
// if node is the same number, change it to replacement
//   add each of their children to queue (check seen)
// once queue is empty, finish

const floodFill = (arr, r, c, replacement) => {
    if (r < 0 || c < 0) return -1;
    if (r - 1 >= arr.length) return -1;
    if (c - 1 >= arr[0].length) return -1;

    const queue = [];

    queue.push([r, c]);

    const changeNum = arr[r][c];

    const seen = [];
    for (let i = 0; i < arr.length; i++) {
        seen.push([]);
        for (let j = 0; j < arr[i].length; j++) {
            seen[i].push(0);
        }
    }

    while (queue.length) {
        // would use better queue
        // const [r, c] = queue.shift();
        const [r, c] = queue.pop();

        if (arr[r][c] === changeNum) {
            arr[r][c] = replacement;

            if (r - 1 >= 0 && seen[r - 1][c] === 0) {
                queue.push([r - 1, c]);
                seen[r - 1][c] = 1;
            }
            if (c + 1 < seen[r].length && seen[r][c + 1] === 0) {
                queue.push([r, c + 1]);
                seen[r][c + 1] = 1;
            }
            if (r + 1 < seen.length && seen[r + 1][c] === 0) {
                queue.push([r + 1, c]);
                seen[r + 1][c] = 1;
            }
            if (c - 1 >= 0 && seen[r][c - 1] === 0) {
                queue.push([r, c - 1]);
                seen[r][c - 1] = 1;
            }
        }
    }

    return arr;
};

// const r = 2;
// const c = 2;
// const replacement = 9;
// const arr = [
//     [0, 1, 3, 4, 1],
//     [3, 8, 8, 3, 3],
//     [6, 7, 8, 8, 3],
//     [12, 2, 8, 9, 1],
//     [12, 3, 1, 3, 2],
// ];

const arr = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
];

const r = 1;
const c = 1;
const color = 2;

// console.log(floodFill(arr, r, c, replacement));

console.log(floodFill(arr, 1, 1, color));

console.log(
    floodFill(
        [
            [0, 0, 0],
            [0, 0, 0],
        ],
        0,
        0,
        0,
    ),
);
