const loseLoseHashCode = (key) => {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

function HashMapWithLinearProbing() {
  let table = []

  const ValuePair = function (key, value) {
    this.key = key
    this.value = value

    this.toString = function () {
      return `[${this.key} - ${this.value}]`
    }
  }

  this.put = function(key, value) {
    let position = loseLoseHashCode(key)

    if (table[position]) {
      while (table[++position]) {
        continue
      }
    }

    table[position] = new ValuePair(key, value)
  }

  this.get = function(key) {
    let position = loseLoseHashCode(key)

    if (!table[position]) {
      return false
    }

    if (table[position].key = key) {
      return table[position].value
    } else {
      position++
      while (table[position] && table[position].key !== key) {
        position++
      }
      if (table[position] && table[position].key === key) {
        return table[position].value
      }
    }

    return undefined
  }

  this.remove = function(key) {
    let position = loseLoseHashCode(key)
    
    if (!table[position]) {
      return false
    }
    
    if (table[position].key = key) {
      table[position] = undefined
    } else {
      position++
      while (table[position] && table[position].key !== key) {
        position++
      }
      if (table[position] && table[position].key === key) {
        table[position] = undefined
      }
    }
  }
  
  this.print = function() {
    table.filter(t => t).forEach(t => {
      console.log(`${t.key} - ${t.value}`)
    })
  }
}

const hashMapWithLinearProbing = new HashMapWithLinearProbing()
hashMapWithLinearProbing.put('Gandalf', 'gandalf@email.com');
hashMapWithLinearProbing.put('John', 'johnsnow@email.com');
hashMapWithLinearProbing.put('Tyrion', 'tyrion@email.com');
hashMapWithLinearProbing.put('Aaron', 'aaron@email.com');
hashMapWithLinearProbing.put('Donnie', 'donnie@email.com');
hashMapWithLinearProbing.put('Ana', 'ana@email.com');
hashMapWithLinearProbing.put('Jonathan', 'jonathan@email.com');
hashMapWithLinearProbing.put('Jamie', 'jamie@email.com');
hashMapWithLinearProbing.put('Sue', 'sue@email.com');
hashMapWithLinearProbing.put('Mindy', 'mindy@email.com');
hashMapWithLinearProbing.put('Paul', 'paul@email.com');
hashMapWithLinearProbing.put('Nathan', 'nathan@email.com');


console.log('**** Printing Hash **** ');

hashMapWithLinearProbing.print();

console.log('**** Get **** ');

console.log(hashMapWithLinearProbing.get('Jamie'));
console.log(hashMapWithLinearProbing.get('Sue'));
console.log(hashMapWithLinearProbing.get('Jonathan'));
console.log(hashMapWithLinearProbing.get('Loiane'));

console.log('**** Remove **** ');

console.log(hashMapWithLinearProbing.remove('Gandalf'));
console.log(hashMapWithLinearProbing.get('Gandalf'));
hashMapWithLinearProbing.print();

console.log(hashMapWithLinearProbing.remove('Sue'));
hashMapWithLinearProbing.print();

console.log(hashMapWithLinearProbing.remove('Jamie'));
hashMapWithLinearProbing.print();

console.log(hashMapWithLinearProbing.remove('Donnie'));
hashMapWithLinearProbing.print();

