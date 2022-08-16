// sequential search
const sequentialSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i
    }
  }

  return -1
}

const sort = (input) => {
  return input // sorted result
}
// binary search
const binarySearch = (arr, item) => {
  arr.sort()
  let left = 0
  let right = arr.length - 1
  let mid

  while (left <= right ) {
    mid = Math.floor((left + right) / 2)

    if (arr[mid] > item) {
      right = mid
    } else if (arr[mid] < item) {
      left = mid
    } else {
      return mid
    }
  }

  return left
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
