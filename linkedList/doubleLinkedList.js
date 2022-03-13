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

  this.insert = function(position, element) {
    if (!this.checkPosition(position)) {
      return false
    }

    let node = new Node()
    let current = head
    let previous = null
    let index = 0

    if (position === 0) {
      if (length === 0) {

      } else {

      }
    }
  }
}
