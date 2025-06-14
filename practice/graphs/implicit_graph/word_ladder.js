// https://leetcode.com/problems/word-ladder/description/

// Word Ladder

// Word Ladder is "A puzzle begins with two words, and to solve the puzzle one must
// find a chain of other words to link the two, in which two adjacent words
// (that is, words in successive steps) differ by one letter."

// For example: COLD → CORD → CARD → WARD → WARM

// Given a start word, an end word, and a list of dictionary words, determine the
// minimum number of steps to go from the start word to the end word using only words
// from the dictionary.

// Input:

// start = "COLD"
// end = "WARM"
// word_list = ["COLD", "GOLD", "CORD", "SOLD", "CARD", "WARD", "WARM", "TARD"]

// Output:

// 4

// Explanation: We can go from COLD to WARM by going through COLD → CORD → CARD → WARD → WARM

// BFS
// change each letter of the word, go through each letter of the alphabet
//   if it's in the word list, add it to queue
// keep track of level
// if we find the end word, return level

const wordLadder = (start, end, word_list) => {
    const wordSet = new Set(word_list);
    if (!wordSet.has(end)) return 0;

    const queue = [];

    const seen = {};

    queue.push(start);
    seen[start] = true;

    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    let level = 1;

    while (queue.length) {
        const size = queue.length;

        for (i = 0; i < size; i++) {
            const current = queue.shift();

            if (current === end) {
                return level;
            }

            for (let splitI = 0; splitI < current.length; splitI++) {
                for (const letter of alphabet) {
                    if (letter === current[splitI]) continue;

                    const split = current.split("");
                    split[splitI] = letter.toLowerCase();
                    const joined = split.join("");

                    if (wordSet.has(joined) && !seen[joined]) {
                        queue.push(joined);
                        seen[joined] = true;
                    }
                }
            }
        }
        level += 1;
    }

    return 0;
};

console.log(
    wordLadder("COLD", "WARM", [
        "COLD",
        "GOLD",
        "CORD",
        "SOLD",
        "CARD",
        "WARD",
        "WARM",
        "TARD",
    ]),
);

console.log(
    wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
);
