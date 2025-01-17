// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.reduce()', () => {
  it('should return original value for an empty dictionary', () => {

    const object: Record<string, number> = {}
    const dictionary = new Dictionary(object)

    const result = dictionary.reduce((previous, value) => (previous + value), 0)
    expect(result).toBe(0)

  })
  it('should return the result of the cumulative function', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.reduce((previous, value) => (previous + value), 0)
    expect(result).toBe(15)

  })
})
