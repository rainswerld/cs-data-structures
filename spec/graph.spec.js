'use string'

const expect = require('chai').expect
const { Graph } = require('../lib/graph')

describe('Graph', () => {
  describe('Graph.nodes', () => {
    it('should have a `nodes` property that is an object', () => {
      const g = new Graph()
      expect(g.nodes).to.not.be.undefined
      expect(g.nodes).to.be.eql({})
    })
  })

  describe('Graph#addNode', () => {
    it('should have an `addNode` method', () => {
      const g = new Graph()
      expect(g.addNode).to.not.be.undefined
    })

    it('should add a node to the graph', () => {
      const g = new Graph()
      g.addNode('A')
      g.addNode('B')
      expect(g.nodes.A).to.eql([])
      expect(g.nodes.B).to.eql([])
    })
  })

  describe('Graph#addEdge', () => {
    it('should have an `addEdge` method', () => {
      const g = new Graph()
      expect(g.addEdge).to.not.be.undefined
    })

    it('should add edges to a node', () => {
      const g = new Graph()
      g.addNode('A')
      g.addNode('B')
      g.addNode('C')
      g.addEdge('A', 'B')
      g.addEdge('A', 'C')
      g.addEdge('B', 'C')
      g.addEdge('C', 'A')

      expect(g.nodes.A).to.eql(['B', 'C'])
      expect(g.nodes.B).to.eql(['C'])
      expect(g.nodes.C).to.eql(['A'])
    })
  })
})
