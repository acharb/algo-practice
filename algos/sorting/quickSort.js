// essentially picking a "pivot" value (pick middle), then adding all smaller values in left array
//   all all larger values in right array
// then do recursive on both sides and append together with pivot/middle value in the middle
const quickSort = (arr) => {
  // base case
  if (arr.length <= 1) return arr;

  const middleI = Math.floor(arr.length / 2);
  const middle = arr[middleI];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    // skip pivot value
    if (i === middleI) continue;

    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), middle, ...quickSort(right)];
};

console.log(quickSort([9, 3, 8, 12, 7, 15, 7]));
