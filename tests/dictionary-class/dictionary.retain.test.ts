// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.retain()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.retain()
    expect(result).toBe(dictionary)

  })
  it('should do nothing if no keys are provided', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.retain()
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove all entries except the specified keys', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.retain('a', 'c', 'e')
    expect(dictionary.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
  it('should ignore non-existent keys', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.retain('a', 'c', 'e', 'x')
    expect(dictionary.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
})
