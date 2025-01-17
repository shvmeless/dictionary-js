// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.count()', () => {
  it('should return `0` for an empty Dictionary', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.count((value) => (value < 0))
    expect(result).toBe(0)

  })
  it('should return the number of entries that satisfy the provided condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.count((value) => (value >= 2 && value <= 4))
    expect(result).toBe(3)

  })
})
