// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.delete()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.delete()
    expect(result).toBe(dictionary)

  })
  it('should do nothing if no keys are provided', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.delete()
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove the specified keys', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.delete('a', 'c', 'e')
    expect(dictionary.record()).toStrictEqual({ b: 2, d: 4 })

  })
  it('should ignore non-existent keys', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.delete('a', 'c', 'e', 'x')
    expect(dictionary.record()).toStrictEqual({ b: 2, d: 4 })

  })
})
