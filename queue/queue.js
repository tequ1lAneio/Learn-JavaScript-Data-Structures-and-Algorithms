class Queue {
  constructor(items = []) {
    this.items = items
  }

  enqueue(elements) {
    this.items.concat(elements)
  }

  dequeue() {
    this.items.shift()
  }

  front() {
    if (this.items.length === 0) {
      return null
    }
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items)
  }
}

const queue = new Queue([1, 2, 3, 4, 5])
