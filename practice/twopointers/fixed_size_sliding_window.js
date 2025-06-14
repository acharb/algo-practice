// https://algo.monster/problems/subarray_sum_fixed

// Fixed Size Sliding Window

// Given an array (list) nums consisted of only non-negative integers,
// find the largest sum among all subarrays of length k in nums.

// For example, if the input is nums = [1, 2, 3, 7, 4, 1], k = 3,
// then the output would be 14 as the largest length 3 subarray sum
// is given by [3, 7, 4] which sums to 14.

// O(N)
const fixedSize = (arr, k) => {
  if (k > arr.length) return -1;

  // Get initial sum

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let maxSum = sum;

  let i = 0;
  let j = k;

  let newSum = sum;
  while (j < arr.length) {
    newSum += arr[j];
    newSum -= arr[i];
    if (newSum > maxSum) {
      maxSum = newSum;
    }
    j += 1;
    i += 1;
  }

  return maxSum;
};

console.log(fixedSize([1, 2, 3, 7, 4, 1], 3));
console.log(fixedSize([1, 2, 3, 7, 4, 1], 1));
console.log(fixedSize([1, 2, 3, 7, 4, 1], 6));
