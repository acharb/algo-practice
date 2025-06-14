// https://leetcode.com/problems/container-with-most-water/description/

// Container With Most Water
// Medium

// Given an integer array height where height[i] represents the height of a
// vertical line at index i, find two lines that together with the x-axis form
// a container that holds the most water. Return the maximum amount of water a
// container can store.

// Example:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The best container is formed between the second (height = 8)
// and last (height = 7) vertical lines, storing 49 units of water.

const container = (heights) => {
  let leftI = 0;
  let rightI = heights.length - 1;

  let maxArea = 0;

  while (leftI !== rightI) {
    const width = rightI - leftI;
    const area = width * Math.min(heights[leftI], heights[rightI]);
    maxArea = Math.max(maxArea, area);

    if (heights[leftI] < heights[rightI]) {
      leftI++;
    } else {
      rightI--;
    }
  }

  return maxArea;
};

console.log(container([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(container([1, 1]));

// Key insight
// - that you always should move the smaller height in. It's never possible to get a
//    larger area by decreasing the larger height
