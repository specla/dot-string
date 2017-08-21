/* eslint-env jest */

import set from 'set'

test('Should set object property value', () => {
  const obj = { key: { item: undefined } }
  const newObj = set(obj, 'key.item', true)
  expect(newObj.key.item).toBe(true)
})

test('Should set array property value', () => {
  const array = [{ key: { item: undefined } }]
  const newArray = set(array, '0.key.item', true)
  expect(newArray[0].key.item).toBe(true)
})

test('Should create path to key', () => {
  const array = []
  const newArray = set(array, '0.key.item', true)
  expect(newArray[0].key.item).toBe(true)
})

test('Should reassign value if another already exists', () => {
  const obj = { key: true }
  const newObj = set(obj, 'key', false)
  expect(newObj.key).toBe(false)
})

test('Should be immutable', () => {
  const obj = { key: true }
  set(obj, 'key', false)
  expect(obj.key).toBe(true)
})

test(`Should throw an error if the first argument isn't an array or object`, () => {
  expect(() => set('not-object', 'test')).toThrowErrorMatchingSnapshot()
})

test(`Should throw an error if the second argument isn't a string`, () => {
  expect(() => set({}, 623)).toThrowErrorMatchingSnapshot()
})
