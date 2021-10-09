class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
}

DoublyLinkedList.prototype.clear = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  let tmp;
  if (index === 0) {
    tmp = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
      return tmp;
    }

    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
    }
    this.length--;
    return tmp;
  }

  if (index === this.length - 1) {
    tmp = this.tail;
    this.tail = this.tail.prev;
    if (this.tail !== null) {
      this.tail.next = null;
    }
    this.length--;
    return tmp;
  }

  let prev = this.get(index - 1);
  tmp = prev.next;
  prev.next = prev.next.next;
  if (prev.next !== null) {
    prev.next.prev = prev;
  }
  this.length--;
  return tmp;
};

DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp;
  while (current) {
    temp = current.next;
    current.next = current.prev;
    current.prev = temp;
    if (!temp) {
      this.tail = this.head;
      this.head = current;
    }
    current = temp;
  }
  return this;
};

module.exports = DoublyLinkedList;
