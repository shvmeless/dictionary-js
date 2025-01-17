// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.filter()', () => {
  it('should remove all entries that do not meet the condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.filter((value) => (value >= 2 && value <= 4))
    expect(dictionary.record()).toStrictEqual({ b: 2, c: 3, d: 4 })

  })
})
