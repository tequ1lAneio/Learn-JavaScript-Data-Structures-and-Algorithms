class Stack {
  constructor() {
    this.items = []
  }

  push(ele) {
    this.items.push(ele)
  }

  pop() {
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }
}

function divideBy2(decNumber) {
  const remStack = new Stack()
  let rem, binaryString = ''

  while(decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

// console.log(divideBy2(10))

function baseConverter(decNumber, base) {
  const remStack = new Stack()
  let rem, binaryString = ''
  const digitsMap = '0123456789ABCDEF';

  while(decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.isEmpty()) {
    binaryString += digitsMap[remStack.pop()]
  }

  return binaryString
}

console.log(baseConverter(10015, 16))
