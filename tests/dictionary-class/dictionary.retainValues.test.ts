// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.retainValues()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.retainValues()
    expect(result).toBe(dictionary)

  })
  it('should do nothing if no values are provided', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.retainValues()
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should retain only the specified values', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.retainValues(1, 3, 5)
    expect(dictionary.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
  it('should ignore non-existent values', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.retainValues(1, 3, 5, 0)
    expect(dictionary.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
})
