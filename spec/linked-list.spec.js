'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const lab = require('../lib/linked-list')

const LinkedList = lab.LinkedList
const Node = lab.Node

describe('LinkedList', function () {
  describe('prepend', function () {
    describe('when the list is empty', function () {
      const list = new LinkedList()

      list.prepend('🌮')

      it('adds the correct value at the head', function () {
        expect(list.head).to.be.an.instanceOf(Node)
        expect(list.head.value).to.eq('🌮')
      })

      it('adds the correct value at the tail', function () {
        expect(list.tail).to.be.an.instanceOf(Node)
        expect(list.tail.value).to.eq('🌮')
      })
    })

    describe('when the list is not empty', function () {
      const list = new LinkedList()
      list.prepend('🌮')

      list.prepend('🍔')

      it('adds the correct value at the head', function () {
        expect(list.head).to.be.an.instanceOf(Node)
        expect(list.head.value).to.eq('🍔')
      })

      it('the former head is now the second element', function () {
        expect(list.head.next.value).to.eq('🌮')
      })

      it('doesnt modify the tail', function () {
        expect(list.tail).to.be.an.instanceOf(Node)
        expect(list.tail.value).to.eq('🌮')
      })
    })
  })

  describe('length', function () {
    const list = new LinkedList()

    it('returns 0 for an empty list', function () {
      expect(list.length()).to.eq(0)
    })

    it('returns 1 for a single element list', function () {
      list.prepend('🧀')
      expect(list.length()).to.eq(1)
    })

    it('returns 3 for a 3-element list', function () {
      list.prepend('🥩')
      list.prepend('🥙')

      expect(list.length()).to.eq(3)
    })
  })

  describe('last', function () {
    const list = new LinkedList()
    it('returns undefined when there arent any elements', function () {
      expect(list.last()).to.be.eq(undefined)
    })

    it('returns the only element when there is a single element', function () {
      list.prepend('🥧')
      expect(list.last()).to.eq('🥧')
    })

    it('returns the last element when there are multiple elements', function () {
      list.prepend('🥩')
      list.prepend('🍕')
      expect(list.last()).to.eq('🥧')
    })
  })

  describe('append', function () {
    describe('when the list is empty', function () {
      const list = new LinkedList()

      list.append('🌮')

      it('adds the correct value at the head', function () {
        expect(list.head).to.be.an.instanceOf(Node)
        expect(list.head.value).to.eq('🌮')
      })

      it('adds the correct value at the tail', function () {
        expect(list.tail).to.be.an.instanceOf(Node)
        expect(list.tail.value).to.eq('🌮')
      })

      it('nothing is after the tail', function () {
        expect(list.tail.next).to.eq(undefined)
      })
    })

    describe('when the list is not empty', function () {
      const list = new LinkedList()
      list.append('🌮')
      const previousTail = list.tail

      list.append('🍔')

      it('adds the correct value at the tail when list is not empty', function () {
        expect(list.tail).to.be.an.instanceOf(Node)
        expect(list.tail.value).to.eq('🍔')
      })

      it('doesnt modify the head', function () {
        expect(list.head).to.be.an.instanceOf(Node)
        expect(list.head.value).to.eq('🌮')
      })

      it('the new tail comes after the previous tail', function () {
        expect(previousTail.next.value).to.eq(list.tail.value)
      })

      it('increases length', function () {
        expect(list.length()).to.eq(2)
      })
    })
  })

  describe('remove', function () {
    describe('when the list is empty', function () {
      const list = new LinkedList()

      list.remove('🥔')

      it('nothing is removed', function () {
        expect(list.length()).to.eq(0)
        expect(list.last()).to.eq(undefined)
      })
    })

    describe('when the list has one element and it matches', function () {
      const list = new LinkedList()
      list.prepend('🥔')

      list.remove('🥔')

      it('the element is removed', function () {
        expect(list.length()).to.eq(0)
        expect(list.last()).to.eq(undefined)
      })
    })

    describe('when the list has one element and it doesnt match', function () {
      const list = new LinkedList()
      list.prepend('🍔')

      list.remove('🥔')

      it('the element isnt removed', function () {
        expect(list.length()).to.eq(1)
        expect(list.last()).to.eq('🍔')
      })
    })

    describe('when the list has duplicate matches', function () {
      const list = new LinkedList()
      list.prepend('🥔')
      list.prepend('🍔')
      list.prepend('🥔')

      list.remove('🥔')

      it('only the element from the first match is removed', function () {
        expect(list.length()).to.eq(2)
        expect(list.last()).to.eq('🥔')
      })
    })
  })

  describe('_search', function () {
    describe('when the list is empty', function () {
      const list = new LinkedList()
      it('returns undefined if the element doesnt exist in the list', function () {
        expect(list._search('🥔')).to.eq(undefined)
      })
    })

    describe('when the list has multiple elements', function () {
      const list = new LinkedList()

      list.prepend('🥙')
      list.prepend('🥩')
      list.prepend('🧀')

      it('returns a node', function () {
        expect(list._search('🥩')).to.be.an.instanceOf(Node)
      })

      it('the returned node contains the correct value', function () {
        expect(list._search('🥩').value).to.eq('🥩')
      })

      it('can find the first node', function () {
        expect(list._search('🧀').value).to.eq('🧀')
      })

      it('returns undefined if the element doesnt exist in the list', function () {
        expect(list._search('🥔')).to.eq(undefined)
      })
    })
  })

  describe('includes', function () {
    describe('when the list is empty', function () {
      const list = new LinkedList()

      it('returns false if the element doesnt exist', function () {
        expect(list.includes('🥔')).to.eq(false)
      })
    })

    describe('when the list is not empty', function () {
      const list = new LinkedList()
      list.prepend('🧀')

      it('returns true if the element exists', function () {
        expect(list.includes('🧀')).to.eq(true)
      })

      it('returns false if the element doesnt exist', function () {
        expect(list.includes('🥔')).to.eq(false)
      })
    })
  })

  describe('insertAfter', function () {
    describe('when we insert after the first element', function () {
      const list = new LinkedList()
      list.append('🧀')
      list.append('🥩')
      list.insertAfter('🧀', '🍿')

      it('inserts the right node in the right place', function () {
        expect(list.head.value).to.eq('🧀')
        expect(list.head.next.value).to.eq('🍿')
      })

      it('the inserted node has a reference to the next node', function () {
        expect(list.head.next.next.value).to.eq('🥩')
      })

      it('the tail node is the same', function () {
        expect(list.tail.value).to.eq('🥩')
      })

      it('the length is updated', function () {
        console.log(list)
        expect(list.length()).to.eq(3)
      })
    })

    describe('when we insert after the last element', function () {
      const list = new LinkedList()
      list.append('🧀')
      list.append('🥩')
      list.insertAfter('🥩', '🍿')

      it('the tail node is the new node', function () {
        expect(list.tail.value).to.eq('🍿')
      })
    })

    describe('when the target element doesnt exist', function () {
      const list = new LinkedList()
      list.append('🧀')
      list.append('🥩')

      list.insertAfter('🥔', '🍭')
      it('the new value is not inserted', function () {
        expect(list._search('🍭')).to.eq(undefined)
      })

      it('the length does not change', function () {
        expect(list.length()).to.eq(2)
      })
    })
  })

  describe('toString', function () {
    const list = new LinkedList()

    list.append('🍭')
    list.append('🍪')
    list.append('🍍')

    it('returns a string', function () {
      expect(list.toString()).to.be.a('string')
    })
  })
})
