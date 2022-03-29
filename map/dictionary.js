function Dictionary() {
  let items = {}

  this.set = function(key, value) {
    items[key] = value
  }

  this.delete = function(key) {
    if (!this.has(key)) {
      return false
    }

    delete items[key]
    return true
  }

  this.has = function(key) {
    return items.hasOwnProperty(key)
  }

  this.get = function(key) {
    return this.has(key) ? items[key] : undefined
  }

  this.clear = function() {
    items = {}
  }

  this.keys = function() {
    return Object.keys(items)
  }

  this.size = function() {
    return this.keys().length
  }

  this.values = function() {
    const values = []
    const keys = this.keys()
    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }
}

module.exports = Dictionary
