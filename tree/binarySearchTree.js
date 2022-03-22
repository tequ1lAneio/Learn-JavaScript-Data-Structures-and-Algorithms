function BinarySearchTree() {
  const Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  let root = null

  this.insert = function(key) {
    const newNode = new Node(key)

    const insertNode = function(node) {
      if (newNode.key < node.key) {
        if (!node.left) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (!node.right) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }

    if (!root) {
      root = newNode
    } else {
      insertNode(root, newNode);
    }
  }

  this.inOrderTraverse = function(fn) {
    const inOrderTraverseNode = function(node, fn) {
      if (node) {
        inOrderTraverseNode(node.left, fn)
        fn(node.key)
        inOrderTraverseNode(node.right, fn)
      }
    }

    inOrderTraverseNode(root, fn)
  }

  this.preOrderTraverse = function(fn) {
    const preOrderTraverseNode = function(node, fn) {
      if (node) {
        fn(node.key)
        preOrderTraverseNode(node.left, fn)
        preOrderTraverseNode(node.right, fn)
      }
    }

    preOrderTraverseNode(root, fn)
  }

  this.postOrderTraverse = function(fn) {
    const postOrderTraverseNode = function(node, fn) {
      if (node) {
        postOrderTraverseNode(node.left, fn)
        postOrderTraverseNode(node.right, fn)
        fn(node.key)
      }
    }

    postOrderTraverseNode(root, fn)
  }

  this.search = function(key) {
    const searchNode = function(node) {
      if (!node) {
        return false
      }

      if (key < node.key) {
        return searchNode(node.left)
      } else if (key > node.key) {
        return searchNode(node.right)
      } else {
        return true
      }
    }

    return searchNode(root)
  }

  this.min = function() {
    const minNode = function(node) {
      if (node) {
        while (node && node.left) {
          node = node.left
        }
        return node.key
      } else {
        return null
      }
    }

    return minNode(root)
  }

  this.max = function() {
    const maxNode = function(node) {
      if (node) {
        while (node && node.right) {
          node = node.right
        }
        return node.key
      } else {
        return null
      }
    }

    return maxNode(root)
  }

  this.remove = function(key) {

  }

  this.printNode = function(value) {
    console.log(value)
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.insert(6)

// tree.inOrderTraverse(tree.printNode)
// tree.preOrderTraverse(tree.printNode)
// tree.postOrderTraverse(tree.printNode)

console.log(tree.min())
console.log(tree.max())
console.log(tree.search(4))
