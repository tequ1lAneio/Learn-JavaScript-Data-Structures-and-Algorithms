function Set() {
  let items = {}

  this.add = function(value) {
    if (this.has(value)) {
      return false
    }

    items[value] = value
    return true
  }

  this.remove = function(value) {
    if (!this.has(value)) {
      return false
    }

    delete items[value]
    return true
  }

  this.has = function(value) {
    return items.hasOwnProperty(value)
  }

  this.clear = function() {
    items = {}
  }

  this.size = function() {
    return Object.keys(items).length
  }

  this.values = function() {
    const keys = Object.keys(items)
    return keys.map(key => items[key])
  }

  this.union = function(otherSet) {
    const newSet = new Set()

    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      newSet.add(values[i])
    }

    values = otherSet.values()
    for (let i = 0; i < values.length; i++) {
      newSet.add(values[i])
    }

    return newSet
  }

  this.intersection = function(otherSet) {
    const newSet = new Set()

    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      const value = values[i]
      if (otherSet.has(value)) {
        newSet.add(value)
      }
    }

    return newSet
  }

  this.difference = (otherSet) => {
    const newSet = new Set()

    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      const value = values[i]
      if (!otherSet.has(value)) {
        newSet.add(value)
      }
    }

    return newSet
  }

  this.subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      const values = this.values()
      for (let i = 0; i < values.length; i++) {
        const value = values[i]
        if (!otherSet.has(value)) {
          return false
        }
      }
      return true
    }
  }
}

// let set = new Set()
// set.add(1)
// console.log(set.values())
// console.log(set.has(1))
// console.log(set.size())
//
// set.add(2)
// console.log(set.values())
// console.log(set.has(2))
// console.log(set.size())
//
// set.remove(1)
// console.log(set.values())
//
// set.remove(2)
// console.log(set.values())
