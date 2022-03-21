const LinkedList = require('../linkedList/linkedList')

const loseLoseHashCode = (key) => {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

function HashMapWithLinkedList() {
  const table = []

  const ValuePair = function (key, value) {
    this.key = key
    this.value = value

    this.toString = function () {
      return `[${this.key} - ${this.value}]`
    }
  }

  this.put = function (key, value) {
    let position = loseLoseHashCode(key)

    if (!table[position]) {
      table[position] = new LinkedList()
    }

    table[position].append(new ValuePair(key, value))
  }

  this.get = function (key) {
    let position = loseLoseHashCode(key)

    if (!table[position]) {
      return undefined
    }

    const linkedList = table[position]

    let current = linkedList.getHead()
    while (current.next) {
      if (current.element.key === key) {
        break
      }
      current = current.next
    }
    return current.element.value
  }

  this.remove = function (key) {
    let position = loseLoseHashCode(key)

    if (!table[position]) {
      return false
    }

    const linkedList = table[position]
    let current = linkedList.getHead()
    while (current.next) {
      if (current.element.key === key) {
        linkedList.remove(current.element)
        if (linkedList.isEmpty()) {
          table[position] = undefined
        }
      }
    }
    return true
  }

  this.print = function() {
    for (let i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(table[i].toString());
      }
    }
  }
}

const hashMapWithLinkedList = new HashMapWithLinkedList()
hashMapWithLinkedList.put('Gandalf', 'gandalf@email.com');
hashMapWithLinkedList.put('John', 'johnsnow@email.com');
hashMapWithLinkedList.put('Tyrion', 'tyrion@email.com');
hashMapWithLinkedList.put('Aaron', 'aaron@email.com');
hashMapWithLinkedList.put('Donnie', 'donnie@email.com');
hashMapWithLinkedList.put('Ana', 'ana@email.com');
hashMapWithLinkedList.put('Jonathan', 'jonathan@email.com');
hashMapWithLinkedList.put('Jamie', 'jamie@email.com');
hashMapWithLinkedList.put('Sue', 'sue@email.com');
hashMapWithLinkedList.put('Mindy', 'mindy@email.com');
hashMapWithLinkedList.put('Paul', 'paul@email.com');
hashMapWithLinkedList.put('Nathan', 'nathan@email.com');


console.log('**** Printing Hash **** ');

hashMapWithLinkedList.print();

console.log('**** Get **** ');

console.log(hashMapWithLinkedList.get('Jamie'));
console.log(hashMapWithLinkedList.get('Sue'));
console.log(hashMapWithLinkedList.get('Jonathan'));
console.log(hashMapWithLinkedList.get('Loiane'));

console.log('**** Remove **** ');

console.log(hashMapWithLinkedList.remove('Gandalf'));
console.log(hashMapWithLinkedList.get('Gandalf'));
hashMapWithLinkedList.print();

console.log(hashMapWithLinkedList.remove('Sue'));
hashMapWithLinkedList.print();

console.log(hashMapWithLinkedList.remove('Jamie'));
hashMapWithLinkedList.print();

console.log(hashMapWithLinkedList.remove('Donnie'));
hashMapWithLinkedList.print();
