// https://leetcode.com/problems/alien-dictionary/description/

// Alien Dictionary

// Note that this problem requires knowing heap, which is covered in the
//  Priority Queue/Heap section. If you are working through the content in
//  order, feel free to skip this problem and come back after you have completed the heap section.

// There is a new alien language which uses the latin alphabet. However,
// the order among letters are unknown to you.

// You receive a list of non-empty words from the dictionary, where words are
// sorted lexicographically by the rules of this new language.

// Derive the order of letters in this language.

// Note:

//     You may assume all letters are in lowercase.
//     Every letter that appears in the input must also appear in the output,
//     and your output cannot have characters not in the input.
//     If no ordering of letters makes the dictionary sorted lexicographically,
//     return an empty string.
//     There may be multiple valid orders. If that's the case, return the smallest
//     in normal lexicographical order.

// Input

//     words: A list of strings of size n, representing the dictionary words sorted
//      lexicographically in the alien language.

// Output

// A string representing the smallest possible lexicographical order, or an
// empty string if no valid order exists.

// Examples
// Example 1:

// Input:

// words = ["wrt","wrf","er","ett","rftt"]

// Output: wertf

// Explanation:

// Example 2:

// Input:

// words = ["z","x"]

// Output: zx

// Explanation:

// From z and x，we can get z < x. So return zx.
// Constraints

//     2 <= n <= 10000
//     1 <= words[i] <= 30

// Khan's algo
// - go through each word and compare to the next word
//   find the first different character. Once it's different, add second to in-deg map with +1

const alien_dict = (words) => {
    const queue = [];
    const inDeg = {};
    const adjList = {};
    const output = [];

    // Create adj list
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const nextWord = words[i + 1];
        if (!nextWord) continue;
        for (let wordI = 0; wordI < word.length; wordI++) {
            const currentLetter = word[wordI];
            const neighborLetter = nextWord[wordI];

            // if we got to this point, then the two words are the same, so skip
            if (!neighborLetter) continue;

            if (currentLetter !== neighborLetter) {
                if (!adjList[currentLetter]) adjList[currentLetter] = [];
                //  TODO - need?
                if (adjList[currentLetter].includes(neighborLetter)) continue;
                adjList[currentLetter].push(neighborLetter);
                break;
            }
        }
    }

    for (const word of words) {
        for (const letter of word) {
            if (!adjList[letter]) adjList[letter] = [];
        }
    }

    // Create in-deg map

    for (const letter of Object.keys(adjList)) {
        for (const pointingTo of adjList[letter]) {
            if (!inDeg[pointingTo]) inDeg[pointingTo] = 0;
            inDeg[pointingTo] += 1;
        }
        if (!inDeg[letter]) inDeg[letter] = 0;
    }

    // Kahn's algo

    for (const letter of Object.keys(adjList)) {
        if (inDeg[letter] === 0) queue.push(letter);
    }

    while (queue.length) {
        const current = queue.shift();
        output.push(current);
        for (const pointingTo of adjList[current]) {
            inDeg[pointingTo] -= 1;
            if (inDeg[pointingTo] === 0) {
                queue.push(pointingTo);
            }
        }
    }

    if (output.length !== Object.keys(inDeg).length) return "";
    return output.join("");
};

// console.log(alien_dict(["wrt", "wrf", "er", "ett", "rftt"]));
console.log(alien_dict(["wrt", "wrf", "far"]));

// Keys
// - we have to use a min-heap instead of queue for khan's algo bc of the requirement "there could be
// multiple valid orders. Return the smallest in normal lexicographical order.". So we need to sort
// the queue lexicographically to make sure we're always returning the right order

// - for kahn's algo need to create the graph (eg adj list)

// - to see if there's a cycle, you can check that the in-deg map has all nodes go to 0 at the end.
// If not, then there was no valid way to start that node

// ALEC NOTES
// - changing this to be you can return any solution, so don't need to use a min heap + kahn's algo
// that's the traditional way of doing you'll find online
// - can try doing w/ a min heap afterward for lexicographically ordering
