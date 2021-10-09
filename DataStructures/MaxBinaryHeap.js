class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown(0);
    }
    return max;
  }

  sinkDown(idx) {
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let rightChildIdx = 2 * idx + 2;
      let leftChildIdx = 2 * idx + 1;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  maxHeapify(input) {
    for (let i = Math.floor(input.length / 2); i >= 0; i--) {
      innerHeapify(input, i);
    }
    return input;
  }

  innerHeapify(input, idx) {
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;
    let largest = idx;
    if (left < input.length && input[left] > input[largest]) {
      largest = left;
    }
    if (right < input.length && input[right] > input[largest]) {
      largest = right;
    }
    if (largest !== idx) {
      [input[idx], input[largest]] = [input[largest], input[idx]];
      innerHeapify(input, largest);
    }
  }
}

module.exports = MaxBinaryHeap;
