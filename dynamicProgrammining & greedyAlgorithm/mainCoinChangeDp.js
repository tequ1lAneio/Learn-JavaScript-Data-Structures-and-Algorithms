class MainCoinChangeDp {
  constructor(coins) {
    this.coins = coins
  }

  cache = new Map()

  makeChange(amount) {
    if (!amount) {
      return []
    }

    if (this.cache.get(amount)) {
      return this.cache.get(amount)
    }

    let min = []
    let newMin = []

    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i]
      const newAmount = amount - coin

      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount)
      }

      if (
        newAmount >= 0
        && (min.length - 1 > newMin.length || !min.length)
        && (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
      }
    }

    this.cache.set(amount, min)
    return min
  }
}

const minCoinChange = new MainCoinChangeDp([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36))
