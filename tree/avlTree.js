function AvlTree() {
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null

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
      }

      if (key < node.left) {
        node.left = insertNode(node.left)
        if (!node.left) {

        }
      } else if (key > node.left) {
        node.right = insertNode(node.right)
        if (!node.right) {

        }
      }

      return node
    }

    return insertNode(root)
  }
}
