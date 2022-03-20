function HashMap() {
  let table = []

  const loseLoseHashCode = (key) => {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  this.put = function(key, value) {
    const position = loseLoseHashCode(key)
    console.log(`${position} - ${value}`)
    table[position] = value
  }

  this.remove = function(key) {
    table[loseLoseHashCode(key)] = undefined
  }

  this.get = function(key) {
    return table[loseLoseHashCode(key)]
  }
}

const hash = new HashMap()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')

console.log(hash.get('Gandalf'))
console.log(hash.get('Loiane'))

hash.remove('Gandalf')
console.log(hash.get('Gandalf'))
