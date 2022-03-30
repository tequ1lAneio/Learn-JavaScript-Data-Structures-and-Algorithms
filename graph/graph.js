const Queue = require('../queue/queue')
const Dictionary = require('../map/dictionary')

const printNode = function(node) {
  console.log('Visited vertex: ' + node)
}

function Graph() {
  let vertices = []
  const adjList = new Dictionary()

  const initializeColor = function() {
    let colors = []
    for (let i = 0; i < vertices.length; i++) {
      colors[vertices[i]] = 'white'
    }
    return colors
  }

  this.bfs = function(v, fn) {
    const colors = initializeColor()
    const queue = new Queue()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      const u = queue.dequeue()
      const neighbors = adjList.get(u)
      colors[u] = 'grey'

      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (colors[w] === 'white') {
          colors[w] = 'grey'
          queue.enqueue(w)
        }
      }

      colors[u] = 'black'
      if (fn) {
        fn(u)
      }
      queue.print()
    }
  }

  this.addVertex = function (vertex) {
    vertices.push(vertex)
    adjList.set(vertex, [])
  }

  this.addEdge = function (v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.toString = function() {
    let s = ''
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> '
      const neighbors = adjList.get(vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }

    return s
  }
}

const graph = new Graph()
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'X', 'Y', 'Z']
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
graph.addEdge('I', 'X')
graph.addEdge('I', 'Y')
graph.addEdge('I', 'Z')

console.log(graph.toString())
graph.bfs(vertices[0], printNode)
