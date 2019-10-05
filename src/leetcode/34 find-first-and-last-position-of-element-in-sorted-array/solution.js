const binarySearch = (nums, target, isFindingFirst) => {
  let low = 0,
    high = nums.length - 1

  while (low <= high) {
    const mid = parseInt((high + low) / 2)
    if (target === nums[mid]) {
      if (isFindingFirst) {
        if (nums[mid - 1] === undefined || nums[mid - 1] < target) {
          return mid
        } else {
          high = mid - 1
        }
      } else {
        if (nums[mid + 1] === undefined || nums[mid + 1] > target) {
          return mid
        } else {
          low = mid + 1
        }
      }
    } else if (target > nums[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}

const searchRange = (nums, target) => {
  const firstOccurence = binarySearch(nums, target, true)
  const lastOccurence = binarySearch(nums, target, false)

  return [firstOccurence, lastOccurence]
}
