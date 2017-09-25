/* eslint-env jest */
import { get, set } from 'index'

test('should export the get and set functions', () => {
  expect(get).toBeInstanceOf(Function)
  expect(set).toBeInstanceOf(Function)
})
