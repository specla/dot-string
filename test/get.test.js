/* eslint-env jest */
import get from 'get'

test('should retreive value from object', () => {
  const object = { key: { item: true } }
  expect(get(object, 'key.item')).toBe(true)
})

test('should retreive value from array', () => {
  const object = [{ key: { item: true } }]
  expect(get(object, '0.key.item')).toBe(true)
})

test(`Should throw an error if the first argument isn't an array or object`, () => {
  expect(() => get('not-object', 'test')).toThrowErrorMatchingSnapshot()
})

test(`Should throw an error if the second argument isn't a string`, () => {
  expect(() => get({}, 623)).toThrowErrorMatchingSnapshot()
})
