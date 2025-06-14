// https://leetcode.com/problems/longest-increasing-subsequence/description/

// Longest Increasing Subsequence
// Input

//     nums: the integer sequence

// Output

// the length of longest increasing subsequence
// Examples
// Example 1:

// Input:

// nums = [50, 3, 10, 7, 40, 80]

// Output: 4

// Explanation:

// The longest increasing subsequence is [3, 7, 40, 80] which has length 4.
// Example 2:

// Input:

// nums = [1, 2, 4, 3]

// Output: 3

// Explanation:

// Both [1, 2, 4] and [1, 2, 3] are longest increasing subsequences which have length 3.

// Soln:
// create memo array
// go from right to left
// at each element, go through all the elements to the right. if memo[i] < nums[j],
// then find the max of those and add 1 and save to memo[i]

const lis = (nums) => {
    const memo = new Array(nums.length).fill(1);

    for (let i = nums.length - 2; i >= 0; i--) {
        let localMax = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                localMax = Math.max(localMax, memo[j]);
            }
        }
        memo[i] = localMax + 1;
    }

    let max = 1;

    for (const mem of memo) {
        max = Math.max(max, mem);
    }

    return max;
};

console.log(lis([50, 3, 10, 7, 40, 80]));
// console.log(lis([10, 9, 2, 5, 3, 7, 101, 18]));

// Keys
// - i was reluctant to do the n^2 solution because I thought I might have to find O(n) one, but
// the solution is actually n^2
