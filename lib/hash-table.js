'use strict'

// A key/value pair. Like a property in JavaScript.
const Pair = function (key, value) {
  this.key = key
  this.value = value
}

const HashTable = function (numBuckets) {
  // Create a HashTable with `size`
  this.buckets = new Array(numBuckets)
  // fill each bucket with an empty array, that will be filled with elements
  this.buckets.fill([])
}

// _hash - a helper function, that hashes the given key, returning the index of
//         the bucket we should place the key in
HashTable.prototype._hash = function (key) {
  // create a number based on our key, here we assume the key will always be
  // a string
  let sum = 0

  // for each character in our key
  for (let i = 0; i < key.length; i++) {
    // add the character's Unicode value to our sum
    sum += key.charCodeAt(i)
  }

  // modulo our number by the number of buckets, so we can know which bucket
  // this key corresponds to
  return sum % this.buckets.length
}

// getBucket - which returns the bucket the key should go in
HashTable.prototype.getBucket = function (key) {
  // use `hash` to figure out which bucket to put our key/value pair in
  const bucketIndex = this._hash(key)
  const bucket = this.buckets[bucketIndex]
  return bucket
}

// insert - takes a key/value pair, then stores them in the hash table.
//          this method should work exactly like assigning a value to an
//          object's property. ex. obj.propertyName = 'value'
// Average Case: O(1), Worst Case: O(n) NOTE: The worst case is *extremely* uncommon
HashTable.prototype.insert = function (key, value) {
  // get the bucket that corresponds to the key
  const bucket = this.getBucket(key)

  // look for a key/value pair in the bucket. We can do this by looking for
  // a pair with the same key
  let pair = bucket.find(pair => pair.key === key)

  // if no pair exists
  if (!pair) {
    // create a pair
    pair = new Pair(key, value)

    // then add it to the bucket
    bucket.push(pair)
  } else {
    // otherwise, if we find a pair, update it to the new value
    pair.value = value
  }
}

// search - which returns the value that corresponds to the key, otherwise
//          returns undefined if the key doesn't exist in the hash table.
//          this method should work exactly like an object `property accessor`
//          ex. obj.propertyName
// Average Case: O(1), Worst Case: O(n) NOTE: The worst case is *extremely* uncommon
HashTable.prototype.search = function (key) {
  // get the bucket that corresponds to the key
  const bucket = this.getBucket(key)

  // look for a key/value pair in the bucket. We can do this by looking for
  // a pair with the same key
  const pair = bucket.find(pair => pair.key === key)

  // if a pair exists,
  if (pair) {
    // return the value.
    return pair.value
  }

  // otherwise, return undefined
  return undefined
}

// delete - which deletes a key/value pair and returns the value, otherwise
//          returns undefined if the key doesn't exist in the hash table.
// this method should work exactly like deleting an object property's value
// ex. delete obj.propertyName
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// Average Case: O(1), Worst Case: O(n) NOTE: The worst case is *extremely* uncommon
HashTable.prototype.delete = function (key) {
  // get the bucket that corresponds to the key
  const bucket = this.getBucket(key)

  // find the pair's index inside its bucket
  const pairIndex = bucket.findIndex(pair => pair.key === key)

  // if the pair exists
  if (pairIndex !== -1) {
    // remove the pair from the bucket
    bucket.splice(pairIndex, 1)
  }
}

module.exports = {
  HashTable
}
