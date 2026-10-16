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

  // Need to optimize
  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError('Index is out of bounds');
    }

    if (values.length === 0) return;

    if (this.headNode === null) {
      for (let i = 0; i < values.length; i++) {
        this.append(values[i]);
      }

      return;
    }

    if (index === 0) {
      const temp = this.headNode;

      this.headNode = null;

      for (let i = 0; i < values.length; i++) {
        this.append(values[i]);
      }

      let current = this.headNode;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = temp;

      return;
    }

    let currentIndex = 0;
    let currentNode = this.headNode;

    while (currentIndex + 1 !== index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    const temp = currentNode.nextNode;

    currentNode.nextNode = null;

    for (let i = 0; i < values.length; i++) {
      this.append(values[i]);
    }

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = temp;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
