// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.reduce()', () => {
  it('should return the initial value if the Dictionary is empty', () => {

    const dictionary = new Dictionary<number>()

    const result = dictionary.reduce((previous, value) => (previous + value), 0)
    expect(result).toBe(0)

  })
  it('should return the result of the cumulative function applied to all entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.reduce((previous, value) => (previous + value), 0)
    expect(result).toBe(15)

  })
})
