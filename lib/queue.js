'use strict'

const Queue = function () {
  // Add storage for items on the Queue
  // Keep it hidden
  this._items = []
}

Queue.prototype.isEmpty = function () {
  // If store is empty then the queue is empty
  return this._items.length === 0
}

Queue.prototype.enqueue = function (value) {
  this._items.push(value)
  return this
}

Queue.prototype.dequeue = function () {
  return this._items.shift()
}

module.exports = Queue
