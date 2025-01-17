// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.copy()', () => {
  it('should return a new Dictionary instance', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const copy = dictionary.copy()
    expect(copy).instanceOf(Dictionary)
    expect(copy).not.toBe(dictionary)

  })
  it('should preserve all entries in the new Dictionary', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const copy = dictionary.copy()
    expect(copy.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
})
