function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  const minCoins = new Array(n + 1).fill(Infinity)
  minCoins[0] = 0

  for (const d of denoms) {
    for (let amt = 1; amt <= n; amt += 1) {
      if (amt >= d) {
        minCoins[amt] = Math.min(minCoins[amt - d] + 1, minCoins[amt])
      }
    }
  }

  return minCoins[n]
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange
