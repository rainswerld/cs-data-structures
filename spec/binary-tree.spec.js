'use strict'
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const { Node, BinaryTree } = require('../lib/binary-tree')

describe('Node', () => {
  it('should initialize with undefined left and right pointers', () => {
    const newNode = new Node(5)
    expect(newNode.left).to.equal(undefined)
    expect(newNode.right).to.equal(undefined)
  })
})

describe('BinaryTree', () => {
  it('should initialize with a undefined root', () => {
    const tree = new BinaryTree()
    expect(tree.root).to.equal(undefined)
  })
  it('should place the first node as the root', () => {
    const tree = new BinaryTree()
    tree.insert(5)
    expect(tree.root.value).to.equal(5)
    expect(tree.root.left).to.equal(undefined)
    expect(tree.root.right).to.equal(undefined)
  })
  it('should place new nodes according to Binary Tree rules', () => {
    const tree = new BinaryTree()
    tree.insert(5)
    tree.insert(7)
    expect(tree.root.right.value).to.equal(7)
    expect(tree.root.left).to.equal(undefined)
    tree.insert(3)
    expect(tree.root.left.value).to.equal(3)
    tree.insert(1)
    expect(tree.root.left.left.value).to.equal(1)
    tree.insert(4)
    expect(tree.root.left.right.value).to.equal(4)
    tree.insert(9)
    expect(tree.root.right.right.value).to.equal(9)
    tree.insert(6)
    expect(tree.root.right.left.value).to.equal(6)
  })
  describe('includes', () => {
    const createNode = (value, left, right) => {
      const node = new Node(value)
      node.left = left
      node.right = right
      return node
    }

    const tree = new BinaryTree()
    // Custom building a tree with elements 1-8, so this test doesnt depend on insert
    tree.root =
      createNode(5,
        createNode(3,
          createNode(1, undefined, createNode(2)),
          createNode(4)),
        createNode(7,
          createNode(6),
          createNode(8)))

    it('should return true when searching for existing values', () => {
      for (let i = 1; i < 9; i++) {
        expect(tree.includes(i)).to.be.true
      }
    })

    it('should return false when searching for non-existent values', () => {
      expect(tree.includes(9)).to.be.false
    })
  })

  it('should calculate the size accurately', () => {
    const tree = new BinaryTree()
    expect(tree.size(tree.root)).to.equal(0)
    for (let i = 1; i < 9; i++) {
      tree.insert(i)
    }
    expect(tree.size(tree.root)).to.equal(8)
  })
  it('should return the maximum value with getMax', () => {
    const tree = new BinaryTree()
    for (let i = 1; i < 9; i++) {
      tree.insert(i)
    }
    expect(tree.getMax()).to.equal(8)
    tree.insert(9001)
    expect(tree.getMax()).to.equal(9001)
  })
  it('should return the correct height', () => {
    const tree = new BinaryTree()
    tree.insert(1)
    expect(tree.height()).to.equal(1)
    tree.insert(3)
    expect(tree.height()).to.equal(2)
    tree.insert(5)
    expect(tree.height()).to.equal(3)
  })
})
