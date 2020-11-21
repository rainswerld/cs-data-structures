'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const Queue = require('../lib/queue')

describe('Queue', function () {
  describe('a new queue', function () {
    const queue = new Queue()
    it('is empty', function () {
      expect(queue.isEmpty()).to.be.true
    })
  })

  describe('when values are enqueued to the queue', function () {
    const queue = new Queue()
    const valueOne = 'first'
    const valueTwo = 'next'

    const setup = function () {
      expect(queue.enqueue).to.be.a('function')
      queue.enqueue(valueOne)
      queue.enqueue(valueTwo)
    }

    it('contains the values', function () {
      setup()
      expect(queue._items).to.eql([valueOne, valueTwo])
    })

    it('contains last added value at end', function () {
      setup()
      expect(queue._items.slice(-1)[0]).to.eql(valueTwo)
    })

    it('can return first value when dequeued', function () {
      setup()
      expect(queue.dequeue()).to.eql(valueOne)
    })
  })
})
