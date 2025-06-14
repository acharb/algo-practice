// https://leetcode.com/problems/number-of-islands/description/

// Find the Number of Islands

// Given a 2-dimensional matrix of values with 0 and 1, count the number of islands of 1.
// An island consists of all 1 value cells and is surrounded by either an edge or all 0 cells.
// Cells can only be adjacent to each other horizontally or vertically, not diagonally.

// BFS
// For each node
//  - if not in seen, and a 1, start BFS on it
// go through BFS
// store seen in map
// once queue is empty. we increment island counter.

const find_num_islands = (arr) => {
    // create seen matrix
    const seen = [];
    for (let r = 0; r < arr.length; r++) {
        seen.push([]);
        for (let c = 0; c < arr[0].length; c++) {
            seen[r].push(0);
        }
    }

    let islands = 0;

    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[0].length; c++) {
            // start BFS

            if (parseInt(arr[r][c]) === 1 && seen[r][c] !== 1) {
                const queue = [];
                queue.push([r, c]);
                seen[r][c] = 1;

                while (queue.length) {
                    const [curR, curC] = queue.shift();

                    const deltas = [
                        [0, 1],
                        [1, 0],
                        [0, -1],
                        [-1, 0],
                    ];
                    for (const [deltaR, deltaC] of deltas) {
                        const row = curR + deltaR;
                        const col = curC + deltaC;

                        if (
                            row < 0 ||
                            col < 0 ||
                            row >= arr.length ||
                            col >= arr[0].length
                        ) {
                            continue;
                        }

                        if (
                            parseInt(arr[row][col]) === 1 &&
                            seen[row][col] === 0
                        ) {
                            queue.push([row, col]);
                            seen[row][col] = 1;
                        }
                    }
                }
                islands += 1;
            }
        }
    }

    return islands;
};

const arr = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];
console.log(find_num_islands(arr));

// const arr = [
//     [1, 1, 1, 0, 0],
//     [1, 1, 1, 0, 0],
//     [1, 1, 1, 0, 0],
//     [0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0],
// ];

// console.log(find_num_islands(arr));

// const arr1 = [
//     [1, 1, 1, 0, 0],
//     [1, 1, 1, 0, 0],
//     [1, 1, 1, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0],
// ];

// console.log(find_num_islands(arr1));

// const arr2 = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
// ];

// console.log(find_num_islands(arr2));
