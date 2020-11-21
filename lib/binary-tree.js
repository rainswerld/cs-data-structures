const Node = function (value) {
  this.value = value
  // whatever is on the left side, must be less than this node's value
  this.left = undefined
  // whatever is on the right side, must be greater than this node's value
  this.right = undefined
}

const BinaryTree = function () {
  // our starting node (similar to `head` for a LinkedList)
  this.root = undefined

  // Keeps track of the length of the BinaryTree
  this.nodeCount = 0
}

// includes - which returns true if the value exists in a node in the tree,
//            otherwise returns false.
// Average case: O(log n), worst case: O(n)
BinaryTree.prototype.includes = function (value) {
  // if we don't have a root node, then we don't have any nodes
  if (!this.root) {
    // so return false
    return false
  }

  // Create a node, currentNode, initially assigned to the `root` (first) node.
  // The currentNode will be used to iterate through nodes in our tree.
  let currentNode = this.root

  // Go through elements in our tree. This can be done by looping while
  // our currentNode isn't undefined.
  while (currentNode) {
    // if the value we are inserting is less than our current node's value
    if (value < currentNode.value) {
      // we'll set the currentNode to the left node and repeat the loop
      currentNode = currentNode.left
    } else if (value > currentNode.value) {
      // otherwise, if the value we are inserting is greater than our current
      // node's value

      // we'll set the currentNode to the right node and repeat the loop
      currentNode = currentNode.right
    } else {
      // otherwise, our current node's value is equal to the value we are
      // looking for, so return true
      return true
    }
  }

  // if currentNode became a undefined node while searching for the value, then we will
  // break out of the loop. This means we didn't find the value, so we
  // return false
  return false
}

// insert - A new node containing `value` to our binary tree
// Average case: O(log n), worst case: O(n)
BinaryTree.prototype.insert = function (value) {
  // adding a new node increases our nodeCount
  this.nodeCount++

  // Create a new node
  const newNode = new Node(value)

  // if the `root` doesn't exist, there aren't any nodes yet
  if (!this.root) {
    // so, set the `root` as the newNode
    this.root = newNode

    // we need to exit the function, so we `return`
    // we return `this` to make it chainable
    return this
  }

  // Create a node, currentNode, initially assigned to the `root` (first) node.
  // The currentNode will be used to iterate through nodes in our tree.
  let currentNode = this.root

  // Go through elements in our tree. This can be done by looping while
  // our currentNode isn't undefined.
  while (currentNode) {
    // 3a. if the value we are inserting is less than our current node's value
    if (value < currentNode.value) {
      // and if the currentNode doesn't have a left node
      if (!currentNode.left) {
        // we'll add our new node on the left side
        currentNode.left = newNode
        return this
      } else {
        // 4a. otherwise if there is a left node, we'll set the currentNode
        // to the left node and repeat the loop
        currentNode = currentNode.left
      }
    } else if (value > currentNode.value) {
      // 3b. otherwise if the value we are inserting is greater than our current
      // node's value

      // and if the currentNode doesn't have a right node
      if (!currentNode.right) {
        // we'll add our new node on the right side
        currentNode.right = newNode
        return this
      } else {
        // 4b. otherwise if there is a right node, we'll set the currentNode
        // to the right node and repeat the loop
        currentNode = currentNode.right
      }
    }
  }
}

// size - O(1) return the number of nodes in the binary tree
BinaryTree.prototype.size = function () {
  return this.nodeCount
}

// height - which returns the length of the largest path of nodes.
//          Recursive approach!
//          Average Case: O(log(n)), Worst Case: O(n)
BinaryTree.prototype.height = function () {
  // Create a recursive helper function, so we can have a default node
  const recHeight = function (node) {
    // BASE CASE: if the node doesnt exist
    if (!node) {
      // return 0
      return 0
    }

    // RECURSIVE CASE: calculate the height of the left and right paths
    const leftHeight = recHeight(node.left)
    const rightHeight = recHeight(node.right)

    // find out if the leftHeight or rightHeight is larger, and store it
    const maxChildHeight = Math.max(leftHeight, rightHeight)

    // the total height is the combination of `1` for the current node
    // and the maxChildHeight
    return 1 + maxChildHeight
  }

  // Calculate the height with the recursive helper function. Start the
  // calculation with the `root` node
  return recHeight(this.root)
}

// getMax - Return the maximum (right-most) value in the binary tree.
// Average Case: O(log(n)), Worst Case: O(n)
BinaryTree.prototype.getMax = function () {
  // if the root doesnt exist, then we dont have any nodes
  if (!this.root) {
    // so return undefined
    return undefined
  }

  // Create a node, currentNode, initially assigned to the `root` (first) node.
  // The currentNode will be used to iterate through nodes in our tree.
  let currentNode = this.root

  // 2) while there is still a larger value in our tree
  while (currentNode.right) {
    // 3) we'll set the currentNode to the right node and repeat the loop
    currentNode = currentNode.right
  }

  // if currentNode.right became a undefined node while searching for the value,
  // then we will break out of the loop. This means that the currentNode should
  // be the largest value, since it is the right most value. So we'll return it.
  return currentNode.value
}

// sizeSlow - O(n) A recursive approach to finding the size of the binary tree.
//            This is O(n) because we have to go through every node in the tree.
BinaryTree.prototype.sizeSlow = function (node) {
  // BASE CASE: if the node doesnt exist
  if (!node) {
    // return 0
    return 0
  }

  // RECURSIVE CASE: calculate the size of the left and right paths
  const leftSize = this.size(node.left)
  const rightSize = this.size(node.right)

  // the total size is the combination of `1` for the current node
  // added to the size of the left side and the size of the right side
  return 1 + leftSize + rightSize
}

module.exports = {
  Node,
  BinaryTree
}
