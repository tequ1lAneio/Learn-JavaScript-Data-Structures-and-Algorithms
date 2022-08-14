const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
]

const INF = Number.MAX_SAFE_INTEGER

class Prim {
  constructor(graph) {
    this.graph = graph
  }

  prim(src) {
    const key = []
    const parent = []
    const visited = []
    const length = this.graph.length

    const minKey = () => {
      let min = INF
      let minIndex = -1

      for (let i = 0; i < length; i++) {
        if (!visited[i] && key[i] < min) {
          min = key[i]
          minIndex = i
        }
      }

      return minIndex
    }

    for (let i = 0; i < length; i++) {
      key[i] = INF
      visited[i] = false
    }

    key[src] = 0
    parent[src] = -1

    for (let i = 0; i < length; i++) {
      const u = minKey()
      visited[u] = true


      for (let j = 0; j < length; j++ ) {
        if (
          !visited[j]
            && this.graph[u][j]
            && this.graph[u][j] < key[j]
        ) {
          parent[j] = u
          key[j] = this.graph[u][j]
        }
      }

      console.log(u, parent, key)
    }

    return parent
  }
}

const prim = new Prim(graph)
console.log(prim.prim(0))
