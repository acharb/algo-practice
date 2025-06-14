// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

// Generate All Letter Combinations from a Phone Number

//     Prereq: Backtracking

// Given a phone number that contains digits 2-9, find all possible letter
// combinations the phone number could translate to.

// dfs
// at each level, there are 3 or 4 options
// create a map for number to letter options
// at the level, add each option to path and pass to next level
// if at level that equals string length, then add to result and return

// O(N) time O(N) space
const genPhoneNumbers = (number) => {
    const digitToLetterMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };

    const result = [];

    const dfs = (level, path, res) => {
        if (level === number.length) {
            if (path.length) {
                res.push(path.join(""));
            }
            return;
        }

        const options = digitToLetterMap[number[level]];

        for (const option of options) {
            path.push(option);
            dfs(level + 1, path, res);
            path.pop();
        }
    };

    dfs(0, [], result);

    return result;
};

console.log(genPhoneNumbers("56"));
// console.log(genPhoneNumbers("624"));

console.log(genPhoneNumbers(""));
