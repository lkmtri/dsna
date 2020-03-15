function minRewards(scores) {
  const rewards = scores.map(_ => 1)

  for (let i = 1; i < scores.length; i += 1) {
    if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1
  }

  for (let i = scores.length - 2; i >= 0; i -= 1) {
    if (scores[i] > scores[i + 1])
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1)
  }

  return rewards.reduce((acc, cur) => acc + cur, 0)
}

// Do not edit the line below.
exports.minRewards = minRewards
