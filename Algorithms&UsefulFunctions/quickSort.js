module.exports.quickSort = function quickSort(
  arr,
  comparator,
  left = 0,
  right = arr.length - 1
) {
  if (typeof comparator === "undefined") {
    comparator = (a, b) => a - b;
  }
  if (left < right) {
    let pivotIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
};

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (typeof comparator === "undefined") {
    comparator = (a, b) => a - b;
  }

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}
