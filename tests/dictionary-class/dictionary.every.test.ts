// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.every()', () => {
  it('should return `false` if at least one entry does not meet the condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.every((value) => (value >= 2 && value <= 4))
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if all entries meet the condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.every((value) => (value >= 1 && value <= 5))
    expect(result).toStrictEqual(true)

  })
})
