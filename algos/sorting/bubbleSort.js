
// uses recursion, but can also use for loops
//  for loop would be better, bc changes in-place, so saves space
const bubbleSort = (arr) => {
  if (arr.length < 1) return arr;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] > arr[j]) {
      const hold = arr[i];
      arr[i] = arr[j];
      arr[j] = hold;
    }
    i += 1;
    j += 1;
  }

  return [...bubbleSort(arr.slice(0, arr.length - 1)), arr[arr.length - 1]];
};

console.log(bubbleSort([9, 3, 18, 12]));
