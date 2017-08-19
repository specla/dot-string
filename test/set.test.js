/* eslint-env jest */

import set from 'set'

test('Should set object property value', () => {
  const obj = { key: { item: undefined } }
  set(obj, 'key.item', true)
  expect(obj.key.item).toBe(true)
})

test('Should set array property value', () => {
  const array = [{ key: { item: undefined } }]
  set(array, '0.key.item', true)
  expect(array[0].key.item).toBe(true)
})

test('Should create path to key', () => {
  const array = []
  set(array, '0.key.item', true)
  expect(array[0].key.item).toBe(true)
})

test(`Should throw an error if the first argument isn't an array or object`, () => {
  expect(() => set('not-object', 'test')).toThrowErrorMatchingSnapshot()
})

test(`Should throw an error if the second argument isn't a string`, () => {
  expect(() => set({}, 623)).toThrowErrorMatchingSnapshot()
})
