// https://algo.monster/problems/largest_divisible_subset

// Largest Divisible Subset

// You are given a set of numbers nums consisting of distinct numbers.
// Find the size of the largest subset that satisfies the following condition:
// for each two number pairings in the set, one number is divisible by the other.
// Input

//     nums: a list integers representing the set.

// Output

// An integer representing the size of the largest subset that satisfy the condition.
// Examples
// Example 1:

// Input:

// nums = [1, 2, 3]

// Output: 2

// Explanation:

// Either [1, 2] or [1, 3] satisfy the condition, because both 2 and 3 are both divisible by 1. Either way, the largest set has a size of 2.
// Example 2:

// Input:

// nums = [1, 2, 4, 8]

// Output: 4

// Explanation:

// In this set, for each pair of numbers, at least one is divisible by the other because they are all powers of 2. As such, the max subset has a size of 4, the size of the original set.
// Constraints

//     1 <= len(nums) <= 1000
//     1 <= nums[i] <= 10^9
//     Each number in nums is unique

// Soln

// start from end (i) go to left
// go from i to end (j)
// if nums[j] is divisible by nums[i], check if it's the max in memo. if so add one in memo[i]
// go through at end to find max

const largestDivis = (nums) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    const memo = new Array(nums.length).fill(1);

    nums.sort((a, b) => a - b);

    for (let i = nums.length - 2; i >= 0; i--) {
        let localMax = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] % nums[i] === 0) {
                localMax = Math.max(localMax, memo[j]);
            }
        }
        memo[i] = localMax + 1;
    }


    return Math.max(...memo);
};

// Keys
// - have to remember to sort first, so can do the DP algo

console.log(largestDivis([1, 2, 4, 8, 3, 4]));
