
// you sort the left half, and then sort the right half, then merge
// each half is acted on recursively until it's a single element in the arr
// and merging happens by sorting

const mergeSort = (arr) => {
  // base case, just one value so return it
  if (arr.length <= 1) return arr;

  // break down left and right halves
  const halfI = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, halfI));
  const right = mergeSort(arr.slice(halfI, arr.length));

  return sort(left, right);
};

const sort = (left, right) => {
  let output = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      output.push(left[i]);
      i += 1;
    } else {
      output.push(right[j]);
      j += 1;
    }
  }

  if (i < left.length) {
    output = output.concat(left.slice(i, left.length));
  }

  if (j < right.length) {
    output = output.concat(right.slice(j, right.length));
  }

  return output;
};

console.log(mergeSort([10, 3, 5, 7, 9, 12, 14]));

console.log(mergeSort([1, 3, 1, -10, 0]));
