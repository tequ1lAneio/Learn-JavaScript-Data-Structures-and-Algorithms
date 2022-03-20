const LinkedList = require('../linkedList/linkedList')

const loseLoseHashCode = (key) => {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

function hashMapWithLinkedList() {
  const table = []

  const ValuePair = function (key, value) {
    this.key = key
    this.value = value

    this.toString = function () {
      return `[${this.key} - ${this.value}]`
    }
  }

  this.put = function (key, value) {
    let position = loseLoseHashCode(key)

    if (!table[position]) {
      table[key] = new LinkedList()
    }

    table[position].append(new ValuePair(key, value))
  }

  this.get = function (key) {
    let position = loseLoseHashCode(key)

    if (!table[position]) {
      return undefined
    }

    const linkedList = table[position]

    let current = linkedList.getHead()
    while (current.next) {
      if (current.element.key === key) {
        break
      }
      current = current.next
    }
    return current.element.value
  }

  this.remove = function (key) {
    let position = loseLoseHashCode(key)

    if (!table[position]) {
      return false
    }

    const linkedList = table[position]
    let current = linkedList.getHead()
    while (current.next) {
      if (current.element.key === key) {
        linkedList.remove(current.element)
        if (linkedList.isEmpty()) {
          table[position] = undefined
        }
      }
    }
    return true
  }
}

