const Dictionary = require('../map/dictionary')

function Graph() {
  let vertices = []
  const adjList = new Dictionary()

  this.addVertex = function (vertex) {
    vertices.push(vertex)
    adjList.set(vertex, [])
  }

  this.addEdge = function (v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }
}

const graph = new Graph()
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i <  vertices.length; i++) {
  graph.addVertex(vertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
