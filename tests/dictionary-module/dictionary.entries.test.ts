// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary().entries()', () => {
  it('should return an empty array if the dictionary is empty', () => {

    const result = dictionary({}).entries()
    expect(result).toStrictEqual([])

  })
  it('should return an array with all current entries', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).entries()
    expect(result).toStrictEqual([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])

  })
  it('should return a unique array for each call', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const a = dictionary(object).entries()
    const b = dictionary(object).entries()
    expect(a).not.toBe(b)

  })
})
