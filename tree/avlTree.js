function AvlTree() {
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null

  const rotationRR = function(node) {
    const temp = node.right
    node.right = temp.left
    temp.left = node
    return temp
  }

  const rotationLL = function(node) {
    const temp = node.left
    node.left = temp.right
    temp.right = node
    return temp
  }

  const rotationLR = function(node) {
    node.left = rotationRR(node.left)
    return rotationLL(node)
  }

  const rotationRL = function(node) {
    node.right = rotationLL(node.right)
    return rotationRR(node)
  }

  /*
  * To get max depth for any node.
  * */
  const heightNode = function(node) {
    if (!node) {
      return -1
    }

    return Math.max(heightNode(node.left), heightNode(node.right)) + 1
  }

  this.insert = function(key) {
    const insertNode = function(node) {
      if (!node) {
        node = new Node(key)
      } else if (key < node.key) {
        node.left = insertNode(node.left)
        if (!node.left) {
          if (heightNode(node.left) - heightNode(node.right) > 1) {
            if (key < node.left.key) {
              node = rotationLL(node)
            } else {
              node = rotationLR(node)
            }
          }
        }
      } else if (key > node.key) {
        node.right = insertNode(node.right)
        if (!node.right) {
          if (heightNode(node.left) - heightNode(node.right) > 1) {
            if (key > node.left.key) {
              node = rotationRR(node)
            } else {
              node = rotationRL(node)
            }
          }
        }
      }

      return node
    }

    return insertNode(root)
  }
}
