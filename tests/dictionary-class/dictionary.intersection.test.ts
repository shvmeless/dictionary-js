// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.clear()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.intersection({ x: 0, y: 0, z: 0 })
    expect(result).toBe(dictionary)

  })
  it('should remove the new entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.intersection({ x: 0, y: 0, z: 0 })
    expect(dictionary.record()).toStrictEqual({})

  })
  it('should overwrite the duplicate entries', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.intersection({ a: 0, c: 0, e: 0 })
    expect(dictionary.record()).toStrictEqual({ a: 0, c: 0, e: 0 })

  })
  it('should handle both cases as necessary', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.intersection({ a: 0, e: 0, x: 0 })
    expect(dictionary.record()).toStrictEqual({ a: 0, e: 0 })

  })
  it('should accept `Dictionary` instances as a parameter', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    const input = new Dictionary({ a: 0, e: 0, x: 0 })

    dictionary.intersection(input)
    expect(dictionary.record()).toStrictEqual({ a: 0, e: 0 })

  })
  it('should not modify the provided input', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    const input = { a: 0, e: 0, x: 0 }

    dictionary.intersection(input)
    expect(input).toStrictEqual({ a: 0, e: 0, x: 0 })

  })
})
