'use strict'

// A constructor to create LinkedLists. This LinkedList:
// 1. Is a singly linked list, each node has a `next` property that references
//   the next node in the list
// 2. Keeps track of the `head` and `tail`. Keeping track of the `tail` allows
//    O(1) last/append methods.
// 3. Keeps track of the `length` of the list in a `nodeCount` property. This
//    allows an O(1) lookup time for the length method.
// 4. Uses `undefined` if a node doesn't exist, but you could just as well use
//    `null`. This is a style preference.
const LinkedList = function () {
  // the `head` is the first node in the LinkedList
  this.head = undefined

  // the `tail` is the last node in the LinkedList
  this.tail = undefined

  // Keeps track of the length of the LinkedList
  this.nodeCount = 0
}

// A LinkedList is made up of Nodes.
const Node = function (value, next) {
  // Each node has a value (ex. 1, 42, 'Cat')
  this.value = value

  // And a reference to the next node directly after it
  // if this node is the last node in the linked list, then its `next` node
  // will be set to `undefined`.
  this.next = next
}

// prepend - O(1) which adds a value to the beginning of the list
LinkedList.prototype.prepend = function (value) {
  // adding a new node increases our nodeCount
  this.nodeCount++

  // Since we are prepending a value to the beginning of our list, we will need
  // a new node for that value. The next node will be whatever our head was, since
  // we are adding our newNode before it.
  const newNode = new Node(value, this.head)

  // If we don't have a tail (last) node
  if (!this.tail) {
    // then set the tail to the newNode
    this.tail = newNode
  }

  // Update `head` to the new node, so newNode is the first element in the
  // Linked List.
  this.head = newNode
}

// length - O(1) which returns the length of the list
LinkedList.prototype.length = function () {
  // since we have been keeping track of the number of nodes in the list, we
  // simply return it.
  return this.nodeCount
}

// last - O(1) which returns the last value in the list
LinkedList.prototype.last = function () {
  // if we don't have a tail, then we don't have any nodes in our list, so return undefined.
  if (!this.tail) {
    return undefined
  }

  // since our last element is stored in `this.tail`, we simple need to return
  // the tail's value
  return this.tail.value
}

// append - O(1) adds a new value to the tail (end) of the LinkedList
LinkedList.prototype.append = function (value) {
  // adding a new node increases our nodeCount
  this.nodeCount++

  // Create a new node, set new nodes value to undefined, since the newNode will
  // be the last node (tail)
  const newNode = new Node(value, undefined)

  // If we have a tail
  if (this.tail) {
    // Link the current tails `next` node to the newNode we created
    // (this inserts a new node after the current tail)
    this.tail.next = newNode
  }

  // Since we are appending an element to the end of the list, it is now the
  // tail (last) node in our list.
  // So, we update the tail to our newNode.
  this.tail = newNode

  // If we dont have a `head` node, then our list is currently empty. Since,
  // our list is currently empty, the new node is both the `head` and the `tail`
  if (!this.head) {
    // so, we assign it as the head.
    this.head = newNode
  }
}

// remove - O(n) which removes the first node containing the target value
LinkedList.prototype.remove = function (value) {
  // 1. currentNode will be used to iterate through every node in our list
  let prevNode
  let currentNode = this.head

  // 2. while there are still nodes in the list (currentNode is not undefined )
  while (currentNode) {
    console.log('value is', currentNode.value)
    console.log('previous value is', prevNode ? prevNode.value : 'N/A')

    // if this node contains the value we want to remove
    if (currentNode.value === value) {
      // if we are removing the last node
      if (this.tail === currentNode) {
        // set the tail, to the second to last node in the list
        this.tail = prevNode
      }

      // if we are removing the first element in the list
      if (!prevNode) {
        // set head to the next node in the list
        this.head = this.head.next
      } else {
        // If we do have a previous node, remove the currentNode
        // by updating the previous node's `next` to skip the currentNode
        prevNode.next = currentNode.next
      }

      // removing a node decreases our nodeCount
      this.nodeCount--

      // Return so we only remove the first value that matches
      return
    }

    // 3. update currentNode to the next node after it in the list
    prevNode = currentNode
    currentNode = currentNode.next
  }
}

// _search - O(n) a private method, which returns the first node in the
//           LinkedList which has the value passed in.
LinkedList.prototype._search = function (value) {
  // Create a node, currentNode, initially assigned to the `head` (first) node.
  // The currentNode will be used to iterate through every node in our list.
  let currentNode = this.head

  // Go through every element in our list. This can be done by looping while
  // our current element isn't undefined.
  while (currentNode) {
    // if the currentNode's value is the the value we are looking for,
    if (currentNode.value === value) {
      // then we found the node we are looking for, so we return it!
      return currentNode
    }

    // Set our currentNode to the next node in the list
    currentNode = currentNode.next
  }

  // If we didn't find a node with the value we were searching for,
  // we return undefined
}

// includes - O(n) which returns true if the value we are searching for,
//            is inside of our list, otherwise returns false.
LinkedList.prototype.includes = function (value) {
  // O(n) find the node containing `value` if it exists
  const node = this._search(value)

  // return true if we found the node, false otherwise
  return node !== undefined
}

// insertAfter - O(n) which adds a new node containing newValue directly after
//               the node containing targetValue in the list
LinkedList.prototype.insertAfter = function (targetValue, newValue) {
  // O(n) Find the targetNode we are inserting after
  const targetNode = this._search(targetValue)

  // if the target value isn't in our linkedList, throw an error
  if (!targetNode) {
    console.error(`targetValue: ${targetValue} does not exist in the linked list!`)
    return
  }

  // adding a new node increases our nodeCount
  this.nodeCount++

  // Create a newNode.
  // This `newNode` needs to go between `targetNode` and `targetNode.next`
  // So we set newNode's next node to targetNode's next node.
  const newNode = new Node(newValue, targetNode.next)

  // Then we set targetNode's next node, to the newNode we created.
  // This successfully weaves a newNode between the targetNode and its previous
  // next node.
  targetNode.next = newNode

  // if the node we are inserting after is the tail
  if (targetNode === this.tail) {
    // update the tail to the newNode
    this.tail = newNode
  }
}

// Below we will show a LinkedList implementation whose toString
// resembles an array's toString method

// toString - O(n) which returns a string representing all the values in the list,
//            formatted similar to an array's string representation
//            ex. LinkedList[1, 2, 3]
LinkedList.prototype.toString = function () {
  // create a display variable that will store the string representation
  let display = 'LinkedList['

  // Create a node, currentNode, initially assigned to the `head` (first) node.
  // The currentNode will be used to iterate through every node in our list.
  let currentNode = this.head

  // Go through every element in our list. This can be done by looping while
  // our current element isn't undefined.
  while (currentNode) {
    // add each element to our display string
    display += currentNode.value

    // if the currentNode isn't the last node
    if (currentNode !== this.tail) {
      // then append `, `, so elements are comma separated
      display += ', '
    }

    // Set our currentNode to the next node
    currentNode = currentNode.next
  }

  // finally add a closing bracket
  display += ']'

  return display
}

// NOTE: This is O(n), because we have to iterate through each node to find the
// length. We could do this faster, by keeping track of the length in a property,
// then incrementing/decrementing as needed
LinkedList.prototype.slowLength = function () {
  // Create a node, currentNode, initially assigned to the `head` (first) node.
  // The currentNode will be used to iterate through every node in our list.
  let currentNode = this.head

  let count = 0

  // Go through every element in our list. This can be done by looping while
  // our current element isn't undefined.
  while (currentNode) {
    // increment our count
    count++

    // Set our currentNode to the next node
    currentNode = currentNode.next
  }

  return count
}

module.exports = {
  LinkedList,
  Node
}
