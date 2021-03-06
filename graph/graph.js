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

    console.log(colors)
  }

  this.BFS = function(v) {
    const colors = initializeColor()
    const queue = new Queue()
    const d = {}
    const pred = {}
    queue.enqueue(v)

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0
      pred[vertices[i]] = null
    }

    while (!queue.isEmpty()) {
      const u = queue.dequeue()
      const neighbors = adjList.get(u)
      colors[u] = 'grey'
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (colors[w] === 'white') {
          colors[w] = 'grey'  // to avoid exploring by neighbor
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      colors[u] = 'black'
    }

    return {
      distances: d,
      predecessors: pred
    }
  }

  this.getPathsByBFS = function(v) {
    const { predecessors } = this.BFS(v)
    const paths = []

    for (let i = 0; i < vertices.length; i++) {
      let vertex = vertices[i]
      let path = vertex
      while (predecessors[vertex]) {
        path += ` - ${predecessors[vertex]}`
        vertex = predecessors[vertex]
      }
      paths.push(path)
    }

    return paths
  }

  this.dfs = function(fn) {
    const colors = initializeColor()

    const dfsVisit = function(u) {
      colors[u] = 'grey'
      if (fn) {
        fn(u)
      }

      const neighbors = adjList.get(u)
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (colors[w] === 'white') {
          dfsVisit(w)
        }
      }

      colors[u] = 'black'
    }

    for (let i = 0; i < vertices.length; i++) {   // When it comes to a graph which is not all connected.
      if (colors[vertices[i]] === 'white') {
        dfsVisit(vertices[i])
      }
    }

    console.log(colors)
  }

  let time = 0
  this.DFS = function() {  // TopSort also can be achieved by the return value `finished`.
    let colors = initializeColor()
    let d = {}
    let f = {}
    let p = {}
    time = 0

    const DFSVisit = function(u) {
      colors[u] = 'grey'
      d[u] = ++time

      const neighbors = adjList.get(u)
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (colors[w] === 'white') {
          p[w] = u
          DFSVisit(w)
        }
      }

      colors[u] = 'black'
      f[u] = ++time
    }

    for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i]
      d[vertex] = 0
      f[vertex] = 0
      p[vertex] = null
    }

    for (let i = 0; i < vertices.length; i++) {
      if (colors[vertices[i]] === 'white') {
        DFSVisit(vertices[i])
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p,
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
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
// const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'X', 'Y', 'Z']
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
// graph.addEdge('I', 'X')
// graph.addEdge('I', 'Y')
// graph.addEdge('I', 'Z')

// console.log(graph.toString())
// graph.bfs(vertices[0], printNode)
console.log(graph.BFS(vertices[0]))
// console.log(graph.getPathsByBFS(vertices[0]))

// graph.dfs(printNode)
console.log(graph.DFS())
