/**
 * Access value from object with dot-notation
 * @param  {Object|Array} item The object/Array where the value should be retreived from
 * @param  {String} path dot-notation string
 * @return {Mixed}
 */
export default function get (item, path) {
  if (typeof item !== 'object') {
    throw new TypeError('item should be an array or string')
  }

  if (typeof path !== 'string') {
    throw new TypeError('path should be a string')
  }

  return path.split('.').reduce((acc, value, index) => {
    return acc[value]
  }, item)
}
