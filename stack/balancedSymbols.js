const Stack = require('./stack')

const parenthesesChecker = (symbols) => {
  const stack = new Stack()
  let balanced = false
  const open = '([{'
  const close = ')]}'

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i]
    if (open.includes(symbol)) {
      balanced = true
      stack.push(symbol)
    } else {
      if (stack.isEmpty()) {
        balanced = false
        break
      } else {
        const top = stack.pop()
        if (open.indexOf(top) !== close.indexOf(symbol)) {
          balanced = false
          break
        }
      }
    }
  }

  return balanced
}

console.log(parenthesesChecker('{([])}')); //true
console.log(parenthesesChecker('{{([][])}()}')); //true
console.log(parenthesesChecker('[{()]')); //false
