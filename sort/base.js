class ArrayList {
  array = []

  insert(item) {
    this.array.push(item)
  }

  toString() {
    return this.array.join(',')
  }

  swap(a, b) {
    const temp = this.array[a]
    this.array[a] = this.array[b]
    this.array[b] = temp
  }

  bubbleSort() {
    const length = this.array.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1)
        }
      }
    }
  }

  modifiedBubbleSort() {
    const length = this.array.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1)
        }
      }
    }
  }

  selectionSort() {
    const length = this.array.length
    let minIndex = 0

    for (let i = 0; i < length; i++) {
      minIndex = i
      for (let j = i + 1; j < length; j++) {
        if (this.array[j] < this.array[minIndex]) {
          this.swap(j, minIndex)
        }
      }
    }
  }

  insertSort() {
    const length = this.array.length
    for (let i = 1; i < length; i++) {
      for (let j = i; j > 0; j--) {
        if (this.array[j] < this.array[j - 1]) {
          this.swap(j, j - 1)
        } else {
          break
        }
      }
    }
  }

  mergeSort() {
    const merge = (left, right) => {
      const result = []
      let il = 0, ir = 0

      while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
          result.push(left[il++])
        } else {
          result.push(right[ir++])
        }
      }

      while (il < left.length) {
        result.push(left[il++])
      }

      while (ir < right.length) {
        result.push(right[ir++])
      }

      return result
    }

    const mergeSortRec = (array) => {
      const length = array.length

      if (array.length === 1) {
        return array
      }

      const mid = Math.floor(length / 2)
      const left = array.slice(0, mid)
      const right = array.slice(mid, length)

      return merge(mergeSortRec(left), mergeSortRec(right))
    }

    this.array = mergeSortRec(this.array)
  }

  quickSort() {
    const partition = (array, left, right) => {
      const pivot = array[Math.floor((left + right) / 2)]
      let i = left, j = right

      while (i < j) {
        while (array[i] < pivot) {
          i++
        }

        while (array[j] > pivot) {
          j--
        }

        if (i <= j) {  // For a right interval, we have to i++ to reduce the range of the array, or it will be an infinite loop.
          [array[i], array[j]] = [array[j], array[i]]
          i++
          j--
        }
      }

      return i // Using i is because sometimes j can be out of boundary.
    }

    const quick = (array, left, right) => {
      if (array.length > 1) {
        const index = partition(array, left, right)

        if (left < index - 1) {
          quick(array, left, index - 1)
        }

        if (index < right) {
          quick(array, index, right)
        }
      }
    }

    // console.log(this.array)
    quick(this.array, 0, this.array.length - 1)
  }

  heapSort() {
    let heapSize = this.array.length

    const heapify = (size, i) => {
      let largest = i
      const left = 2 * i + 1
      const right = left + 1

      if (left < size && this.array[left] > this.array[largest]) {
        largest = left
      }

      if (right < size && this.array[right] > this.array[largest]) {
        largest = right
      }

      if (largest !== i) {
        this.swap(largest, i)
        heapify(size, largest)
      }
    }

    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
      heapify(heapSize, i)
    }

    while (heapSize > 1) {
      heapSize--
      this.swap(heapSize, 0)
      heapify(heapSize, 0)
    }
  }
}

const initArray = () => {
  const myArray = new ArrayList()
  myArray.insert(3)
  myArray.insert(5)
  myArray.insert(1)
  myArray.insert(6)
  myArray.insert(4)
  myArray.insert(7)
  myArray.insert(2)

  // myArray.insert(2)
  // myArray.insert(3)

  return myArray
}
const arr = initArray()
console.time('sort')

// ======================================

// arr.bubbleSort()
// arr.modifiedBubbleSort()
// arr.selectionSort()
// arr.insertSort()
// arr.mergeSort()
// arr.quickSort()
arr.heapSort()

// ======================================

console.timeEnd('sort')
console.log(arr.toString())
