// left child - node - right child
// (so basically doing all the way down left first, then slowly back up
const inOrder = (arr, i) => {
  if (i >= arr.length) {
    return;
  }

  const leftChild = 2 * i + 1;
  const rightChild = 2 * i + 2;

  inOrder(arr, leftChild);
  console.log(arr[i]);
  inOrder(arr, rightChild);
};

// inOrder(["A", "B", "C", "D", "E", "F", "G"], 0);

// node - left child - right child
const preOrder = (arr, i) => {
  if (i >= arr.length) {
    return;
  }

  const leftChild = 2 * i + 1;
  const rightChild = 2 * i + 2;

  console.log(arr[i]);
  preOrder(arr, leftChild);
  preOrder(arr, rightChild);
};

// preOrder(["A", "B", "C", "D", "E", "F", "G"], 0);

// left child - right child - node
const postOrder = (arr, i) => {
  if (i >= arr.length) {
    return;
  }

  const leftChild = 2 * i + 1;
  const rightChild = 2 * i + 2;

  postOrder(arr, leftChild);
  postOrder(arr, rightChild);
  console.log(arr[i]);
};

// postOrder(["A", "B", "C", "D", "E", "F", "G"], 0);


const levelOrder = (arr, i) => {
  if (i >= arr.length) return;
  console.log(arr[i]);
  levelOrder(arr, i + 1);
};

levelOrder(["A", "B", "C", "D", "E", "F", "G"], 0);
