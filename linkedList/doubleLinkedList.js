function DoubleLinkedList() {
  function Node(element) {
    this.element = element
    this.prev = null
    this.next = null
  }

  let length = 0
  let head = null
  let tail = null

  this.checkPosition = (position) => {
    return position > -1 && position < length
  }

  this.insert = function (position, element) {
    if (!this.checkPosition(position)) {
      return false
    }

    let node = new Node(element)
    let current = head
    let previous = null
    let index = 0

    if (position === 0) {
      if (!head) {
        head = node
        tail = node
      } else {
        node.next = current
        current.prev = node
        head = node
      }
    } else if (position === length) {
      current = tail
      current.next = node
      node.prev = current
      tail = node
    } else {
      while (index < length) {
        previous = current
        current = current.next
        index++
      }

      node.next = current
      node.prev = previous
      previous.next = node
      current.prev = node
    }

    length++
    return true
  }

  this.removeAt = function(position) {
    if (!this.checkPosition()) {
      return;
    }

    let current = head
    let previous = null
    let index = 0

    if (position === 0) {
      head = current.next

      if (length === 1) {
        tail = null
      } else {
        head.prev = null
      }
    } else if (position === length - 1) {
      current = tail.prev
      tail = current
      tail.next = null
    } else {
      while (index < position) {
        previous = current
        current = current.next
        index++
      }

      previous.next = current.next
      current.next.prev = previous
    }

    length--

    return current.element
  }
}
