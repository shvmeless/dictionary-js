// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.count()', () => {
  it('should return `0` for an empty dictionary', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).count((value) => (value < 0))
    expect(result).toBe(0)

  })
  it('should return the number of entries that satisfy the provided condition', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).count((value) => (value >= 2 && value <= 4))
    expect(result).toBe(3)

  })
  it('should provide the dictionary in callback function', () => {

    let original: Record<string, number> | null = null
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).count((value, key, dictionary) => {
      if (original === null) original = dictionary
      expect(original).toBe(dictionary)
      return true
    })

  })
})
