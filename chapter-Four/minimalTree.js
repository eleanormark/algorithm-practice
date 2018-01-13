/*
  interview question 4.2
*/

function Tree(value) {
  this.value = value
  this.left = null;
  this.right = null;
}


function minimalTree(sortedArr) {
  // base case
  if (sortedArr.length === 1) {
    const newTree = new Tree(sortedArr[0]);
    return newTree;
  }

  if (sortedArr.length === 0) {
    return null;
  }

  let midLength;
  if (sortedArr.length % 2 === 0) {
    midLength = (sortedArr.length / 2) - 1
  } else {
    midLength = Math.floor(sortedArr.length / 2);
  }
  const newRoot = new Tree(sortedArr[midLength]);
  const leftArr = sortedArr.slice(0, midLength);
  const rightArr = sortedArr.slice(midLength + 1, sortedArr.length)

  newRoot.left = minimalTree(leftArr);
  newRoot.right = minimalTree(rightArr);
  return newRoot;
}


/*
  testing case
*/

console.log(minimalTree([1, 2, 3, 4, 5, 6, 7, 8]))

/*
  efficiency
  time: O(N)
  space: O(N)
*/

function miniTree(arr) {
  if (arr.length === 0) {
    return null
  }

  let midPoint;
  if (arr.length % 2 === 0) {
    midPoint = (arr.length / 2) - 1
  } else {
    midPoint = arr.length >> 1;
  }

  const resultTree = new Tree(arr[midPoint]);
  resultTree.left = miniTree(arr.slice(0, midPoint))
  resultTree.right = miniTree(arr.slice(midPoint + 1, arr.length))

  return resultTree;

}

console.log(miniTree([1, 2, 3, 4, 5, 6, 7, 8]))
