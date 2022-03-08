class Element {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor(items = []) {
    this.items = items
  }

  enqueue(element, priority) {
    const ele = new Element(element, priority)

    let added = false
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority < ele.priority) {
        this.items.splice(i, 1, ele)
        added = true
        break
      }
    }

    if (!added) {
       this.items.push(ele)
    }
  }

  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${this.items[i].element} -- ${this.items[i].priority}`)
    }
  }
}

let queue = new PriorityQueue()
queue.enqueue('Messi1', 2)
queue.enqueue('Messi2', 2)
queue.enqueue('Messi3', 2)
queue.enqueue('Joe1', 1)
queue.enqueue('Joe2', 1)
queue.enqueue('Tania1', 0)
queue.enqueue('Tania2', 0)

queue.print()
queue.enqueue('john', 1)
queue.print()
