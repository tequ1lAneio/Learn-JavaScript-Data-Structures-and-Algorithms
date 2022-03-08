const Queue = (function() {
  let items = []
  class Queue {
    enqueue(elements) {
      items.push(elements)
    }

    dequeue() {
      return items.shift()
    }

    front() {
      if (items.length === 0) {
        return null
      }
      return items[0]
    }

    isEmpty() {
      return items.length === 0
    }

    size() {
      return items.length
    }

    print() {
      console.log(items)
    }
  }

  return Queue
})()

const queue = new Queue()
module.exports = Queue
