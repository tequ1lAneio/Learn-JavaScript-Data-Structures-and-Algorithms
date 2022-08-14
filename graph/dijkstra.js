const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 0, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
]
const INF = Number.MAX_SAFE_INTEGER

// class Dijkstra {
//   constructor(graph) {
//     this.graph = graph
//   }
//
//   dijkstra(src) {
//     const dist = []
//     const visited = []
//     let length = this.graph.length
//
//     const minDistance = function() {
//       let min = INF
//       let minIndex = -1
//
//       for (let i = 0; i < dist.length; i++) {
//         if (visited[i] === false && dist[i] <= min) {
//           min = dist[i]
//           minIndex = i
//         }
//       }
//       return minIndex
//     }
//
//     for (let i = 0; i < length; i++) {
//       dist[i] = INF
//       visited[i] = false
//     }
//
//     dist[src] = 0
//
//     for (let i = 0; i < length; i++) {
//       const u = minDistance() // To find the nearest vertex.
//       visited[u] = true
//
//       for (let v = 0; v < length; v++) {
//         if (
//           !visited[v]
//           && this.graph[u][v] !== 0
//           && dist[u] !== INF
//           && dist[u] + this.graph[u][v] < dist[v]
//         ) {
//           dist[v] = dist[u] + this.graph[u][v]
//         }
//       }
//     }
//
//     return dist
//   }
// }

class Dijkstra {
  constructor(graph) {
    this.graph = graph
  }

  dijkstra(src) {
    const dist = []
    const visited = []
    const length = this.graph.length

    const minDistance = () => {
      let min = INF
      let minIndex = -1

      for (let i = 0; i < length; i++) {
        if (!visited[i] && dist[i] <= min) {
          min = dist[i]
          minIndex = i
        }
      }
      return minIndex
    }

    for (let i = 0; i < length; i++) {
      dist[i] = INF
      visited[i] = false
    }

    dist[src] = 0

    for (let i = 0; i < length; i++) {
      const u = minDistance()
      visited[u] = true

      for (let v = 0; v < length; v++) {
        if (
          !visited[v]
            && this.graph[u][v] !== 0
            && dist[u] + this.graph[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + this.graph[u][v]
        }
      }
    }

    return dist
  }
}

const dij = new Dijkstra(graph)

console.time('dijkstra')
// console.log(dij.dijkstra(0))

for (let i = 0; i < graph.length; i++) {
  dij.dijkstra(i)
}

console.timeEnd('dijkstra')
