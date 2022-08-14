const INF = Number.MAX_SAFE_INTEGER
class FloydWarshall {
  constructor(graph) {
    this.graph = graph
  }

  // floydWarshall() {
  //   const dist = []
  //   const length = this.graph.length
  //
  //   for (let i = 0; i < length; i++) {
  //     dist[i] = []
  //     for (let j = 0; j < length; j++) {
  //       dist[i][j] = this.graph[i][j]
  //     }
  //   }
  //
  //   for (let i = 0; i < length; i++) {
  //     for (let j = 0; j < length; j++) {
  //       for (let k = 0; k < length; k++) {
  //         if (dist[i][j] + dist[j][k] < dist[i][k]) {
  //           dist[i][k] = dist[i][j] + dist[j][k]
  //         }
  //       }
  //     }
  //   }
  //
  //   return dist
  // }

  floydWarshall() {
    const dist = []
    const length = this.graph.length

    for (let i = 0; i < length; i++) {
      dist[i] = []
      for (let j = 0; j < length; j++) {
        dist[i][j] = this.graph[i][j]
      }
    }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        for (let k = 0; k < length; k++) {
          if (dist[j][i] + dist[i][k] < dist[j][k]) {
            dist[j][k] = dist[j][i] + dist[i][k]
          }
        }
      }
    }

    return dist
  }
}

const floyd = new FloydWarshall([
  [0, 2, 4, INF, INF, INF],
  [INF, 0, 2, 4, 2, INF],
  [INF, INF, 0, INF, 3, INF],
  [INF, INF, INF, 0, INF, 2],
  [INF, INF, INF, 3, 0, 2],
  [INF, INF, INF, INF, INF, 0],
])

console.time('floydWarshall')
console.log(floyd.floydWarshall())
// floyd.floydWarshall()
console.timeEnd('floydWarshall')
