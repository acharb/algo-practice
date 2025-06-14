// https://leetcode.com/problems/longest-palindromic-substring/description/

// Longest Palindromic Substring
// Medium

// Given a string s, return the longest palindromic substring in s.
// A palindrome is a string that reads the same backward as forward.
// Example:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// Soln
// create dp of s.length x s.length
// go through all single chars, each is in a pal so mark it
// then do every 2 chars
// then do 3+ lengths
// if s[i] == s[j] and inner substring is a palindrome, then s[i:j] is
// when finding a palindrome, keep track of largest length

// O(n^2)
const longest = (str) => {
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  let longest = str[0];

  // each single char is a palindrome
  // lets also check pairs of chars
  for (let i = 0; i < str.length; i++) {
    dp[i][i] = 1;
    if (i >= str.length - 1) continue;

    if (str[i] == str[i + 1]) {
      dp[i][i + 1] = 1;
      longest = str[i] + str[i + 1];
    }
  }

  for (let length = 3; length <= str.length; length++) {
    for (let i = 0; i <= str.length - length; i++) {
      const j = i + length - 1;
      if (str[i] == str[j] && dp[i + 1][j - 1]) {
        dp[i][j] = 1;
        longest = str.slice(i, j + 1);
      }
    }
  }

  return longest;
};

console.log(longest("babad"));
console.log(longest("cbbd"));
