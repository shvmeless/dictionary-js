// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.some()', () => {
  it('should return `false` if no entry meets the condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.some((value) => (value <= 0))
    expect(result).toStrictEqual(false)

  })
  it('should return `true` if at least one entry meets the condition', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.some((value) => (value % 2 === 0))
    expect(result).toStrictEqual(true)

  })
})
