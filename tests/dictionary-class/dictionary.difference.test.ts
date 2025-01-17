// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.difference()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.difference({ x: 0, y: 0, z: 0 })
    expect(result).toBe(dictionary)

  })
  it('should insert the new entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.difference({ x: 0, y: 0, z: 0 })
    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0, z: 0 })

  })
  it('should remove the duplicate entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.difference({ a: 0, c: 0, e: 0 })
    expect(dictionary.record()).toStrictEqual({ b: 2, d: 4 })

  })
  it('should handle both cases as necessary', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.difference({ a: 0, e: 0, x: 0 })
    expect(dictionary.record()).toStrictEqual({ b: 2, c: 3, d: 4, x: 0 })

  })
  it('should accept `Dictionary` instances as a parameter', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    const input = new Dictionary({ a: 0, e: 0, x: 0 })

    dictionary.difference(input)
    expect(dictionary.record()).toStrictEqual({ b: 2, c: 3, d: 4, x: 0 })

  })
  it('should not modify the provided input', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    const input = new Dictionary({ a: 0, e: 0, x: 0 })

    dictionary.difference(input)
    expect(input.record()).toStrictEqual({ a: 0, e: 0, x: 0 })

  })
})
