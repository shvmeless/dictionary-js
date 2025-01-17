// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.deleteValues()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.deleteValues()
    expect(result).toBe(dictionary)

  })
  it('should do nothing if no values are provided', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.deleteValues()
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove only the specified values', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.deleteValues(1, 3, 5)
    expect(dictionary.record()).toStrictEqual({ b: 2, d: 4 })

  })
  it('should ignore non-existent values', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.deleteValues(1, 3, 5, 0)
    expect(dictionary.record()).toStrictEqual({ b: 2, d: 4 })

  })
})
