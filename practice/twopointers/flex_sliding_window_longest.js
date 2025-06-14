// https://algo.monster/problems/subarray_sum_longest

// Flexible Size Sliding Window - Longest

// Recall finding the largest size k subarray sum of an integer array in Largest Subarray Sum.
// What if we don't need the largest sum among all subarrays of fixed size k, but instead,
// we want to find the length of the longest subarray with sum smaller than or equal to a target?

// Given input nums = [1, 6, 3, 1, 2, 4, 5] and target = 10,
// then the longest subarray that does not exceed 10 is [3, 1, 2, 4],
// so the output is 4 (length of [3, 1, 2, 4]).

// O(N)
const slidingWindow = (arr, target) => {
  if (arr.length < 2) {
    return arr.length;
  }

  let i = 0;
  let j = 1;

  let longestSub = 0;

  let sum = arr[i] + arr[j];

  while (j < arr.length) {
    if (i == j) {
      j += 1;
      if (arr[j]) sum += arr[j];
    }

    if (sum <= target) {
      // update longest if needed
      if (j - i + 1 > longestSub) longestSub = j - i + 1;
      j += 1;

      if (arr[j]) sum += arr[j];
    } else {
      sum -= arr[i];
      i += 1;
    }
  }

  return longestSub;
};

console.log(slidingWindow([1, 6, 3, 1, 2, 4, 5], 10));

console.log(slidingWindow([10, 2, 3, 1], 1));

console.log(slidingWindow([0, 0, 0, 0], 0)); // should be 4
