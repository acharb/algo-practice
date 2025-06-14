// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Remove Duplicates

// Given a sorted list of numbers, remove duplicates and return the new length.
// You must do this in-place and without using extra memory.

// Input: [0, 0, 1, 1, 1, 2, 2].

// Output: 3.

// Your function should modify the list in place so that the first three elements become 0, 1, 2.
// Return 3 because the new length is 3.

// SOLUTION - O(N) time, O(N) space
// - two pointers. Fast one starts at 1 then progresses to the end. Compare values with slow pointer.
//   if a different one, then increment slow, and change value to the fast pointer one. Keep moving.
//   continue until fast pointer at the end.
// - once done, slow pointer will have the length of the new array
// - key here is to notice that you don't have to restart fast pointer from slow pointer.
// - also key is we don't have to pop/splice out the values. we can just return pointer value since just returning a length

const removeDuplicates = (arr) => {
  if (!arr || !arr.length) return 0;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] != arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
    j += 1;
  }

  return i + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2]));

console.log(removeDuplicates([]));

console.log(removeDuplicates([0, 1, 2, 3]));

// Gotchas
// - be careful of using .splice for the array - O(N) to do, which can be costly
