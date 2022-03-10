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

  size() {
    return this.items.length
  }

  print() {
    this.items.forEach(ele => console.log(ele))
  }

  toString(){
    return this.items.toString();
  }
}

module.exports = Stack
