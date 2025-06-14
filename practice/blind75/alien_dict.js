// https://leetcode.com/problems/alien-dictionary/description/

// Alien Dictionary
// Hard

// Given a list of words sorted lexicographically in an unknown language,
// determine the order of characters in the alphabet of that language.
// If no valid ordering exists, return an empty string.

// Example:

// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"
// Explanation: The order of letters is "w -> e -> r -> t -> f".

// Input: words = ["z","x","z"]
// Output: ""
// Explanation: There is a cycle (z -> x -> z), so no valid ordering exists.

// Soln
// create an adjacency list from words
// create an in-deg map from adjacency list
// do Kahn's algo, using BFS w/ in-deg map
// creates a topological sort from the map
// if there's a cycle, where in-deg for all doesn't equal 0, return ""

// {
//   t: [f],
//   r: [t],
//   w: [e]
// }

const alien_dict = (words) => {
  const adjList = {};
  const inDeg = {};
  // Create adjacency List
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    for (let wordI = 0; wordI < word1.length; wordI++) {
      if (word1[wordI] !== word2[wordI]) {
        const char1 = word1[wordI];
        const char2 = word2[wordI];

        // shouldn't happen if lexicographically sorted
        if (!char2) return "";

        if (!adjList[char1]) adjList[char1] = [];
        adjList[char1].push(char2);
        break;
      }
    }
  }

  // make sure all characters there
  for (const word of words) {
    for (const char of word) {
      if (!adjList[char]) adjList[char] = [];
    }
  }

  // Create in-deg map
  for (const key of Object.keys(adjList)) {
    for (const char of adjList[key]) {
      if (!inDeg[char]) inDeg[char] = 0;
      inDeg[char] += 1;
    }
    if (!inDeg[key]) inDeg[key] = 0;
  }

  // Do BFS with in-deg map
  const queue = [];
  for (const key of Object.keys(inDeg)) {
    if (inDeg[key] === 0) {
      queue.push(key);
    }
  }

  const output = [];
  // pointer for faster queue
  let i = 0;

  while (i < queue.length) {
    const current = queue[i];
    i++;
    output.push(current);
    for (const char of adjList[current]) {
      inDeg[char] -= 1;
      if (inDeg[char] === 0) {
        queue.push(char);
      }
    }
  }

  // make sure all inDeg is 0
  for (const key of Object.keys(inDeg)) {
    if (inDeg[key] !== 0) {
      return "";
    }
  }

  return output.join("");
};

console.log(alien_dict(["wrt", "wrf", "er", "ett", "rftt"]));
