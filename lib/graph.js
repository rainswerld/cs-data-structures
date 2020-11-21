// A Graph constructor for making new Graphs
// Here's what a graph looks like when fully built
// Graph {
//   'google.com':        ['stackoverflow.com', 'github.com'],
//   'stackoverflow.com': ['github.com']
// }
const Graph = function () {
  // keep track of the nodes, using an object
  this.nodes = {}
}

// addNode - O(1) add a new node to our graph. Example nodes. ('google.com', 'A', etc...)
Graph.prototype.addNode = function (node) {
  // if the `node` isn't in our graph
  if (!this.nodes[node]) {
    // then we initialize the node with an empty array
    // the empty array will be filled with edges eventually
    this.nodes[node] = []
  }
}

// addEdge - O(1) which adds a one way link from the startNode to the endNode.
//           This means there is an edge between startNode and endNode.
Graph.prototype.addEdge = function (startNode, endNode) {
  // if an array exists for our startNode
  if (this.nodes[startNode]) {
    // then add the endNode to the list of startNode's nodes
    this.nodes[startNode].push(endNode)
  }
}

module.exports = { Graph }
