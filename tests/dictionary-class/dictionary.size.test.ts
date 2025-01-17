// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.size()', () => {
  it('should return `0` if the Dictionary is empty', () => {

    const dictionary = new Dictionary({})

    const result = dictionary.size()
    expect(result).toBe(0)

  })
  it('should return the current number of entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.size()
    expect(result).toBe(5)

  })
})
