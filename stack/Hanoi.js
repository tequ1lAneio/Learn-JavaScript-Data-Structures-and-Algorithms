const Stack = require('./stack')

/*
* param a source
* param b helper
* param c target
* */

const A = [3, 2, 1], B = [], C = []

const hanoi = (a, b, c) => {
  const n = a.length
  const move = (n, a, b, c) => {
    if (n > 0) {
      move(n-1, a, c, b)
      c.push(a.pop())
      move(n - 1, b, a, c)
    }
  }
  move(n, a, b, c)
}

hanoi(A, B, C)

// const a = new Stack(),
//   b = new Stack(),
//   c = new Stack()
//
// a.push(3)
// a.push(2)
// a.push(1)
//
// hanoi(a, b, c)
// // a.print()
// c.print()



//
// function towerOfHanoi(n, from, to, helper) {
//
//   if (n > 0) {
//     // console.log(n)
//     towerOfHanoi(n - 1, from, helper, to);
//     to.push(from.pop());
//     console.log('-----');
//     console.log('Source: ' + from.toString());
//     console.log('Dest: ' + to.toString());
//     console.log('Helper: ' + helper.toString());
//     towerOfHanoi(n - 1, helper, to, from);
//   }
// }
//
// var source = new Stack();
// source.push(3);
// source.push(2);
// source.push(1);
//
// var dest = new Stack();
// var helper = new Stack();
//
// towerOfHanoi(source.size(), source, dest, helper);
//
// source.print();
// helper.print();
// dest.print();
