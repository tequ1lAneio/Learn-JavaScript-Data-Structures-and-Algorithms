const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
]

const INF = Number.MAX_SAFE_INTEGER

class Kruskal {
  constructor(graph) {
    this.graph = graph
  }

  kruskal() {
    const length = this.graph.length
    const parent = []
    let ne = 0
    let u = 0
    let v = 0
    let a = 0
    let b = 0

    const find = (i) => {
      while (parent[i]) {
        i = parent[i]
      }

      return i
    }

    const union = () => {
      if (a !== b) {
        parent[v] = u
        return true
      }

      return false
    }

    const cost = (() => {
      const res = []

      for (let i = 0; i < length; i++) {
        res[i] = []

        for (let j = 0; j < length; j++) {
          const value = this.graph[i][j]
          if (value) {
            res[i][j] = this.graph[i][j]
          } else {
            res[i][j] = INF
          }
        }
      }
      return res
    })()

    while (this.graph.length - 1 > ne) {
      for (let i = 0, min = INF; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (cost[i][j] < min) {
            min = cost[i][j]
            u = i
            v = j
          }
        }
      }

      a = find(u)
      b = find(v)

      if (union()) {
        ne++
      }

      cost[u][v] = cost[v][u] = INF

      // console.log(u, cost[u])
      // console.log(parent)
      // console.log('====================')
    }

    return parent
  }
}

const krus = new Kruskal(graph)

