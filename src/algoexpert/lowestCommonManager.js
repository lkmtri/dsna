function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
  return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager
}

const getOrgInfo = (manager, reportOne, reportTwo) => {
  let count = 0

  for (const directReport of manager.directReports) {
    const orgInfo = getOrgInfo(directReport, reportOne, reportTwo)
    if (orgInfo.lowestCommonManager) return orgInfo
    count += orgInfo.count
  }

  if (manager === reportOne || manager === reportTwo) count += 1

  const lowestCommonManager = count === 2 ? manager : null

  return { lowestCommonManager, count }
}

// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager
