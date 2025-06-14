// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// Given an array of integers sorted in ascending order,
// find two numbers that add up to a given target.
// Return the indices of the two numbers in ascending order.
// You can assume elements in the array are unique and there is only one solution.
// Do this in O(n) time and with constant auxiliary space.

// Input:

//     arr: a sorted integer array
//     target: the target sum we want to reach

// Sample Input: [2, 3, 4, 5, 8, 11, 18], 8

// Sample Output: 1 3

// O(N)
const twoSum = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        if (arr[l] + arr[r] === target) {
            return [l + 1, r + 1];
        }

        if (arr[l] + arr[r] < target) {
            l += 1;
        } else {
            r -= 1;
        }
    }
};

// console.log(twoSum([2, 3, 4, 5, 8, 11, 18], 8));

console.log(twoSum([2, 7, 11, 15], 9));
