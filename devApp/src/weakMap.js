function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + 'M'
}

console.log(usageSize())

let arr = new Array(10 * 1024 * 1024)
const map = new WeakMap()
map.set(arr, 1)


console.log(usageSize())

arr = null
console.log(usageSize())
