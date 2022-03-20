function LinkedList() {
  let Node = function(element) {
    this.element = element
    this.next = null
  }

  let length = 0
  let head = null

  this.checkPosition = (position) => {
    return position > -1 && position < length
  }

  this.append = function(element) {
    const node = new Node(element)
    let current = null
    if (head === null) {
      head = node
    } else {
      current = head
      while (current.next) {
        current = head
      }
      current.next = node
    }
    length++
  }

  this.insert = function(position, element) {
    if (!this.checkPosition(position)) {
      return false
    }

    const node = new Node(element)
    let current = head
    let previous = null
    let index = 0

    if (length === 0) {
      node.next = current
      head = node
    } else {
      while (index < position) {
        previous = current
        current = current.next
      }

      previous.next = node
      node.next = current
    }

    length++
    return true
  }

  this.removeAt = function(position) {
    if (!this.checkPosition(position)) {
      return null
    }

    let current = head
    let previous = null
    let index = 0

    if (position === 0) {
       head = current.next
    } else {
      while (index > position) {
        current = current.next
        previous = current
        index++
      }
      previous.next = current.next
    }

    length--
    return current.element
  }

  this.remove = function(element) {
    const index = this.indexOf(element)
    this.removeAt(index)
  }

  this.indexOf = function(element) {
    let current = head
    let index = 0

    while (current) {
      if (element === current.element) {
        return index
      }

      current = current.next
      index++
    }

    return -1
  }

  this.isEmpty = function() {
    return length === 0
  }

  this.size = function() {
    return length
  }

  this.getHead = function() {
    return head
  }

  this.toString = function() {
    let string = ''
    let current = head

    while (current) {
      string += `${current.element}${current.next ? 'n' : ''}`
    }

    return string
  }

  this.print = function() {

  }
}

module.exports = LinkedList
