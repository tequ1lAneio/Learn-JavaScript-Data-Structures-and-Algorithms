const Queue = require('./queue')

function hotPotato(nameList, num) {
  const queue = new Queue()

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  let eliminated = ''

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      const current = queue.dequeue()
      if (current) {
        queue.enqueue(current)
      } else {
        break
      }
    }
    eliminated = queue.dequeue()
    console.log(`${eliminated} has got eliminated`)
  }

  return queue.dequeue()
}

console.log(hotPotato(['John', 'Joe', 'Jenny', 'Jake'], 8))
