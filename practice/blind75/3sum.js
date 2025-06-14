// https://leetcode.com/problems/3sum/description/

// 3Sum
// Medium

// Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]]
// such that i != j != k and nums[i] + nums[j] + nums[k] == 0. The solution set must
// not contain duplicate triplets.

// Example:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: The unique triplets that sum to zero are [-1, -1, 2] and [-1, 0, 1].

//

const three_sum = (nums) => {
  nums.sort((a, b) => a - b);

  const output = [];

  // can also just keep track of previous values to make sure not the same, but I like this solution
  const used = {};

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        if (!used[`${nums[i]}${nums[j]}${nums[k]}`]) {
          output.push([nums[i], nums[j], nums[k]]);
          used[`${nums[i]}${nums[j]}${nums[k]}`] = true;
        }

        j++;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }

  return output;
};

// console.log(three_sum([-1, 0, 1, 2, -1, -4]));
// console.log(three_sum([1, -1, 2, -2, 3, -3, 4, -4]));
console.log(three_sum([-2, 5, 3, 1, 2, -2, 4, -3, 4, 1]));

// Keys
// - (I think this could also be done with a hash map)
// - sorting the array, and then using two pointers to find the two values that add to 0 for each i
