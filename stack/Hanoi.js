const Stack = require('./stack')

const hanoi = function(A, B, C) {
  const n = A.length
  if (n > 0) {
    hanoi(n - 1, A, C, B)
    B.push(A.pop())
    hanoi(n - 1, C, B, A)
  }
}

const A = new Stack()
A.push(3);
A.push(2);
A.push(1);


const B = new Stack()
const C = new Stack()

hanoi(A, B, C)

A.print()
// B.print()
// C.print()
