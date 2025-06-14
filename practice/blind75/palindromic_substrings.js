// https://leetcode.com/problems/palindromic-substrings/description/

// Palindromic Substrings
// Medium

// Given a string s, return the number of palindromic substrings in it.
// A substring is a contiguous sequence of characters within the string.
// A palindrome is a string that reads the same backward as forward.
// Example:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Soln
// - create a dp matrix of s.length x s.length
// loop through s, with different lengths. Starting at 1 char, then 2, then 3 etc
// update dp matrix as you go if it's a palindrome
// if s[i] === s[j] and the substring in between is also a palindrome (dp[i+1][j-1]).
//    then it's a palindrome

const palinSubstr = (str) => {
  let count = 0;
  const dp = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    dp[i] = new Array(str.length).fill(0);
  }

  // loop through each char, which are palin
  for (let i = 0; i < str.length; i++) {
    dp[i][i] = 1;
    count++;
  }

  // loop through each 2 chars
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      dp[i][i + 1] = 1;
      count++;
    }
  }

  // loop through 3+

  for (let length = 3; length <= str.length; length++) {
    for (let i = 0; i <= str.length - length; i++) {
      const j = i + length - 1;
      if (str[i] === str[j] && dp[i + 1][j - 1]) {
        dp[i][j] = 1;
        count++;
      }
    }
  }

  return count;
};

console.log(palinSubstr("aboba"));
console.log(palinSubstr("abc"));
console.log(palinSubstr("aaa"));

// Keys
// - that the looping is by lengths (first 1 char, then 2, then 3 etc)
// - the insight that if s[i] and s[j] are equal and the inner substring is, then its a palindrome

// // Alec thouhghts
// Ok i get it i think. so we go through the string as lengths. first 1 char, then 2, then 3 etc
// - and we fill out the DP array. And we check smaller lengths.
// - if s[i] == s[j] and the substring in between of 2 character length smaller is a palindrome, then this one is

// but how efficient is this?
// n + n + n + n + n

// length of s * length of s == n^2?

// whats the brute force?
// n + (n-1) + (n-2) ... doesnt that also go to n^2?

// ahhh, brute force is actually n^3. Because for each substring, to check if its a palindrome
// you have to run through n

// so looping through lengths is similar n^2. but it allows us to save lengths in DP. That we can save time with later
