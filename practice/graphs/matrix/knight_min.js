// https://leetcode.com/problems/minimum-knight-moves/description/

// Knight Minimum Moves

//     Prereq: BFS on Graph

// On an infinitely large chessboard, a knight is located on [0, 0].

// A knight can move in eight directions.

// Given a destination coordinate [x, y], determine the minimum number of moves from [0, 0] to [x, y].

// BFS, from 0,0
// keep track of level
// queue : [[1,3],[2,1],[2,-1] ...]
// once we hit coordinate, return level

// keep a seen, as a map of a map

// (x+2, y+1), (x+2, y-1) ...

const knight_min = (x, y) => {
    const queue = [];

    queue.push([0, 0]);

    let level = 0;

    // TODO: improvement: just use the 'xy' as the key to the map

    const seen = {};

    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [curX, curY] = queue.shift();

            if (curX === x && curY === y) {
                return level;
            }

            const delta = [
                [2, 1],
                [2, -1],
                [1, 2],
                [1, -2],
                [-2, 1],
                [-2, -1],
                [-1, 2],
                [-1, -2],
            ];

            for (const [deltaX, deltaY] of delta) {
                if (seen[curX + deltaX] && seen[curX + deltaX][curY + deltaY]) {
                    continue;
                }
                queue.push([curX + deltaX, curY + deltaY]);
                if (!seen[curX]) seen[curX] = {};
                seen[curX][curY] = 1;
            }
        }
        level += 1;
    }
};

console.log(knight_min(2, 112));
