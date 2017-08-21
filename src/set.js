/**
 * Set array items or object properties with dot string
 * @param {Array|Object} item
 * @param {String} path
 * @param {Mixed} value
 * @return {Array|Object} new item
 */
export default function set (item, path, value) {
  if (typeof item !== 'object') {
    throw new TypeError('item should be the type of array or object')
  }

  if (typeof path !== 'string') {
    throw new TypeError('path should be a string')
  }

  let newItem = null

  if (Array.isArray(item)) {
    newItem = item.concat([])
  } else {
    newItem = Object.assign({}, item)
  }

  path = path.split('.')
  const lastItem = path[path.length - 1]

  path.reduce((acc, path) => {
    if (!acc[path] && isNaN(path)) {
      acc[path] = {}
    }

    if (!acc[path] && !isNaN(path)) {
      acc[path] = []
    }

    if (path === lastItem) {
      acc[path] = value
    }

    return acc[path]
  }, newItem)

  return newItem
}
