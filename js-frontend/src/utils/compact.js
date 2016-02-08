export default function compact(obj) {
  let entries = Object.entries(obj)
  let result = Object.assign({}, obj)
  let count = entries.length
  for (let [key, value] of entries) {
    if (!value) {
      count -= 1
      delete result[key]
    }
  }
  return count === 0 ? null : result
}
