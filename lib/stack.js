'use strict'

const Stack = function () {
  // Add storage for items on the Stack
  // Keep it hidden
  this._items = []
}

Stack.prototype.isEmpty = function () {
  // If store is empty then the stack is empty
  return this._items.length === 0
}

Stack.prototype.push = function (value) {
  // save value to the top of the stack
  this._items.push(value)
  // return the stack allowing for method chaining
  return this
}

Stack.prototype.pop = function () {
  // return the value at the top fo the stack
  return this._items.pop()
}

module.exports = Stack
