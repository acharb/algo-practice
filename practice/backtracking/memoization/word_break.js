// https://leetcode.com/problems/word-break/description/

// Word Break

//     Prereq: Memoization Intro

// Given a string and a list of words, determine if the string can be constructed from
// concatenating words from the list of words. A word can be used multiple times.

// Input:

// target = "algomonster"
// words = ["algo", "monster"]

// Output: true

// Input:

// target = "aab"
// words = ["a", "c"]

// Output: false

// Soln:
// - go through every dict entry, if it is a prefix of target, then continue down that tree, and save path
// - keep going thorugh each dict to append and check if it's prefix
// - once reached, return constructed

// Not using memoization
// TODO: time complexity?
const wordBreak = (target, words) => {
    const seenWords = {};

    const dfs = (path) => {
        if (path === target) {
            return true;
        }

        for (const word of words) {
            const newWord = path + word;
            if (seenWords[newWord]) continue;

            // memoize so we don't re-travel same trees
            seenWords[newWord] = true;
            if (target.slice(0, newWord.length) === newWord) {
                const isSuccess = dfs(newWord);
                if (isSuccess) return true;
            }
        }
    };

    return dfs("") || false;
};

console.log(wordBreak("ababcacd", ["ab", "c", "a", "abab"]));
