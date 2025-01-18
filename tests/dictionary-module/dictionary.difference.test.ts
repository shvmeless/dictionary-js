// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.difference()', () => {
  it('should always return `this`', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const result = dictionary(object).difference({ x: 0, y: 0, z: 0 })
    expect(result).not.toBe(object)

  })
  it('should insert the new entries', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).difference({ x: 0, y: 0, z: 0 })
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0, z: 0 })

  })
  it('should remove the duplicate entries', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).difference({ a: 0, c: 0, e: 0 })
    expect(result).toStrictEqual({ b: 2, d: 4 })

  })
  it('should handle both cases as necessary', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).difference({ a: 0, e: 0, x: 0 })
    expect(result).toStrictEqual({ b: 2, c: 3, d: 4, x: 0 })

  })
  it('should not modify the provided input', () => {

    const input = { a: 0, e: 0, x: 0 }

    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).difference(input)
    expect(input).toStrictEqual({ a: 0, e: 0, x: 0 })

  })
})
