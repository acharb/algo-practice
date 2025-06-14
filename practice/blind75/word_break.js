// https://leetcode.com/problems/word-break/description/

// Word Break
// Medium

// Given a string s and a dictionary of strings wordDict, return true if s can be
// segmented into a space-separated sequence of one or more dictionary words.
// The same word in the dictionary may be reused multiple times in the segmentation.
// Example:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

const wordBreak = (str, words) => {
  const wordDict = new Set(words);
  const dp = new Array(str.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < i; j++) {
      const substr = str.substring(j, i);
      if (dp[j] && wordDict.has(substr)) {
        dp[i] = 1;
        break;
      }
    }
  }

  if (dp[dp.length - 1]) return true;
  return false;
};

console.log(wordBreak("leetcode", ["leet", "code"]));
// console.log(
//   wordBreak("catsandog", {
//     cats: true,
//     dog: true,
//     sand: true,
//     and: true,
//     cat: true,
//   }),
// );
// console.log(
//   wordBreak("applepenapple", {
//     apple: true,
//     pen: true,
//   }),
// );
