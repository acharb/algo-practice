// searching through a sorted array

const binarySearch = (arr, find, start, end) => {
  const mid = Math.floor((start + end) / 2);

  console.log("mid:", arr[mid], start, end);

  if (start >= end && arr[mid] !== find) {
    console.log("doesnt exist");
    return false;
  }

  if (find === arr[mid]) {
    console.log("found");
    return true;
  } else if (find > arr[mid]) {
    start = mid + 1;
    return binarySearch(arr, find, start, end);
  } else {
    end = mid;
    return binarySearch(arr, find, start, end);
  }
};

console.log(binarySearch([7, 9, 15, 21, 38, 44], 48, 0, 5));
