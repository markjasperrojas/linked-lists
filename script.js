class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let counter = 0;
    let current = this.headNode;

    while (current !== null) {
      counter++;
      current = current.nextNode;
    }

    return counter;
  }

  head() {
    if (this.headNode === null) return undefined;

    return this.headNode.value;
  }

  tail() {
    if (this.headNode === null) return undefined;

    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current.value;
  }

  at(index) {
    let currentIndex = 0;
    let current = this.headNode;

    while (current !== null) {
      if (currentIndex === index) {
        return current.value;
      }

      current = current.nextNode;
      currentIndex++;
    }

    return undefined;
  }

  pop() {
    if (this.headNode === null) return undefined;

    const remove = this.headNode;

    this.headNode = this.headNode.nextNode;

    return remove.value;
  }

  contains(value) {
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let index = 0;
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    if (this.headNode === null) return '';

    let result = '';
    let current = this.headNode;

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += `${current}`;

    return result;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
