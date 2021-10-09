module.exports.insertionSort = function insertionSort(arr, comparator) {
  
  if (typeof comparator === "undefined") {
    comparator = (a, b) => a - b;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && comparator(arr[j], currentValue) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
};
