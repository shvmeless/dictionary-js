// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.merge()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.merge({ x: 0, y: 0, z: 0 })
    expect(result).toBe(dictionary)

  })
  it('should insert the new entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.merge({ x: 0, y: 0, z: 0 })
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0, z: 0 })

  })
  it('should overwrite the duplicate entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.merge({ a: 0, c: 0, e: 0 })
    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0 })

  })
  it('should handle both cases as necessary', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.merge({ a: 0, e: 0, x: 0 })
    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 3, d: 4, e: 0, x: 0 })

  })
  it('should accept `Dictionary` instances as a parameter', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    const input = new Dictionary({ a: 0, e: 0, x: 0 })

    dictionary.merge(input)
    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 3, d: 4, e: 0, x: 0 })

  })
  it('should not modify the provided input', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    const input = new Dictionary({ a: 0, e: 0, x: 0 })

    dictionary.merge(input)
    expect(input.record()).toStrictEqual({ a: 0, e: 0, x: 0 })

  })
})
