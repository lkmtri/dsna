function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
  const ways = new Array(n + 1).fill(0)
  ways[0] = 1

  for (const d of denoms) {
    for (let i = 1; i <= n; i += 1) {
      ways[i] = ways[i] + (ways[i - d] || 0)
    }
  }

  return ways[n]
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange
