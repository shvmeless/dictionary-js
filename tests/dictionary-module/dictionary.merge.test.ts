// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.merge()', () => {
  it('should always return a new dictionary', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const result = dictionary(object).merge({ x: 0, y: 0, z: 0 })
    expect(result).not.toBe(object)

  })
  it('should insert the new entries', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).merge({ x: 0, y: 0, z: 0 })
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0, z: 0 })

  })
  it('should overwrite the duplicate entries', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).merge({ a: 0, c: 0, e: 0 })
    expect(result).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0 })

  })
  it('should handle both cases as necessary', () => {

    const result = dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).merge({ a: 0, e: 0, x: 0 })
    expect(result).toStrictEqual({ a: 0, b: 2, c: 3, d: 4, e: 0, x: 0 })

  })
  it('should not modify the provided input', () => {

    const input = { a: 0, e: 0, x: 0 }
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).merge(input)
    expect(input).toStrictEqual({ a: 0, e: 0, x: 0 })

  })
})
