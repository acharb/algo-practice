// https://leetcode.com/problems/palindrome-partitioning/description/

// Partitioning A String Into Palindromes

//     Prereq: Backtracking

// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.
// Examples
// Example 1:
// Input: aab
// Output:

//   [
//   ["aa","b"],
//   ["a","a","b"]
//   ]

// Soln
// DFS
// go down the branch of the tree. If one of them isn't a palindrome, return failed

const partition = (str) => {
  const results = [];

  const isPalindrome = (str) => {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  const dfs = (start, path) => {
    if (start === str.length) {
      results.push([...path]);
      return;
    }

    for (let end = start + 1; end <= str.length; end++) {
      const substr = str.slice(start, end);

      if (isPalindrome(substr)) {
        path.push(substr);
        dfs(end, path);
        path.pop();
      }
    }
  };

  dfs(0, []);

  return results;
};
console.log(partition("ssssssssssssss"));
