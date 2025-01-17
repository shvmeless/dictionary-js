// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.find()', () => {
  it('should return `undefined` if no entry meets the condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.find((value) => (value < 0))
    expect(result).toBeUndefined()

  })
  it('should return the value of the first entry that meets the condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.find((value) => (value >= 2 && value <= 4))
    expect(result).toStrictEqual(['b', 2])

  })
})
