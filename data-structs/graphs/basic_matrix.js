// (directional, since not a weight for each reverse)
// (rows are source (y-axis numbers), columns are destination,
//   rows are essentially the i of (i,j)
//     0 1 2 3
// 0 [ 0 1 1 0 ]
// 1 [ 0 0 0 1 ]
// 2 [ 0 0 0 0 ]
// 3 [ 1 0 0 0 ]

class Graph {
  constructor(numOfNodes) {
    this.matrix = [];

    for (let i = 0; i < numOfNodes; i++) {
      this.matrix.push(new Array(numOfNodes).fill(0));
    }
  }

  insert(idx, neighbor) {
    this.matrix[idx][neighbor] = 1;
    this.matrix[neighbor][idx] = 1;
  }
}

const g = new Graph(4);

console.log(g.matrix);

g.insert(0, 1);
console.log(g.matrix);

g.insert(0, 2);
console.log(g.matrix);

g.insert(1, 3);
console.log(g.matrix);

g.insert(3, 0);
console.log(g.matrix);
