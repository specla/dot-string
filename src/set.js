/**
 * Set item value with dot-notation, this works for arrays and objects
 * @param {Array|Object} item
 * @param {String} path  [description]
 * @param {} value [description]
 */
export default function set (item, path, value) {
  if (typeof item !== 'object') {
    throw new TypeError('item should be the type of array or object')
  }

  if (typeof path !== 'string') {
    throw new TypeError('path should be a string')
  }

  path = path.split('.')
  const lastItem = path[path.length - 1]

  return path.reduce((acc, index) => {
    if (!acc[index] && index === lastItem) {
      acc[index] = value
    }

    if (!acc[index] && isNaN(index)) {
      acc[index] = {}
    }

    if (!acc[index] && !isNaN(index)) {
      acc[index] = []
    }

    return acc[index]
  }, item)
}
