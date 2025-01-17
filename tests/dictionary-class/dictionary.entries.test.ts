// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.entries()', () => {
  it('should return an empty array if the Dictionary is empty', () => {

    const dictionary = new Dictionary()

    const result = dictionary.entries()
    expect(result).toStrictEqual([])

  })
  it('should return an array with all current entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.entries()
    expect(result).toStrictEqual([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])

  })
  it('should return a unique array for each call', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const a = dictionary.entries()
    const b = dictionary.entries()
    expect(a).not.toBe(b)

  })
})
