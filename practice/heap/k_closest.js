// https://leetcode.com/problems/k-closest-points-to-origin/submissions/1663397597/

// K Closest Points

// Given a list of points on a 2D plane. Find k closest points to the origin (0, 0).

// Input: [(1, 1), (2, 2), (3, 3)], 1

// Output: [(1, 1)]

class MinHeap {
  constructor() {
    this.data = [];
  }

  insert(point) {
    this.data.push(point);
    this.bubbleUp(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();

    const min = this.data[0];
    this.data[0] = this.data.pop(); // Assign last element to root
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(i) {
    const length = this.data.length;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (
        left < length &&
        distanceFromOrigin(this.data[left]) <
          distanceFromOrigin(this.data[smallest])
      ) {
        smallest = left;
      }

      if (
        right < length &&
        distanceFromOrigin(this.data[right]) <
          distanceFromOrigin(this.data[smallest])
      ) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }

  bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (
        distanceFromOrigin(this.data[i]) < distanceFromOrigin(this.data[parent])
      ) {
        [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
        i = parent;
      } else {
        break;
      }
    }
  }
}

const distanceFromOrigin = (point) => {
  return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
};

// O(N*logN)
const closestK = (arr, k) => {
  const h = new MinHeap();

  for (const point of arr) {
    h.insert(point);
  }

  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(h.pop());
  }
  return result;
};

console.log(
  closestK(
    [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    1,
  ),
);

console.log(
  closestK(
    [
      [100, 1],
      [2, 20],
      [10, 3],
      [1, 3],
      [5, 9],
    ],
    3,
  ),
);
