// https://leetcode.com/problems/sequence-reconstruction/description/

// Reconstructing Sequence

// A sequence s is a list of integers. Its subsequence is a new sequence
// that can be made up by deleting elements from s, without changing the order of integers.

// We are given an original sequence and a list of subsequences seqs.

// Determine whether original is the only sequence that can be reconstructed from seqs.
// Reconstruction means building the shortest sequence so that all sequences in seqs
// are subsequences of it.

// Parameters

//     original: a list of integers of size n representing the original sequence.
//     seqs: a list of sequences of size m representing the sequences to be reconstructed.

// Result

//     true or false, depending on whether the original sequence can be uniquely reconstructed.

// Examples
// Example 1:

// Input: original: [1,2,3], seqs: [[1,2], [1,3]]

// Output: false

// Explanation:

// [1,2,3] is not the only one sequence that can be reconstructed,
// because [1,3,2] is also a valid sequence that can be reconstructed.
// Example 2:

// Input: original: [1,2,3], seqs: [[1,2]]

// Output: false

// Explanation:

// There is only one subsequence, so the reconstructed original sequence
// can only be [1,2] which is missing 3.
// Example 3:

// Input: orginal: [1,2,3], seqs: [[1,2], [1,3], [2,3]]

// Output: true

// Explanation:

// [1,2,3] is the only sequence that can be reconstructed from [1,2], [1,3], and [2,3].
// Example 4:

// Input: original: [4,1,5,2,6,3], seqs: [[5,2,6,3], [4,1,5,2]]

// Output: true

// Explanation:

// [4,1,5,2,6,3] is the only sequence that can be reconstructed from [[5,2,6,3], [4,1,5,2]].
// Constraints

//     1 <= n <= 10^4
//     1 <= m <= 10^4
//     1 <= len(seqs[i]) <= n

// BFS
// create in-deg map
// if in-deg is 0, then add to queue
// check if more than 1 is 0, if so then return false
// dequeue, and update in-deg map. If any of them 0, add to queue
// before each dequeue, if length of queue is more than 1, then return false

// [1,2,3], seqs: [[1,2], [1,3]]

// inDeg = {
//     1:0,
//     2:1,
//     3:1
// }

const reconstructing_seq = (original, seqs) => {
    const queue = [];
    const inDeg = {};
    const output = [];

    for (const orig of original) {
        inDeg[orig] = 0;
    }

    for (const seq of seqs) {
        for (let seqI = 0; seqI < seq.length - 1; seqI++) {
            inDeg[seq[seqI + 1]] += 1;
        }
    }

    for (const node of Object.keys(inDeg)) {
        if (inDeg[node] === 0) {
            queue.push(parseInt(node));
        }
    }

    while (queue.length) {
        if (queue.length > 1) {
            return false;
        }

        const current = queue.shift();

        output.push(parseInt(current));

        for (const seq of seqs) {
            for (let seqI = 0; seqI < seq.length - 1; seqI++) {
                if (seq[seqI] == current) {
                    inDeg[seq[seqI + 1]] -= 1;

                    if (inDeg[seq[seqI + 1]] == 0) {
                        queue.push(parseInt(seq[seqI + 1]));
                    }
                }
            }
        }
    }

    return JSON.stringify(output) === JSON.stringify(original);
};

console.log(
    reconstructing_seq(
        [1, 2, 3],
        [
            [1, 2],
            [1, 3],
            [2, 3],
        ],
    ),
);

console.log(
    reconstructing_seq(
        [4, 1, 5, 2, 6, 3],
        [
            [5, 2, 6, 3],
            [4, 1, 5, 2],
        ],
    ),
);

// Keys
// - we just care if there's more than 1 way to create the sequence,
// not to create every possible sequence possible. So if the queue is ever more than length 1, then
// retun false

// - make sure to look at all examples. I didn't see that seqs could be longer arrays
